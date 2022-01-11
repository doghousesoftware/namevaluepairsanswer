enum RadioMessage {
    bogus1 = 6130,
    message1 = 49434
}
/**
 * radio.onReceivedValue(function (name, value) {
 * 
 * if (name == "light") {
 * 
 * basic.showIcon(IconNames.Happy)
 * 
 * } else if (name == "dark") {
 * 
 * basic.showIcon(IconNames.Sad)
 * 
 * } else {
 * 
 * basic.showIcon(IconNames.StickFigure)
 * 
 * }
 * 
 * })
 * 
 * basic.showNumber(input.lightLevel())
 */
input.onButtonPressed(Button.A, function () {
    if (input.lightLevel() > 150) {
        radio.sendValue("light", input.lightLevel())
    } else {
        radio.sendValue("dark", input.lightLevel())
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendValue("oscar", 25)
})
radio.onReceivedValue(function (name, value) {
    if (value > 150) {
        basic.showIcon(IconNames.Happy)
    } else if (value == 25) {
        if (name == "oscar") {
            basic.showIcon(IconNames.StickFigure)
        } else {
            basic.showIcon(IconNames.Sad)
        }
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
