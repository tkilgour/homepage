<template>
  <header>
    <div class="header-wpr">
      <img class="logo" src="~/assets/tk_logo.png" alt="">
      <div>
        <h1>Thomas Kilgour</h1><br>
        <h2>Web Development</h2>
      </div>
    </div>
  </header>
</template>

<style scoped>
  .header-wpr {
    display: grid;
    justify-content: center;
    grid-template-columns: 200px fit-content(500px);
    grid-column-gap: 1em;
    align-items: center;
    margin-top: 2em;
    padding: 0 2em;
  }

  h1 {
    color: #6399AE;
    font-size: 3em;
    margin: 0;
    display: inline-block;
  }

  h2 {
    margin: 0;
    display: inline-block;
    color: #BF4D1D;
  }
  
  .logo {
    max-width: 200px;
  }

  @media (max-width: 640px) {
    .header-wpr {
      grid-template-columns: 1fr;
      grid-row-gap: 1em;
    }

    .header-wpr > div {
      text-align: center;
    }

    .logo {
      max-width: 150px;
      margin: 0 auto;
    }
  }
</style>
