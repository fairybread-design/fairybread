module.exports = {
  palette: {
    // Color scheme
    electricBlue: {
      0: { value: '#eee8ff' },
      1: { value: '#d1c0ff' },
      2: { value: '#b498ff' },
      3: { value: '#9770ff' },
      4: { value: '#7947ff' },
      5: { value: '#4200fe' }, // Primary color - AKA Electric Ultramarine (Blue)
      6: { value: '#3b00e1' },
      7: { value: '#3300c4' },
      8: { value: '#2c00a7' },
      9: { value: '#24008a' },
      10: { value: '#1d006d' },
      11: { value: '#150050' },
      12: { value: '#0e0033' },
    },

    // Only to be used for contrast in dark mode
    blueDarkMode: {
      0: { value: '#e8f2ff' },
      1: { value: '#c7dfff' },
      2: { value: '#a5ccff' },
      3: { value: '#83baff' },
      4: { value: '#61a7ff' },
      5: { value: '#1f7dff' }, // Primary color
      6: { value: '#0e67e2' },
      7: { value: '#0a58c5' },
      8: { value: '#074aa8' },
      9: { value: '#043c8a' },
      10: { value: '#022f6d' },
      11: { value: '#012250' },
      12: { value: '#001533' },
    },

    // These neutrals are based off of blue #4200FE
    neutrals: {
      0: { value: '#ffffff' },
      1: { value: '#f9f9f9' },
      2: { value: '#f3f3f3' },
      3: { value: '#edeced' },
      4: { value: '#e6e6e7' },
      5: { value: '#dadadb' },
      6: { value: '#cdcdce' },
      7: { value: '#c1c0c2' },
      8: { value: '#b4b3b6' },
      9: { value: '#a7a6aa' },
      10: { value: '#9b9a9e' },
      11: { value: '#8e8d92' },
      12: { value: '#818086' },
      // 4.5:1 ⬇️ on white
      13: { value: '#757379' },
      // 4.5:1 ⬆️ on black
      14: { value: '#69676d' },
      15: { value: '#5d5b61' },
      16: { value: '#514f55' },
      17: { value: '#454349' },
      18: { value: '#39383d' },
      19: { value: '#2e2d31' },
      20: { value: '#222124' },
      21: { value: '#171618' },
      22: { value: '#0b0b0c' },
      23: { value: '#000000' },
    },

    // Accent colors
    // TODO: Should these have palettes generated using colorbox.io?
    purple: { value: '#B70CE8' },
    pink: { value: '#ff0078' },
    lightBlue: { value: '#0DBEFF' },

    electricBlueToLightBlueGradient: {
      0: { value: '#1F7DFF' },
      1: { value: '#303FFE' },
    },

    // Semantic colors
    green: {
      0: { value: '#e8fff4' },
      1: { value: '#baf5d8' },
      2: { value: '#8eebbe' },
      3: { value: '#67e0a6' },
      4: { value: '#43d68f' },
      5: { value: '#0ac269' },
      6: { value: '#00ad5a' },
      7: { value: '#00994f' },
      8: { value: '#008545' },
      9: { value: '#00703a' },
      10: { value: '#005c2f' },
      11: { value: '#004725' },
      12: { value: '#00331a' },
    },
    red: {
      0: { value: '#ffe8ea' },
      1: { value: '#f5babe' },
      2: { value: '#eb8e94' },
      3: { value: '#e0676f' },
      4: { value: '#d6434d' },
      5: { value: '#c20a16' },
      6: { value: '#ad000c' },
      7: { value: '#99000a' },
      8: { value: '#850009' },
      9: { value: '#700007' },
      10: { value: '#5c0006' },
      11: { value: '#470005' },
      12: { value: '#330003' },
    },
    blue: {
      0: { value: '#e8f1ff' },
      1: { value: '#bad0f5' },
      2: { value: '#8eb2eb' },
      3: { value: '#6796e0' },
      4: { value: '#437bd6' },
      5: { value: '#0a50c2' },
      6: { value: '#0042ad' },
      7: { value: '#003b99' },
      8: { value: '#003385' },
      9: { value: '#002b70' },
      10: { value: '#00235c' },
      11: { value: '#001b47' },
      12: { value: '#001433' },
    },
    orange: {
      0: { value: '#fff1e8' },
      1: { value: '#f5d0ba' },
      2: { value: '#ebb28e' },
      3: { value: '#e09667' },
      4: { value: '#d67c43' },
      5: { value: '#c2520a' },
      6: { value: '#ad4400' },
      7: { value: '#993d00' },
      8: { value: '#853500' },
      9: { value: '#702d00' },
      10: { value: '#5c2500' },
      11: { value: '#471d00' },
      12: { value: '#331400' },
    },

    // TODO
    lightShadow: {
      value: '#17161838',
    },
    darkShadow: {
      value: '#cdcdce21',
    },
  },
};
