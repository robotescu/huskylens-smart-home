basic.showIcon(IconNames.Heart)
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_FACE_RECOGNITION)
let strip = neopixel.create(DigitalPin.P1, 1, NeoPixelMode.RGB)
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    huskylens.request()
    if (huskylens.isAppear_s(HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
            basic.showIcon(IconNames.Happy)
            music.play(music.tonePlayable(698, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            strip.showColor(neopixel.colors(NeoPixelColors.Green))
            strip.show()
            basic.pause(2000)
            strip.showColor(neopixel.colors(NeoPixelColors.Black))
            strip.clear()
        } else {
            basic.showIcon(IconNames.Sad)
            music.play(music.tonePlayable(196, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            strip.showColor(neopixel.colors(NeoPixelColors.Red))
            strip.show()
            basic.pause(2000)
            strip.showColor(neopixel.colors(NeoPixelColors.Black))
            strip.clear()
        }
    }
    basic.pause(1000)
})
