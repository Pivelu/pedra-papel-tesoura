let x = 0
input.onGesture(Gesture.Shake, function () {
    x = randint(0, 2)
    if (x == 0) {
        basic.showIcon(IconNames.Scissors)
    } else if (x == 1) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.SmallSquare)
    }
})
basic.forever(function () {
    music.play(music.stringPlayable("C5 A B F G D E C ", 120), music.PlaybackMode.UntilDone)
})
