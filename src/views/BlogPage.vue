<template>
  <div class="landing-page">
    <!-- Hero Section -->
    <section class="hero-section fade-in-up">
      <h1 class="hero-title">Welcome to My World</h1>
      <p class="hero-subtitle delay-100 fade-in-up">Exploring Philosophy, Physics, and Computer Science.</p>
      <div class="hero-buttons delay-200 fade-in-up">
        <a href="https://github.com/pingzhihe" target="_blank" class="btn btn-primary">View Github</a>
        <a href="https://charlesping.com/myBlog/" target="_blank" class="btn btn-secondary">Read Articles</a>
      </div>
      <div class="hero-image-placeholder delay-300 fade-in-up">
        <!-- Placeholder for a hero illustration -->
        <div class="illustration">🪐</div>
      </div>
    </section>

    <!-- Content Grid -->
    <section id="articles" class="content-section">
      <h2 class="section-title fade-in-up delay-400">Latest Updates</h2>
      <div class="grid-container">
        <!-- Intro Card -->
        <div class="card intro-card fade-in-up delay-100">
          <div class="card-icon">👋</div>
          <h3 class="card-title">About Me</h3>
          <p class="card-text">I am an Unimelb Student, Master of IT. Passionate about the cosmos and code.</p>
        </div>

        <!-- Todo Card -->
        <div class="card todo-card fade-in-up delay-200">
          <div class="card-icon">📝</div>
          <h3 class="card-title">Current Focus</h3>
          <ul class="card-list">
            <li>Machine Learning & AI</li>
            <li>Math and algorithms</li>
            <li>Backend Development</li>
            <li>Vibe coding</li>
          </ul>
        </div>

        <!-- Article Cards Placeholder -->
      </div>
    </section>
  </div>
</template>



<style scoped>
.landing-page {
  padding-bottom: var(--spacing-xl);
}

/* Hero Section */
.hero-section {
  text-align: center;
  padding-top: var(--spacing-xl);
  padding-bottom: var(--spacing-md);
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: 4rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  margin-bottom: var(--spacing-md);
  line-height: 1.1;
  color: var(--text-color);
  text-shadow: 2px 2px 4px rgba(163,177,198, 0.4);
}

.hero-subtitle {
  font-size: 1.5rem;
  color: var(--secondary-text-color);
  margin-bottom: var(--spacing-lg);
  font-weight: 400;
}

.hero-buttons {
  display: flex;
  justify-content: center;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
}

.btn {
  padding: 14px 32px;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-neumorphic-out);
  color: var(--text-color);
  background-color: var(--bg-color);
}

.btn:hover {
  box-shadow: var(--shadow-neumorphic-out-hover);
  transform: translateY(-2px);
}

.btn:active {
  box-shadow: var(--shadow-neumorphic-in);
  transform: translateY(0);
}

.btn-primary {
  color: #007bff; /* Accent color for primary */
}

.hero-image-placeholder {
  font-size: 8rem;
  animation: float 6s ease-in-out infinite;
  margin-top: var(--spacing-lg);
  filter: drop-shadow(0 10px 15px rgba(163,177,198, 0.4));
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
}

/* Content Section */
.content-section {
  padding-top: var(--spacing-md);
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: var(--spacing-lg);
  color: var(--text-color);
  text-align: center;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: var(--spacing-lg);
  padding: var(--spacing-md);
}

/* Cards */
.card {
  background: var(--bg-color);
  border-radius: var(--radius-md);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-neumorphic-out);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid rgba(255,255,255,0.2); /* Subtle highlight border */
}

.card:hover {
  box-shadow: var(--shadow-neumorphic-out-hover);
  transform: translateY(-5px);
}

.card-icon {
  font-size: 2.5rem;
  margin-bottom: var(--spacing-md);
  background: var(--bg-color);
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: var(--shadow-neumorphic-out);
}

.card-title {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: var(--spacing-sm);
  color: var(--text-color);
}

.card-text {
  font-size: 1rem;
  color: var(--secondary-text-color);
  line-height: 1.6;
}

.card-list {
  list-style: none;
  padding: 0;
  color: var(--secondary-text-color);
}

.card-list li {
  margin-bottom: 8px;
  padding-left: 20px;
  position: relative;
}

.card-list li::before {
  content: "•";
  color: #007bff;
  position: absolute;
  left: 0;
  font-weight: bold;
}
</style>