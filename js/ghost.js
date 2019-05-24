function loadGhost(Q) {
    Q.component('ghost', {
            
        added: function() {
            this.entity.add('2d, animation');

            // Definición de las funciones adicionales
            this.entity.on('bump.left, bump.right, bump.bottom, bump.top', this, 'collision');
        },
        
        //En caso de que Pacman choque contra algún fantasma
        collision: function(collision) {
            if (collision.obj.isA('Pacman')) {
                if(!this.entity.p.collision){
    
                    //Si el fantasma está en estado normal, Pacman muere
                    if (this.entity.p.gstate){
                         collision.obj.trigger('die');
                    }
                    //Si es fantasma está asustado, él muere
                    else{
                        this.entity.trigger('die');
                        this.entity.p.collision = true;
                        setTimeout(function() {
                            if (collision.obj.p.ndirection == 1){
                                collision.obj.p.vx = 50;
                            }else if (collision.obj.p.ndirection == 2){
                                collision.obj.p.vy = 50;
                            }else if (collision.obj.p.ndirection == 3){
                                collision.obj.p.vx = -50;   
                            }else if (collision.obj.p.ndirection == 4){
                                collision.obj.p.vy = -50;  
                            }
                        }, 120);
                        
                    }
                }
            }
        }
    
    });
}