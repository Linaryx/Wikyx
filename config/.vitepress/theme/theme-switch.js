// Волновой эффект при смене темы
export function initThemeWave() {
  // Ждем загрузки DOM
  if (typeof window !== 'undefined') {
    window.addEventListener('load', () => {
      setupThemeWave();
    });
  }
}

function setupThemeWave() {
  // Находим кнопку переключения темы
  const themeToggle = document.querySelector('.VPNavBar .VPNavBarMenu .VPNavBarMenuLink');
  
  if (themeToggle) {
    themeToggle.addEventListener('click', (e) => {
      // Предотвращаем всплытие события
      e.stopPropagation();
      
      // Добавляем эффект пульсации к кнопке
      themeToggle.classList.add('theme-toggle-click');
      
      // Создаем волновой эффект с небольшой задержкой
      setTimeout(() => {
        createThemeWave(e, themeToggle);
      }, 50);
      
      // Убираем класс пульсации через 600ms
      setTimeout(() => {
        themeToggle.classList.remove('theme-toggle-click');
      }, 600);
    });
  }
}

function createThemeWave(event, button) {
  // Получаем позицию кнопки переключения темы
  const rect = button.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  
  // Определяем цвет новой темы
  const isDark = document.documentElement.classList.contains('dark');
  const newThemeColor = isDark ? '#1a1a1a' : '#ffffff';
  
  // Создаем элемент волны
  const wave = document.createElement('div');
  wave.className = 'theme-wave';
  wave.style.position = 'fixed';
  wave.style.left = `${centerX}px`;
  wave.style.top = `${centerY}px`;
  wave.style.transform = 'translate(-50%, -50%) scale(0)';
  wave.style.background = `radial-gradient(circle, ${newThemeColor} 0%, ${newThemeColor} 70%, transparent 100%)`;
  wave.style.pointerEvents = 'none';
  wave.style.zIndex = '9999';
  wave.style.borderRadius = '50%';
  wave.style.width = '100vw';
  wave.style.height = '100vh';
  
  // Добавляем волну на страницу
  document.body.appendChild(wave);
  
  // Удаляем волну после анимации
  setTimeout(() => {
    if (wave.parentNode) {
      wave.parentNode.removeChild(wave);
    }
  }, 1200);
}

// Экспортируем функцию для использования в теме
export default initThemeWave; 