module Tron where

import Color
import Text
import Keyboard
import Debug
import Basics
import Random

type Pos = (Float, Float)
type Tail = [Pos]
type Score = (Int, Int)
type Paused = Bool
type Space = Bool
type Enter = Bool

data GameState = Ended String Score Space | Playing PlayerState PlayerState Score Paused Space Enter
data PlayerState = PlayerState Pos Orientation Float Float Tail

-- default values
width = 1024
height = 768
playerW = 64
playerH = 16
frameRate = 100 -- makes it smooooth
tailIncrement = 5/frameRate -- amount by which tail grows every second
tailL = toFloat 256
tailOffset = toFloat 4

data KeybInput = KeybInput (Int, Int) (Int, Int) Space Enter
data Input = Input KeybInput Time

heartbeat = lift (Debug.watch "heartbeat") (fps frameRate)

keybInput : Signal KeybInput
keybInput =
    let realInput = lift4 KeybInput (lift (\{x,y} -> (x,y)) Keyboard.wasd) (lift (\{x,y} -> (x,y)) Keyboard.arrows) Keyboard.space Keyboard.enter
    in lift (Debug.watch "keybInput") realInput

input : Signal Input
input = lift2 Input keybInput heartbeat

initialGameState : Score -> GameState
initialGameState s =
    let pos1 = (-width/2+50, 0.0)
        pos2 = (width/2-50, 0.0)
        bike1 = PlayerState pos1 E 0.75 tailL [pointInDirection pos1 E -tailOffset]
        bike2 = PlayerState pos2 W 0.75 tailL [pointInDirection pos2 W -tailOffset]
    in Playing bike1 bike2 s False True False

showGameState : GameState -> Element
showGameState gs = 
    let forms = [filled black (rect width height), outlined (solid yellow) (rect width height)] ++ elements
        elements = case gs of
                     (Ended m _ _) -> [toForm (centered (typeface ["arial"] (Text.height 20 (Text.color yellow (toText (join "" [m, "\n\n\n", (wrap " Press space to start "), "\n", (wrap "Press enter to pause")]))))))]
                     (Playing (PlayerState pos1 o1 _ _ tail1) (PlayerState pos2 o2 _ _ tail2) score paused _ _) ->
                         [showPlayer' Color.red pos1 o1,
                          showLine Color.red tail1,
                          showPlayer' Color.darkBlue pos2 o2,
                          showLine Color.darkBlue tail2] ++ if paused then 
                             [toForm (centered (typeface ["arial"] (Text.height 20 (Text.color yellow (toText ("Paused\nPress enter to continue"))))))] else []
    in collage width height forms

step : Input -> GameState -> GameState
step (Input (KeybInput arrows wasd space enter) _) gs =
    case gs of
        Ended m s oldSpace -> if space /= oldSpace && space then initialGameState s else Ended m s space
        Playing (PlayerState pos1 o1 v1 tailL1 tail1) (PlayerState pos2 o2 v2 tailL2 tail2) (s1, s2) paused oldSpace oldEnter ->
            if space /= oldSpace && space then initialGameState (s1,s2) else
                if enter /= oldEnter && enter then Playing (PlayerState pos1 o1 v1 tailL1 tail1) (PlayerState pos2 o2 v2 tailL2 tail2) (s1, s2) (not paused) space enter else
                    if paused then Playing (PlayerState pos1 o1 v1 tailL1 tail1) (PlayerState pos2 o2 v2 tailL2 tail2) (s1, s2) paused space enter else
                        let new_o1 = getNewOrientation arrows o1
                            new_o2 = getNewOrientation wasd o2
                            new_pos1 = pointInDirection pos1 new_o1 (if o1 == new_o1 then v1 else tailOffset)
                            new_pos2 = pointInDirection pos2 new_o2 (if o2 == new_o2 then v2 else tailOffset)
                            tailstart1 = pointInDirection new_pos1 new_o1 -tailOffset
                            tailstart2 = pointInDirection new_pos2 new_o2 -tailOffset
                            new_tail1 = tailstart1 :: (generateTail tailstart1 tail1 tailL1)
                            new_tail2 = tailstart2 :: (generateTail tailstart2 tail2 tailL2)
                            new_tailL1 = Debug.watch "tailL" (tailL1 + tailIncrement)
                            new_tailL2 = tailL2 + tailIncrement
                            dead1 = outOfBounds (corners new_pos1 new_o1) || (collideWithTail new_pos1 new_o1 new_tail1) || (collideWithTail new_pos1 new_o1 new_tail2)
                            dead2 = outOfBounds (corners new_pos2 new_o2) || (collideWithTail new_pos2 new_o2 new_tail1) || (collideWithTail new_pos2 new_o2 new_tail2)
                        in
                            if dead1 && dead2 then Ended "It's a tie!" (s1, s2) space else
                                if dead1 then Ended "Player 2 wins!" (s1, s2+1) space else
                                    if dead2 then Ended "Player 1 wins!" (s1+1, s2) space else
                                        Playing (PlayerState new_pos1 new_o1 v1 new_tailL1 new_tail1) (PlayerState new_pos2 new_o2 v2 new_tailL2 new_tail2) (s1,s2) paused space enter

