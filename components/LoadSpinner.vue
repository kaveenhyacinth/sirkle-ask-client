<template>
  <div class="w-full h-full bg-white fixed top-0 left-0 z-50 flex flex-col justify-center items-center gap-4">
    <div class="spinner" />
    <p class="text-xl text-gray-500">
      <slot>
        Loading...
      </slot>
    </p>
  </div>
</template>

<style scoped>

.spinner {
  width: 80px;
  height: 80px;
  @apply bg-primary-400;

  border-radius: 100%;
  -webkit-animation: sk-scaleout 1s infinite ease-in-out;
  animation: sk-scaleout 1s infinite ease-in-out;
}

@-webkit-keyframes sk-scaleout {
  0% {
    -webkit-transform: scale(0);
  }
  100% {
    -webkit-transform: scale(1);
    opacity: 0;
  }
}

@keyframes sk-scaleout {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 0;
  }
}
</style>
