input.onButtonPressed(Button.A, function () {
    radio.sendString("left")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("forward")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("right")
})
radio.setGroup(0)
