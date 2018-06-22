<template>
  <div>
    <Header/>
    <main>
      <div class="main__content">
        <p class="main__copy">Hi, my name is Thomas.</p>
        <p class="main__copy">I build simple, accessible websites that are optimized for mobile.</p>
        <p class="main__copy">If you'd like to work with me, <a title="Email Thomas" href="mailto:t.kilgour@gmail.com">say hello</a>. I also go by <code>@tkilgour</code> most places around the internet – including <a href="https://instagram.com/tkilgour">Instagram</a>, <a href="https://twitter.com/tkilgour">Twitter</a>, and <a href="https://www.linkedin.com/in/tkilgour/">Linkedin</a>.</p>
      </div>
    </main>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'

export default {
  components: {
    Header
  }
}
</script>

<style>
</style>
