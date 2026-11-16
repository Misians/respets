<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="respets-shell">
    <header class="respets-header">
      <div class="header-inner">
        <RouterLink class="brand" to="/">
          <span class="brand-paw">🐾</span>
          <div>
            <span class="brand-title">ResPets</span>
            <span class="brand-sub">Rede Solidária de Monitoramento Animal</span>
          </div>
        </RouterLink>

        <nav class="nav-links">
          <RouterLink class="nav-item-link" to="/">Feed de Resgate</RouterLink>
          <RouterLink class="nav-item-link" to="/cats">Adoção & Abrigos</RouterLink>
          <RouterLink class="nav-item-link" to="/about">Nossa Causa</RouterLink>
        </nav>

        <div class="header-cta">
          <span class="live-pill">● 18 cuidadores ativos no RN</span>
        </div>
      </div>
    </header>

    <RouterView />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

body {
  margin: 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  background-color: #fffbf7;
  color: #1e293b;
}

.respets-shell {
  min-height: 100vh;
  background: linear-gradient(160deg, #fff7ed 0%, #fffbf7 50%, #f0fdf4 100%);
}

.respets-header {
  background: rgba(255, 255, 255, 0.92);
  border-bottom: 1px solid #fed7aa;
  backdrop-filter: blur(16px);
  position: sticky;
  top: 0;
  z-index: 50;
}

.header-inner {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0.9rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
}

.brand-paw {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: linear-gradient(135deg, #ea580c 0%, #f97316 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  box-shadow: 0 6px 16px rgba(234, 88, 12, 0.25);
}

.brand-title {
  display: block;
  font-size: 1.25rem;
  font-weight: 800;
  color: #9a3412;
  letter-spacing: -0.02em;
}

.brand-sub {
  display: block;
  font-size: 0.72rem;
  color: #64748b;
  font-weight: 600;
}

.nav-links {
  display: flex;
  gap: 0.5rem;
}

.nav-item-link {
  text-decoration: none;
  color: #475569;
  font-weight: 600;
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  border-radius: 999px;
  transition: all 0.2s;
}

.nav-item-link.router-link-exact-active,
.nav-item-link:hover {
  background: #ffedd5;
  color: #c2410c;
}

.live-pill {
  background: #dcfce7;
  color: #15803d;
  font-size: 0.78rem;
  font-weight: 700;
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
}
</style>
