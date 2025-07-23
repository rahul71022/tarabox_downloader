module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Deep trust blue
        primary: {
          DEFAULT: "#1a365d", // blue-900
          50: "#e6f3ff", // blue-50
          100: "#b3d9ff", // blue-100
          200: "#80bfff", // blue-200
          300: "#4da6ff", // blue-300
          400: "#1a8cff", // blue-400
          500: "#1a365d", // blue-500
          600: "#153052", // blue-600
          700: "#102947", // blue-700
          800: "#0b223c", // blue-800
          900: "#061b31", // blue-900
        },
        
        // Secondary Colors - Sophisticated neutral
        secondary: {
          DEFAULT: "#2d3748", // gray-700
          50: "#f7fafc", // gray-50
          100: "#edf2f7", // gray-100
          200: "#e2e8f0", // gray-200
          300: "#cbd5e0", // gray-300
          400: "#a0aec0", // gray-400
          500: "#718096", // gray-500
          600: "#4a5568", // gray-600
          700: "#2d3748", // gray-700
          800: "#1a202c", // gray-800
          900: "#171923", // gray-900
        },
        
        // Accent Colors - Premium orange
        accent: {
          DEFAULT: "#ed8936", // orange-400
          50: "#fffaf0", // orange-50
          100: "#feebc8", // orange-100
          200: "#fbd38d", // orange-200
          300: "#f6ad55", // orange-300
          400: "#ed8936", // orange-400
          500: "#dd6b20", // orange-500
          600: "#c05621", // orange-600
          700: "#9c4221", // orange-700
          800: "#7b341e", // orange-800
          900: "#652b19", // orange-900
        },
        
        // Background Colors
        background: "#f7fafc", // gray-50
        surface: "#edf2f7", // gray-100
        
        // Text Colors
        text: {
          primary: "#1a202c", // gray-800
          secondary: "#4a5568", // gray-600
        },
        
        // Status Colors
        success: {
          DEFAULT: "#38a169", // green-500
          50: "#f0fff4", // green-50
          100: "#c6f6d5", // green-100
          200: "#9ae6b4", // green-200
          300: "#68d391", // green-300
          400: "#48bb78", // green-400
          500: "#38a169", // green-500
          600: "#2f855a", // green-600
          700: "#276749", // green-700
          800: "#22543d", // green-800
          900: "#1c4532", // green-900
        },
        
        warning: {
          DEFAULT: "#d69e2e", // yellow-500
          50: "#fffff0", // yellow-50
          100: "#fefcbf", // yellow-100
          200: "#faf089", // yellow-200
          300: "#f6e05e", // yellow-300
          400: "#ecc94b", // yellow-400
          500: "#d69e2e", // yellow-500
          600: "#b7791f", // yellow-600
          700: "#975a16", // yellow-700
          800: "#744210", // yellow-800
          900: "#5f370e", // yellow-900
        },
        
        error: {
          DEFAULT: "#e53e3e", // red-500
          50: "#fed7d7", // red-50
          100: "#feb2b2", // red-100
          200: "#fc8181", // red-200
          300: "#f56565", // red-300
          400: "#e53e3e", // red-400
          500: "#c53030", // red-500
          600: "#9b2c2c", // red-600
          700: "#742a2a", // red-700
          800: "#63171b", // red-800
          900: "#521b1b", // red-900
        },
      },
      
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        'full': '9999px',
      },
      
      boxShadow: {
        'soft': '0 4px 6px rgba(0, 0, 0, 0.07)',
        'medium': '0 10px 15px rgba(0, 0, 0, 0.1)',
        'large': '0 25px 50px rgba(0, 0, 0, 0.15)',
      },
      
      transitionDuration: {
        '250': '250ms',
        '400': '400ms',
      },
      
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
      },
      
      animation: {
        'fade-in': 'fadeIn 250ms ease-out',
        'slide-up': 'slideUp 400ms ease-out',
        'progress': 'progress 400ms ease-out',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        progress: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
    },
  },
  plugins: [],
}