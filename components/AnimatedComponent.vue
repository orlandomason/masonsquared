<template>
  <div ref="target">
    <transition :name="animationType">
      <div v-show="animate" class="animated-component">
        <slot />
      </div>
    </transition>
  </div>
</template>

<script setup>

const props = defineProps({
  animationType: {
    type: String,
    default: 'fade',
  },
})

const target = ref();
const animate = ref(false);

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (animate.value == false)
        animate.value = entry.isIntersecting
    },
    {
      threshold: 0.5
    }
  )
  observer.observe(target.value);
})
</script>

<style scoped>

/* Fade animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 300ms ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
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
</style>