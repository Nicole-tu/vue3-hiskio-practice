<template>
  <div class="about">
    <nav>
      <!-- 網址符合就會加上 router-link-exact-active -->
      <router-link to="/about/guide">Guide</router-link>
      <router-link to="/about/reference">Reference</router-link>
      <router-link to="/about/changelog">Changelog</router-link>
      <router-link to="/about/github">Github</router-link>
    </nav>
    <main>
      <router-view />
    </main>
  </div>
</template>
<style lang="scss" scoped>
.about {
  > nav {
    > a {
      margin: 0 10px;
      color: #2c3e50;
      font-weight: bold;
      &.router-link-exact-active {
        color: rebeccapurple;
      }
    }
  }
}
</style>
