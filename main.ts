radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == GO) {
        driveForward()
    } else {
        stopBot()
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(GO)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(STOP)
})
function stopBot () {
    Kitronik_Move_Motor.stop()
}
function driveForward () {
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, speed)
}
let speed = 0
let STOP = 0
let GO = 0
radio.setGroup(1)
basic.showIcon(IconNames.SmallSquare)
GO = 1
STOP = 0
speed = 40
