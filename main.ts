radio.onReceivedValue(function (name, value) {
    available = value
})
let available = 0
basic.clearScreen()
radio.setGroup(11)
radio.setTransmitPower(7)
basic.forever(function () {
    if (available == 1) {
        basic.showIcon(IconNames.Yes)
        basic.pause(500)
        basic.showIcon(IconNames.Happy)
    } else if (available == 2) {
        basic.showIcon(IconNames.No)
        basic.pause(51)
        basic.showIcon(IconNames.Asleep)
    } else if (available == 3) {
        basic.showIcon(IconNames.No)
        basic.pause(100)
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.No)
        music.playMelody("C5 A B G A F G E ", 120)
        basic.showString("error")
    }
    available = 0
})
