function loadFruit(Q) {
    
    Q.animations('fruit animation', {
        'live': { frames: [0], rate: 1 / 3 }
    });
    
    //Clase que representa a una fruta
    Q.Sprite.extend('Fruit', {
        init: function(p) {
            this._super(p, {
                sprite: 'fruit animation',
                sheet: 'cherry',
                //Métodos
                sensor: true,
                get: false
            });
            this.add('animation, tween');

            this.on('sensor');
        },

        sensor: function(obj) {
            if (obj.isA("Pacman")){
                var get = function() {
                    this.destroy()
                }
                this.animate({ y: this.p.y - 50 }, 0.3, { callback: get });
                if (!this.p.get) {
                    this.p.get = true;
                    Q.state.inc('score', 100);
                    Q.audio.play('eat-fruit.mp3');
                }
            }
        },

        step: function(dt) {
            this.play('live');
        }
    });
}