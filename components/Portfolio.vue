<template>
  <div class="w-full flex gap-16">
    <Animate class="flex-1 mt-40 ml-10" animation="slide-up-fade">
      <div class="portfolio-item flex-1 flex items-start">
        <div class="portfolio-image-container bg-dkmain dark:bg-ltmain shadow-dkoutline dark:shadow-ltoutline">
          <nuxt-img class="portfolio-image" fit="inside" src="/img/conshtinyhouse-website.jpg" alt="Les Caves GV website" />
        </div>
        <div class="sticky top-0 pl-8 pt-10 tracking-[-0.5em]">
          <p class="vertical-text font-mono font-medium uppercase text-3xl bg-clip-text cursor-default"
          :class="$colorMode.value != 'dark' ? 'dark-color-bg-grad' : 'light-color-bg-grad'">
          Consh Tiny House</p>
        </div>
      </div>
    </Animate>
    <Animate class="flex-1" animation="slide-up-fade">
      <div class="portfolio-item flex-1 flex flex-row-reverse items-start">
        <div class="portfolio-image-container bg-dkmain dark:bg-ltmain shadow-dkoutline dark:shadow-ltoutline">
          <nuxt-img class="portfolio-image" fit="inside" src="/img/les-caves-gv-website.jpg" alt="Les Caves GV website" />
        </div>
        <div class="sticky top-0 pr-8 pt-10 tracking-[-0.5em]">
          <p class="vertical-text font-mono font-medium uppercase text-3xl bg-clip-text cursor-default"
          :class="$colorMode.value != 'dark' ? 'dark-color-bg-grad' : 'light-color-bg-grad'">
          Les Caves GV</p>
        </div>
      </div>
    </Animate>
  </div>
</template>

<script setup>
const colorMode = useColorMode()
</script>

<style scoped>
.light-color-bg-grad {
  background-image: linear-gradient(to bottom, theme('colors.ltmain') 33%, transparent 66%);
}
.dark-color-bg-grad {
  background-image: linear-gradient(to bottom, theme('colors.dkmain') 33%, transparent 66%);
}
.vertical-text {
  color: transparent;
  writing-mode: vertical-rl;
  text-orientation: upright;
  background-size: 100% 300%;
  background-position: 0 100%;
  transition: background-position 0.4s linear;
  transition-delay: 200ms;
}
.portfolio-image {
  transition: all 0.4s ease-out;
}

.portfolio-image-container:hover ~ div .vertical-text {
  background-position: 0 0;
}
.portfolio-image-container:hover .portfolio-image {
  opacity: 0.8;
  filter: grayscale(100%);
}


.fade-in-text-enter-active {
  transition: all 0.6s ease-out;
}
.fade-in-text-leave-active {
  transition: all 0.6s ease-in;
}
.fade-in-text-enter-from,
.fade-in-text-leave-to {
  opacity: 0;
}

</style>