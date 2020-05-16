class Snake{
    constructor(){
        this.body = [];
        this.head = {
            x : 500,
            y : 500,
            velX : 1,
            velY : 0
        };
        this.body.push(this.head);
        

        this.turns = [];

    }

    display(){
        for ( var i in this.body){
            var part = this.body[i];
            fill (255);
            stroke ( "brown" );
            rectMode(CENTER);
            rect(part.x, part.y, 13, 13);
        }

    }

    move(){
        this.display();
        for( var bodyIndex in this.body ){
            var part = this.body[bodyIndex];
            part.x += part.velX;
            part.y += part.velY;

            for(var turnIndex in this.turns){
                var turn = this.turns[turnIndex];
                if(part.x === turn.x){
                    this.turnPart(part, turn.direction);
                }
            }
        }
        
    }

    eat(){

    }

    turn(direction){
        var turn = {
            x : this.head.x ,
            y : this.head.y,
            direction : direction
        };
        this.turns.push(turn);
        this.turnPart (this.head, direction);
    }

    turnPart(part, direction){
        if(direction === UP){
            part.velY = -1;
            part.velX = 0;
        } else if(direction === DOWN){
            part.velY = 1;
            part.velX = 0;
        } else if(direction === RIGHT){
            part.velX = 1;
            part.velY = 0;
        } else if(direction === LEFT){
            part.velX = -1;
            part.velY = 0;
        }
    }

}