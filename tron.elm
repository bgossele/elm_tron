import Color
import Text
import Keyboard
import Debug

type Pos = (Float, Float)
type Tail = [Pos]

data GameState = Ended Bool | Playing BikeState BikeState Bool
data BikeState = BikeState Pos Orientation Float Tail

-- default values
width = 800
height = 600

playerW = 64
playerH = 16
tailL = toFloat 256
tailOffset = toFloat 4

data KeybInput = KeybInput (Int, Int) (Int, Int) Bool
data Input = Input KeybInput Time

heartbeat = lift (Debug.watch "heartbeat") (fps 120)

keybInput : Signal KeybInput
keybInput =
    let realInput = lift3 KeybInput (lift (\{x,y} -> (x,y)) Keyboard.wasd) (lift (\{x,y} -> (x,y)) Keyboard.arrows) Keyboard.space
    in lift (Debug.watch "keybInput") realInput

timedInput : Signal Input
timedInput = lift2 Input keybInput heartbeat

initialGameState : GameState
initialGameState =
    let bike1 = BikeState (-(width/2)+50, 0.0) E 0.75 []
        bike2 = BikeState (width/2-50, 0.0) W 0.75 []
    in Playing bike1 bike2 True

showGameState : GameState -> Element
showGameState gs = 
    let forms = [filled black (rect width height)] ++ elements
        elements = case gs of
                     (Ended _)-> [toForm (centered (Text.color white (toText "Press space to start playing")))]
                     (Playing (BikeState pos o _ tail) (BikeState pos2 o2 _ tail2) _) -> 
                         let tailstart = pointInDirection pos o -tailOffset
                             tailstart2 = pointInDirection pos2 o2 -tailOffset
                         in
                             [showPlayer' Color.red pos o,
                              showTail Color.red (tailstart :: (generateTail tailstart tail tailL o)),
                              showPlayer' Color.blue pos2 o2,
                              showTail Color.blue (tailstart2 :: (generateTail tailstart2 tail2 tailL o2))]
    in collage width height forms

step : Input -> GameState -> GameState
step (Input (KeybInput arrows wasd space) _) gs =
    case gs of
        Ended b -> if space /= b && space then initialGameState else Ended space
        Playing (BikeState pos1 o1 v1 tail1) (BikeState pos2 o2 v2 tail2) b -> 
            let new_o1 = getNewOrientation arrows o1
                new_o2 = getNewOrientation wasd o2
                new_pos1 = pointInDirection pos1 o1 v1
                new_pos2 = pointInDirection pos2 o2 v2
            in 
                if space /= b && space then initialGameState else Playing (BikeState new_pos1 new_o1 v1 tail1) (BikeState new_pos2 new_o2 v2 tail2) space

getNewOrientation : (Int,Int) -> Orientation -> Orientation
getNewOrientation (x,y) o = if x == 1 then E else (if x == -1 then W else (if y == 1 then N else (if y == -1 then S else o)))

pointInDirection : Pos -> Orientation -> Float -> Pos
pointInDirection (x,y) o distance =
    case o of
        N -> (x, y + distance)
        E -> (x + distance, y)
        S -> (x, y - distance)
        W -> (x - distance, y)

generateTail : Pos -> [Pos] -> Float -> Orientation -> [Pos]
generateTail (x,y) corners length or =
    case corners of
        [] -> [(x,y), pointInDirection (x,y) or -length]
        c::cs -> c::cs 

gameState = lift (Debug.watch "Game state") (foldp step (Ended False) timedInput)

main = lift showGameState gameState


data Orientation = N | E | S | W
-- example use: showPlayer' Color.lightBlue (10, 10) N
showPlayer' : Color -> (Float, Float) -> Orientation -> Form
showPlayer' color (x, y) o =
    let fw = toFloat playerW
        (xOffset, yOffset, degs) = case o of
                    N -> (0, fw / 2, 90)
                    E -> (fw / 2, 0, 0)
                    S -> (0, -fw / 2, -90)
                    W -> (-fw / 2, 0, 180)
    in rect (fw) (toFloat playerH) 
        |> outlined (solid color)
        |> move (x, y)
        |> move (xOffset, yOffset)
        |> rotate (degrees degs) 

tailWidth = 2

-- example use: showTail Color.lightBlue [(10, 10), (20, 10)]
showTail : Color -> [(Float, Float)] -> Form
showTail color positions = 
    traced { defaultLine |
        width <- tailWidth
        , color <- color
        } (path positions)


