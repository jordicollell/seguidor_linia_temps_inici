let inici = 0
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.pause(2000)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    inici = 1
})
basic.forever(function () {
    if (inici == 1) {
        if (cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line)) {
            cuteBot.motors(50, 25)
        }
        if (cuteBot.tracking(cuteBot.TrackingState.L_line_R_unline)) {
            cuteBot.motors(25, 50)
        }
        if (cuteBot.tracking(cuteBot.TrackingState.L_R_line)) {
            cuteBot.motors(50, 50)
        }
    }
})
