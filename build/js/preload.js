var preload = function (game) {}

var firulais = "a"

preload.prototype = {
    preload: function(){
        this.load.spritesheet('playButton','img/ciclo/transform.png', 500 , 500)
        this.load.image('floor','img/assets/floor1.png')
        this.load.image('alien','img/assets/alien.png')
        this.load.image('star','img/assets/star.png')
        this.load.spritesheet('dead','img/ciclo/dead.png')
        this.load.image('gameOverTitle','img/assets/gameOverTitle.png')
        this.load.image('startAgain','img/assets/start-again.png')
        this.load.image('startAgainHover','img/assets/start-again-hover.png')
        this.load.spritesheet('player','img/ciclo/cycle.png', 200 , 200)
    },
    create: function(){
            this.state.start('GameTitle')
    }
}