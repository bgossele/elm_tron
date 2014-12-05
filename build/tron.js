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
   var wrap = function (s) {
      return _L.append("====>       ",
      _L.append(s,"       <===="));
   };
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
                 "on line 115, column 37 to 87");
              }();}
         _E.Case($moduleName,
         "on line 115, column 37 to 87");
      }();
   });
   var pointInRectangle = F5(function (x1,
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
         "on line 133, column 42 to 100");
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
                 "on line 118, column 24 to 51");
              }();}
         _E.Case($moduleName,
         "on line 118, column 24 to 51");
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
                 "between lines 104 and 109");
              }();}
         _E.Case($moduleName,
         "between lines 103 and 109");
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
                 "between lines 95 and 99");
              }();}
         _E.Case($moduleName,
         "between lines 95 and 99");
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
         "on line 91, column 29 to 126");
      }();
   });
   var Input = F2(function (a,b) {
      return {ctor: "Input"
             ,_0: a
             ,_1: b};
   });
   var KeybInput = F4(function (a,
   b,
   c,
   d) {
      return {ctor: "KeybInput"
             ,_0: a
             ,_1: b
             ,_2: c
             ,_3: d};
   });
   var keybInput = function () {
      var realInput = A5($Signal.lift4,
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
      $Keyboard.space,
      $Keyboard.enter);
      return A2($Signal.lift,
      $Debug.watch("keybInput"),
      realInput);
   }();
   var tailOffset = $Basics.toFloat(4);
   var tailL = $Basics.toFloat(256);
   var frameRate = 100;
   var tailIncrement = 5 / frameRate;
   var heartbeat = A2($Signal.lift,
   $Debug.watch("heartbeat"),
   $Time.fps(frameRate));
   var input = A3($Signal.lift2,
   Input,
   keybInput,
   heartbeat);
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
         "between lines 122 and 127");
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
                    {case "E":
                       return A4(pointInRectangle,
                         _v45._0,
                         _v45._0 + playerW,
                         _v45._1 - playerH / 2,
                         _v45._1 + playerH / 2);
                       case "N":
                       return A4(pointInRectangle,
                         _v45._0 - playerH / 2,
                         _v45._0 + playerH / 2,
                         _v45._1,
                         _v45._1 + playerW);
                       case "S":
                       return A4(pointInRectangle,
                         _v45._0 - playerH / 2,
                         _v45._0 + playerH / 2,
                         _v45._1,
                         _v45._1 - playerW);
                       case "W":
                       return A4(pointInRectangle,
                         _v45._0,
                         _v45._0 - playerW,
                         _v45._1 - playerH / 2,
                         _v45._1 + playerH / 2);}
                    _E.Case($moduleName,
                    "between lines 136 and 141");
                 }();
                 return A2($List.foldr,
                 F2(function (p,b) {
                    return b || f(p);
                 }),
                 false);
              }();}
         _E.Case($moduleName,
         "between lines 136 and 142");
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
                    "between lines 165 and 170");
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
         "between lines 164 and 174");
      }();
   });
   var height = 768;
   var width = 1024;
   var showGameState = function (gs) {
      return function () {
         var elements = function () {
            switch (gs.ctor)
            {case "Ended":
               return _L.fromArray([$Graphics$Collage.toForm($Text.centered(A2($Text.typeface,
                 _L.fromArray(["arial"]),
                 A2($Text.height,
                 20,
                 A2($Text.color,
                 $Color.yellow,
                 $Text.toText(A2($List.join,
                 "",
                 _L.fromArray([gs._0
                              ,"\n\n\n"
                              ,wrap(" Press space to start ")
                              ,"\n"
                              ,wrap("Press enter to pause")]))))))))]);
               case "Playing":
               switch (gs._0.ctor)
                 {case "PlayerState":
                    switch (gs._1.ctor)
                      {case "PlayerState":
                         return _L.append(_L.fromArray([A3(showPlayer$,
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
                                                       gs._1._4)]),
                           gs._3 ? _L.fromArray([$Graphics$Collage.toForm($Text.centered(A2($Text.typeface,
                           _L.fromArray(["arial"]),
                           A2($Text.height,
                           20,
                           A2($Text.color,
                           $Color.yellow,
                           $Text.toText("Paused\nPress enter to continue"))))))]) : _L.fromArray([]));}
                      break;}
                 break;}
            _E.Case($moduleName,
            "between lines 54 and 62");
         }();
         var forms = _L.append(_L.fromArray([A2($Graphics$Collage.filled,
                                            $Color.black,
                                            A2($Graphics$Collage.rect,
                                            width,
                                            height))
                                            ,A2($Graphics$Collage.outlined,
                                            $Graphics$Collage.solid($Color.yellow),
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
      F2(function (_v75,b) {
         return function () {
            switch (_v75.ctor)
            {case "_Tuple2":
               return b || (_U.cmp($Basics.abs(_v75._0),
                 width / 2) > 0 || _U.cmp($Basics.abs(_v75._1),
                 height / 2) > 0);}
            _E.Case($moduleName,
            "on line 130, column 36 to 80");
         }();
      }),
      false,
      l);
   };
   var PlayerState = F5(function (a,
   b,
   c,
   d,
   e) {
      return {ctor: "PlayerState"
             ,_0: a
             ,_1: b
             ,_2: c
             ,_3: d
             ,_4: e};
   });
   var Playing = F6(function (a,
   b,
   c,
   d,
   e,
   f) {
      return {ctor: "Playing"
             ,_0: a
             ,_1: b
             ,_2: c
             ,_3: d
             ,_4: e
             ,_5: f};
   });
   var initialGameState = function (s) {
      return function () {
         var pos2 = {ctor: "_Tuple2"
                    ,_0: width / 2 - 50
                    ,_1: 0.0};
         var bike2 = A5(PlayerState,
         pos2,
         W,
         0.75,
         tailL,
         _L.fromArray([A3(pointInDirection,
         pos2,
         W,
         0 - tailOffset)]));
         var pos1 = {ctor: "_Tuple2"
                    ,_0: (0 - width) / 2 + 50
                    ,_1: 0.0};
         var bike1 = A5(PlayerState,
         pos1,
         E,
         0.75,
         tailL,
         _L.fromArray([A3(pointInDirection,
         pos1,
         E,
         0 - tailOffset)]));
         return A6(Playing,
         bike1,
         bike2,
         s,
         false,
         true,
         false);
      }();
   };
   var Ended = F3(function (a,
   b,
   c) {
      return {ctor: "Ended"
             ,_0: a
             ,_1: b
             ,_2: c};
   });
   var step = F2(function (_v79,
   gs) {
      return function () {
         switch (_v79.ctor)
         {case "Input":
            switch (_v79._0.ctor)
              {case "KeybInput":
                 return function () {
                      switch (gs.ctor)
                      {case "Ended":
                         return !_U.eq(_v79._0._2,
                           gs._2) && _v79._0._2 ? initialGameState(gs._1) : A3(Ended,
                           gs._0,
                           gs._1,
                           _v79._0._2);
                         case "Playing":
                         switch (gs._0.ctor)
                           {case "PlayerState":
                              switch (gs._1.ctor)
                                {case "PlayerState":
                                   switch (gs._2.ctor)
                                     {case "_Tuple2":
                                        return !_U.eq(_v79._0._2,
                                          gs._4) && _v79._0._2 ? initialGameState({ctor: "_Tuple2"
                                                                                  ,_0: gs._2._0
                                                                                  ,_1: gs._2._1}) : !_U.eq(_v79._0._3,
                                          gs._5) && _v79._0._3 ? A6(Playing,
                                          A5(PlayerState,
                                          gs._0._0,
                                          gs._0._1,
                                          gs._0._2,
                                          gs._0._3,
                                          gs._0._4),
                                          A5(PlayerState,
                                          gs._1._0,
                                          gs._1._1,
                                          gs._1._2,
                                          gs._1._3,
                                          gs._1._4),
                                          {ctor: "_Tuple2"
                                          ,_0: gs._2._0
                                          ,_1: gs._2._1},
                                          $Basics.not(gs._3),
                                          _v79._0._2,
                                          _v79._0._3) : gs._3 ? A6(Playing,
                                          A5(PlayerState,
                                          gs._0._0,
                                          gs._0._1,
                                          gs._0._2,
                                          gs._0._3,
                                          gs._0._4),
                                          A5(PlayerState,
                                          gs._1._0,
                                          gs._1._1,
                                          gs._1._2,
                                          gs._1._3,
                                          gs._1._4),
                                          {ctor: "_Tuple2"
                                          ,_0: gs._2._0
                                          ,_1: gs._2._1},
                                          gs._3,
                                          _v79._0._2,
                                          _v79._0._3) : function () {
                                             var new_tailL2 = gs._1._3 + tailIncrement;
                                             var new_tailL1 = A2($Debug.watch,
                                             "tailL",
                                             gs._0._3 + tailIncrement);
                                             var new_o2 = A2(getNewOrientation,
                                             _v79._0._1,
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
                                             var new_o1 = A2(getNewOrientation,
                                             _v79._0._0,
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
                                             var dead2 = outOfBounds(A2(corners,
                                             new_pos2,
                                             new_o2)) || (A3(collideWithTail,
                                             new_pos2,
                                             new_o2,
                                             new_tail1) || A3(collideWithTail,
                                             new_pos2,
                                             new_o2,
                                             new_tail2));
                                             var dead1 = outOfBounds(A2(corners,
                                             new_pos1,
                                             new_o1)) || (A3(collideWithTail,
                                             new_pos1,
                                             new_o1,
                                             new_tail1) || A3(collideWithTail,
                                             new_pos1,
                                             new_o1,
                                             new_tail2));
                                             return dead1 && dead2 ? A3(Ended,
                                             "It\'s a tie!",
                                             {ctor: "_Tuple2"
                                             ,_0: gs._2._0
                                             ,_1: gs._2._1},
                                             _v79._0._2) : dead1 ? A3(Ended,
                                             "Player 2 wins!",
                                             {ctor: "_Tuple2"
                                             ,_0: gs._2._0
                                             ,_1: gs._2._1 + 1},
                                             _v79._0._2) : dead2 ? A3(Ended,
                                             "Player 1 wins!",
                                             {ctor: "_Tuple2"
                                             ,_0: gs._2._0 + 1
                                             ,_1: gs._2._1},
                                             _v79._0._2) : A6(Playing,
                                             A5(PlayerState,
                                             new_pos1,
                                             new_o1,
                                             gs._0._2,
                                             new_tailL1,
                                             new_tail1),
                                             A5(PlayerState,
                                             new_pos2,
                                             new_o2,
                                             gs._1._2,
                                             new_tailL2,
                                             new_tail2),
                                             {ctor: "_Tuple2"
                                             ,_0: gs._2._0
                                             ,_1: gs._2._1},
                                             gs._3,
                                             _v79._0._2,
                                             _v79._0._3);
                                          }();}
                                     break;}
                                break;}
                           break;}
                      _E.Case($moduleName,
                      "between lines 66 and 88");
                   }();}
              break;}
         _E.Case($moduleName,
         "between lines 66 and 88");
      }();
   });
   var gameState = A3($Signal.foldp,
   step,
   A3(Ended,
   banner,
   {ctor: "_Tuple2",_0: 0,_1: 0},
   false),
   input);
   var main = A2($Signal.lift,
   showGameState,
   gameState);
   _elm.Tron.values = {_op: _op
                      ,Ended: Ended
                      ,Playing: Playing
                      ,PlayerState: PlayerState
                      ,width: width
                      ,height: height
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
                      ,wrap: wrap
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