function loadBlinky(Q) {
    
    Q.animations('blinky animation', {
        'blinky_right': { frames: [0], loop: false },
        'blinky_down': { frames: [2], loop: false },
        'blinky_left': { frames: [4], loop: false },
        'blinky_up': { frames: [6], loop: false },
        'scared': { frames: [8], loop: false }
    });
    
    /// Clase que representa al enemigo Blinky - Fantasma Rojo
    Q.Sprite.extend('Blinky', {
        init: function(p) {
            this._super(p, {
                sprite: 'blinky animation',
                //Sprite del Blinky.
                sheet: 'blinky',
                //Posición inicial del Blinky
                x: 40,
                y: 40,
                // Parámetros de velocidad del Blinky
                v: 100, 
                vx: 100,
                direction: 'right',
                ndirection: 1,
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
                    
        // Muere el Blinky
        die: function() {
            this.p.die = true;
            this.p.vx = 0;
            this.p.vy = 0;
            
            Q('Blinky').destroy();
            Q.audio.play('ghost-eaten.mp3');
            Q.state.inc('score', 200);
        },
        
        // Ejecuta un paso de Blinky
        step: function(dt) {
            if (this.p.gstate){
                this.play('blinky_' + this.p.direction);
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