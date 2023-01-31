<template>
  <div ref="target" :class="animate ? `${animation}-to` : `${animation}-from`" :style="{ transition: transition }">
    <slot />
  </div>
</template>

<script setup>

const props = defineProps({
  animation: {
    type: String,
    default: 'fade',
  },
  transition: {
    type: String,
    default: 'all 0.6s ease-out',
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
      threshold: 0.2
    }
  )
  observer.observe(target.value);
})
</script>

<style scoped>
.fade-from {
  opacity: 0;
}
.fade-to {
  opacity: 1;
}

.slide-up-fade-from {
  opacity: 0;
  padding-top: 50%;
}
.slide-up-fade-to {
  opacity: 1;
  padding-top: 0;
}

</style>