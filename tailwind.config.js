module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    customForms: theme => ({
    default: {
      input: {
        borderRadius: theme('borderRadius.lg'),
        backgroundColor: theme('colors.gray.200'),
        '&:focus': {
          backgroundColor: theme('colors.white'),
          }
      },
      select: {
        borderRadius: theme('borderRadius.lg'),
        boxShadow: theme('boxShadow.default'),
      },
      checkbox: {
        width: theme('spacing.6'),
        height: theme('spacing.6'),
      },
      },
      dark: {
        'input, textarea, multiselect, checkbox, radio': {
          backgroundColor: theme('colors.green.700'),
        },
        select: {
          backgroundColor: theme('colors.green.700'),
        },
      }
    })
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/custom-forms'),
  ],
}
