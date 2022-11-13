const componentSizes = {
  sm: 32, // Small button height
  md: 48, // Button height
  lg: 56, // Input height
};

module.exports = {
  size: {
    borderRadius: {
      value: 8,
      attributes: {
        type: 'px',
      },
    },
    borderWidth: {
      value: 1,
      attributes: {
        type: 'px',
      },
    },
    button: {
      height: {
        default: {
          value: componentSizes.md,
          attributes: {
            type: 'px',
          },
        },
        sm: {
          value: componentSizes.sm,
          attributes: {
            type: 'px',
          },
        },
      },
    },
    input: {
      height: {
        default: {
          value: componentSizes.lg,
          attributes: {
            type: 'px',
          },
        },
      },
      paddingInline: {
        value: 16,
        attributes: {
          type: 'px',
        },
      },
      paddingTop: {
        value: 24,
        attributes: {
          type: 'px',
        },
      },
      paddingBottom: {
        value: 10,
        attributes: {
          type: 'px',
        },
      },
    },
    icon: {
      xs: {
        value: 15,
        attributes: {
          type: 'px',
        },
      },
      sm: {
        value: 17,
        attributes: {
          type: 'px',
        },
      },
      md: {
        value: 20,
        attributes: {
          type: 'px',
        },
      },
      lg: {
        value: 32,
        attributes: {
          type: 'px',
        },
      },
      xl: {
        value: 64,
        attributes: {
          type: 'px',
        },
      },
    },
  },
};
