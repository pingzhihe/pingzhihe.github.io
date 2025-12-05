<template>
  <aside class="sidebar">
    <div class="sidebar-header">
      <img src="@/assets/morty.png" alt="Profile" class="profile-image">
      <div class="profile-info">
        <span class="profile-name">Charles' World</span>
        <span class="profile-role">Developer</span>
      </div>
    </div>
    
    <nav class="sidebar-nav">
      <div class="nav-section">
        <div class="nav-section-title">Socials</div>
        <ul>
          <li><a href="https://github.com/pingzhihe" target="_blank"><i class="fab fa-github"></i> Github</a></li>
          <li><a href="https://www.linkedin.com/in/zhihe-ping/" target="_blank"><i class="fab fa-linkedin"></i> LinkedIn</a></li>
          <li><a href="https://www.instagram.com/charles_ping_kk/" target="_blank"><i class="fab fa-instagram"></i> Instagram</a></li>
          <li><a href="mailto:pzh1760473545@gmail.com"><i class="fas fa-envelope"></i> Email</a></li>
        </ul>
      </div>
    </nav>
  </aside>
</template>

<script>
export default {
  name: 'AppSidebar',
}
</script>

<style scoped>
.sidebar {
  width: 240px;
  height: 100vh;
  background-color: var(--sidebar-bg);
  border-right: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  padding: var(--spacing-md);
  position: fixed;
  left: 0;
  top: 0;
  transition: transform 0.3s ease;
  z-index: 100;
}

.sidebar-header {
  display: flex;
  align-items: center;
  padding: var(--spacing-sm) 0;
  margin-bottom: var(--spacing-lg);
  cursor: pointer;
  border-radius: 4px;
}

.sidebar-header:hover {
  background-color: rgba(0,0,0,0.04);
}

.profile-image {
  width: 24px;
  height: 24px;
  border-radius: 4px;
  margin-right: var(--spacing-sm);
}

.profile-info {
  display: flex;
  flex-direction: column;
}

.profile-name {
  font-weight: 600;
  font-size: 14px;
  color: var(--text-color);
}

.profile-role {
  font-size: 12px;
  color: var(--secondary-text-color);
}

.nav-section-title {
  font-size: 11px;
  font-weight: 600;
  color: var(--secondary-text-color);
  margin-bottom: var(--spacing-xs);
  padding-left: var(--spacing-xs);
  text-transform: uppercase;
}

.sidebar-nav ul {
  list-style: none;
  padding: 0;
}

.sidebar-nav li {
  margin-bottom: 1px;
}

.sidebar-nav a {
  display: flex;
  align-items: center;
  padding: 6px 8px;
  color: var(--text-color);
  font-size: 14px;
  border-radius: 4px;
  text-decoration: none;
}

.sidebar-nav a:hover {
  background-color: rgba(0,0,0,0.04);
}

.sidebar-nav i {
  width: 20px;
  margin-right: var(--spacing-xs);
  color: var(--secondary-text-color);
  text-align: center;
}

@media (max-width: 768px) {
  .sidebar {
    transform: translateX(-100%);
  }
  
  .sidebar.open {
    transform: translateX(0);
  }
}
</style>