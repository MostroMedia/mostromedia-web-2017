var boot = function (game) {}

boot.prototype = {
    create: function(){
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
        this.scale.pageAlignHorizontally = true
        this.scale.hasPhaserSetFullScreen = true
        this.state.start("Preload")
    }
}