function loadEndGame(Q) {
    
    // Escena que representa a la pantalla fin de partida.
    Q.scene('endGame', function(stage) {
        var container = stage.insert(new Q.UI.Container({
            x: Q.width / 2,
            y: Q.height / 2,
            fill: 'white'
        }));

        var button = container.insert(new Q.UI.Button({
            x: 10,
            y: 10,
            fill: '#CCCCCC',
            label: 'Play Again'
        }));

        button.on('click', function() {
            Q.state.reset({ score: 0, pointsLeft: 34 });
            Q.clearStages();
            Q.stageScene('level1');
        });

        var label = container.insert(new Q.UI.Text({
            x: 10,
            y: -10 - button.p.h,
            size: 16,
            label: 'Your score: ' + Q.state.get("score") + '\n' + stage.options.label
        }));

        container.fit(20);
    });
}