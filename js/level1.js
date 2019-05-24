function loadLevel1(Q) {
    
    //Creamos el nivel 1
    Q.scene('level1', function(stage) {
        Q.stageTMX('maze_def.tmx', stage);
        
        //Jugador
        var pacman = stage.insert(new Q.Pacman());
        
        //Objetos
        var powerBubble = stage.insert(new Q.PowerBubble( { x:410, y:150 }));
        var fruit = stage.insert(new Q.Fruit( { x:410, y:410 }));
        
        //First quarter
        stage.insert(new Q.Bubble( { x:110, y:120 }));
        stage.insert(new Q.Bubble( { x:110, y:150 }));
        stage.insert(new Q.Bubble( { x:110, y:180 }));
        
        stage.insert(new Q.Bubble( { x:140, y:120 }));
        stage.insert(new Q.Bubble( { x:140, y:150 }));
        stage.insert(new Q.Bubble( { x:140, y:180 }));
        
        stage.insert(new Q.Bubble( { x:170, y:120 }));
        stage.insert(new Q.Bubble( { x:170, y:150 }));
        stage.insert(new Q.Bubble( { x:170, y:180 }));
        
        //Second quarter
        stage.insert(new Q.Bubble( { x:380, y:120 }));
        stage.insert(new Q.Bubble( { x:380, y:150 }));
        stage.insert(new Q.Bubble( { x:380, y:180 }));
        
        stage.insert(new Q.Bubble( { x:410, y:120 }));
        //powerBubble
        stage.insert(new Q.Bubble( { x:410, y:180 }));
        
        stage.insert(new Q.Bubble( { x:440, y:120 }));
        stage.insert(new Q.Bubble( { x:440, y:150 }));
        stage.insert(new Q.Bubble( { x:440, y:180 }));
        
        //Third quarter
        stage.insert(new Q.Bubble( { x:110, y:380 }));
        stage.insert(new Q.Bubble( { x:110, y:410 }));
        stage.insert(new Q.Bubble( { x:110, y:440 }));
        
         stage.insert(new Q.Bubble( { x:140, y:380 }));
        stage.insert(new Q.Bubble( { x:140, y:410 }));
        stage.insert(new Q.Bubble( { x:140, y:440 }));
        
        stage.insert(new Q.Bubble( { x:170, y:380 }));
        stage.insert(new Q.Bubble( { x:170, y:410 }));
        stage.insert(new Q.Bubble( { x:170, y:440 }));
        
        //Forth quarter
        stage.insert(new Q.Bubble( { x:380, y:380 }));
        stage.insert(new Q.Bubble( { x:380, y:410 }));
        stage.insert(new Q.Bubble( { x:380, y:440 }));
        
         stage.insert(new Q.Bubble( { x:410, y:380 }));
        //Fruit
        stage.insert(new Q.Bubble( { x:410, y:440 }));
        
        stage.insert(new Q.Bubble( { x:440, y:380 }));
        stage.insert(new Q.Bubble( { x:440, y:410 }));
        stage.insert(new Q.Bubble( { x:440, y:440 }));
        
        /*
         * Enemigos: importante que se declaren al final. 
         * Para que cuando pasen por encima de los objetos, se pinten encima los enemigos.
        */
        var blinky = stage.insert(new Q.Blinky());
        var inky = stage.insert(new Q.Inky());
        var pinky = stage.insert(new Q.Pinky());
        var clyde = stage.insert(new Q.Clyde());

        Q.stageScene('HUB', 1);
    });
}
