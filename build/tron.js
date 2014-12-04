Elm.Tron = Elm.Tron || {};
Elm.Tron.make = function (_elm) {
   "use strict";
   _elm.Tron = _elm.Tron || {};
   if (_elm.Tron.values)
   return _elm.Tron.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _A = _N.Array.make(_elm),
   _E = _N.Error.make(_elm),
   $moduleName = "Tron",
   $Basics = Elm.Basics.make(_elm),
   $Color = Elm.Color.make(_elm),
   $Debug = Elm.Debug.make(_elm),
   $Graphics$Collage = Elm.Graphics.Collage.make(_elm),
   $Graphics$Element = Elm.Graphics.Element.make(_elm),
   $Keyboard = Elm.Keyboard.make(_elm),
   $List = Elm.List.make(_elm),
   $Signal = Elm.Signal.make(_elm),
   $Text = Elm.Text.make(_elm),
   $Time = Elm.Time.make(_elm),
   $Window = Elm.Window.make(_elm);
   var tailWidth = 2;
   var showLine = F2(function (color,
   positions) {
      return A2($Graphics$Collage.traced,
      _U.replace([["width",tailWidth]
                 ,["color",color]],
      $Graphics$Collage.defaultLine),
      $Graphics$Collage.path(positions));
   });
   var W = {ctor: "W"};
   var S = {ctor: "S"};
   var E = {ctor: "E"};
   var N = {ctor: "N"};
   var banner$ = _L.fromArray(["########_########___#######__##____##"
                              ,"___##____##_____##_##_____##_###___##"
                              ,"___##____##_____##_##_____##_####__##"
                              ,"___##____########__##_____##_##_##_##"
                              ,"___##____##___##___##_____##_##__####"
                              ,"___##____##____##__##_____##_##___###"
                              ,"___##____##_____##__#######__##____##"]);
   var banner = A2($List.join,
   "\n",
   banner$);
   var outOfBounds = F2(function (l,
   _v0) {
      return function () {
         switch (_v0.ctor)
         {case "_Tuple2":
            return A3($List.foldr,
              F2(function (_v4,b) {
                 return function () {
                    switch (_v4.ctor)
                    {case "_Tuple2":
                       return b || (_U.cmp($Basics.abs(_v4._0),
                         $Basics.toFloat(_v0._0) / 2) > 0 || _U.cmp($Basics.abs(_v4._1),
                         $Basics.toFloat(_v0._1) / 2) > 0);}
                    _E.Case($moduleName,
                    "on line 125, column 43 to 98");
                 }();
              }),
              false,
              l);}
         _E.Case($moduleName,
         "on line 125, column 24 to 109");
      }();
   });
   var sign = function (x) {
      return _U.cmp(x,
      0) > 0 ? 1 : _U.eq(x,
      0) ? 0 : -1;
   };
   var findPoint = F3(function (_v8,
   _v9,
   dist) {
      return function () {
         switch (_v9.ctor)
         {case "_Tuple2":
            return function () {
                 switch (_v8.ctor)
                 {case "_Tuple2":
                    return {ctor: "_Tuple2"
                           ,_0: _v8._0 + sign(_v9._0 - _v8._0) * dist
                           ,_1: _v8._1 + sign(_v9._1 - _v8._1) * dist};}
                 _E.Case($moduleName,
                 "on line 110, column 37 to 87");
              }();}
         _E.Case($moduleName,
         "on line 110, column 37 to 87");
      }();
   });
   var pointInRectangle = F5(function (x1,
   x2,
   y1,
   y2,
   _v16) {
      return function () {
         switch (_v16.ctor)
         {case "_Tuple2":
            return !_U.eq(sign(x1 - _v16._0),
              sign(x2 - _v16._0)) && !_U.eq(sign(y1 - _v16._1),
              sign(y2 - _v16._1));}
         _E.Case($moduleName,
         "on line 128, column 42 to 100");
      }();
   });
   var sq = function (x) {
      return x * x;
   };
   var dist = F2(function (_v20,
   _v21) {
      return function () {
         switch (_v21.ctor)
         {case "_Tuple2":
            return function () {
                 switch (_v20.ctor)
                 {case "_Tuple2":
                    return $Basics.sqrt(sq(_v20._0 - _v21._0) + sq(_v20._1 - _v21._1));}
                 _E.Case($moduleName,
                 "on line 113, column 24 to 51");
              }();}
         _E.Case($moduleName,
         "on line 113, column 24 to 51");
      }();
   });
   var generateTail = F3(function (_v28,
   points,
   length) {
      return function () {
         switch (_v28.ctor)
         {case "_Tuple2":
            return _U.eq(length,
              0) ? _L.fromArray([]) : function () {
                 switch (points.ctor)
                 {case "::": return function () {
                         var d = A2(dist,
                         {ctor: "_Tuple2"
                         ,_0: _v28._0
                         ,_1: _v28._1},
                         points._0);
                         return _U.cmp(d,
                         length) < 1 ? A2($List._op["::"],
                         points._0,
                         A3(generateTail,
                         points._0,
                         points._1,
                         length - d)) : _L.fromArray([A3(findPoint,
                         {ctor: "_Tuple2"
                         ,_0: _v28._0
                         ,_1: _v28._1},
                         points._0,
                         length)]);
                      }();
                    case "[]":
                    return _L.fromArray([]);}
                 _E.Case($moduleName,
                 "between lines 99 and 104");
              }();}
         _E.Case($moduleName,
         "between lines 98 and 104");
      }();
   });
   var pointInDirection = F3(function (_v35,
   o,
   distance) {
      return function () {
         switch (_v35.ctor)
         {case "_Tuple2":
            return function () {
                 switch (o.ctor)
                 {case "E":
                    return {ctor: "_Tuple2"
                           ,_0: _v35._0 + distance
                           ,_1: _v35._1};
                    case "N":
                    return {ctor: "_Tuple2"
                           ,_0: _v35._0
                           ,_1: _v35._1 + distance};
                    case "S":
                    return {ctor: "_Tuple2"
                           ,_0: _v35._0
                           ,_1: _v35._1 - distance};
                    case "W":
                    return {ctor: "_Tuple2"
                           ,_0: _v35._0 - distance
                           ,_1: _v35._1};}
                 _E.Case($moduleName,
                 "between lines 90 and 94");
              }();}
         _E.Case($moduleName,
         "between lines 90 and 94");
      }();
   });
   var getNewOrientation = F2(function (_v40,
   o) {
      return function () {
         switch (_v40.ctor)
         {case "_Tuple2":
            return _U.eq(_v40._0,
              1) ? E : _U.eq(_v40._0,
              -1) ? W : _U.eq(_v40._1,
              1) ? N : _U.eq(_v40._1,
              -1) ? S : o;}
         _E.Case($moduleName,
         "on line 86, column 29 to 126");
      }();
   });
   var Input = F3(function (a,
   b,
   c) {
      return {ctor: "Input"
             ,_0: a
             ,_1: b
             ,_2: c};
   });
   var KeybInput = F3(function (a,
   b,
   c) {
      return {ctor: "KeybInput"
             ,_0: a
             ,_1: b
             ,_2: c};
   });
   var keybInput = function () {
      var realInput = A4($Signal.lift3,
      KeybInput,
      A2($Signal.lift,
      function (_v44) {
         return function () {
            return {ctor: "_Tuple2"
                   ,_0: _v44.x
                   ,_1: _v44.y};
         }();
      },
      $Keyboard.wasd),
      A2($Signal.lift,
      function (_v46) {
         return function () {
            return {ctor: "_Tuple2"
                   ,_0: _v46.x
                   ,_1: _v46.y};
         }();
      },
      $Keyboard.arrows),
      $Keyboard.space);
      return A2($Signal.lift,
      $Debug.watch("keybInput"),
      realInput);
   }();
   var tailOffset = $Basics.toFloat(4);
   var tailL = $Basics.toFloat(256);
   var frameRate = 80;
   var tailIncrement = 5 / frameRate;
   var heartbeat = $Time.fps(frameRate);
   var input = A4($Signal.lift3,
   Input,
   keybInput,
   heartbeat,
   $Window.dimensions);
   var playerH = 16;
   var playerW = 64;
   var corners = F2(function (_v48,
   o) {
      return function () {
         switch (_v48.ctor)
         {case "_Tuple2":
            return function () {
                 var $ = A3(pointInDirection,
                 {ctor: "_Tuple2"
                 ,_0: _v48._0
                 ,_1: _v48._1},
                 o,
                 playerW),
                 xt = $._0,
                 yt = $._1;
                 return function () {
                    switch (o.ctor)
                    {case "E":
                       return _L.fromArray([{ctor: "_Tuple2"
                                            ,_0: _v48._0
                                            ,_1: _v48._1 + playerH / 2}
                                           ,{ctor: "_Tuple2"
                                            ,_0: _v48._0
                                            ,_1: _v48._1 - playerH / 2}
                                           ,{ctor: "_Tuple2"
                                            ,_0: xt
                                            ,_1: _v48._1 + playerH / 2}
                                           ,{ctor: "_Tuple2"
                                            ,_0: xt
                                            ,_1: _v48._1 - playerH / 2}]);
                       case "W":
                       return _L.fromArray([{ctor: "_Tuple2"
                                            ,_0: _v48._0
                                            ,_1: _v48._1 + playerH / 2}
                                           ,{ctor: "_Tuple2"
                                            ,_0: _v48._0
                                            ,_1: _v48._1 - playerH / 2}
                                           ,{ctor: "_Tuple2"
                                            ,_0: xt
                                            ,_1: _v48._1 + playerH / 2}
                                           ,{ctor: "_Tuple2"
                                            ,_0: xt
                                            ,_1: _v48._1 - playerH / 2}]);}
                    return _L.fromArray([{ctor: "_Tuple2"
                                         ,_0: _v48._0 + playerH / 2
                                         ,_1: _v48._1}
                                        ,{ctor: "_Tuple2"
                                         ,_0: _v48._0 - playerH / 2
                                         ,_1: _v48._1}
                                        ,{ctor: "_Tuple2"
                                         ,_0: _v48._0 + playerH / 2
                                         ,_1: yt}
                                        ,{ctor: "_Tuple2"
                                         ,_0: _v48._0 - playerH / 2
                                         ,_1: yt}]);
                 }();
              }();}
         _E.Case($moduleName,
         "between lines 117 and 122");
      }();
   });
   var collideWithTail = F2(function (_v53,
   o) {
      return function () {
         switch (_v53.ctor)
         {case "_Tuple2":
            return function () {
                 var f = function () {
                    switch (o.ctor)
                    {case "E":
                       return A4(pointInRectangle,
                         _v53._0,
                         _v53._0 + playerW,
                         _v53._1 - playerH / 2,
                         _v53._1 + playerH / 2);
                       case "N":
                       return A4(pointInRectangle,
                         _v53._0 - playerH / 2,
                         _v53._0 + playerH / 2,
                         _v53._1,
                         _v53._1 + playerW);
                       case "S":
                       return A4(pointInRectangle,
                         _v53._0 - playerH / 2,
                         _v53._0 + playerH / 2,
                         _v53._1,
                         _v53._1 - playerW);
                       case "W":
                       return A4(pointInRectangle,
                         _v53._0,
                         _v53._0 - playerW,
                         _v53._1 - playerH / 2,
                         _v53._1 + playerH / 2);}
                    _E.Case($moduleName,
                    "between lines 131 and 136");
                 }();
                 return A2($List.foldr,
                 F2(function (p,b) {
                    return b || f(p);
                 }),
                 false);
              }();}
         _E.Case($moduleName,
         "between lines 131 and 137");
      }();
   });
   var showPlayer$ = F3(function (color,
   _v58,
   o) {
      return function () {
         switch (_v58.ctor)
         {case "_Tuple2":
            return function () {
                 var fw = $Basics.toFloat(playerW);
                 var $ = function () {
                    switch (o.ctor)
                    {case "E":
                       return {ctor: "_Tuple3"
                              ,_0: fw / 2
                              ,_1: 0
                              ,_2: 0};
                       case "N":
                       return {ctor: "_Tuple3"
                              ,_0: 0
                              ,_1: fw / 2
                              ,_2: 90};
                       case "S":
                       return {ctor: "_Tuple3"
                              ,_0: 0
                              ,_1: (0 - fw) / 2
                              ,_2: -90};
                       case "W":
                       return {ctor: "_Tuple3"
                              ,_0: (0 - fw) / 2
                              ,_1: 0
                              ,_2: 180};}
                    _E.Case($moduleName,
                    "between lines 159 and 164");
                 }(),
                 xOffset = $._0,
                 yOffset = $._1,
                 degs = $._2;
                 return $Graphics$Collage.rotate($Basics.degrees(degs))($Graphics$Collage.move({ctor: "_Tuple2"
                                                                                               ,_0: xOffset
                                                                                               ,_1: yOffset})($Graphics$Collage.move({ctor: "_Tuple2"
                                                                                                                                     ,_0: _v58._0
                                                                                                                                     ,_1: _v58._1})($Graphics$Collage.outlined($Graphics$Collage.solid(color))(A2($Graphics$Collage.rect,
                 fw,
                 $Basics.toFloat(playerH))))));
              }();}
         _E.Case($moduleName,
         "between lines 158 and 168");
      }();
   });
   var showGameState = F2(function (gs,
   _v63) {
      return function () {
<<<<<<< HEAD
         var elements = function () {
            switch (gs.ctor)
            {case "Ended":
               return _L.fromArray([$Graphics$Collage.toForm($Text.centered(A2($Text.typeface,
                 _L.fromArray(["arial"]),
                 A2($Text.color,
                 $Color.yellow,
                 $Text.toText(_L.append(gs._0,
                 "\n\n\n========> Press space to start <========"))))))]);
               case "Playing":
               switch (gs._0.ctor)
                 {case "BikeState":
                    switch (gs._1.ctor)
                      {case "BikeState":
                         return _L.fromArray([A3(showPlayer$,
                                             $Color.red,
                                             gs._0._0,
                                             gs._0._1)
                                             ,A2(showLine,
                                             $Color.red,
                                             gs._0._3)
                                             ,A3(showPlayer$,
                                             $Color.darkBlue,
                                             gs._1._0,
                                             gs._1._1)
                                             ,A2(showLine,
                                             $Color.darkBlue,
                                             gs._1._3)]);}
                      break;}
                 break;}
            _E.Case($moduleName,
            "between lines 48 and 55");
         }();
         var forms = _L.append(_L.fromArray([A2($Graphics$Collage.filled,
         $Color.black,
         A2($Graphics$Collage.rect,
         width,
         height))]),
         elements);
         return A3($Graphics$Collage.collage,
         width,
         height,
         forms);
=======
         switch (_v63.ctor)
         {case "_Tuple2":
            return function () {
                 var elements = function () {
                    switch (gs.ctor)
                    {case "Ended":
                       return _L.fromArray([$Graphics$Collage.toForm($Text.centered(A2($Text.color,
                         $Color.yellow,
                         $Text.toText(_L.append(gs._0,
                         "\n\n\n========> Press space to start <========")))))]);
                       case "Playing":
                       switch (gs._0.ctor)
                         {case "BikeState":
                            switch (gs._1.ctor)
                              {case "BikeState":
                                 return _L.fromArray([A3(showPlayer$,
                                                     $Color.red,
                                                     gs._0._0,
                                                     gs._0._1)
                                                     ,A2(showLine,
                                                     $Color.red,
                                                     gs._0._4)
                                                     ,A3(showPlayer$,
                                                     $Color.darkBlue,
                                                     gs._1._0,
                                                     gs._1._1)
                                                     ,A2(showLine,
                                                     $Color.darkBlue,
                                                     gs._1._4)]);}
                              break;}
                         break;}
                    _E.Case($moduleName,
                    "between lines 51 and 58");
                 }();
                 return A3($Graphics$Collage.collage,
                 _v63._0,
                 _v63._1,
                 _L.append(_L.fromArray([A2($Graphics$Collage.filled,
                 $Color.black,
                 A2($Graphics$Collage.rect,
                 $Basics.toFloat(_v63._0),
                 $Basics.toFloat(_v63._1)))]),
                 elements));
              }();}
         _E.Case($moduleName,
         "between lines 51 and 58");
>>>>>>> fullscreen
      }();
   });
   var defHeight = 768;
   var defWidth = 1024;
   var BikeState = F5(function (a,
   b,
   c,
   d,
   e) {
      return {ctor: "BikeState"
             ,_0: a
             ,_1: b
             ,_2: c
             ,_3: d
             ,_4: e};
   });
   var Playing = F3(function (a,
   b,
   c) {
      return {ctor: "Playing"
             ,_0: a
             ,_1: b
             ,_2: c};
   });
   var initialGameState = function (_v83) {
      return function () {
         switch (_v83.ctor)
         {case "_Tuple2":
            return function () {
                 var pos2 = {ctor: "_Tuple2"
                            ,_0: $Basics.toFloat(_v83._0) / 2 - 50
                            ,_1: 0.0};
                 var bike2 = A5(BikeState,
                 pos2,
                 W,
                 1,
                 tailL,
                 _L.fromArray([A3(pointInDirection,
                 pos2,
                 W,
                 0 - tailOffset)]));
                 var pos1 = {ctor: "_Tuple2"
                            ,_0: $Basics.toFloat(0 - _v83._0) / 2 + 50
                            ,_1: 0.0};
                 var bike1 = A5(BikeState,
                 pos1,
                 E,
                 1,
                 tailL,
                 _L.fromArray([A3(pointInDirection,
                 pos1,
                 E,
                 0 - tailOffset)]));
                 return A3(Playing,
                 bike1,
                 bike2,
                 true);
              }();}
         _E.Case($moduleName,
         "between lines 43 and 47");
      }();
   };
   var Ended = F2(function (a,b) {
      return {ctor: "Ended"
             ,_0: a
             ,_1: b};
   });
   var step = F2(function (_v87,
   gs) {
      return function () {
         switch (_v87.ctor)
         {case "Input":
            switch (_v87._0.ctor)
              {case "KeybInput":
                 return function () {
                      switch (gs.ctor)
                      {case "Ended":
                         return !_U.eq(_v87._0._2,
                           gs._1) && _v87._0._2 ? initialGameState(_v87._2) : A2(Ended,
                           gs._0,
                           _v87._0._2);
                         case "Playing":
                         switch (gs._0.ctor)
                           {case "BikeState":
                              switch (gs._1.ctor)
                                {case "BikeState":
                                   return function () {
                                        var new_tailL2 = gs._1._3;
                                        var new_tailL1 = gs._0._3;
                                        var new_o2 = A2(getNewOrientation,
                                        _v87._0._1,
                                        gs._1._1);
                                        var new_pos2 = A3(pointInDirection,
                                        gs._1._0,
                                        new_o2,
                                        _U.eq(gs._1._1,
                                        new_o2) ? gs._1._2 : tailOffset);
                                        var tailstart2 = A3(pointInDirection,
                                        new_pos2,
                                        new_o2,
                                        0 - tailOffset);
                                        var new_tail2 = A2($List._op["::"],
                                        tailstart2,
                                        A3(generateTail,
                                        tailstart2,
                                        gs._1._4,
                                        gs._1._3));
                                        var outOfBounds2 = A2(outOfBounds,
                                        A2(corners,new_pos2,new_o2),
                                        _v87._2);
                                        var new_o1 = A2(getNewOrientation,
                                        _v87._0._0,
                                        gs._0._1);
                                        var new_pos1 = A3(pointInDirection,
                                        gs._0._0,
                                        new_o1,
                                        _U.eq(gs._0._1,
                                        new_o1) ? gs._0._2 : tailOffset);
                                        var tailstart1 = A3(pointInDirection,
                                        new_pos1,
                                        new_o1,
                                        0 - tailOffset);
                                        var new_tail1 = A2($List._op["::"],
                                        tailstart1,
                                        A3(generateTail,
                                        tailstart1,
                                        gs._0._4,
                                        gs._0._3));
                                        var collision2 = A3(collideWithTail,
                                        new_pos2,
                                        new_o2,
                                        new_tail1) || A3(collideWithTail,
                                        new_pos2,
                                        new_o2,
                                        new_tail2);
                                        var outOfBounds1 = A2(outOfBounds,
                                        A2(corners,new_pos1,new_o1),
                                        _v87._2);
                                        var collision1 = A3(collideWithTail,
                                        new_pos1,
                                        new_o1,
                                        new_tail1) || A3(collideWithTail,
                                        new_pos1,
                                        new_o1,
                                        new_tail2);
                                        return outOfBounds1 || collision1 ? A2(Ended,
                                        "Player 2 wins!",
                                        _v87._0._2) : outOfBounds2 || collision2 ? A2(Ended,
                                        "Player 1 wins!",
                                        _v87._0._2) : !_U.eq(_v87._0._2,
                                        gs._2) && _v87._0._2 ? initialGameState(_v87._2) : A3(Playing,
                                        A5(BikeState,
                                        new_pos1,
                                        new_o1,
                                        gs._0._2,
                                        new_tailL1,
                                        new_tail1),
                                        A5(BikeState,
                                        new_pos2,
                                        new_o2,
                                        gs._1._2,
                                        new_tailL2,
                                        new_tail2),
                                        _v87._0._2);
                                     }();}
                                break;}
                           break;}
                      _E.Case($moduleName,
                      "between lines 62 and 83");
                   }();}
              break;}
         _E.Case($moduleName,
         "between lines 62 and 83");
      }();
   });
   var gameState = A3($Signal.foldp,
   step,
   A2(Ended,banner,false),
   input);
   var main = A3($Signal.lift2,
   showGameState,
   gameState,
   $Window.dimensions);
   _elm.Tron.values = {_op: _op
                      ,Ended: Ended
                      ,Playing: Playing
                      ,BikeState: BikeState
                      ,defWidth: defWidth
                      ,defHeight: defHeight
                      ,playerW: playerW
                      ,playerH: playerH
                      ,frameRate: frameRate
                      ,tailIncrement: tailIncrement
                      ,tailL: tailL
                      ,tailOffset: tailOffset
                      ,KeybInput: KeybInput
                      ,Input: Input
                      ,heartbeat: heartbeat
                      ,keybInput: keybInput
                      ,input: input
                      ,initialGameState: initialGameState
                      ,showGameState: showGameState
                      ,step: step
                      ,getNewOrientation: getNewOrientation
                      ,pointInDirection: pointInDirection
                      ,generateTail: generateTail
                      ,sq: sq
                      ,sign: sign
                      ,findPoint: findPoint
                      ,dist: dist
                      ,corners: corners
                      ,outOfBounds: outOfBounds
                      ,pointInRectangle: pointInRectangle
                      ,collideWithTail: collideWithTail
                      ,gameState: gameState
                      ,main: main
                      ,banner: banner
                      ,banner$: banner$
                      ,N: N
                      ,E: E
                      ,S: S
                      ,W: W
                      ,showPlayer$: showPlayer$
                      ,tailWidth: tailWidth
                      ,showLine: showLine};
   return _elm.Tron.values;
};