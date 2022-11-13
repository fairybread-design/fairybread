module.exports = {
  color: {
    text: {
      default: {
        value: '{palette.neutrals.6}',
      },
      subtle: {
        value: '{palette.neutrals.11}',
      },
      disabled: {
        value: '{palette.neutrals.13}',
      },
      placeholder: {
        value: '{palette.neutrals.15}',
      },
      link: {
        default: {
          value: '{palette.blueDarkMode.2}',
        },
        hovered: {
          value: '{palette.blueDarkMode.1}',
        },
        pressed: {
          value: '{palette.blueDarkMode.0}',
        },
      },
      brand: {
        default: {
          value: '{palette.blueDarkMode.4}',
        },
        hovered: {
          value: '{palette.blueDarkMode.3}',
        },
        pressed: {
          value: '{palette.blueDarkMode.2}',
        },
      },
      accent: {
        default: {
          default: {
            value: '{palette.electricBlue.4}',
          },
        },
        purple: {
          default: {
            value: '{palette.purple}',
          },
        },
        pink: {
          default: {
            value: '{palette.pink}',
          },
        },
      },
      inverse: {
        default: {
          value: '{palette.neutrals.21}',
        },
        // If the text is on an inverse background
        background: {
          value: '{palette.neutrals.5}',
        },
      },
      success: {
        default: {
          value: '{palette.green.6}',
        },
        bold: {
          value: '{palette.green.12}',
        },
      },
      danger: {
        default: {
          value: '{palette.red.3}',
        },
        bold: {
          value: '{palette.red.12}',
        },
      },
      warning: {
        default: {
          value: '{palette.orange.4}',
        },
        bold: {
          value: '{palette.orange.12}',
        },
      },
      information: {
        default: {
          value: '{palette.blue.3}',
        },
        bold: {
          value: '{palette.blue.12}',
        },
      },
    },
    background: {
      brand: {
        default: {
          value: '{palette.blueDarkMode.5}',
        },
        hovered: {
          value: '{palette.blueDarkMode.4}',
        },
        pressed: {
          value: '{palette.blueDarkMode.3}',
        },
      },
      accent: {
        value: '{palette.electricBlue.5}',
      },
      disabled: {
        value: '{palette.neutrals.19}',
      },
      success: {
        default: {
          value: '{palette.green.4}',
        },
        hovered: {
          value: '{palette.green.3}',
        },
        pressed: {
          value: '{palette.green.2}',
        },
      },
      danger: {
        default: {
          value: '{palette.red.3}',
        },
        hovered: {
          value: '{palette.red.2}',
        },
        pressed: {
          value: '{palette.red.1}',
        },
      },
      warning: {
        default: {
          value: '{palette.orange.4}',
        },
        hovered: {
          value: '{palette.orange.3}',
        },
        pressed: {
          value: '{palette.orange.2}',
        },
      },
      information: {
        default: {
          value: '{palette.blue.3}',
        },
        hovered: {
          value: '{palette.blue.2}',
        },
        pressed: {
          value: '{palette.blue.1}',
        },
      },
      input: {
        value: '{palette.neutrals.21}',
      },
      neutral: {
        default: {
          value: '{palette.neutrals.20}',
        },
        hovered: {
          value: '{palette.neutrals.19}',
        },
        pressed: {
          value: '{palette.neutrals.18}',
        },
        bold: {
          default: {
            value: '{palette.neutrals.18}',
          },
          hovered: {
            value: '{palette.neutrals.17}',
          },
          pressed: {
            value: '{palette.neutrals.16}',
          },
        },
      },
    },
    blanket: {
      value: '#222124bf', // based on neutrals.20
    },
    border: {
      default: {
        value: '{palette.neutrals.18}',
      },
      brand: {
        value: '{palette.blueDarkMode.4}',
      },
      disabled: {
        value: '{palette.neutrals.16}',
      },
      hovered: {
        value: '{palette.blueDarkMode.3}',
      },
      accent: {
        default: {
          value: '{palette.electricBlue.5}',
        },
        purple: {
          default: {
            value: '{palette.purple}',
          },
        },
        pink: {
          default: {
            value: '{palette.pink}',
          },
        },
      },
      success: {
        value: '{palette.green.6}',
      },
      danger: {
        value: '{palette.red.3}',
      },
      warning: {
        value: '{palette.orange.6}',
      },
      information: {
        value: '{palette.blue.3}',
      },
    },
    icon: {
      default: {
        value: '{palette.neutrals.14}',
      },
      hovered: {
        value: '{palette.neutrals.12}',
      },
      pressed: {
        value: '{palette.neutrals.11}',
      },
      inverse: {
        default: {
          value: '{palette.neutrals.5}',
        },
        hovered: {
          value: '{palette.neutrals.3}',
        },
        pressed: {
          value: '{palette.neutrals.2}',
        },
      },
      brand: {
        default: {
          value: '{palette.blueDarkMode.4}',
        },
        hovered: {
          value: '{palette.blueDarkMode.3}',
        },
        pressed: {
          value: '{palette.blueDarkMode.2}',
        },
      },
      success: {
        value: '{palette.green.8}',
      },
      danger: {
        value: '{palette.red.6}',
      },
      warning: {
        value: '{palette.orange.7}',
      },
      information: {
        value: '{palette.blue.6}',
      },
    },
    elevation: {
      surface: {
        default: {
          value: '{palette.neutrals.21}',
        },
        raised: {
          default: {
            value: '{palette.neutrals.20}',
          },
          inverse: {
            value: '{palette.neutrals.21}',
          },
        },
      },
      shadow: {
        raised: {
          value: `0 0 1px #cdcdce73, 0 0 8px {palette.darkShadow}`,
        },
        lowered: {
          color: {
            value: '#302f334f',
          },
        },
      },
    },
  },
};
