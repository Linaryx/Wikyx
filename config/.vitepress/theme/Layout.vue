<template>
  <Layout>
    <template #nav-bar-title>
      <div class="custom-logo">
        <img src="/favicon.ico" alt="Заквиель" class="logo-icon" />
        <span class="logo-text">Заквиель</span>
      </div>
    </template>
  </Layout>
</template>

<script setup>
import { Layout } from 'vitepress/theme'
</script>

<style scoped>
.custom-logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'TT Travels Next Trial', 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.2rem;
  color: var(--vp-c-text-1);
  text-decoration: none;
  transition: all 0.3s ease;
}

.custom-logo:hover {
  color: var(--vp-c-brand-1);
  transform: scale(1.05);
}

.logo-icon {
  width: 24px;
  height: 24px;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.custom-logo:hover .logo-icon {
  transform: rotate(5deg);
}

.logo-text {
  font-weight: 700;
  letter-spacing: -0.02em;
}

/* Скрываем текст на мобильных устройствах */
@media (max-width: 640px) {
  .logo-text {
    display: none;
  }
  
  .custom-logo {
    gap: 0;
  }
  
  .logo-icon {
    width: 28px;
    height: 28px;
  }
}
</style> 