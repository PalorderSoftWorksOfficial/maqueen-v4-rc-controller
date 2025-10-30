input.onLogoEvent(TouchButtonEvent.Touched, function () {
    radio.sendString("stop")
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("left")
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString("backwards")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("forward")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("right")
})
radio.setGroup(1)
basic.forever(function () {
    if (control.deviceSerialNumber() % 2 == 0) {
        radio.setGroup(1)
    } else {
        radio.setGroup(1)
        radio.onReceivedString(function (name) {
        basic.showString(name)
    })
    }
})
