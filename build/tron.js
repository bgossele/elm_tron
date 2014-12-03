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
   $Time = Elm.Time.make(_elm);
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
   var sign = function (x) {
      return _U.cmp(x,
      0) > 0 ? 1 : _U.eq(x,
      0) ? 0 : -1;
   };
   var findPoint = F3(function (_v0,
   _v1,
   dist) {
      return function () {
         switch (_v1.ctor)
         {case "_Tuple2":
            return function () {
                 switch (_v0.ctor)
                 {case "_Tuple2":
                    return {ctor: "_Tuple2"
                           ,_0: _v0._0 + sign(_v1._0 - _v0._0) * dist
                           ,_1: _v0._1 + sign(_v1._1 - _v0._1) * dist};}
                 _E.Case($moduleName,
                 "on line 105, column 37 to 87");
              }();}
         _E.Case($moduleName,
         "on line 105, column 37 to 87");
      }();
   });
   var pointInBox = F5(function (x1,
   x2,
   y1,
   y2,
   _v8) {
      return function () {
         switch (_v8.ctor)
         {case "_Tuple2":
            return !_U.eq(sign(x1 - _v8._0),
              sign(x2 - _v8._0)) && !_U.eq(sign(y1 - _v8._1),
              sign(y2 - _v8._1));}
         _E.Case($moduleName,
         "on line 123, column 36 to 94");
      }();
   });
   var sq = function (x) {
      return x * x;
   };
   var dist = F2(function (_v12,
   _v13) {
      return function () {
         switch (_v13.ctor)
         {case "_Tuple2":
            return function () {
                 switch (_v12.ctor)
                 {case "_Tuple2":
                    return $Basics.sqrt(sq(_v12._0 - _v13._0) + sq(_v12._1 - _v13._1));}
                 _E.Case($moduleName,
                 "on line 108, column 24 to 51");
              }();}
         _E.Case($moduleName,
         "on line 108, column 24 to 51");
      }();
   });
   var generateTail = F3(function (_v20,
   points,
   length) {
      return function () {
         switch (_v20.ctor)
         {case "_Tuple2":
            return _U.eq(length,
              0) ? _L.fromArray([]) : function () {
                 switch (points.ctor)
                 {case "::": return function () {
                         var d = A2(dist,
                         {ctor: "_Tuple2"
                         ,_0: _v20._0
                         ,_1: _v20._1},
                         points._0);
                         return _U.cmp(d,
                         length) < 1 ? A2($List._op["::"],
                         points._0,
                         A3(generateTail,
                         points._0,
                         points._1,
                         length - d)) : _L.fromArray([A3(findPoint,
                         {ctor: "_Tuple2"
                         ,_0: _v20._0
                         ,_1: _v20._1},
                         points._0,
                         length)]);
                      }();
                    case "[]":
                    return _L.fromArray([]);}
                 _E.Case($moduleName,
                 "between lines 94 and 99");
              }();}
         _E.Case($moduleName,
         "between lines 93 and 99");
      }();
   });
   var pointInDirection = F3(function (_v27,
   o,
   distance) {
      return function () {
         switch (_v27.ctor)
         {case "_Tuple2":
            return function () {
                 switch (o.ctor)
                 {case "E":
                    return {ctor: "_Tuple2"
                           ,_0: _v27._0 + distance
                           ,_1: _v27._1};
                    case "N":
                    return {ctor: "_Tuple2"
                           ,_0: _v27._0
                           ,_1: _v27._1 + distance};
                    case "S":
                    return {ctor: "_Tuple2"
                           ,_0: _v27._0
                           ,_1: _v27._1 - distance};
                    case "W":
                    return {ctor: "_Tuple2"
                           ,_0: _v27._0 - distance
                           ,_1: _v27._1};}
                 _E.Case($moduleName,
                 "between lines 85 and 89");
              }();}
         _E.Case($moduleName,
         "between lines 85 and 89");
      }();
   });
   var getNewOrientation = F2(function (_v32,
   o) {
      return function () {
         switch (_v32.ctor)
         {case "_Tuple2":
            return _U.eq(_v32._0,
              1) ? E : _U.eq(_v32._0,
              -1) ? W : _U.eq(_v32._1,
              1) ? N : _U.eq(_v32._1,
              -1) ? S : o;}
         _E.Case($moduleName,
         "on line 81, column 29 to 126");
      }();
   });
   var heartbeat = A2($Signal.lift,
   $Debug.watch("heartbeat"),
   $Time.fps(100.0));
   var Input = F2(function (a,b) {
      return {ctor: "Input"
             ,_0: a
             ,_1: b};
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
      function (_v36) {
         return function () {
            return {ctor: "_Tuple2"
                   ,_0: _v36.x
                   ,_1: _v36.y};
         }();
      },
      $Keyboard.wasd),
      A2($Signal.lift,
      function (_v38) {
         return function () {
            return {ctor: "_Tuple2"
                   ,_0: _v38.x
                   ,_1: _v38.y};
         }();
      },
      $Keyboard.arrows),
      $Keyboard.space);
      return A2($Signal.lift,
      $Debug.watch("keybInput"),
      realInput);
   }();
   var timedInput = A3($Signal.lift2,
   Input,
   keybInput,
   heartbeat);
   var tailOffset = $Basics.toFloat(4);
   var tailL = $Basics.toFloat(200);
   var playerH = 16;
   var playerW = 64;
   var corners = F2(function (_v40,
   o) {
      return function () {
         switch (_v40.ctor)
         {case "_Tuple2":
            return function () {
                 var $ = A3(pointInDirection,
                 {ctor: "_Tuple2"
                 ,_0: _v40._0
                 ,_1: _v40._1},
                 o,
                 playerW),
                 xt = $._0,
                 yt = $._1;
                 return function () {
                    switch (o.ctor)
                    {case "E":
                       return _L.fromArray([{ctor: "_Tuple2"
                                            ,_0: _v40._0
                                            ,_1: _v40._1 + playerH / 2}
                                           ,{ctor: "_Tuple2"
                                            ,_0: _v40._0
                                            ,_1: _v40._1 - playerH / 2}
                                           ,{ctor: "_Tuple2"
                                            ,_0: xt
                                            ,_1: _v40._1 + playerH / 2}
                                           ,{ctor: "_Tuple2"
                                            ,_0: xt
                                            ,_1: _v40._1 - playerH / 2}]);
                       case "W":
                       return _L.fromArray([{ctor: "_Tuple2"
                                            ,_0: _v40._0
                                            ,_1: _v40._1 + playerH / 2}
                                           ,{ctor: "_Tuple2"
                                            ,_0: _v40._0
                                            ,_1: _v40._1 - playerH / 2}
                                           ,{ctor: "_Tuple2"
                                            ,_0: xt
                                            ,_1: _v40._1 + playerH / 2}
                                           ,{ctor: "_Tuple2"
                                            ,_0: xt
                                            ,_1: _v40._1 - playerH / 2}]);}
                    return _L.fromArray([{ctor: "_Tuple2"
                                         ,_0: _v40._0 + playerH / 2
                                         ,_1: _v40._1}
                                        ,{ctor: "_Tuple2"
                                         ,_0: _v40._0 - playerH / 2
                                         ,_1: _v40._1}
                                        ,{ctor: "_Tuple2"
                                         ,_0: _v40._0 + playerH / 2
                                         ,_1: yt}
                                        ,{ctor: "_Tuple2"
                                         ,_0: _v40._0 - playerH / 2
                                         ,_1: yt}]);
                 }();
              }();}
         _E.Case($moduleName,
         "between lines 112 and 117");
      }();
   });
   var collideWithTail = F2(function (_v45,
   o) {
      return function () {
         switch (_v45.ctor)
         {case "_Tuple2":
            return function () {
                 var f = function () {
                    switch (o.ctor)
                    {case "E": return A4(pointInBox,
                         _v45._0,
                         _v45._0 + playerW,
                         _v45._1 - playerH / 2,
                         _v45._1 + playerH / 2);
                       case "N": return A4(pointInBox,
                         _v45._0 - playerH / 2,
                         _v45._0 + playerH / 2,
                         _v45._1,
                         _v45._1 + playerW);
                       case "S": return A4(pointInBox,
                         _v45._0 - playerH / 2,
                         _v45._0 + playerH / 2,
                         _v45._1,
                         _v45._1 - playerW);
                       case "W": return A4(pointInBox,
                         _v45._0,
                         _v45._0 - playerW,
                         _v45._1 - playerH / 2,
                         _v45._1 + playerH / 2);}
                    _E.Case($moduleName,
                    "between lines 126 and 131");
                 }();
                 return A2($List.foldr,
                 F2(function (p,b) {
                    return b || f(p);
                 }),
                 false);
              }();}
         _E.Case($moduleName,
         "between lines 126 and 132");
      }();
   });
   var showPlayer$ = F3(function (color,
   _v50,
   o) {
      return function () {
         switch (_v50.ctor)
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
                    "between lines 153 and 158");
                 }(),
                 xOffset = $._0,
                 yOffset = $._1,
                 degs = $._2;
                 return $Graphics$Collage.rotate($Basics.degrees(degs))($Graphics$Collage.move({ctor: "_Tuple2"
                                                                                               ,_0: xOffset
                                                                                               ,_1: yOffset})($Graphics$Collage.move({ctor: "_Tuple2"
                                                                                                                                     ,_0: _v50._0
                                                                                                                                     ,_1: _v50._1})($Graphics$Collage.outlined($Graphics$Collage.solid(color))(A2($Graphics$Collage.rect,
                 fw,
                 $Basics.toFloat(playerH))))));
              }();}
         _E.Case($moduleName,
         "between lines 152 and 162");
      }();
   });
   var height = 540;
   var width = 720;
   var showGameState = function (gs) {
      return function () {
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
      }();
   };
   var outOfBounds = function (l) {
      return A3($List.foldr,
      F2(function (_v69,b) {
         return function () {
            switch (_v69.ctor)
            {case "_Tuple2":
               return b || (_U.cmp($Basics.abs(_v69._0),
                 width / 2) > 0 || _U.cmp($Basics.abs(_v69._1),
                 height / 2) > 0);}
            _E.Case($moduleName,
            "on line 120, column 36 to 80");
         }();
      }),
      false,
      l);
   };
   var BikeState = F4(function (a,
   b,
   c,
   d) {
      return {ctor: "BikeState"
             ,_0: a
             ,_1: b
             ,_2: c
             ,_3: d};
   });
   var Playing = F3(function (a,
   b,
   c) {
      return {ctor: "Playing"
             ,_0: a
             ,_1: b
             ,_2: c};
   });
   var initialGameState = function () {
      var pos2 = {ctor: "_Tuple2"
                 ,_0: width / 2 - 50
                 ,_1: 0.0};
      var bike2 = A4(BikeState,
      pos2,
      W,
      0.75,
      _L.fromArray([A3(pointInDirection,
      pos2,
      W,
      0 - tailOffset)]));
      var pos1 = {ctor: "_Tuple2"
                 ,_0: (0 - width) / 2 + 50
                 ,_1: 0.0};
      var bike1 = A4(BikeState,
      pos1,
      E,
      0.75,
      _L.fromArray([A3(pointInDirection,
      pos1,
      E,
      0 - tailOffset)]));
      return A3(Playing,
      bike1,
      bike2,
      true);
   }();
   var Ended = F2(function (a,b) {
      return {ctor: "Ended"
             ,_0: a
             ,_1: b};
   });
   var step = F2(function (_v73,
   gs) {
      return function () {
         switch (_v73.ctor)
         {case "Input":
            switch (_v73._0.ctor)
              {case "KeybInput":
                 return function () {
                      switch (gs.ctor)
                      {case "Ended":
                         return !_U.eq(_v73._0._2,
                           gs._1) && _v73._0._2 ? initialGameState : A2(Ended,
                           gs._0,
                           _v73._0._2);
                         case "Playing":
                         switch (gs._0.ctor)
                           {case "BikeState":
                              switch (gs._1.ctor)
                                {case "BikeState":
                                   return function () {
                                        var new_o2 = A2(getNewOrientation,
                                        _v73._0._1,
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
                                        gs._1._3,
                                        tailL));
                                        var outOfBounds2 = outOfBounds(A2(corners,
                                        new_pos2,
                                        new_o2));
                                        var new_o1 = A2(getNewOrientation,
                                        _v73._0._0,
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
                                        gs._0._3,
                                        tailL));
                                        var collision2 = A3(collideWithTail,
                                        new_pos2,
                                        new_o2,
                                        new_tail1) || A3(collideWithTail,
                                        new_pos2,
                                        new_o2,
                                        new_tail2);
                                        var outOfBounds1 = outOfBounds(A2(corners,
                                        new_pos1,
                                        new_o1));
                                        var collision1 = A3(collideWithTail,
                                        new_pos1,
                                        new_o1,
                                        new_tail1) || A3(collideWithTail,
                                        new_pos1,
                                        new_o1,
                                        new_tail2);
                                        return outOfBounds1 || collision1 ? A2(Ended,
                                        "Player 2 wins!",
                                        _v73._0._2) : outOfBounds2 || collision2 ? A2(Ended,
                                        "Player 1 wins!",
                                        _v73._0._2) : !_U.eq(_v73._0._2,
                                        gs._2) && _v73._0._2 ? initialGameState : A3(Playing,
                                        A4(BikeState,
                                        new_pos1,
                                        new_o1,
                                        gs._0._2,
                                        new_tail1),
                                        A4(BikeState,
                                        new_pos2,
                                        new_o2,
                                        gs._1._2,
                                        new_tail2),
                                        _v73._0._2);
                                     }();}
                                break;}
                           break;}
                      _E.Case($moduleName,
                      "between lines 59 and 78");
                   }();}
              break;}
         _E.Case($moduleName,
         "between lines 59 and 78");
      }();
   });
   var gameState = A2($Signal.lift,
   $Debug.watch("Game state"),
   A3($Signal.foldp,
   step,
   A2(Ended,banner,false),
   timedInput));
   var main = A2($Signal.lift,
   showGameState,
   gameState);
   _elm.Tron.values = {_op: _op
                      ,Ended: Ended
                      ,Playing: Playing
                      ,BikeState: BikeState
                      ,width: width
                      ,height: height
                      ,playerW: playerW
                      ,playerH: playerH
                      ,tailL: tailL
                      ,tailOffset: tailOffset
                      ,KeybInput: KeybInput
                      ,Input: Input
                      ,heartbeat: heartbeat
                      ,keybInput: keybInput
                      ,timedInput: timedInput
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
                      ,pointInBox: pointInBox
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