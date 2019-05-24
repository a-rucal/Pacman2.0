var tamEscenario = 580;

window.addEventListener('load', function() {
    
    var Q = Quintus({ development: true , audioSupported: ['mp3', 'ogg'] })
        
        .include('Sprites, Scenes, Input, 2D, Anim, Touch, UI, TMX, Audio')
        .setup({
            width: 550,
            height: 550
        })
        .controls().touch().enableSound();
   
    //Personajes
    loadPacman(Q);

    //Enemigos
    loadGhost(Q);
    loadBlinky(Q);
    loadInky(Q);
    loadPinky(Q);
    loadClyde(Q);
    
    //Objetos
    loadBubble(Q);
    loadPowerBubble(Q);
    loadFruit(Q);

    //Pantallas
    loadMainTitle(Q);
    loadLevel1(Q);
    loadHUB(Q);
    loadEndGame(Q);
    
    //Cargamos los ficheros que necesitamos para el juego
    Q.loadTMX('maze_def.tmx, mainTitle.png, blinky.png, mainSprite.png, pacman_full.png, pacman.json, blinky.json, bubble.json, powerBubble.json, fruit.json, pinky.png, pinky.json, inky.png, inky.json, clyde.png, clyde.json, eat-fruit.mp3, eating.mp3, eat-pill.mp3, die.mp3, siren.mp3, ghost-eaten.mp3, extra-life.mp3', function() {
        Q.compileSheets('pacman_full.png', 'pacman.json');
        Q.compileSheets('blinky.png', 'blinky.json');       
        Q.compileSheets('inky.png', 'inky.json');       
        Q.compileSheets('pinky.png', 'pinky.json');       
        Q.compileSheets('clyde.png', 'clyde.json');       
        Q.compileSheets('mainSprite.png', 'bubble.json');
        Q.compileSheets('mainSprite.png', 'powerBubble.json');
        Q.compileSheets('mainSprite.png', 'fruit.json');

        Q.stageScene('mainTitle');
    });
});