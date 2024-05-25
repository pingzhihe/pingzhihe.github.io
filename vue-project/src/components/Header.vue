<template>
    <header>
      <div class="header-container">
        <img src="@/assets/morty.png" alt="Profile Picture" class="header-image">
        <div class="header-content">
          <h1>Welcome to My Own World!</h1>
          <nav>
            <ul>
              <li><a href="https://github.com/pingzhihe">github</a></li>
              <li><a href="https://www.linkedin.com/in/zhihe-ping/">linkedin</a></li>
              <li><a href="https://www.instagram.com/charles_ping_kk/">instagram</a></li>
              <li><a href="mailto:pzh1760473545@gmail.com">email</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  </template>


<script>
export default {
  name: 'AppHeader',
}
</script>

<style scoped>
.header-container {
  display: flex;
  align-items: center;
  background-color: #333;
  color: #fff;
  padding: 1rem;
}

.header-image {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 20px;
}

.header-content {
  display: flex;
  flex-direction: column;
}

.header-content h1 {
  margin: 0;
  padding: 0;
}

.header-content nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.header-content nav ul li {
  margin: 0 10px;
}

.header-content nav ul li a {
  color: #fff;
  text-decoration: none;
}

@media screen and (max-width: 600px) {
  .header-container {
    flex-direction: column;
  }
  .header-image {
    margin-right: 0;
    margin-bottom: 1rem;
  }
}
</style>