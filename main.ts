enum ActionKind {
    Walking,
    Idle,
    Jumping
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    characterAnimations.loopFrames(
    mySprite,
    assets.animation`Walking left`,
    200,
    characterAnimations.rule(Predicate.MovingLeft)
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 8 8 2 f f f . . . 
        . . f f f 2 8 8 8 8 2 f f f . . 
        . . f f 8 2 2 2 2 2 2 8 f f . . 
        . . f 8 8 f f f f f f 8 8 f . . 
        . . f f f f e e e e f f f f . . 
        . f f e d 1 f d d f 1 d e f f . 
        . f e e d 1 f d d f 1 d e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 2 8 8 2 e e f . . . 
        . . . d f 2 8 2 2 8 2 f d . . . 
        . . d 4 f 8 2 2 2 2 8 f 4 d . . 
        . . d d f 8 8 8 8 8 8 f d d . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `],
    200,
    characterAnimations.rule(Predicate.MovingDown)
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    characterAnimations.loopFrames(
    mySprite,
    assets.animation`-`,
    200,
    characterAnimations.rule(Predicate.MovingDown)
    )
})
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`myImage`, SpriteKind.Player)
mySprite.setPosition(80, 60)
controller.moveSprite(mySprite, 50, 50)
tiles.setCurrentTilemap(tilemap`level1`)
scaling.scaleToPixels(mySprite, 16, ScaleDirection.Uniformly, ScaleAnchor.Middle)
forever(function () {
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 8 8 2 f f f . . . 
        . . f f f 2 8 8 8 8 2 f f f . . 
        . . f f 8 2 2 2 2 2 2 8 f f . . 
        . . f 8 8 f f f f f f 8 8 f . . 
        . . f f f f e e e e f f f f . . 
        . f f e d 1 f d d f 1 d e f f . 
        . f e e d 1 f d d f 1 d e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 2 8 8 2 e e f . . . 
        . . . d f 2 8 2 2 8 2 f d . . . 
        . . d 4 f 8 2 2 2 2 8 f 4 d . . 
        . . d d f 8 8 8 8 8 8 f d d . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.NotMoving, Predicate.HittingWallDown)
    )
    characterAnimations.loopFrames(
    mySprite,
    assets.animation`Left idle`,
    100,
    characterAnimations.rule(Predicate.HittingWallLeft)
    )
})
