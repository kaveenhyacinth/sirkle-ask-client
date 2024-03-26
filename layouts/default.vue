<script lang="ts" setup>
import MobileSidebar from '~/components/Sidebar/MobileSidebar.vue'
import { useLayout } from '~/composables/useLayout'

const { noSidebar } = useLayout()
</script>

<template>
  <div class="h-screen flex flex-col">
    <nav>
      <Navbar />
    </nav>
    <main class="flex-1 px-4">
      <slot />
    </main>
    <MobileSidebar v-if="!noSidebar" />
  </div>
</template>

<style scoped>

</style>
