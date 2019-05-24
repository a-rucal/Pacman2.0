function loadPowerBubble(Q) {
    
    Q.animations('powerBubble animation', {
        'live': { frames: [0], rate: 1 / 3 }
    });
    
    //Clase que representa a una burbuja de poder
    Q.Sprite.extend('PowerBubble', {
        init: function(p) {
            this._super(p, {
                sprite: 'powerBubble animation',
                sheet: 'powerBubble',
                //Métodos
                sensor: true,
                get: false
            });
            this.add('animation, tween');

            this.on('sensor');
        },

        sensor: function(obj) {
            if (obj.isA("Pacman")){
                this.destroy();
                if (!this.p.get) {
                    this.p.get = true;
                    Q.state.inc('score', 50);
                    Q.state.dec('pointsLeft', 1);
                    Q.audio.play('eat-pill.mp3');   
                    
                    //Comprobamos si quedan puntos:
                    if (Q.state.get('pointsLeft') == 0){
                        Q('Pacman').trigger('win');
                    }else{
                        //Los fantasmas serán vulnerables
                        var blinky = Q("Blinky");
                        var inky = Q("Inky");
                        var pinky = Q("Pinky");
                        var clyde = Q("Clyde");
                        blinky.trigger("changeState");
                        inky.trigger("changeState");
                        pinky.trigger("changeState");
                        clyde.trigger("changeState");
                        Q.audio.play('siren.mp3', { loop: true }); 

                        //Tras unos segundos, vuelven al estado normal
                        setTimeout(function() {
                            blinky.trigger("changeState");
                            inky.trigger("changeState");
                            pinky.trigger("changeState");
                            clyde.trigger("changeState");
                            Q.audio.stop('siren.mp3');
                        }, 10000);
                    }
                }
            }
        },

        step: function(dt) {
            this.play('live');
        }
    });
}