function loadPinky(Q) {
    
    Q.animations('pinky animation', {
        'pinky_right': { frames: [0], loop: false },
        'pinky_down': { frames: [2], loop: false },
        'pinky_left': { frames: [4], loop: false },
        'pinky_up': { frames: [6], loop: false },
        'scared': { frames: [8], loop: false }
    });
    
    /// Clase que representa al enemigo Pinky - Fantasma Rosa
    Q.Sprite.extend('Pinky', {
        init: function(p) {
            this._super(p, {
                sprite: 'pinky animation',
                //Sprite del Pinky
                sheet: 'pinky',
                //Posición inicial del Pinky
                x: 40,
                y: 500,
                // Parámetros de velocidad del Pinky
                v: 120,
                vy: -120,
                direction: 'up',
                ndirection: 4,
                //Atributos adicionales
                gstate: true, //normal = true // vulnerable = false
                die: false,
                collision: false
            });
            
            //Se carga el módulo de Quintus que controla su movimiento y la clase padre
            this.add('aiMoveGhost, ghost');
            //Definición de las funciones adicionales.
            this.on('die, changeState');
        },
        
        //Cambia el estado: de normal a asustado
        changeState: function() {
            this.p.gstate = !this.p.gstate;
        },
                    
        // Muere Pinky
        die: function() {
            this.p.die = true;
            this.p.vx = 0;
            this.p.vy = 0;
            
            Q('Pinky').destroy();
            Q.audio.play('ghost-eaten.mp3');
            Q.state.inc('score', 200);
        },
        
        // Ejecuta un paso de Pinky
        step: function(dt) {
            if (this.p.gstate){
                this.play('pinky_' + this.p.direction);
            }else{
                this.play('scared');
            }
            
            /*
            if (this.p.die) {
                this.play('die');
            } else {
                this.play('live');
                // En caso de caerse del escenario, Goomba muere.
                if (this.p.y > fondo_escenario) {
                    this.trigger('die');
                }
            }*/
            
        }
    });
}