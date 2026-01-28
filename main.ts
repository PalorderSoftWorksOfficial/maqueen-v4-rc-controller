
PacketLib.onReceivePacket(function (pkt) {
    let msg = PacketLib.bufferToString(pkt.payload)
    basic.showString(msg)
})

input.onLogoEvent(TouchButtonEvent.Touched, function () {
    PacketLib.sendPacket(0, pins.fromString("stop"), "all", PacketLib.PacketFlags.AckRequired)
})

input.onButtonPressed(Button.A, function () {
    PacketLib.sendPacket(0, pins.fromString("left"), "all", PacketLib.PacketFlags.AckRequired)
})

input.onGesture(Gesture.Shake, function () {
    PacketLib.sendPacket(0, pins.fromString("backwards"), "all", PacketLib.PacketFlags.AckRequired)
})

input.onButtonPressed(Button.AB, function () {
    PacketLib.sendPacket(0, pins.fromString("forward"), "all", PacketLib.PacketFlags.AckRequired)
})

input.onButtonPressed(Button.B, function () {
    PacketLib.sendPacket(0, pins.fromString("right"), "all", PacketLib.PacketFlags.AckRequired)
})
