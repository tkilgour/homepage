<template>
    <nuxt/>
</template>

<style>
    @font-face {
        font-family: 'Inter UI';
        font-style:  normal;
        font-weight: 400;
        src: url("~/assets/fonts/Inter-UI-Regular.woff") format("woff");
    }

    @font-face {
        font-family: 'Inter UI';
        font-style:  italic;
        font-weight: 400;
        src: url("~/assets/fonts/Inter-UI-Italic.woff") format("woff");
    }

    @font-face {
        font-family: Arvo;
        src: url('~/assets/fonts/Arvo-Regular.ttf');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: Arvo;
        src: url('~/assets/fonts/Arvo-Bold.ttf');
        font-weight: 700;
        font-style: normal;
    }

    html {
        font-family: "Inter UI", system-ui, sans-serif;
    }

    body {
        margin: 0;
    }

    h1, h2, h3, h4 {
        font-family: "Arvo", serif;
    }

    h2, h3, h4 {
        font-weight: 400;
    }

    a {
        color: #BF4D1D;
    }

    a:hover {
        color: rgb(138, 58, 23);
    }

    @media (max-width: 640px) {
        h1 {
            font-size: 2em !important;
        }

        h2 {
            font-size: 1.2em !important;
        }
    }
</style>
