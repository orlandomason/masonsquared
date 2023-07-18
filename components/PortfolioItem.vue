<template>
  <Animate animation="slide-up-fade" class="transition-all delay-500 duration-1000">
    <div class="flex flex-col items-start sm:flex-row" :class="titleRight && 'sm:flex-row-reverse'">
      <h3 class="sm:hidden font-mono font-medium text-lg uppercase my-2 ml-5">{{ title }}</h3>
      <div class="portfolio-image-container bg-dkmain dark:bg-ltmain shadow-dkoutline dark:shadow-ltoutline" @click="showProject = true">
        <picture>
          <source :srcset="webPimages[previewImageName]">
          <img class="portfolio-image" :src="images[previewImageName]" :alt="previewAlt" 
          width="1066" sizes="xs:640px sm:768px md:1024px lg:1280px" loading="lazy" />
        </picture>
      </div>
      <div class="hidden sticky top-0 tracking-[-0.5em] px-4 pt-5 sm:block 
      sm:px-6 sm:pt-8 md:px-8 md:pt-10 xl:px-6 xl:pt-8 2xl:px-8 2xl:pt-10">
        <p class="pb-1 font-mono font-medium uppercase bg-clip-text cursor-default text-xl vertical-text sm:text-2xl md:text-3xl xl:text-2xl 2xl:text-3xl
        vt-color-bg-grad">
        {{ title }}</p>
      </div>
    </div>

    <div ref="projectWindow" v-if="showProject" class="fixed z-20 top-0 bottom-0 left-0 right-0 bg-dkmain bg-opacity-50">
      <div class="absolute bottom-0 left-1/2 translate-x-[-50%] w-11/12 max-w-[1440px] bg-dkmain dark:bg-ltmain text-ltmain dark:text-dkmain shadow-ltoutline dark:shadow-dkoutline">
        <div class="flex justify-end p-1">
          <!-- Close button -->
          <button @click="showProject = false" aria-label="close project">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="flex flex-col">
          <div class="h-[calc(100vh_-_72px)] mb-10 overflow-y-auto">
            <img :src="images[websiteImageName]" :alt="previewAlt"
            width="1440" sizes="xs:640px sm:768px md:1024px lg:1280px xl:1440px" loading="lazy"
            v-show="true" @load="websiteImageIsLoaded = true"/>
            <!--<div v-if="!websiteImageIsLoaded">Loading animation</div>-->
          </div>
          <div class="absolute bottom-0 w-full bg-dkmain dark:bg-ltmain transition-transform duration-300" :class="showProjectDetails ? 'translate-y-0' : 'translate-y-[calc(100%_-_40px)]'">
            <!-- Open project details button  -->
            <button class="flex justify-center w-full p-2 transition-transform duration-300" @click="showProjectDetails = !showProjectDetails" 
            :class="showProjectDetails && 'rotate-180'" aria-label="show project details">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              </svg>
            </button>

            <div class="flex flex-wrap justify-between w-full pt-2 pb-12">
              <div class="w-full mr-8 lg:w-1/2">
                <div class="w-fit mb-5 sm:mb-6 overflow-hidden">
                  <h3 class="font-mono text-xl uppercase ml-8 mb-3 sm:whitespace-nowrap sm:text-[2.25rem] sm:ml-24 sm:mb-6 transition-opacity delay-700 duration-500 opacity-0" 
                  :class="showProjectDetails && 'opacity-100'">{{ title }}</h3>
                  <div class="h-0.5 bg-ltmain dark:bg-dkmain transition-transform delay-300 duration-500 translate-x-[-100%]" :class="showProjectDetails && 'translate-x-[0%]'"></div>
                </div>
                <div class="text-sm ml-8 sm:text-base sm:ml-24 transition-opacity delay-1000 duration-500 opacity-0" :class="showProjectDetails && 'opacity-100'">
                  <p>{{ description }}</p>
                </div>
              </div>

              <div class="flex flex-col items-start w-full mx-8 mt-8 sm:mx-24 sm:mt-12 lg:w-1/3 lg:items-end lg:mt-3 lg:ml-0">
                <nuxt-link :to="site" class="font-mono text-lg uppercase sm:text-3xl transition-opacity delay-[850ms] duration-500 opacity-0" :class="showProjectDetails && 'opacity-100'">
                  <div class="flex items-center arrow-link">
                    <span>View Site</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#fff8f0" stroke-linecap="round" stroke-width="3" viewBox="0 0 62.391 26.772" class="h-3 sm:h-6">
                      <line id="Line_5" data-name="Line 5" x2="59.958" transform="translate(1 13.891)"/>
                      <line id="Line_6" data-name="Line 6" x2="18.042" y2="12.5" transform="translate(42.958 1.391)"/>
                      <line id="Line_7" data-name="Line 7" y1="11.5" x2="18.042" transform="translate(42.958 13.891)"/>
                    </svg>
                  </div>
                </nuxt-link>
                <ul class="flex flex-wrap justify-start gap-2 text-sm mt-4 sm:gap-4 sm:text-base sm:mt-8 lg:justify-end transition-opacity delay-[1150ms] duration-500 opacity-0"
                :class="showProjectDetails && 'opacity-100'">
                  <li class="px-2 py-0.5 sm:px-3 sm:py-1 border-2" v-for="tag in tags" :key="tag">
                    {{ tag }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </Animate>
</template>

<script setup>
const props = defineProps({
  title: String,
  titleRight: Boolean,
  description: String,
  site: String,
  tags: Array,
  previewAlt: String,
  previewImageName: String,
  websiteImageName: String,
})

import { filename } from 'pathe/utils';
const glob = import.meta.glob('~/assets/img/websites/*.jpg', { eager: true });
const images = Object.fromEntries(
  Object.entries(glob).map(([key, value]) => [filename(key), value.default])
);

const webPglob = import.meta.glob('~/assets/img/websites/*.webp', { eager: true });
const webPimages = Object.fromEntries(
  Object.entries(webPglob).map(([key, value]) => [filename(key), value.default])
);

const showProject = ref(false)
const showProjectDetails = ref(false)
const websiteImageIsLoaded = ref(false)

</script>

<style scoped>
.vt-color-bg-grad {
  background-image: linear-gradient(to bottom, theme('colors.dkmain') 32%, transparent 68%);
}
.dark .vt-color-bg-grad {
  background-image: linear-gradient(to bottom, theme('colors.ltmain') 32%, transparent 68%);
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

.project-details-hide {
  transform: translateY(calc(100% - 32px));
  transition: transform 0.3s linear;
}
.project-details-show {
  transform: translateY(calc(100% - 32px));
  transition: transform 0.3s linear;
}

.arrow-link {
  gap: 1rem;
  transition: all 0.3s ease;
}
.arrow-link:hover {
  gap: 2rem;
  margin-right: -1rem;
}

.title_separator {
  transform: translateX(100%);
  transition: transform 0.3s ease;
}
.title_separator:hover {
  transform: translateX(0%);
}
</style>