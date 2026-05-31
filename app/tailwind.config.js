/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // ----- Color System -----
      colors: {
        brand: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          950: '#2e1065',
        },
        slate: {
          850: '#1e1b2e',
        },
      },

      // ----- Typography -----
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Monaco', 'Cascadia Code', 'monospace'],
        display: ['Syne', 'Inter', 'system-ui', 'sans-serif'],
      },

      // ----- Animation System -----
      animation: {
        // Base animations
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        
        // Glow effects
        'glow': 'glow 2s ease-in-out infinite alternate',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'glow-fast': 'glowPulse 1.5s ease-in-out infinite',
        
        // Float animations
        'float': 'float 6s ease-in-out infinite',
        'float-fast': 'float 3s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        
        // Shimmer effects
        'shimmer': 'shimmer 2s infinite',
        'shimmer-fast': 'shimmer 1s infinite',
        'shimmer-slow': 'shimmer 3s infinite',
        
        // Text animations
        'text-reveal': 'textReveal 0.6s ease-out forwards',
        'text-reveal-fast': 'textReveal 0.3s ease-out forwards',
        'text-reveal-slow': 'textReveal 0.9s ease-out forwards',
        
        // Slide animations
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'slide-down': 'slideDown 0.5s ease-out forwards',
        'slide-left': 'slideLeft 0.5s ease-out forwards',
        'slide-right': 'slideRight 0.5s ease-out forwards',
        
        // Fade animations
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.6s ease-out forwards',
        
        // Scale animations
        'scale-in': 'scaleIn 0.4s ease-out forwards',
        'scale-pulse': 'scalePulse 2s ease-in-out infinite',
        
        // Other effects
        'scan': 'scan 8s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
        'bounce-slow': 'bounce 2s ease-in-out infinite',
        'ripple': 'ripple 0.6s ease-out forwards',
      },

      // ----- Keyframes -----
      keyframes: {
        // Glow animations
        glow: {
          '0%': { 
            boxShadow: '0 0 5px rgba(124, 58, 237, 0.3), 0 0 10px rgba(124, 58, 237, 0.2)' 
          },
          '100%': { 
            boxShadow: '0 0 20px rgba(124, 58, 237, 0.5), 0 0 30px rgba(124, 58, 237, 0.3)' 
          },
        },
        glowPulse: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(124, 58, 237, 0.3)' 
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(124, 58, 237, 0.6)' 
          },
        },

        // Float animations
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },

        // Shimmer animation
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },

        // Text reveal animation
        textReveal: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },

        // Slide animations
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },

        // Fade animations
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },

        // Scale animations
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        scalePulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },

        // Scan effect
        scan: {
          '0%, 100%': { opacity: '0.3', transform: 'translateX(-100%)' },
          '50%': { opacity: '0.6', transform: 'translateX(100%)' },
        },

        // Ripple effect
        ripple: {
          '0%': { transform: 'scale(0)', opacity: '0.5' },
          '100%': { transform: 'scale(4)', opacity: '0' },
        },
      },

      // ----- Background Images -----
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'grid-pattern': 'linear-gradient(rgba(124, 58, 237, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(124, 58, 237, 0.03) 1px, transparent 1px)',
        'grid-pattern-dark': 'linear-gradient(rgba(124, 58, 237, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(124, 58, 237, 0.06) 1px, transparent 1px)',
        'dots-pattern': 'radial-gradient(rgba(124, 58, 237, 0.1) 1px, transparent 1px)',
      },

      // ----- Background Size -----
      backgroundSize: {
        'grid': '48px 48px',
        'grid-sm': '24px 24px',
        'grid-lg': '64px 64px',
        'dots': '16px 16px',
        'dots-lg': '32px 32px',
      },

      // ----- Spacing Extensions -----
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },

      // ----- Border Radius Extensions -----
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },

      // ----- Blur Extensions -----
      blur: {
        'xs': '2px',
        '2xl': '40px',
        '3xl': '60px',
      },

      // ----- Transition Timing Functions -----
      transitionTimingFunction: {
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },

      // ----- Transition Duration Extensions -----
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
      },

      // ----- Box Shadow Extensions -----
      boxShadow: {
        'glow-sm': '0 0 10px rgba(124, 58, 237, 0.3)',
        'glow-md': '0 0 20px rgba(124, 58, 237, 0.4)',
        'glow-lg': '0 0 40px rgba(124, 58, 237, 0.5)',
        'glow-xl': '0 0 60px rgba(124, 58, 237, 0.6)',
        'inner-glow': 'inset 0 0 20px rgba(124, 58, 237, 0.1)',
      },

      // ----- Z-Index Extensions -----
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [],
}