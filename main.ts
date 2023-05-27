radio.onReceivedValue(function (name, value) {
    availability = value
})
let availability = 0
basic.clearScreen()
radio.setGroup(11)
radio.setTransmitPower(7)
basic.forever(function () {
    if (availability == 1) {
        basic.showIcon(IconNames.Yes)
        basic.pause(500)
        basic.showIcon(IconNames.Happy)
    } else if (availability == 2) {
        basic.showIcon(IconNames.No)
        basic.pause(10)
        basic.showIcon(IconNames.Asleep)
    } else if (availability == 3) {
        basic.showIcon(IconNames.No)
        basic.pause(250)
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.No)
        music.playMelody("C5 A B G A F G E ", 120)
        basic.showString("error")
    }
})
