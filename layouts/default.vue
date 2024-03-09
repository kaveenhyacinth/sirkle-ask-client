<script lang="ts" setup>
</script>

<template>
  <div class="h-screen flex flex-col">
    <nav>
      <Navbar />
    </nav>
    <main class="flex-1">
      <slot />
    </main>
    <footer>
      <BottombarMobile />
    </footer>
  </div>
</template>

<style scoped>

</style>
