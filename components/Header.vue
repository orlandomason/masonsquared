<template>
  <header class="fixed w-full z-20">
    <Transition name="navbar">
      <div v-show="showNavbar" 
      class="flex items-stretch justify-between w-full px-8 py-6 transition-[padding-top] text-dkmain dark:text-ltmain bg-ltmain dark:bg-dkmain
      sm:px-16 lg:px-24 sm:py-8"
      :class="atTop ? 'lg:pt-16' : ''">

        <!-- logo -->
        <div class="flex-shrink m-auto">
          <NuxtLink to="/">
            <img class="h-6 sm:h-8 change-logo-color" src="~/assets/img/masonsquared-logo.png" alt="Masonsquared Logo" height="32" />
          </NuxtLink>
        </div>

        <!-- Nav -->
        <div class="flex-grow flex justify-end lg:items-end">

          <button class="lg:hidden px-4" @click="showMenu = !showMenu" aria-label="toggle menu">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            </svg>
          </button>

          <nav class="nav-menu absolute lg:flex" v-if="showMenu">
            <div @mouseover="mouseOverNavItem = 1" @mouseleave="mouseOverNavItem = 0" class="flex flex-col w-fit overflow-hidden h-14 pl-[11%] my-3 lg:h-auto lg:pl-0 lg:my-0">
              <nuxt-link to="#websites-section" class="lift-up px-1 py-2 lg:py-0">Websites</nuxt-link>
              <Transition name="slide-right">
                <div v-if="mouseOverNavItem == 1" class="h-[2px] bg-ltmain dark:bg-dkmain lg:bg-dkmain lg:dark:bg-ltmain"></div>
              </Transition>
            </div>
            <!--
            <div @mouseover="mouseOverNavItem = 2" @mouseleave="mouseOverNavItem = 0" class="flex flex-col w-fit overflow-hidden h-14 pl-[11%] my-3 lg:h-auto lg:pl-0 lg:my-0">
              <nuxt-link to="/#" class="lift-up px-1 py-2 lg:py-0">Services</nuxt-link>
              <Transition name="slide-right">
                <div v-if="mouseOverNavItem == 2" class="h-[2px] bg-ltmain dark:bg-dkmain lg:bg-dkmain lg:dark:bg-ltmain"></div>
              </Transition>
            </div>-->
            <div @mouseover="mouseOverNavItem = 3" @mouseleave="mouseOverNavItem = 0" class="flex flex-col w-fit overflow-hidden h-14 pl-[11%] my-3 lg:h-auto lg:pl-0 lg:my-0">
              <nuxt-link to="#contact-section" class="lift-up px-1 py-2 lg:py-0">Contact</nuxt-link>
              <Transition name="slide-right">
                <div v-if="mouseOverNavItem == 3" class="h-[2px] bg-ltmain dark:bg-dkmain lg:bg-dkmain lg:dark:bg-ltmain"></div>
              </Transition>
            </div>
          </nav>

          <!-- Color mode switch -->
          <button class="h-fit rounded-full p-1 bg-stone-700 text-stone-50 dark:bg-stone-50 dark:text-stone-700" @click="switchColorMode()" aria-label="switch colour theme">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 dark:hidden">
              <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clip-rule="evenodd" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 hidden dark:block">
              <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
            </svg>
          </button>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup>
const mouseOverNavItem = ref(0)
const showMenu = ref(false)
let viewportWidth = 1024

const colorMode = useColorMode()
function switchColorMode() {
  if (colorMode.value == 'dark')
    colorMode.preference = 'light'
  else
    colorMode.preference = 'dark'
}

const currentScrollPosition = ref(0)
const lastScrollPosition = ref(0)
const showNavbar = ref(true)
const atTop = ref(true)

function onScroll() {
// Get the current scroll position
  currentScrollPosition.value = window.pageYOffset || document.documentElement.scrollTop
  // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
  if (currentScrollPosition.value < 0)
    return
  if (currentScrollPosition.value > 40)
    atTop.value = false
  else
    atTop.value = true

  // Here we determine whether we need to show or hide the navbar
  showNavbar.value = currentScrollPosition.value < lastScrollPosition.value
  
  if (currentScrollPosition.value < lastScrollPosition.value && viewportWidth < 1024)
    showMenu.value = false
  // Set the current scroll position as the last scroll position
  lastScrollPosition.value = currentScrollPosition.value
}
function onResize() {
  viewportWidth = window.innerWidth
  if (viewportWidth >= 1024)
    showMenu.value = true
  else
    showMenu.value = false
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
  window.addEventListener('resize', onResize)
  viewportWidth = window.innerWidth
  if (viewportWidth >= 1024)
    showMenu.value = true
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onResize)
})

</script>

<style scoped>
.change-logo-color {
  filter: invert(9%) sepia(9%) saturate(13%) hue-rotate(334deg) brightness(94%) contrast(88%);
}
.dark .change-logo-color {
  filter: invert(96%) sepia(8%) saturate(1313%) hue-rotate(302deg) brightness(109%) contrast(101%);
}

.slide-right-enter-active {
  transition: all 0.3s ease-out;
}
.slide-right-leave-active {
  transition: all 0.3s ease-in;
}
.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

.slide-left-enter-active {
  transition: all 0.3s ease-out;
}
.slide-left-leave-active {
  transition: all 0.3s ease-in;
}
.slide-left-enter-from,
.slide-left-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.lift-up {
  transform: translateY(0px);
  transition: all 0.2s ease-out;
}
.lift-up:hover {
  transform: translateY(-2px);
  transition: all 0.2s ease-in;
}

.navbar-enter-active {
  transition: all 0.3s ease-out;
}
.navbar-leave-active {
  transition: all 0.3s ease-in 0.2s;
}
.navbar-enter-from,
.navbar-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}

.navmenu-enter-active {
  transition: opacity 0.2s ease-out;
}
.navmenu-leave-active {
  transition: opacity 0.2s ease-in;
}
.navmenu-enter-from,
.navmenu-leave-to {
  opacity: 0;
}
</style>