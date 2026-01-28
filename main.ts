PacketLib.onReceivePacket(function (pkt) {
    let msg = PacketLib.bufferToString(pkt.payload)
    basic.showString(msg)
})

input.onLogoEvent(TouchButtonEvent.Touched, function () {
    PacketLib.sendPacket(1, PacketLib.stringToBuffer("msg: stop"), "all", PacketLib.PacketFlags.AckRequired)
})

input.onButtonPressed(Button.A, function () {
    PacketLib.sendPacket(1, PacketLib.stringToBuffer("msg: left"), "all", PacketLib.PacketFlags.AckRequired)
})

input.onGesture(Gesture.Shake, function () {
    PacketLib.sendPacket(1, PacketLib.stringToBuffer("msg: backwards"), "all", PacketLib.PacketFlags.AckRequired)
})

input.onButtonPressed(Button.AB, function () {
    PacketLib.sendPacket(1, PacketLib.stringToBuffer("msg: forward"), "all", PacketLib.PacketFlags.AckRequired)
})

input.onButtonPressed(Button.B, function () {
    PacketLib.sendPacket(1, PacketLib.stringToBuffer("right"), "all", PacketLib.PacketFlags.AckRequired)
})
