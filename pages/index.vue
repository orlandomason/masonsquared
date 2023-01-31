<template>
  <Header />

  <section class="flex justify-center items-center h-screen">
    <div class="px-24">
      <h1 class="text-[#222] dark:text-[#fff] font-heading text-8xl leading-relaxed tracking-wider">Building Websites and designing Brands for your Business</h1>
    </div>
  </section>
  <section class="text-dkmain dark:text-ltmain pb-32">
    <Animate class="w-fit pl-24 pr-2 pb-8 border-b-[3px] border-[#444] dark:border-ltmain" animation="fade">
      <h2 class="font-heading text-6xl leading-relaxed tracking-wider">Work</h2>
    </Animate>
    <Portfolio></Portfolio>
  </section>
  <section class="py-24 bg-dkmain text-ltmain">
    <Animate class="w-fit pl-24 pr-2 pb-6 border-b-[3px] border-[#444] dark:border-dkmain" animation="fade">
      <h2 class="font-heading text-6xl leading-relaxed tracking-wider">Say hello</h2>
    </Animate>
    <div class="flex px-[100px] mt-16">
      <div class="w-1/2 text-lg">
        <p>
          Masonsquared
          <br>
          Villefranche-du-Périgord
          <br>
          Nouvelle Aquitaine
          <br>
          France
          <br>
          24550
        </p>
        <br>
        <nuxt-link to="mailto:hello@masonsquared.com" class="underline">hello@masonsquared.com</nuxt-link>
        <br>
        <p>+44 079222111</p>
      </div>
      <div class="w-1/2">
        <form class="max-w-lg flex flex-col gap-4">
          <div class="flex gap-4">
            <div class="flex flex-col w-1/2">
              <label class="text-lg py-2" for="fname">First Name</label>
              <input class="px-4 py-2 rounded-sm bg-ltmain text-dkmain" type="text" id="fname" name="firstname">
            </div>
            <div class="flex flex-col w-1/2">
              <label class="text-lg py-2" for="email">Email</label>
              <input class="px-4 py-2 rounded-sm bg-ltmain text-dkmain" type="email" id="email" name="firstname">
            </div>
          </div>
          <div class="flex flex-col">
            <label class="text-lg py-2" for="message">Message</label>
            <textarea class="h-24 px-4 py-2 rounded-sm text-dkmain" id="message" name="subject"></textarea>
          </div>
          <div>
            <button class="flex gap-2 leading-5 font-medium px-6 py-2 mt-2 rounded-md bg-ltmain text-dkmain" type="submit">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                  <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z" />
                </svg>
              </span>
              <span>
                Send
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>

  <footer class="text-sm px-24 py-5 text-ltmain bg-dkmain ">
    <p>© Masonsquared</p>
  </footer>
  
  <!--
  <Waves />
  <section class="bg-primary-dark flex flex-col items-center">

    <div class="flex flex-col desktop:flex-row justify-center">

      <div class="flex justify-center items-end">
        <div class="desktop:hidden text-primary-light text-8xl">🡇</div>
        <div class="flex flex-col justify-center w-96 p-8 text-center desktop:text-right self-start">
          <h2 class="text-secondary-light text-3xl font-bold mb-2">Orlando Mason</h2>
          <h3 class="text-secondary-light text-lg font-bold italic mb-2">Front-end developer</h3>
          <p class="text-primary-light mb-3">As the tech-savvy side of the equation, I write the code that conjures the magic on your screen. I love solving puzzles and dealing with the nitty gritty!</p>
          <a class="text-secondary-light">LinkedIn →</a>
          <span class="hidden desktop:inline-block text-primary-light text-8xl">⮩</span>
        </div>
      </div>

      <div class="flex-1 max-w-3xl"><img class="rounded-md" src="/img/mason-brothers.jpg"/></div>

      <div class="flex justify-center items-start">
        <div class="flex flex-col justify-center w-96 p-8 text-center desktop:text-left self-end">
          <span class="hidden desktop:inline-block text-primary-light text-8xl">⮪</span>
          <h2 class="text-secondary-light text-3xl font-bold mb-2">Felix Mason</h2>
          <h3 class="text-secondary-light text-lg font-bold italic mb-2">Front-end developer</h3>
          <p class="text-primary-light">As the tech-savvy side of the equation, I write the code that conjures the magic on your screen. I love solving puzzles and dealing with the nitty gritty!</p>
          <a class="text-secondary-light">LinkedIn →</a>
        </div>
        <div class="desktop:hidden text-primary-light text-8xl">🡅</div>
      </div>

    </div>

    <h2 class="text-primary-light text-2xl w-full max-w-3xl mx-auto my-16">
      Having worked separately on websites in the past, in 2021 we decided to join forces to deliver custom web solutions to small & medium enterprises. As brothers with complimentary skills and characters, our capability has become greater than the sum of its parts.
    </h2>
  </section>
  <section class="w-[1200px] m-auto">
    <ul class="flex flex-wrap gap-4">
      <li 
      v-for="project in portfolio" :key="project.title" 
      @mouseover="project.mouseover = true" @mouseleave="project.mouseover = false" 
      class="w-[384px] h-[288px] overflow-hidden">
        <nuxt-img :src="project.cardImage" :alt="project.title" width="384" height="288" />

        <Transition name="slide-fade">
          <div v-if="project.mouseover" class="h-full bg-white">
          </div>
        </Transition>
      </li>
    </ul>
  </section>
  -->
</template>

<script setup>

const portfolio = ref([
  {
    title: "Les Caves GV",
    cardImage: "/img/les-caves-gv-card.png",
    mouseover: false,
  },
  {
    title: "Consh Tiny House",
    cardImage: "/img/consh-tiny-house-card.png",
    mouseover: false,
  },
  {
    title: "Trees of Music",
    cardImage: "/img/trees-of-music-card.png",
    mouseover: false,
  },
  {
    title: "Family History Finder",
    cardImage: "/img/family-history-finder-card.png",
    mouseover: false,
  },
  {
    title: "Tortus",
    cardImage: "/img/tortus-card.png",
    mouseover: false,
  },
  {
    title: "Plunder Lands",
    cardImage: "/img/plunder-lands-card.png",
    mouseover: false,
  }
])
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.3s ease-in;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>