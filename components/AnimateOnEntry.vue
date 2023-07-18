<template>
  <div ref="target" :class="animate ? after : before">
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  after: {
    type: String,
    required: true,
  },
  before: {
    type: String,
    required: true,
  },
  threshold: {
    type: Number,
    default: 0.5,
  },
})

const target = ref();
const animate = ref(false);

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (animate.value == false) {
        animate.value = entry.isIntersecting
      }
    },
    {
      threshold: props.threshold
    }
  )
  observer.observe(target.value);
})
</script>