function loadPacman(Q) {

    //Cargamos los sprites de Pacman
    Q.animations('pacman animation', {
        'pacman_right': { frames: [4,6], rate: 1/10 },
        'pacman_left': { frames: [0,2], rate: 1/10 },
        'pacman_up': { frames: [1,3], rate: 1/10 },
        'pacman_down': { frames: [5,7], rate: 1/10 },
    });
    
    //Creamos la clase Pacman
    Q.Sprite.extend('Pacman', {
        
        //Inicializamos la clase Pacman
        init: function(p) {
            this._super(p, {
                sprite: 'pacman animation',
                sheet: 'pacman',
                x: 100,
                y: 90,
                stepDistance: 5, 
                stepDelay: 0.2,
                v: 80,
                direction: 'left',
                ndirection: 3,
                vx: -80,
                die: false
            });
            
            // Los módulos Quintus necesarios
            this.add('2d, stepControls, animation, tween');
            
            // Los métodos adicionales: ganar y perder
            this.on('die');
            this.on('win');
        },
        
        //Método de muerte 
        die: function() {
            Q.audio.stop();
            if (!this.p.die) {
                Q.audio.play('die.mp3');
            }
            this.p.die = true;
            this.p.v = 0;
            this.destroy();
            Q.stageScene('endGame', 1, { label: 'Game Over' });
            Q.pauseGame();
            
            /*var lose = function() {
                this.destroy();
                Q.stageScene('endGame', 1, { label: 'Game Over' });
            }
            var PacmanDie = function() {
                this.animate({ x: this.p.x, y: tamEscenario, angle: 0 }, 0.5, { callback: lose });
            }
            this.animate({ y: this.p.y - 100, angle: 0 }, 0.3, { callback: marioDie });*/
        },
        
        //Método de ganar
        win: function() {
            this.p.move = false;
            Q.audio.stop();
            Q.audio.play('extra-life.mp3');
            Q.stageScene('endGame', 1, { label: 'You Win' });
            setTimeout(function() {
               Q.pauseGame(); 
            }, 300);
        },
        
        //Movimiento de Pacman
        step: function(dt) {
            this.play('pacman_' + this.p.direction);

            //Si Mario está muerto
            /*if (this.p.die) {
                this.play('die');
                this.p.speed = 0;
                this.p.jumpSpeed = 0;
            } else {
                
                //Sino, nos desplazamos normal
                if (this.p.move) {
                    if (this.p.vy != 0) {
                        this.play('jumping_' + this.p.direction)
                    } else if (this.p.vx != 0) {
                        this.play('run_' + this.p.direction );
                    } else {
                        this.play('stand_' + this.p.direction);
                    }
                    
                    //Si se cae del escenario, se muere
                    if (this.p.y > tamEscenario) {
                        this.trigger('die');
                    }
                }
                
                
                //Si ha ganado la partida
                else {
                    this.play('stand_right');
                    this.p.speed = 0;
                    this.p.jumpSpeed = 0;
                }
            }*/
        }
    });
}