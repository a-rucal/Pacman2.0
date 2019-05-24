function loadBubble(Q) {
    
    Q.animations('bubble animation', {
        'live': { frames: [0], rate: 1 / 3 }
    });
    
    //Clase que representa a una burbuja
    Q.Sprite.extend('Bubble', {
        init: function(p) {
            this._super(p, {
                sprite: 'bubble animation',
                sheet: 'bubble',
                //Métodos
                sensor: true,
                get: false
            });
            this.add('animation, tween');

            this.on('sensor');
        },

        sensor: function(obj) {
            if (obj.isA("Pacman")){
                this.destroy()

                if (!this.p.get) {
                    this.p.get = true;
                    //Actualizamos las variables globales
                    Q.state.inc('score', 10);
                    Q.audio.play('eating.mp3');
                    Q.state.dec('pointsLeft', 1);
                    
                    //Comprobamos si quedan puntos:
                    if (Q.state.get('pointsLeft') == 0){
                        Q('Pacman').trigger('win');
                    }
                                        
                }
            }  
        },

        step: function(dt) {
            this.play('live');
        }
    });
}