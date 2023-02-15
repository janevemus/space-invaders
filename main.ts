input.onButtonPressed(Button.A, function () {
    player.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    shoot = game.createSprite(player.get(LedSpriteProperty.X), player.get(LedSpriteProperty.Y))
    for (let index = 0; index < 4; index++) {
        shoot.change(LedSpriteProperty.Y, -1)
        basic.pause(10)
        if (_1.isTouching(shoot)) {
            _1.delete()
            game.addScore(1)
            shoot.delete()
        }
        if (_2.isTouching(shoot)) {
            _2.delete()
            game.addScore(1)
            shoot.delete()
        }
        if (_3.isTouching(shoot)) {
            _3.delete()
            game.addScore(1)
            shoot.delete()
        }
        if (_4.isTouching(shoot)) {
            _4.delete()
            game.addScore(1)
            shoot.delete()
        }
        if (_5.isTouching(shoot)) {
            _5.delete()
            game.addScore(1)
            shoot.delete()
        }
        if (_6.isTouching(shoot)) {
            _6.delete()
            game.addScore(1)
            shoot.delete()
        }
        if (_7.isTouching(shoot)) {
            _7.delete()
            game.addScore(1)
            shoot.delete()
        }
        if (_8.isTouching(shoot)) {
            _8.delete()
            game.addScore(1)
            shoot.delete()
        }
        if (_9.isTouching(shoot)) {
            _9.delete()
            game.addScore(1)
            shoot.delete()
        }
    }
})
input.onButtonPressed(Button.B, function () {
    player.move(1)
})
let _9: game.LedSprite = null
let _8: game.LedSprite = null
let _7: game.LedSprite = null
let shoot: game.LedSprite = null
let _6: game.LedSprite = null
let _5: game.LedSprite = null
let _4: game.LedSprite = null
let _3: game.LedSprite = null
let _2: game.LedSprite = null
let _1: game.LedSprite = null
let player: game.LedSprite = null
player = game.createSprite(2, 4)
_1 = game.createSprite(1, 1)
_2 = game.createSprite(2, 1)
_3 = game.createSprite(3, 1)
_4 = game.createSprite(1, 0)
_5 = game.createSprite(2, 0)
_6 = game.createSprite(3, 0)
basic.forever(function () {
    if (_3.isDeleted()) {
        if (_3.isTouching(player)) {
            player.delete()
            game.gameOver()
        }
    }
})
basic.forever(function () {
    if (_2.isDeleted()) {
        if (_2.isTouching(player)) {
            player.delete()
            game.gameOver()
        }
    }
})
basic.forever(function () {
    if (_1.isDeleted()) {
        if (_1.isTouching(player)) {
            player.delete()
            game.gameOver()
        }
    }
})
basic.forever(function () {
    if (_4.isDeleted()) {
        if (_4.isTouching(player)) {
            player.delete()
            game.gameOver()
        }
    }
})
basic.forever(function () {
    if (_5.isDeleted()) {
        if (_5.isTouching(player)) {
            player.delete()
            game.gameOver()
        }
    }
})
basic.forever(function () {
    if (_6.isDeleted()) {
        if (_6.isTouching(player)) {
            player.delete()
            game.gameOver()
        }
    }
})
basic.forever(function () {
    if (_1.isDeleted()) {
        basic.pause(9999999999)
    } else {
        for (let index = 0; index < 1; index++) {
            _1.change(LedSpriteProperty.X, 1)
            basic.pause(500)
        }
        for (let index = 0; index < 2; index++) {
            _1.change(LedSpriteProperty.X, -1)
            basic.pause(500)
        }
        for (let index = 0; index < 1; index++) {
            _1.change(LedSpriteProperty.X, 1)
            basic.pause(500)
        }
    }
})
basic.forever(function () {
    if (_2.isDeleted()) {
        basic.pause(9999999999)
    } else {
        for (let index = 0; index < 1; index++) {
            _2.change(LedSpriteProperty.X, 1)
            basic.pause(500)
        }
        for (let index = 0; index < 2; index++) {
            _2.change(LedSpriteProperty.X, -1)
            basic.pause(500)
        }
        for (let index = 0; index < 1; index++) {
            _2.change(LedSpriteProperty.X, 1)
            basic.pause(500)
        }
    }
})
basic.forever(function () {
    if (_3.isDeleted()) {
        basic.pause(9999999999)
    } else {
        for (let index = 0; index < 1; index++) {
            _3.change(LedSpriteProperty.X, 1)
            basic.pause(500)
        }
        for (let index = 0; index < 2; index++) {
            _3.change(LedSpriteProperty.X, -1)
            basic.pause(500)
        }
        for (let index = 0; index < 1; index++) {
            _3.change(LedSpriteProperty.X, 1)
            basic.pause(500)
        }
    }
})
basic.forever(function () {
    if (_4.isDeleted()) {
        basic.pause(9999999999)
    } else {
        for (let index = 0; index < 1; index++) {
            _4.change(LedSpriteProperty.X, 1)
            basic.pause(500)
        }
        for (let index = 0; index < 2; index++) {
            _4.change(LedSpriteProperty.X, -1)
            basic.pause(500)
        }
        for (let index = 0; index < 1; index++) {
            _4.change(LedSpriteProperty.X, 1)
            basic.pause(500)
        }
    }
})
basic.forever(function () {
    if (_5.isDeleted()) {
        basic.pause(9999999999)
    } else {
        for (let index = 0; index < 1; index++) {
            _5.change(LedSpriteProperty.X, 1)
            basic.pause(500)
        }
        for (let index = 0; index < 2; index++) {
            _5.change(LedSpriteProperty.X, -1)
            basic.pause(500)
        }
        for (let index = 0; index < 1; index++) {
            _5.change(LedSpriteProperty.X, 1)
            basic.pause(500)
        }
    }
})
basic.forever(function () {
    if (_6.isDeleted()) {
        basic.pause(9999999999)
    } else {
        for (let index = 0; index < 1; index++) {
            _6.change(LedSpriteProperty.X, 1)
            basic.pause(500)
        }
        for (let index = 0; index < 2; index++) {
            _6.change(LedSpriteProperty.X, -1)
            basic.pause(500)
        }
        for (let index = 0; index < 1; index++) {
            _6.change(LedSpriteProperty.X, 1)
            basic.pause(500)
        }
    }
})
basic.forever(function () {
    basic.pause(3500)
    if (_1.isDeleted()) {
        basic.pause(9999999999)
    } else {
        _1.change(LedSpriteProperty.Y, 1)
    }
    basic.pause(9999999999)
})
basic.forever(function () {
    basic.pause(3500)
    if (_2.isDeleted()) {
        basic.pause(9999999999)
    } else {
        _2.change(LedSpriteProperty.Y, 1)
    }
    basic.pause(9999999999)
})
basic.forever(function () {
    basic.pause(3500)
    if (_3.isDeleted()) {
        basic.pause(9999999999)
    } else {
        _3.change(LedSpriteProperty.Y, 1)
    }
    basic.pause(9999999999)
})
basic.forever(function () {
    basic.pause(3500)
    if (_4.isDeleted()) {
        basic.pause(9999999999)
    } else {
        _4.change(LedSpriteProperty.Y, 1)
    }
    basic.pause(9999999999)
})
basic.forever(function () {
    basic.pause(3500)
    if (_5.isDeleted()) {
        basic.pause(9999999999)
    } else {
        _5.change(LedSpriteProperty.Y, 1)
    }
    basic.pause(9999999999)
})
basic.forever(function () {
    basic.pause(3500)
    _7 = game.createSprite(1, 0)
    _8 = game.createSprite(2, 0)
    _9 = game.createSprite(3, 0)
    if (_7.isTouching(player) || (_8.isTouching(player) || _9.isTouching(player))) {
        player.delete()
        game.gameOver()
    }
})
basic.forever(function () {
    basic.pause(3500)
    if (_6.isDeleted()) {
        basic.pause(9999999999)
    } else {
        _6.change(LedSpriteProperty.Y, 1)
    }
    basic.pause(9999999999)
})
