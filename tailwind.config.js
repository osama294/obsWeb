/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',

      },
      colors: {
        obsYellow: '#FFD400',
        obsBlack: '#000000',
        obsGrey: '#625E5E50',
        obsLightGrey: '#F9F9F9',

      },

      animation: {
        'text-slide-2': 'text-slide-2 5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
        'text-slide-3': 'text-slide-3 7.5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
        'text-slide-4': 'text-slide-4 10s cubic-bezier(0.83, 0, 0.17, 1) infinite',
        'text-slide-5': 'text-slide-5 12.5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
        'text-slide-6': 'text-slide-6 7.3s cubic-bezier(0.83, 0, 0.17, 1) infinite',
        'text-slide-7': 'text-slide-7 7.3s cubic-bezier(0.83, 0, 0.17, 1) infinite',
        'text-slide-8': 'text-slide-8 7.3s cubic-bezier(0.83, 0, 0.17, 1) infinite',
      },

      keyframes: {
        'text-slide-2': {
          '0%, 40%': {
            transform: 'translateY(0%)',
          },
          '50%, 90%': {
            transform: 'translateY(-33.33%)',
          },
          '100%': {
            transform: 'translateY(-66.66%)',
          },
        },
        'text-slide-3': {
          '0%, 26.66%': {
            transform: 'translateY(0%)',
          },
          '33.33%, 60%': {
            transform: 'translateY(-25%)',
          },
          '66.66%, 93.33%': {
            transform: 'translateY(-50%)',
          },
          '100%': {
            transform: 'translateY(-75%)',
          },
        },
        'text-slide-4': {
          '0%, 20%': {
            transform: 'translateY(0%)',
          },
          '25%, 45%': {
            transform: 'translateY(-20%)',
          },
          '50%, 70%': {
            transform: 'translateY(-40%)',
          },
          '75%, 95%': {
            transform: 'translateY(-60%)',
          },
          '100%': {
            transform: 'translateY(-80%)',
          },
        },
        'text-slide-5': {
          '0%, 16%': {
            transform: 'translateY(0%)',
          },
          '20%, 36%': {
            transform: 'translateY(-16.66%)',
          },
          '40%, 56%': {
            transform: 'translateY(-33.33%)',
          },
          '60%, 76%': {
            transform: 'translateY(-50%)',
          },
          '80%, 96%': {
            transform: 'translateY(-66.66%)',
          },
          '100%': {
            transform: 'translateY(-83.33%)',
          },
        },
        'text-slide-6': {
          '0%, 30%': {
            transform: 'translateY(0%)',
          },
          '33.33%, 63.33%': {
            transform: 'translateY(-33.00%)',
          },
          '66.66%, 96.66%': {
            transform: 'translateY(-66.42%)',
          },
          '100%': {
            transform: 'translateY(0%)',
          },
          // '66.66%, 80%': {
          //   transform: 'translateY(-57.14%)',
          // },
          // '33.33%, 96.66%': {
          //   transform: 'translateY(-66.42%)',
          // },
          // '100%': {
          //   transform: 'translateY(0%)',
          // },
        },
        'text-slide-7': {
          '0%, 30%': {
            transform: 'translateY(0%)',
          },
          '33.33%, 63.33%': {
            transform: 'translateY(-33.00%)',
          },
          '66.66%, 96.66%': {
            transform: 'translateY(-66.42%)',
          },
          '100%': {
            transform: 'translateY(0%)',
          },
        },

        'text-slide-8': {
          '0%, 30%': {
            transform: 'translateY(0%)',
          },
          '32.33%, 63.33%': {
            transform: 'translateY(-33.00%)',
          },
          '66.66%, 96.66%': {
            transform: 'translateY(-66.42%)',
          },
          '100%': {
            transform: 'translateY(0%)',
          },
        },
      },



    },
  },
  plugins: [],
}
