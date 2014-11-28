import Color
import Text
import Keyboard
import Debug

type Pos = (Float, Float)
type Tail = [Pos]

data GameState = Ended | Playing BikeState BikeState
data BikeState = BikeState Pos Orientation Float Tail

-- default values
width = 1024
height = 768

playerW = 64
playerH = 16

--initialGameState : GameState
initialGameState =
    let bike1 = BikeState (-462.0, 0.0) E 50.0 []
        bike2 = BikeState (462.0, 0.0) W 50.0 []
    in Playing bike1 bike2

showGameState : GameState -> Element
showGameState gs = 
    let forms = [filled black (rect width height)] ++ elements
        elements = case gs of
                     Ended -> toForm (centered (Text.color white (toText "Press space to start playing")))]
                     (Playing (BikeState pos o _ tail) (BikeState pos2 o2 _ tail2)) -> (Text.color white (toText "implement me")))]
    in collage width height forms

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

main = constant <| plainText "implement me"
