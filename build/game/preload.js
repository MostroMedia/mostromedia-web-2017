var preload = function (game) {}

preload.prototype = {
    preload: function(){
        this.load.spritesheet('playButton','../assets/transform.png', 500 , 500)
        this.load.image('floor','../assets/floor1.png')
        this.load.image('alien','../assets/alien.png')
        this.load.image('star','../assets/star.png')
        this.load.spritesheet('dead','../assets/dead.png')
        this.load.image('gameOverTitle','../assets/gameOverTitle.png')
        this.load.image('startAgain','../assets/start-again.png')
        this.load.image('startAgainHover','../assets/start-again-hover.png')
        this.load.spritesheet('player','../assets/cycle.png', 200 , 200)
    },
    create: function(){
            this.state.start('GameTitle')
    }
}