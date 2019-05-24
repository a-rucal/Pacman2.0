function loadHUB(Q) {
    Q.UI.Text.extend('ScoreLabel', {
        init: function(p) {
            this._super({
                label: p.label,
                x: 0,
                y: 10,
                size: 12
            });

            Q.state.on('change.score', this, 'changeScore');
        },

        changeScore: function(score) {
            this.p.label = 'Score: ' + score;
        }
    });

    Q.scene('HUB', function(stage) {
        var container = stage.insert(new Q.UI.Container({
            x: Q.width / 3,
            y: 2,
            fill: 'white'
        }));

        var label = container.insert(new Q.ScoreLabel({ label: 'Score: 0' }));

        container.fit(10);
    });
    
}