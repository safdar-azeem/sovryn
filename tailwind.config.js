const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
	darkMode: "class",
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			screens: {
				xs: "490px",
				md: "808px",
			},
			fontFamily: {
				sans: ["Roboto", "sans-serif", ...defaultTheme.fontFamily.sans],
			},
			fontSize: {
				"7xl": "5rem",
			},
			colors: {
				gray: {
					100: "#F7F7F7",
					200: "#eeeff1",
				},
				slate: {
					600: "#595B6A",
					700: "#414353",
					800: "#2e303d",
					900: "#252734",
				},
			},
		},
	},
	plugins: [],
}
