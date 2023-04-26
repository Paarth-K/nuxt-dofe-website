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
              <i class="fas fa-map-marker-alt text-primary"></i>
              301 Dover Road, Singapore
            </address>

            <div class="email">
              <i class="fas fa-envelope text-primary"></i>
              contactme@paarthkukrejadofe.eu.org
            </div>
          </div>
        </div>
        <div class="col-3">
          <client-only>
            <threeD-The-Experience></threeD-The-Experience>
          </client-only>
        </div>
        <div class="col-3">
          <h2 class="footer-title secondary-title mt-2">Social</h2>

          <div class="tags social">
            <div class="d-flex flex-wrap">
              <a
                href="https://instagram.com/paarth.kukreja"
                target="_blank"
                class="nav-link btn bg-light"
                ><i class="fab fa-instagram"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
