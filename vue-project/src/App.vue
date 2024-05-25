<template>
  <div id="app">
    <header>
      <div class="header-container">
        <img src="./assets/morty.png" alt="Profile Picture" class="header-image">
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
    <main>
      <article>
        <h2>Hello! Here is Zhihe Ping</h2>
        <p>I am an Unimelb Student, Master of IT.</p>
        <p>I like astronomy, physics, and computer science.</p>
        <p>This is my blog and welcome to my own world!</p>
      </article>

      <article>
        <h2>TO DO</h2>
        <p>Final exam revision</p>
        <p>Rebuild the blog using vue or react</p>
        <p>Learn more about machine learning</p>
      </article>
    </main>
    <footer>
      <p>&copy; 2024 Charles' World. All rights reserved.</p>
    </footer>
  </div>
</template>



<script>
export default {
  name: 'App',
}
</script>

<style>
body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
}

.header-container {
  display: flex;
  align-items: center;
  background-color: #333;
  color: #fff;
  padding: 1rem;
}

.header-image {
  width: 80px; /* adjust size */
  height: 80px; /* adjust size */
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
  display: flex;  /*Make the navigate bar alignment*/
}

.header-content nav ul li {
  margin: 0 10px;
}

.header-content nav ul li a {
  color: #fff;
  text-decoration: none;
}

main {
  margin: 2rem;
}

article {
  background: #fff;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

footer {
  text-align: center;
  padding: 1rem 0;
  background-color: #333;
  color: #fff;
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
