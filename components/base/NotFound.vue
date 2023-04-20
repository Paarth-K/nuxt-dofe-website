<template>
  <div align="center">
    <h1 id="hacked" data-value="404">
      <text @mouseover="hackedText404" class="text">{{ notFound }}</text>
    </h1>
    <h3 id="hacked2" @mouseover="hackedTextFNF">
      <text class="text">{{ errMessage }}</text>
    </h3>
  </div>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');
$text-col: black;
$back-col: white;

body {
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: $back-col;
  margin: 0rem;
  overflow: hidden;
}

#hacked {
  font-family: 'Space Mono', monospace;
  font-size: 25vh;
  color: $back-col !important;
  padding: 0rem clamp(1rem, 2vw, 3rem);
}
#hacked2 {
  font-family: 'Space Mono', monospace;
  font-size: clamp(2rem, 4vw, 4rem);
  color: $back-col;
  padding: 0rem clamp(1rem, 2vw, 3rem);
}
.text:hover {
  background-color: $back-col;
  color: $text-col;
  border-radius: clamp(0.4rem, 0.75vw, 1rem);
  opacity: 0.9;
}
</style>

<script>
export default {
  data() {
    return {
      notFound: '404',
      errMessage: 'FILE NOT FOUND',
      interval: 0,
      iteration: 0,
    };
  },
  methods: {
    hackedText404() {
      let iteration = 0;
      const numbers = '1234567890';
      const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

      let interval = setInterval(() => {
        this.notFound = this.notFound
          .split('')
          .map((letter, index) => {
            if (index < iteration) {
              return '404'[index];
            }
            return numbers[Math.floor(Math.random() * 10)];
          })
          .join('');
        if (iteration >= 3) {
          clearInterval(interval);
        }
        iteration += 1 / 10;
      }, 50);
    },
    hackedTextFNF() {
      let iteration = 0;
      const numbers = '1234567890';
      const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

      let interval = setInterval(() => {
        this.errMessage = this.errMessage
          .split('')
          .map((letter, index) => {
            if (index < iteration) {
              return 'FILE NOT FOUND'[index];
            }
            return letters[Math.floor(Math.random() * 10)];
          })
          .join('');
        if (iteration >= 14) {
          clearInterval(interval);
        }
        iteration += 1 / 3;
      }, 30);
    },
  },
};
</script>
