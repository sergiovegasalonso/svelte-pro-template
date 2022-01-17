module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Inter var", "sans-serif"],
    },
    colors: {
      lightPrimary: "var(--color-light-primary)",
      lightPrimaryLigth: "var(--color-light-primary-light)",
      lightPrimaryDark: "var(--color-light-primary-dark)",
      lightSecondary: "var(--color-light-secondary)",
      lightSecondaryLigth: "var(--color-light-secondary-light)",
      lightSecondaryDark: "var(--color-light-secondary-dark)",
      darkPrimary: "var(--color-dark-primary)",
      darkPrimaryLigth: "var(--color-dark-primary-light)",
      darkPrimaryDark: "var(--color-dark-primary-dark)",
      darkSecondary: "var(--color-dark-secondary)",
      darkSecondaryLigth: "var(--color-dark-secondary-light)",
      darkSecondaryDark: "var(--color-dark-secondary-dark)",
      white: "var(--color-white)",
      black: "var(--color-black)",
    },
    extend: {},
  },
  plugins: [],
};
