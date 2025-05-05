
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				midnight: {
					DEFAULT: '#050505',
					100: '#0a0a0a',
					200: '#111111',
					300: '#1a1a1a',
					400: '#242424',
					foreground: '#ffffff'
				},
				neon: {
					purple: '#BD00FF',
					blue: '#00F0FF',
					pink: '#FF00E5',
					green: '#00FF66'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'glow': {
					'0%, 100%': { 
						textShadow: '0 0 5px rgba(189, 0, 255, 0.6), 0 0 15px rgba(189, 0, 255, 0.4), 0 0 25px rgba(189, 0, 255, 0.2)'
					},
					'50%': { 
						textShadow: '0 0 10px rgba(189, 0, 255, 0.8), 0 0 20px rgba(189, 0, 255, 0.6), 0 0 30px rgba(189, 0, 255, 0.4)'
					}
				},
				'glitch': {
					'0%': { 
						transform: 'translate(0)' 
					},
					'20%': { 
						transform: 'translate(-2px, 2px)' 
					},
					'40%': { 
						transform: 'translate(-2px, -2px)' 
					},
					'60%': { 
						transform: 'translate(2px, 2px)' 
					},
					'80%': { 
						transform: 'translate(2px, -2px)' 
					},
					'100%': { 
						transform: 'translate(0)' 
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'glow': 'glow 2s ease-in-out infinite',
				'glitch': 'glitch 0.5s ease-in-out'
			},
			backgroundImage: {
				'midnight-texture': "url('/lovable-uploads/5429acc4-06d1-4a6d-9259-512fa37a0a40.png')",
				'dark-gradient': 'linear-gradient(to bottom right, #050505, #0a0a0a, #111111)',
				'neon-glow': 'radial-gradient(circle, rgba(189,0,255,0.2) 0%, rgba(0,0,0,0) 70%)'
			},
			boxShadow: {
				'neon': '0 0 5px rgba(189,0,255,0.5), 0 0 10px rgba(189,0,255,0.3)',
				'neon-strong': '0 0 10px rgba(189,0,255,0.7), 0 0 20px rgba(189,0,255,0.5), 0 0 30px rgba(189,0,255,0.3)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
