<template>
  <nav class="navbar" :class="{ 'scrolled': isScrolled }">
    <div class="navbar-container">
      <div class="logo">
        <img src="@/assets/morty.png" alt="Logo" class="logo-img">
        <span class="logo-text">Charles' World</span>
      </div>
      
      <div class="nav-links">
        <a href="https://github.com/pingzhihe" target="_blank" class="nav-item">Github</a>
        <a href="https://www.linkedin.com/in/zhihe-ping/" target="_blank" class="nav-item">LinkedIn</a>
        <a href="https://www.instagram.com/charles_ping_kk/" target="_blank" class="nav-item">Instagram</a>
        <button @click="toggleTheme" class="nav-item theme-toggle" title="Toggle Theme">
           {{ theme === 'dark' ? '☀️' : '🌙' }}
        </button>
        <a href="mailto:pzh1760473545@gmail.com" class="nav-button">Contact Me</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar',
  data() {
    return {
      isScrolled: false,
      theme: 'dark'
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    
    // Check local storage or preference
    const savedTheme = localStorage.getItem('user-theme');
    if (savedTheme) {
        this.theme = savedTheme;
    } else {
        // Default to dark as per redesign, or check system preference
        this.theme = 'dark';
    }
    document.documentElement.setAttribute('data-theme', this.theme);
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 10;
    },
    toggleTheme() {
        this.theme = this.theme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', this.theme);
        localStorage.setItem('user-theme', this.theme);
    }
  }
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: var(--bg-color);
  z-index: 1000;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
}

.navbar.scrolled {
  height: 60px;
  box-shadow: var(--shadow-neumorphic-out);
}

.navbar-container {
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}

.logo {
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 1.2rem;
  color: var(--text-color);
  padding: 10px;
  border-radius: 12px;
  transition: box-shadow 0.2s ease;
}

.logo:hover {
  box-shadow: var(--shadow-neumorphic-out);
}

.logo-img {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 12px;
  box-shadow: var(--shadow-neumorphic-out);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 32px;
}

.nav-item {
  text-decoration: none;
  color: var(--text-color);
  font-size: 0.95rem;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 12px;
  transition: all 0.2s ease;
}

.nav-item:hover {
  color: var(--text-color);
  box-shadow: var(--shadow-neumorphic-out);
}

.nav-button {
  text-decoration: none;
  background-color: var(--bg-color);
  color: var(--text-color);
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  box-shadow: var(--shadow-neumorphic-out);
  transition: all 0.2s ease;
}

.nav-button:hover {
  box-shadow: var(--shadow-neumorphic-out-hover);
  transform: translateY(-2px);
}

.nav-button:active {
  box-shadow: var(--shadow-neumorphic-in);
  transform: translateY(0);
}

@media (max-width: 768px) {
  .nav-links {
    display: none; 
  }
}
</style>
