def on_button_pressed_a():
    player.move(-1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global shoot
    shoot = game.create_sprite(player.get(LedSpriteProperty.X),
        player.get(LedSpriteProperty.Y))
    for index in range(4):
        shoot.change(LedSpriteProperty.Y, -1)
        basic.pause(10)
        if _1.is_touching(shoot):
            _1.delete()
            game.add_score(1)
            shoot.delete()
        if _2.is_touching(shoot):
            _2.delete()
            game.add_score(1)
            shoot.delete()
        if _3.is_touching(shoot):
            _3.delete()
            game.add_score(1)
            shoot.delete()
        if _4.is_touching(shoot):
            _4.delete()
            game.add_score(1)
            shoot.delete()
        if _5.is_touching(shoot):
            _5.delete()
            game.add_score(1)
            shoot.delete()
        if _6.is_touching(shoot):
            _6.delete()
            game.add_score(1)
            shoot.delete()
        if _7.is_touching(shoot):
            _7.delete()
            game.add_score(1)
            shoot.delete()
        if _8.is_touching(shoot):
            _8.delete()
            game.add_score(1)
            shoot.delete()
        if _9.is_touching(shoot):
            _9.delete()
            game.add_score(1)
            shoot.delete()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    player.move(1)
input.on_button_pressed(Button.B, on_button_pressed_b)

_9: game.LedSprite = None
_8: game.LedSprite = None
_7: game.LedSprite = None
shoot: game.LedSprite = None
_6: game.LedSprite = None
_5: game.LedSprite = None
_4: game.LedSprite = None
_3: game.LedSprite = None
_2: game.LedSprite = None
_1: game.LedSprite = None
player: game.LedSprite = None
player = game.create_sprite(2, 4)
_1 = game.create_sprite(1, 1)
_2 = game.create_sprite(2, 1)
_3 = game.create_sprite(3, 1)
_4 = game.create_sprite(1, 0)
_5 = game.create_sprite(2, 0)
_6 = game.create_sprite(3, 0)

def on_forever():
    if _1.is_touching(player) or (_2.is_touching(player) or (_3.is_touching(player) or (_4.is_touching(player) or (_5.is_touching(player) or (_6.is_touching(player) or (_7.is_touching(player) or (_8.is_touching(player) or _9.is_touching(player)))))))):
        player.delete()
        game.game_over()
basic.forever(on_forever)

def on_forever2():
    for index2 in range(1):
        _1.change(LedSpriteProperty.X, 1)
        basic.pause(500)
    for index3 in range(2):
        _1.change(LedSpriteProperty.X, -1)
        basic.pause(500)
    for index4 in range(1):
        _1.change(LedSpriteProperty.X, 1)
        basic.pause(500)
basic.forever(on_forever2)

def on_forever3():
    for index5 in range(1):
        _2.change(LedSpriteProperty.X, 1)
        basic.pause(500)
    for index6 in range(2):
        _2.change(LedSpriteProperty.X, -1)
        basic.pause(500)
    for index7 in range(1):
        _2.change(LedSpriteProperty.X, 1)
        basic.pause(500)
basic.forever(on_forever3)

def on_forever4():
    for index8 in range(1):
        _3.change(LedSpriteProperty.X, 1)
        basic.pause(500)
    for index9 in range(2):
        _3.change(LedSpriteProperty.X, -1)
        basic.pause(500)
    for index10 in range(1):
        _3.change(LedSpriteProperty.X, 1)
        basic.pause(500)
basic.forever(on_forever4)

def on_forever5():
    for index11 in range(1):
        _4.change(LedSpriteProperty.X, 1)
        basic.pause(500)
    for index12 in range(2):
        _4.change(LedSpriteProperty.X, -1)
        basic.pause(500)
    for index13 in range(1):
        _4.change(LedSpriteProperty.X, 1)
        basic.pause(500)
basic.forever(on_forever5)

def on_forever6():
    for index14 in range(1):
        _5.change(LedSpriteProperty.X, 1)
        basic.pause(500)
    for index15 in range(2):
        _5.change(LedSpriteProperty.X, -1)
        basic.pause(500)
    for index16 in range(1):
        _5.change(LedSpriteProperty.X, 1)
        basic.pause(500)
basic.forever(on_forever6)

def on_forever7():
    for index17 in range(1):
        _6.change(LedSpriteProperty.X, 1)
        basic.pause(500)
    for index18 in range(2):
        _6.change(LedSpriteProperty.X, -1)
        basic.pause(500)
    for index19 in range(1):
        _6.change(LedSpriteProperty.X, 1)
        basic.pause(500)
basic.forever(on_forever7)

def on_forever8():
    global _7, _8, _9
    basic.pause(3500)
    _1.change(LedSpriteProperty.Y, 1)
    _2.change(LedSpriteProperty.Y, 1)
    _3.change(LedSpriteProperty.Y, 1)
    _4.change(LedSpriteProperty.Y, 1)
    _5.change(LedSpriteProperty.Y, 1)
    _6.change(LedSpriteProperty.Y, 1)
    _7 = game.create_sprite(1, 0)
    _8 = game.create_sprite(2, 0)
    _9 = game.create_sprite(3, 0)
    basic.pause(9999999999999999999999999999999999)
basic.forever(on_forever8)

def on_forever9():
    basic.pause(7000)
    _1.change(LedSpriteProperty.Y, 1)
    _2.change(LedSpriteProperty.Y, 1)
    _3.change(LedSpriteProperty.Y, 1)
    _4.change(LedSpriteProperty.Y, 1)
    _5.change(LedSpriteProperty.Y, 1)
    _6.change(LedSpriteProperty.Y, 1)
    _7.change(LedSpriteProperty.Y, 1)
    _8.change(LedSpriteProperty.Y, 1)
    _9.change(LedSpriteProperty.Y, 1)
    basic.pause(9999999999999999999999999999999999)
basic.forever(on_forever9)

def on_forever10():
    basic.pause(10500)
    _1.change(LedSpriteProperty.Y, 1)
    _2.change(LedSpriteProperty.Y, 1)
    _3.change(LedSpriteProperty.Y, 1)
    _4.change(LedSpriteProperty.Y, 1)
    _5.change(LedSpriteProperty.Y, 1)
    _6.change(LedSpriteProperty.Y, 1)
    _7.change(LedSpriteProperty.Y, 1)
    _8.change(LedSpriteProperty.Y, 1)
    _9.change(LedSpriteProperty.Y, 1)
    basic.pause(9999999999999999999999999999999999)
basic.forever(on_forever10)