getNewOrientation : (Int,Int) -> Orientation -> Orientation
getNewOrientation (x,y) o = if x == 1 then E else (if x == -1 then W else (if y == 1 then N else (if y == -1 then S else o)))

pointInDirection : Pos -> Orientation -> Float -> Pos
pointInDirection (x,y) o distance =
    case o of
        N -> (x, y + distance)
        E -> (x + distance, y)
        S -> (x, y - distance)
        W -> (x - distance, y)

generateTail : Pos -> [Pos] -> Float -> [Pos]
generateTail (x,y) points length =
    if length == 0 then [] else
        case points of
            [] -> []
            p::ps ->
                let d = dist (x,y) p
                in
                    if d <= length then p :: (generateTail p ps (length - d)) else [findPoint (x,y) p length]

sq x = x * x
sign x = if x > 0 then 1 else (if x == 0 then 0 else -1)

findPoint : Pos -> Pos -> Float -> Pos
findPoint (x1, y1) (x2, y2) dist = (x1 + (sign (x2-x1))*dist, y1 + (sign (y2-y1)*dist))

dist : Pos -> Pos -> Float
dist (x1,y1) (x2,y2) = sqrt(sq (x1-x2) + sq (y1-y2))

corners : Pos -> Orientation -> [Pos]
corners (x,y) o =
    let (xt, yt) = pointInDirection (x,y) o playerW
    in
        case o of
            E -> [(x,y+playerH/2),(x,y-playerH/2),(xt,y+playerH/2),(xt,y-playerH/2)]
            W -> [(x,y+playerH/2),(x,y-playerH/2),(xt,y+playerH/2),(xt,y-playerH/2)]
            _ -> [(x+playerH/2,y),(x-playerH/2,y),(x+playerH/2,yt),(x-playerH/2,yt)]

outOfBounds : [Pos] -> Bool
outOfBounds l = foldr (\(x,y) b -> b || ((abs x > width/2) || (abs y > height/2))) False l

pointInRectangle : Float -> Float -> Float -> Float -> Pos -> Bool
pointInRectangle x1 x2 y1 y2 (px, py) = (sign(x1-px) /= sign (x2-px)) && (sign(y1-py) /= sign(y2-py))

collideWithTail (x,y) o =
        let f = case o of
            N -> pointInRectangle (x-playerH/2) (x+playerH/2) y (y+playerW)
            E -> pointInRectangle x (x+playerW) (y-playerH/2) (y+playerH/2)
            S -> pointInRectangle (x-playerH/2) (x+playerH/2) y (y-playerW)
            W -> pointInRectangle x (x-playerW) (y-playerH/2) (y+playerH/2)
        in
            foldr (\p b -> b || f p) False

gameState = foldp step (Ended banner (0, 0) False) input


main = lift showGameState gameState

wrap s = "====>       " ++ s ++ "       <===="

banner = join "\n" banner'
banner' = ["########_########___#######__##____##",
           "___##____##_____##_##_____##_###___##",
           "___##____##_____##_##_____##_####__##",
           "___##____########__##_____##_##_##_##",
           "___##____##___##___##_____##_##__####",
           "___##____##____##__##_____##_##___###",
           "___##____##_____##__#######__##____##"] 

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

-- example use: showLine Color.lightBlue [(10, 10), (20, 10)]
showLine : Color -> [(Float, Float)] -> Form
showLine color positions = 
    traced { defaultLine |
        width <- tailWidth
        , color <- color
        } (path positions)

