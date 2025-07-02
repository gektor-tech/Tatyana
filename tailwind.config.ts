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
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Новая оливково-зеленая палитра
				'olive-light': '#E0F3D7',
				'olive-medium': '#C7D6B5', 
				'olive-soft': '#B5CCA9',
				'olive-accent': '#93A98C'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			spacing: {
				'18': '4.5rem',
				'22': '5.5rem',
				'26': '6.5rem',
				'30': '7.5rem',
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
						transform: 'translateY(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(40px) scale(0.95)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0) scale(1)'
					}
				},
				'gentle-glow': {
					'0%, 100%': {
						boxShadow: '0 0 40px rgba(181, 204, 169, 0.15), 0 0 80px rgba(181, 204, 169, 0.08)'
					},
					'50%': {
						boxShadow: '0 0 60px rgba(181, 204, 169, 0.25), 0 0 120px rgba(181, 204, 169, 0.15)'
					}
				},
				'gentle-float': {
					'0%, 100%': {
						transform: 'translateY(0px) rotate(0deg)'
					},
					'25%': {
						transform: 'translateY(-8px) rotate(0.5deg)'
					},
					'50%': {
						transform: 'translateY(-12px) rotate(0deg)'
					},
					'75%': {
						transform: 'translateY(-6px) rotate(-0.5deg)'
					}
				},
				'soft-bounce': {
					'0%, 100%': {
						transform: 'translateY(0px) scale(1)'
					},
					'50%': {
						transform: 'translateY(-5px) scale(1.02)'
					}
				},
				'breathing-glow': {
					'0%, 100%': {
						boxShadow: '0 0 40px rgba(181, 204, 169, 0.15), 0 0 80px rgba(181, 204, 169, 0.08)'
					},
					'50%': {
						boxShadow: '0 0 60px rgba(181, 204, 169, 0.25), 0 0 120px rgba(181, 204, 169, 0.15)'
					}
				},
				'shimmer': {
					'0%': {
						transform: 'translateX(-100%)'
					},
					'100%': {
						transform: 'translateX(100%)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.8s ease-out',
				'fade-in-up': 'fade-in-up 1.2s ease-out',
				'gentle-glow': 'gentle-glow 4s ease-in-out infinite',
				'gentle-float': 'gentle-float 6s ease-in-out infinite',
				'soft-bounce': 'soft-bounce 3s ease-in-out infinite',
				'breathing-glow': 'breathing-glow 4s ease-in-out infinite',
				'shimmer': 'shimmer 3s ease-in-out infinite'
			},
			boxShadow: {
				'soft': '0 12px 35px rgba(0, 0, 0, 0.06), 0 4px 15px rgba(0, 0, 0, 0.04)',
				'softer': '0 20px 50px rgba(0, 0, 0, 0.04), 0 8px 20px rgba(0, 0, 0, 0.03)',
				'olive': '0 20px 45px rgba(181, 204, 169, 0.12), 0 8px 18px rgba(181, 204, 169, 0.08)',
				'olive-lg': '0 30px 60px rgba(181, 204, 169, 0.18), 0 15px 30px rgba(181, 204, 169, 0.12)',
				'dreamy': '0 35px 80px rgba(181, 204, 169, 0.08), 0 15px 35px rgba(0, 0, 0, 0.03)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
