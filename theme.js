import { extendTheme } from "@chakra-ui/react";
import {mode} from "@chakra-ui/theme-tools"

const config = {
	initialColorMode: 'dark',
	useSystemColorMode: false,
}

const fonts = {
	heading: `'Roboto', sans-serif`,
	custom: "'Permanent Marker', cursive;",
	body: `'Inter', sans-serif;`
}

const styles = {
	global: props => ({
		body: {
			bg: mode("#f0e7db", "#08080A")(props)
		}
	})
}

const components = {
	Heading: {
		variants: {
			'section-title': {
			textDecoration: "underline",
			textDecorationColor: "#2b2b2d",
			textDecorationThickness: 4,
			textUnderlineOffset: 6,
			textDecorationSkipInk: "none",
			fontSize: 20,
			marginBottom: "1em"
			}
		}
	},
	Link: {
		baseStyle: props => ({
			color: mode('#000000', '#FF70C4')(props),
		})
	},
	Box: {
		variants: {
			'responsiveSize': {
				sm: {
					maxW: "550px"
				},
				md: {
					maxW: "700px"
				},
				lg: {
					maxW: "1140px"
				}
			}
		}
	}
}


const theme = extendTheme({ config, fonts, components,styles })

export default theme;