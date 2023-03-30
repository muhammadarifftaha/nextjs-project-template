const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    plugin(function ({
      addUtilities,
      matchUtilities,
      addComponents,
      e,
      config,
    }) {
      addUtilities({
        // Define static utilities. e.g. :
        // ".content-auto": {
        //   "content-visibility": "auto",
        // },
        // ".content-hidden": {
        //   "content-visibility": "hidden",
        // },
        // ".content-visible": {
        //   "content-visibility": "visible",
        // },
      });
      // theme: {
      //   tabSize: {
      //     1: '1',
      //     2: '2',
      //     4: '4',
      //     8: '8',
      //   }
      // },
      matchUtilities({
        // Define dynamic user defined utilities in user's "theme configuration".
        // e.g. :
        // tab: (value) => ({
        //     tabSize: value
        //   }),
        // },
        // { values: theme('tabSize') })
        //
        // then use these utilities
      });
    }),
  ],
};
