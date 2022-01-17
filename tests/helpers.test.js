import {
    parseName,
    stringToColour,
    adjust,
    getContrastYIQ,
    RGB
} from '../server/helper/helper'

describe('helpers functions', () => {

    test('parseName function returns upper case of the given parameters first and last words initials', () => {
        expect(parseName('hakan karabay')).toBe('HK')
        expect(parseName('haLil hKan kRBY')).toBe('HK')
        expect(parseName('atölye 15')).toBe('A1')
        expect(parseName('HEPSİ BÜYÜK HARFLER İÇERİYOR')).toBe('Hİ')
        expect(parseName('ülker çikolatalı gofret')).toBe('ÜG')
    })

    test('stringToColour function returns the hex code string by the given parameter | [Non-case sensitive]', () => {
        expect(stringToColour('halil hakan karabay')).toContainEqual('#')

        const halil_hakan_karabay_hex_color = stringToColour('halil hakan karabay')
        expect(halil_hakan_karabay_hex_color).toBe('#6a27fd')

        expect(stringToColour('HALİL HAKAN karABay')).toBe(halil_hakan_karabay_hex_color)
        expect(stringToColour('halil hakaN karABay')).toBe(halil_hakan_karabay_hex_color)
        expect(stringToColour('hAlİL hakan KARABAY')).toBe(halil_hakan_karabay_hex_color)
    })

    test('getContrastYIQ function returns hex code of black or white according to given hex code', () => {
        const halil_hakan_karabay_hex_color = stringToColour('halil hakan karabay')

        const white = '#ffffff'
        const black = '#000000'

        expect(getContrastYIQ(halil_hakan_karabay_hex_color)).toBe('#ffffff')
        expect(getContrastYIQ(black)).toBe(white)
        expect(getContrastYIQ(white)).toBe(black)
    })

    test('RGB function returns 3 element array containing R G B of the given hex code (not contains #)', () => {
        const colors = {
            blackRgb: [0, 0, 0],
            whiteRgb: [255, 255, 255],
            lightRedRgb: [255, 50, 67],
            blackHex: '000000',
            whiteHex: 'ffffff',
            lightRedHex: 'FF3243',
        }

        expect(RGB(colors.blackHex)).toStrictEqual(colors.blackRgb)
        expect(RGB(colors.whiteHex)).toStrictEqual(colors.whiteRgb)
        expect(RGB(colors.lightRedHex)).toStrictEqual(colors.lightRedRgb)
    })

    test('Adjust function returns the lighter or darker version of the color given as hex code according to second number on the parameter (+ lighter , - darker)', () => {
        const colors = {
            blackHex: '000000',
            whiteHex: 'ffffff',
            lightRedHex: 'FF3243',
        }

        expect(adjust(colors.blackHex, -10)).toBe("#" + colors.blackHex)

    })



})