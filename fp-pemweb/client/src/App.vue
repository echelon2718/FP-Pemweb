<script>
import { RouterLink, RouterView } from 'vue-router'
import axios from 'axios'

export default {
  data() {
    return {
      links: []
    }
  },
  methods: {
    async getLinks() {
      try {
        const res = await axios.get("http://localhost:8000/link")
        console.log(res)
      }
      catch(err) {
        console.log(err)
      }
    },
    async postLinks(url, alias) {
      try {
        const res = await axios.post("http://localhost:8000/api/post", {
          url: url,
          alias: alias,
          visits: 0
        })
        .then((response) => {
          console.log(response)
        })
      }
      catch(err) {
        console.log(err)
      }
    }
  },
  mounted() {
    this.getLinks()
  }
}
</script>

<template>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/Badge_ITS.png" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/" style="color:black">Dashboard</RouterLink>
        <RouterLink to="/about">Summary</RouterLink>
      </nav>
    </div>
    
    <div>
      <h3>Shorten your link!</h3>
      <input type="text" v-model="link" placeholder="Masukkan Link" style="margin: 5px 0px;">
      <input type="text" v-model="alias" placeholder="Masukkan Alias" style="margin: 5px 0px;">
      <div style="margin: 5px 0px;"><button class="btn" @click="postLinks(link, alias)">Shorten!</button></div>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.btn {
  background-color: aliceblue;
}

.btn:hover {
  background-color: rgb(0, 202, 0);
  color:aliceblue;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  display: inline-block;
  border-left: 1px solid var(--color-border);
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

/* nav a:first-of-type {
  border: 0;
} */

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
