<template>
  <footer-background-effect></footer-background-effect>
  <footer id="footer">
    <div id="about" class="container">
      <div class="row mb-3">
        <div class="col-3">
          <h2 class="footer-title secondary-title">About Me</h2>

          <div class="secondary-title text-secondary">
            <p class="mt-2">
              Hi! My name is Paarth. I am currently studying in Dover Court
              International School in Singapore. I made this website to improve
              my skills on web development, for the Duke of Edinburgh award
              Project.
            </p>

            <address>
              <icon name="mdi:map-marker" class="text-primary"></icon>
              301 Dover Road, Singapore
            </address>

            <div class="email">
              <icon name="material-symbols:mail" class="text-primary"></icon>
              contactme@paarthkukrejadofe.eu.org
            </div>
          </div>
        </div>
        <div class="col-3">
          <!-- <client-only>
            <threeD-The-Experience></threeD-The-Experience>
          </client-only> -->
        </div>
        <div class="col-3">
          <h2 class="footer-title secondary-title mt-2">Social</h2>

          <div class="tags social">
            <div class="d-flex flex-wrap">
              <a
                href="https://instagram.com/paarth.kukreja"
                target="_blank"
                class="nav-link btn bg-light"
                ><Icon class="footer-insta" name="ph:instagram-logo"></Icon
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<style scoped>
.footer-insta {
  text-align: center;
  position: relative;
  transform: scale(1.3);
}
</style>
