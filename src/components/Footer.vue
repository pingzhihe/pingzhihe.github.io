<template>
  <footer class="site-footer">
    <div class="footer-content">
      <div class="footer-logo">
        <span class="logo-text">Charles' World</span>
        <p class="copyright">&copy; 2024 All rights reserved.</p>
      </div>
      <div class="footer-links">
        <div class="link-group">
          <h4>Socials</h4>
          <a href="https://github.com/pingzhihe" target="_blank">Github</a>
          <a href="https://www.linkedin.com/in/zhihe-ping/" target="_blank">LinkedIn</a>
          <a href="https://www.instagram.com/charles_ping_kk/" target="_blank">Instagram</a>
        </div>
        <div class="link-group">
          <h4>Contact</h4>
          <a href="mailto:pzh1760473545@gmail.com">Email Me</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
}
</script>

<style scoped>
.site-footer {
  padding: var(--spacing-xl) 0;
  margin-top: auto;
  background-color: var(--bg-color);
  box-shadow: 0 -10px 20px -10px rgba(163,177,198, 0.3); /* Subtle top shadow */
}

.footer-content {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: var(--spacing-lg);
}

.footer-logo .logo-text {
  font-weight: 700;
  font-size: 1.2rem;
  display: block;
  margin-bottom: var(--spacing-sm);
  color: var(--text-color);
}

.copyright {
  color: var(--secondary-text-color);
  font-size: 0.9rem;
}

.footer-links {
  display: flex;
  gap: var(--spacing-xl);
}

.link-group h4 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: var(--spacing-md);
  color: var(--text-color);
}

.link-group a {
  display: block;
  color: var(--secondary-text-color);
  text-decoration: none;
  margin-bottom: var(--spacing-sm);
  font-size: 0.95rem;
  transition: all 0.2s ease;
  padding: 4px 8px;
  border-radius: 8px;
}

.link-group a:hover {
  color: var(--text-color);
  box-shadow: var(--shadow-neumorphic-out);
}
</style>