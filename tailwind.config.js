module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transformStyle: ['responsive'],
      backfaceVisibility: ['responsive'],
    }
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.preserve-3d': {
          'transform-style': 'preserve-3d',
        },
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
        '.perspective-1000': {
          'perspective': '1000px',
        },
        '.rotate-y-180': {
          'transform': 'rotateY(180deg)',
        },
        '.rotate-y-0': {
          'transform': 'rotateY(0deg)',
        }
      };
      addUtilities(newUtilities, ['responsive']);
    },
  ],
};
