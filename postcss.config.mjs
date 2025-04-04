const config = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',   // Reuse the primary color defined in globals.css
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        neutral: 'var(--color-neutral)',
        'base-100': 'var(--color-base-100)',
      },
    },
  },

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: 'var(--color-primary)',  // Referencing custom color variable
          secondary: 'var(--color-secondary)',
          accent: 'var(--color-accent)',
          neutral: 'var(--color-neutral)',
          'base-100': 'var(--color-base-100)',
        },
      },
      'light', // Fallback DaisyUI theme
    ],
  }
};

export default config;
