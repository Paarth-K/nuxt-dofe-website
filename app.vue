<template>
  <div>
    <NuxtLayout>
      <Transition>
        <div>
          <NuxtPage></NuxtPage>
        </div>
      </Transition>
    </NuxtLayout>
  </div>
</template>
<script></script>

<style>
/* Page transitions */
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
/* .Page transitions */
</style>
