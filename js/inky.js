function loadInky(Q) {
    
    Q.animations('inky animation', {
        'inky_right': { frames: [0], loop: false },
        'inky_down': { frames: [2], loop: false },
        'inky_left': { frames: [4], loop: false },
        'inky_up': { frames: [6], loop: false },
        'scared': { frames: [8], loop: false }
    });
    
    /// Clase que representa al enemigo Inky - Fantasma Azul
    Q.Sprite.extend('Inky', {
        init: function(p) {
            this._super(p, {
                sprite: 'inky animation',
                //Sprite del Blinky.
                sheet: 'inky',
                //Posición inicial del Inky
                x: 500,
                y: 40,
                // Parámetros de velocidad del Inky
                v: 80,
                vx: -80,
                direction: 'left',
                ndirection: 3,
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
                    
        // Muere el Inky
        die: function() {
            this.p.die = true;
            this.p.vx = 0;
            this.p.vy = 0;
            
            Q('Inky').destroy();
            Q.audio.play('ghost-eaten.mp3');
            Q.state.inc('score', 200);
        },
        
        // Ejecuta un paso de Inky
        step: function(dt) {
            if (this.p.gstate){
                this.play('inky_' + this.p.direction);
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