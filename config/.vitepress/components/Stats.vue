<template>
  <div ref="statsContainer" class="stats-grid">
    <div class="stat-card">
      <div class="stat-number">{{ followers.toLocaleString() }}</div>
      <div class="stat-label">Подписчиков на Twitch</div>
      <div class="stat-subtitle">@zakvielchannel</div>
    </div>
    <div class="stat-card">
      <div class="stat-number">{{ guidesCount }}</div>
      <div class="stat-label">Гайдов</div>
      <div class="stat-subtitle">Полезные инструкции</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const followers = ref(0) // Начинаем с 0 для анимации
const guidesCount = ref(0) // Начинаем с 0 для анимации
const statsContainer = ref(null)
const isVisible = ref(false)
const hasAnimated = ref(false)

let observer = null

const fetchTwitchData = async () => {
  try {
    const response = await fetch('https://api.ivr.fi/v2/twitch/user?login=zakvielchannel')
    const data = await response.json()
    
    if (data && data.followers) {
      return data.followers
    }
  } catch (error) {
    console.error('Ошибка загрузки данных Twitch:', error)
  }
  return 456335 // Fallback значение
}

const animateCounter = (ref, target, duration = 2000) => {
  const start = 0
  const increment = target / (duration / 16)
  let current = 0
  
  const timer = setInterval(() => {
    current += increment
    if (current >= target) {
      ref.value = target
      clearInterval(timer)
    } else {
      ref.value = Math.floor(current)
    }
  }, 16)
}

const startAnimation = async () => {
  if (hasAnimated.value) return
  
  hasAnimated.value = true
  const twitchFollowers = await fetchTwitchData()
  
  // Анимируем счётчики
  animateCounter(followers, twitchFollowers, 2000)
  setTimeout(() => {
    animateCounter(guidesCount, 1, 1500)
  }, 500)
}

onMounted(() => {
  // Создаём Intersection Observer
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated.value) {
          startAnimation()
        }
      })
    },
    {
      threshold: 0.3, // Анимация запустится когда 30% компонента будет видно
      rootMargin: '0px 0px -50px 0px' // Небольшой отступ снизу
    }
  )
  
  // Наблюдаем за контейнером
  if (statsContainer.value) {
    observer.observe(statsContainer.value)
  }
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
  padding: 2rem 0;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.stat-card {
  text-align: center;
  padding: 2rem 1.5rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.stat-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--vp-c-brand-1), var(--vp-c-brand-2));
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  border-color: var(--vp-c-brand-soft);
}

.stat-card:hover::before {
  transform: scaleX(1);
}

.stat-number {
  font-size: 3rem;
  font-weight: 800;
  color: var(--vp-c-brand-1);
  font-family: 'Bounded', 'Montserrat', sans-serif;
  line-height: 1;
  margin-bottom: 0.5rem;
}

.stat-label {
  color: var(--vp-c-text-1);
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 0.25rem;
}

.stat-subtitle {
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
  opacity: 0.8;
}

/* Адаптивность */
@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .stat-card {
    padding: 1.5rem 1rem;
  }
  
  .stat-number {
    font-size: 2.5rem;
  }
}
</style>
