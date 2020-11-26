module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        orange: 'var(--color-orange)',
        green: 'var(--color-green)',
        blue: 'var(--color-blue)',
        white: 'var(--color-white)'
      }
    }
  },
  variants: {},
  plugins: [],
}
