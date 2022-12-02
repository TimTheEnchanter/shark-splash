namespace SpriteKind {
    export const Decoration = SpriteKind.create()
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`swim left`,
    200,
    true
    )
})
info.onCountdownEnd(function () {
    game.over(true)
})
info.onLifeZero(function () {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 100)
    info.changeScoreBy(1)
    music.baDing.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    scene.cameraShake(4, 500)
    music.bigCrash.play()
})
let myFood: Sprite = null
let mySprite2: Sprite = null
let myDecor: Sprite = null
let mySprite: Sprite = null
game.splash("Shark Splash")
scene.setBackgroundColor(8)
scene.setBackgroundImage(assets.image`ocean1`)
mySprite = sprites.create(assets.image`shark`, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
info.setLife(3)
info.startCountdown(30)
for (let index = 0; index < 10; index++) {
    myDecor = sprites.create(assets.image`decoration`, SpriteKind.Decoration)
    myDecor.setPosition(randint(0, 160), 96)
}
animation.runImageAnimation(
mySprite,
assets.animation`swim right`,
200,
true
)
game.onUpdateInterval(5000, function () {
	
})
game.onUpdateInterval(2000, function () {
    mySprite2 = sprites.create(assets.image`enemy`, SpriteKind.Enemy)
    mySprite2.setPosition(scene.screenWidth(), randint(5, 115))
    mySprite2.vx = -95
    animation.runImageAnimation(
    mySprite2,
    assets.animation`animated enemy`,
    50,
    true
    )
})
game.onUpdateInterval(1500, function () {
    myFood = sprites.create(assets.image`food`, SpriteKind.Food)
    myFood.setPosition(scene.screenWidth(), randint(5, 115))
    myFood.vx = -75
    animation.runImageAnimation(
    myFood,
    assets.animation`animated food`,
    200,
    true
    )
})
