PacketLib.onReceivePacket(function (pkt) {
    let msg = PacketLib.bufferToString(pkt.payload)
    basic.showString(msg)
})

input.onLogoEvent(TouchButtonEvent.Touched, function () {
    PacketLib.sendPacket(0, PacketLib.stringToBuffer("stop"), "all", PacketLib.PacketFlags.AckRequired)
})

input.onButtonPressed(Button.A, function () {
    PacketLib.sendPacket(0, PacketLib.stringToBuffer("left"), "all", PacketLib.PacketFlags.AckRequired)
})

input.onGesture(Gesture.Shake, function () {
    PacketLib.sendPacket(0, PacketLib.stringToBuffer("backwards"), "all", PacketLib.PacketFlags.AckRequired)
})

input.onButtonPressed(Button.AB, function () {
    PacketLib.sendPacket(0, PacketLib.stringToBuffer("forward"), "all", PacketLib.PacketFlags.AckRequired)
})

input.onButtonPressed(Button.B, function () {
    PacketLib.sendPacket(0, PacketLib.stringToBuffer("right"), "all", PacketLib.PacketFlags.AckRequired)
})
