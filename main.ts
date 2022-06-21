input.onButtonPressed(Button.A, function () {
    猴子.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    猴子.change(LedSpriteProperty.X, 1)
})
let 猴子: game.LedSprite = null
猴子 = game.createSprite(2, 4)
let 跑 = 0
basic.forever(function () {
	
})
