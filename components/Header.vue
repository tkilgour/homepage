<template>
  <header>
    <h1 id="name" class="run-animation" @click="handleHeaderClick">Thomas<br />Kilgour</h1>
  </header>
</template>

<style scoped>
  header {
  text-align: center;
}

h1 {
  display: inline-block;
  font-family: 'Comfortaa', sans-serif;
  font-size: calc(3em + 1vw);
  font-weight: 400;
  margin: 0;
  padding: 30px 10px;
  text-align: center;
  color: #1FDA9A;
  /* prevent iphone highlight overlay on tap */
  -webkit-tap-highlight-color: rgba(0,0,0,0); 
}
</style>
