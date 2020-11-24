basic.forever(function () {
    for (let I = 0; I <= 4; I++) {
        led.plot(I, 2)
        led.plot(2, I)
        basic.pause(100)
    }
    for (let I2 = 0; I2 <= 4; I2++) {
        led.unplot(I2, 2)
        led.unplot(2, I2)
        basic.pause(100)
    }
    basic.clearScreen()
})
