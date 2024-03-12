<script lang="ts" setup>
import MobileSidebar from '~/components/Sidebar/MobileSidebar.vue'
</script>

<template>
  <div class="h-screen flex flex-col">
    <nav>
      <Navbar />
    </nav>
    <main class="flex-1 px-4">
      <slot />
    </main>
    <MobileSidebar />
  </div>
</template>

<style scoped>

</style>
