/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary-bg': '#f5f1e8',
                'secondary-bg': '#ffffff',
                'primary-text': '#2d2d2d',
                'secondary-text': '#666666',
                'accent': '#2d2d2d',
                'border': '#e0ddd4',
            },
            fontFamily: {
                'sans': ['"Inter"', '"Noto Sans TC"', 'sans-serif'],
                'display': ['"Space Grotesk"', 'sans-serif'],
            },
            animation: {
                'float': 'float 3s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                glow: {
                    '0%': { textShadow: '0 0 5px #ff6b6b, 0 0 10px #ff6b6b' },
                    '100%': { textShadow: '0 0 10px #ff6b6b, 0 0 20px #ff6b6b, 0 0 30px #ff6b6b' },
                },
            },
        },
    },
    plugins: [],
}
