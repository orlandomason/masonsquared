<template>
  <Header />

  <section class="flex justify-center items-center h-screen">
    <div class="max-w-[1920px] px-8 sm:px-16 lg:px-24">
      <h1 class="text-dkmain dark:text-ltmain font-heading text-3xl leading-relaxed tracking-wider 
      sm:text-5xl sm:leading-relaxed sm:tracking-wider
      lg:text-7xl lg:leading-relaxed lg:tracking-wider
      xl:text-8xl xl:leading-relaxed xl:tracking-wider">
        Building Websites and designing Brands for your Business
      </h1>
    </div>
  </section>

  <section id="websites-section" class="text-dkmain dark:text-ltmain pt-10">
    <!--
    <Animate class="w-fit border-b-[2px] sm:border-b-[3px] border-[#444] dark:border-ltmain pl-8 pb-2 sm:pl-16 sm:pr-1 sm:pb-5 lg:pl-24 lg:pr-2 lg:pb-8" animation="fade">
      <h2 class="font-heading leading-relaxed tracking-wider text-3xl sm:text-5xl lg:text-6xl">Work</h2>
    </Animate>-->
    <div class="w-fit">
      <AnimateOnEntry class="w-fit pl-8 pb-2 sm:pl-16 sm:pr-1 sm:pb-5 lg:pl-24 lg:pr-2 lg:pb-8
      transition-opacity duration-500 delay-1000" before="opacity-0" after="opacity-100" :threshold="1.0">
        <h2 class="font-heading leading-relaxed tracking-wider text-3xl sm:text-5xl lg:text-6xl">Our Work</h2>
      </AnimateOnEntry>
      <AnimateOnEntry class="h-0.5 sm:h-[3px] bg-dkmain dark:bg-ltmain transition-[width] duration-500 delay-500" before="w-[0%]" after="w-full" :threshold="1.0" />
    </div>

    <Portfolio></Portfolio>
  </section>

  <section class="dark:bg-dkmain dark:text-ltmain py-20 xl:py-32">
    <div class="flex flex-wrap">
      <!-- intro -->
      <div class="self-center w-full md:min-w-[452px] lg:flex-1 lg:max-w-[574px] lg:mr-14">
        <div class="w-fit">
          <AnimateOnEntry class="w-fit pl-8 pb-2 sm:pl-16 sm:pr-1 sm:pb-5 lg:pl-24 lg:pr-2 lg:pb-8
          transition-opacity duration-500 delay-1000" before="opacity-0" after="opacity-100" :threshold="1.0">
            <h2 class="font-heading leading-relaxed tracking-wider text-3xl sm:text-5xl lg:text-6xl">Who we are</h2>
          </AnimateOnEntry>
          <AnimateOnEntry class="h-0.5 sm:h-[3px] bg-dkmain dark:bg-ltmain transition-[width] duration-500 delay-500" before="w-[0%]" after="w-full" :threshold="1.0" />
        </div>

        <AnimateOnEntry class="sm:text-lg my-10 sm:my-12 ml-8 sm:ml-16 lg:ml-24 mr-8 sm:mr-16 lg:mr-0
        transition-opacity delay-1000 duration-500" before="opacity-0" after="opacity-100">
          <p>
            Masonsquared is a partnership between two brothers to build websites and brands for small to medium companies and start-ups. 
            Our combined skillsets provide a comprehensive service over the project's lifecycle. Our small size promotes a strong vision and nimble organisation.
          </p>
        </AnimateOnEntry>
      </div>
      <!-- profiles -->
      <div class="flex flex-wrap justify-evenly gap-8 max-w-5xl xl:justify-center xl:gap-20 2xl:justify-evenly text-ltmain dark:text-dkmain
      sm:mx-6 w-full md:mx-0 lg:flex-1 lg:w-auto md:min-w-[750px]">
        <div class="z-10 h-[576px] 2xl:h-[700px]">
          <div class="relative z-10 w-[320px] 2xl:w-[404px]">
            <AnimateOnEntry class="transition-all duration-500 delay-700" before="mb-[-100%]" after="mb-[-20%] 2xl:mb-[-28%]" ::threshold="1.0">
              <img class="rounded-full" src="~/assets/img/orlando-profile.jpg" alt="Orlando Mason" width="404" height="404" loading="lazy" />
            </AnimateOnEntry>
          </div>
          <div class="relative bg-dkmain dark:bg-ltmain pt-[100%] rounded-full z-0">
            <div class="absolute text-center top-0 right-0 left-0 bottom-0 mx-12 mt-20 mb-12 2xl:mx-16 2xl:mt-36 2xl:mb-12">
              <h3 class="mb-4 font-medium text-xl">Orlando Mason</h3>
              <p class="text-sm 2xl:text-base leading-6">
                As the tech-savvy side of the equation, I write the code that conjures the magic on your screen. I'm a fan of figuring out complex problems and relish in the details that bring your website to the next level.
              </p>
            </div>
          </div>
        </div>

        <div class="z-10  h-[576px] 2xl:h-[700px]">
          <div class="relative z-10 w-[320px] 2xl:w-[404px]">
            <AnimateOnEntry class="transition-all duration-500 delay-1000" before="mb-[-100%]" after="mb-[-20%] 2xl:mb-[-28%]" ::threshold="1.0">
              <img class="rounded-full" src="~/assets/img/felix-profile.jpg" alt="Felix Mason" width="404" height="404" loading="lazy" />
            </AnimateOnEntry>
          </div>
          <div class="relative bg-dkmain dark:bg-ltmain pt-[100%] rounded-full z-0">
            <div class="absolute text-center top-0 right-0 left-0 bottom-0 mx-12 mt-20 mb-12 2xl:mx-16 2xl:mt-36 2xl:mb-12">
              <h3 class="mb-4 font-medium text-xl">Felix Mason</h3>
              <p class="text-sm 2xl:text-base leading-6">
                I'm a graphic designer with experience in both digital and print spheres and most of my work currently centres on web and UI design. I work closely with my brother and business partner, who is a front-end developer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- contact section -->
  <section id="contact-section" class="bg-dkmain text-ltmain dark:bg-ltmain dark:text-dkmain py-20 xl:py-32">

    <div class="w-fit">
      <AnimateOnEntry class="w-fit pl-8 pb-2 sm:pl-16 sm:pr-1 sm:pb-5 lg:pl-24 lg:pr-2 lg:pb-8
      transition-opacity duration-500 delay-1000" before="opacity-0" after="opacity-100" :threshold="1.0">
        <h2 class="font-heading leading-relaxed tracking-wider text-3xl sm:text-5xl lg:text-6xl">Say hello</h2>
      </AnimateOnEntry>
      <AnimateOnEntry class="h-0.5 sm:h-[3px] bg-ltmain dark:bg-dkmain transition-[width] duration-500 delay-500" before="w-[0%]" after="w-full" :threshold="1.0" />
    </div>

    <div class="flex flex-col-reverse md:flex-row justify-between mx-8 sm:mx-16 lg:mx-24 mt-10 sm:mt-12">
      <AnimateOnEntry class="text-lg md:ml-2 xl:w-1/2 mt-16 md:mr-20 md:mt-0 transition-opacity delay-1000 duration-500" before="opacity-0" after="opacity-100"  :threshold="0.2">
        <p>
          Masonsquared
          <br>
          4 Imp. de la Voie Romaine
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
      </AnimateOnEntry>

      <!-- Contact Form -->
      <AnimateOnEntry class="xl:w-1/2 transition-opacity duration-500 delay-[1.3s]" before="opacity-0" after="opacity-100" :threshold="0.2">
        <form class="max-w-[480px] flex flex-col gap-4" action="https://formsubmit.co/hello@masonsquared.com" method="POST">
          <!-- name & email -->
          <div class="flex flex-wrap gap-4">
            <div class="flex-1 flex flex-col">
              <label class="text-lg py-1" for="name">Name</label>
              <input class="px-4 py-2 rounded-sm bg-ltmain text-dkmain dark:bg-dkmain dark:text-ltmain" type="text" id="name" name="name" required>
            </div>
            <div class="flex-1 flex flex-col">
              <label class="text-lg py-1" for="email">Email</label>
              <input class="px-4 py-2 rounded-sm bg-ltmain text-dkmain dark:bg-dkmain dark:text-ltmain" type="email" id="email" name="email" required>
            </div>
          </div>
          <!-- message -->
          <div class="flex flex-col">
            <label class="text-lg py-1" for="message">Message</label>
            <textarea class="h-24 px-4 py-2 rounded-sm bg-ltmain text-dkmain dark:bg-dkmain dark:text-ltmain" id="message" name="subject" required></textarea>
          </div>

          <input type="hidden" name="_subject" value="Masonsquared contact form">

          <!-- submit -->
          <div>
            <button class="flex leading-5 font-medium px-6 py-2 mt-2 rounded-md bg-ltmain text-dkmain dark:bg-dkmain dark:text-ltmain" type="submit" aria-label="Send">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 mr-2">
                  <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z" />
                </svg>
              </span>
              <span>
                Send
              </span>
            </button>
          </div>
        </form>
      </AnimateOnEntry>

    </div>
  </section>


  <footer class="text-sm px-24 py-5 bg-dkmain text-ltmain dark:bg-ltmain dark:text-dkmain">
    <p>© Masonsquared</p>
  </footer>
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

input:-webkit-autofill,
input:-webkit-autofill:focus {
  transition: background-color 600000s 0s, color 600000s 0s;
}
/*
input:autofill {
  color: theme('colors.dkmain');
  background-color: theme('colors.ltmain');
}
input:-webkit-autofill {
  color: theme('colors.dkmain');
  background-color: theme('colors.ltmain');
}
.dark input:autofill {
  color: theme('colors.ltmain');
  background-color: theme('colors.dkmain');
}
.dark input:-webkit-autofill {
  color: theme('colors.ltmain');
  background-color: theme('colors.dkmain');
}*/
</style>