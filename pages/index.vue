<template>
  <div>
    <Header/>
    <main>
      <section>
        <div class="section-inner">
          <div class="divider"></div>
          <div class="grid-wpr">
            <div class="img-container">
              <img class="round" src="~/assets/thomas.jpg" alt="Photo of Thomas Kilgour">
            </div>
            <div class="content">
              <p>Hello! My name is Thomas.</p>
              <p>I build simple, accessible websites that are optimized for mobile. I&rsquo;d love to work with you – <a title="Email Thomas" href="mailto:thomas@kilgour.co">tell me</a> a little bit about your project so we can get started.</p>
              <div class="social">
                <a class="email btn" href="mailto:thomas@kilgour.co"><span class="mobile-hidden">Email</span></a> 
                <a class="linkedin btn" href="https://www.linkedin.com/in/tkilgour/"><span class="mobile-hidden">Linkedin</span></a>
                <a class="twitter btn" href="https://twitter.com/tkilgour"><span class="mobile-hidden">Twitter</span></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="section-inner">
          <div class="grid-wpr">
            <div class="img-container">
              <img src="~/assets/working.svg" alt="">
            </div>
            <div class="content">
              <h3>Working With Me</h3>
              <p>I work directly with you to fulfill the project you have in mind. Whether you want to make some updates to your small business&rsquo; website or create a highly dynamic and interactive application from the ground up, I have the skills to realize your vision.</p>
              <p>To get started, <a href="mailto:thomas@kilgour.co">send me a message</a> to say hello!</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="section-inner">
          <div class="grid-wpr">
            <div class="img-container">
              <img src="~/assets/designer.svg" alt="">
            </div>
            <div class="content">
              <h3>Skills</h3>
              <ul>
                <li>HTML5 / CSS3</li>
                <li>Modern Javascript practices</li>
                <li>Interactive Web Application development (Vue.js/React.js)</li>
                <li>Accessibility auditing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
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
  section:nth-child(even) {
    background-color: rgb(233, 237, 240);
  }

  .section-inner {
    max-width: 800px;
    margin: 0 auto;
    padding: 2em;
  }

  .grid-wpr {
    display: grid;
    grid-template-columns: fit-content(300px) 1fr;
    grid-row-gap: 5em;
    align-items: center;
    padding: 2em 0;
  }

  .divider {
    border-bottom: solid 1px #111;
    max-width: 840px;
    margin: 0 auto;
  }

  .content > *:nth-child(1) {
    margin-top: 0;
  }

  /* Desktop */
  @media (min-width: 641px) {
    section:nth-child(even) .grid-wpr {
      grid-template-columns: 1fr fit-content(300px);
    }
    
    section:nth-child(even) .grid-wpr > .content {
      grid-column: 1 / 2;
      grid-row: 1;
    }

    section:nth-child(even) .grid-wpr > .img-container {
      grid-column: 2 / 3;
      grid-row: 1;
    }
  }

  main {
    font-size: 18px;
    line-height: 1.5;
    letter-spacing: -0.002em;
  }

  code {
    font-family: "SFMono-Regular", Menlo, Consolas, Inconsolata, monospace;
  }
  
  main img {
    max-width: 10em;
    margin: 1.4em;
  }

  main img.round {
    border-radius: 50%;
  }

  .btn {
    display: inline-block;
    margin-right: 1em;
    padding: 0.2em 0.5em;
    text-decoration: none;
    background-color: #BF4D1D;
    border-radius: 6px;
    color: #fff !important;
    margin-bottom: 0.5em;
  }

  .btn.email:hover {
    background-color: rgb(148, 60, 22);
  }

  .btn.email:before {
    content: url('~/assets/mail.svg');
    position: relative;
    top: 4px;
    margin-right: 7px;
  }

  .btn.twitter {
    background-color: #1b95e0;
  }

  .btn.twitter:hover {
    background-color: #1777b3;
  }

  .btn.twitter:before {
    content: url('~/assets/twitter.svg');
    position: relative;
    top: 4px;
    margin-right: 7px;
  }

  .btn.linkedin {
    background-color: #0077B5;
  }

  .btn.linkedin:hover {
    background-color: rgb(0, 92, 141);
  }

  .btn.linkedin:before {
    content: url('~/assets/linkedin.svg');
    position: relative;
    top: 4px;
    margin-right: 7px;
  }

  /* Mobile Width */

  @media (max-width: 640px) {
    .grid-wpr {
      grid-template-columns: 1fr;
      grid-row-gap: 0;
      padding: 0;
    }

    .grid-wpr .img-container {
      grid-row-start: 1;
    }

    .img-container {
      justify-self: center;
    }

    .social {
      text-align: center;
    }
  
    .mobile-hidden {
      display: none;
    }

    .btn:before {
      margin-right: 0!important;
    }
  }
</style>
