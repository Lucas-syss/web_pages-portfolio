/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#f8f9fa', // Off-white
                secondary: '#e9ecef', // Light gray
                accent: '#3b82f6', // Electric Blue
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Space Grotesk', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
