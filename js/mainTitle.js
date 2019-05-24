function loadMainTitle(Q) {
    
    //Pantalla Inicio
    Q.scene('mainTitle', function(stage) {
        var container = stage.insert(new Q.UI.Container({
            x: Q.width / 2,
            y: 10,
            fill: 'rgba(0,0,0,0.0)'
        }));

        var button = container.insert(new Q.UI.Button({
            asset: 'mainTitle.png',
            x: 0,
            y: (Q.height / 2) - 5
        }));

        button.on('click', function() {
            Q.clearStages();
            Q.state.set('play', true);
            Q.stageScene('level1');
        });

        Q.input.on('confirm', function() {
            if (!Q.state.get('play')) {
                Q.clearStages();
                Q.state.set('play', true);
                Q.stageScene('level1');
            }
        });

        Q.state.set('play', false);
        //Configuración inicio juego
        Q.state.reset({ score: 0, pointsLeft: 34 });
        /*Q.audio.stop('music_level_complete.mp3');
        Q.audio.stop('music_die.mp3');
        Q.audio.play('music_main.mp3', { loop: true });*/

        container.fit(20);
    });
}