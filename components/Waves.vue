<template>
  <div class="waveWrapper waveAnimation">
    <div class="waveWrapperInner bgTop">
      <div
        class="wave waveTop"
        style="
          background-image: url('https://masonsquared.com/wp-content/uploads/2022/06/wave-1.svg');
        "
      ></div>
    </div>
    <div class="waveWrapperInner bgMiddle">
      <div
        class="wave waveMiddle"
        style="
          background-image: url('https://masonsquared.com/wp-content/uploads/2022/06/wave-2.svg');
        "
      ></div>
    </div>
    <div class="waveWrapperInner bgBottom">
      <div
        class="wave waveBottom"
        style="
          background-image: url('https://masonsquared.com/wp-content/uploads/2022/06/wave-3.svg');
        "
      ></div>
    </div>
  </div>
</template>

<style scoped>
@keyframes move_wave_left {
  0% {
    transform: translateX(0) translateZ(0) scaleY(1);
  }
  50% {
    transform: translateX(-25%) translateZ(0) scaleY(0.6);
  }
  100% {
    transform: translateX(-50%) translateZ(0) scaleY(1);
  }
}
@keyframes move_wave_right {
  0% {
    transform: translateX(-50%) translateZ(0) scaleY(1);
  }
  50% {
    transform: translateX(-25%) translateZ(0) scaleY(0.6);
  }
  100% {
    transform: translateX(0) translateZ(0) scaleY(1);
  }
}
@keyframes opaque_wave {
  0% {
    transform: translateX(0) translateZ(0) scaleY(0.4);
  }
  50% {
    transform: translateX(-25%) translateZ(0) scaleY(0.7);
  }
  100% {
    transform: translateX(-50%) translateZ(0) scaleY(0.4);
  }
}
.verticallyFlipped {
  transform: scaleY(-1);
}
.waveWrapper {
  position: relative;
  width: 100%;
  height: 100px;
  /*mix-blend-mode: darken;*/
}
.waveWrapperInner {
  position: absolute;
  width: 100%;
  overflow: hidden;
  height: 100%;
  -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 20%, black);
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 20%, black);
}
.bgTop {
  z-index: 15;
  opacity: 1;
}
.bgMiddle {
  z-index: 10;
  opacity: 1;
}
.bgBottom {
  z-index: 5;
  opacity: 1;
}
.wave {
  position: absolute;
  left: 0;
  width: 200%;
  height: 100%;
  background-repeat: repeat no-repeat;
  background-position: 0 bottom;
  transform-origin: center bottom;
}
.waveTop {
  background-size: 50% 100px;
}
.waveAnimation .waveTop {
  animation: move_wave_right 40s linear infinite;
}
.waveMiddle {
  background-size: 50% 100px;
}
.waveAnimation .waveMiddle {
  animation: move_wave_left 20s linear infinite;
}
.waveBottom {
  background-size: 50% 100px;
}
.waveAnimation .waveBottom {
  animation: opaque_wave 30s linear infinite;
}
</style>