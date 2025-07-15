/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        // Создаем собственный класс 'font-sans' (основной)
        sans: ["Inter", "sans-serif"],
        // Создаем собственный класс 'font-display' (для заголовков)
        display: ["Metropolis", "sans-serif"]
      },
      lineHeight: {
        // Добавляем свое кастомное значение. Назовем его 'exact'.
        exact: "1rem" / "1.4285714285714286rem"
      }
    }
  },
  plugins: []
};
