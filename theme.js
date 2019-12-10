import styled, { css } from "styled-components"
import { pxToEm, pxToPx } from "./src/helpers/utility"

const unit = 10

const settings = {
  unit,
  duration: `0.3s`,
  durationSlow: `3s`,
  breakPoints: [420, 800, 1000, 1280, 1420],
  dimensions: {
    headerHeight: [45, 45, 70, 70, 70, 70],
  },
  sizes: {
    half: unit / 2,
    s1: unit,
    s2: 2 * unit,
    s3: 3 * unit,
    s4: 4 * unit,
    s5: 5 * unit,
    s6: 6 * unit,
    s7: 7 * unit,
    s8: 8 * unit,
    s9: 9 * unit,
    s10: 10 * unit,
    s11: 11 * unit,
    s12: 12 * unit,
    s13: 13 * unit,
    s14: 14 * unit,
    s15: 15 * unit,
  },
}

export const above = {
  s: (...args) =>
    css`
      @media (min-width: ${pxToEm(settings.breakPoints[0])}) {
        // @ts-ignore
        ${css(...args)}
      }
    `,
  m: (...args) =>
    css`
      @media (min-width: ${pxToEm(settings.breakPoints[1])}) {
        // @ts-ignore
        ${css(...args)}
      }
    `,
  l: (...args) =>
    css`
      @media (min-width: ${pxToEm(settings.breakPoints[2])}) {
        // @ts-ignore
        ${css(...args)}
      }
    `,
  xl: (...args) =>
    css`
      @media (min-width: ${pxToEm(settings.breakPoints[3])}) {
        // @ts-ignore
        ${css(...args)}
      }
    `,
  xxl: (...args) =>
    css`
      @media (min-width: ${pxToEm(settings.breakPoints[4])}) {
        // @ts-ignore
        ${css(...args)}
      }
    `,
}

export const theme = {
  colors: {
    palette: {
      green: {
        light: (opacity = 1) => `rgba(128, 203, 180, ${opacity})`,
        dark: (opacity = 1) => `rgba(91, 142, 128, ${opacity})`,
      },
      blue: {
        normal: "#5C748E",
      },
      white: {
        normal: (opacity = 1) => `rgba(255,255,255, ${opacity})`,
      },
    },
  },

  fontFamilies: {
    heading: "'Austin', serif",
    body: "'Avenir', sans-serif",
  },
  fontSizes: {
    xs: pxToEm(11),
    s: pxToEm(13),
    m: pxToEm(18),
    l: pxToEm(23),
    xxl: pxToEm(50),
  },
  unitlessSizes: settings.sizes,
  breakPoints: settings.breakPoints,
  lineHeights: {
    loose: 1.6,
    extraLoose: 1.8,
  },
  radius: pxToEm(settings.sizes.s6),
  sizes: {
    half: pxToEm(settings.sizes.half),
    s1: pxToEm(settings.sizes.s1),
    s2: pxToEm(settings.sizes.s2),
    s3: pxToEm(settings.sizes.s3),
    s4: pxToEm(settings.sizes.s4),
    s5: pxToEm(settings.sizes.s5),
    s6: pxToEm(settings.sizes.s6),
    s7: pxToEm(settings.sizes.s7),
    s8: pxToEm(settings.sizes.s8),
    s9: pxToEm(settings.sizes.s9),
    s10: pxToEm(settings.sizes.s10),
    s11: pxToEm(settings.sizes.s11),
    s12: pxToEm(settings.sizes.s12),
    s13: pxToEm(settings.sizes.s13),
    s14: pxToEm(settings.sizes.s14),
    s15: pxToEm(settings.sizes.s15),
  },
  // transition: (...props) => createTransition(settings.duration, props),
  // transitionSlow: (...props) => createTransition(settings.durationSlow, props),
  spacings: {
    extra: pxToPx(3),
    large: pxToPx(1.5),
    medium: pxToPx(1),
  },
  zIndices: {
    verticalNavigation: 999,
    whiteSection: 1000,
    header: 1001,
    // override messenger
    navigation: 2147483647,
    hamburger: 2147483648,
    modal: 2147483649,
  },
}
