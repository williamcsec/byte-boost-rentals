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
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))'
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
				gaming: {
					blue: 'hsl(var(--gaming-blue))',
					purple: 'hsl(var(--gaming-purple))',
					pink: 'hsl(var(--gaming-pink))',
					green: 'hsl(var(--gaming-green))',
					orange: 'hsl(var(--gaming-orange))'
				}
			},
			backgroundImage: {
				'gradient-gaming': 'var(--gradient-gaming)',
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-accent': 'var(--gradient-accent)',
				'gradient-card': 'var(--gradient-card)'
			},
			boxShadow: {
				'glow-gaming': 'var(--glow-gaming)',
				'glow-accent': 'var(--glow-accent)',
				'gaming': 'var(--shadow-gaming)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-up-fade': {
					'0%': {
						opacity: '0',
						transform: 'translateY(60px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-down-fade': {
					'0%': {
						opacity: '0',
						transform: 'translateY(-60px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-left-fade': {
					'0%': {
						opacity: '0',
						transform: 'translateX(60px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'slide-right-fade': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-60px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'scale-rotate': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.8) rotate(-5deg)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1) rotate(0deg)'
					}
				},
				'glow-trail': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px)',
						boxShadow: '0 0 0 hsl(var(--gaming-purple) / 0)'
					},
					'50%': {
						boxShadow: '0 0 30px hsl(var(--gaming-purple) / 0.4)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)',
						boxShadow: '0 0 20px hsl(var(--gaming-purple) / 0.2)'
					}
				},
				'number-counter': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.5)'
					},
					'50%': {
						transform: 'scale(1.1)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				'card-flip': {
					'0%': {
						opacity: '0',
						transform: 'perspective(1000px) rotateY(-30deg) translateY(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'perspective(1000px) rotateY(0deg) translateY(0)'
					}
				},
				'glow-pulse': {
					'0%, 100%': {
						boxShadow: '0 0 20px hsl(var(--gaming-purple) / 0.3)'
					},
					'50%': {
						boxShadow: '0 0 40px hsl(var(--gaming-purple) / 0.6)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'particle-float': {
					'0%, 100%': {
						transform: 'translateY(0px) translateX(0px) scale(1)'
					},
					'33%': {
						transform: 'translateY(-20px) translateX(10px) scale(1.1)'
					},
					'66%': {
						transform: 'translateY(-10px) translateX(-10px) scale(0.9)'
					}
				},
				'gradient-shift': {
					'0%, 100%': {
						backgroundPosition: '0% 50%'
					},
					'50%': {
						backgroundPosition: '100% 50%'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-up-fade': 'slide-up-fade 0.8s ease-out',
				'slide-down-fade': 'slide-down-fade 0.8s ease-out',
				'slide-left-fade': 'slide-left-fade 0.8s ease-out',
				'slide-right-fade': 'slide-right-fade 0.8s ease-out',
				'scale-rotate': 'scale-rotate 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)',
				'glow-trail': 'glow-trail 1s ease-out',
				'number-counter': 'number-counter 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
				'card-flip': 'card-flip 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
				'float': 'float 6s ease-in-out infinite',
				'particle-float': 'particle-float 8s ease-in-out infinite',
				'gradient-shift': 'gradient-shift 4s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
