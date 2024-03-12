<script lang="ts" setup>
import MdiMenu from '~icons/mdi/menu'

const isSidebarOpen = useSidebar()

const handleOnToggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}
</script>

<template>
  <div class="flex items-center py-3 px-4 gap-4">
    <h1 class="text-xl font-bold">
      Sirkl<span class="text-emerald">Ask</span>
    </h1>
    <button @click="handleOnToggleSidebar">
      <mdi-menu class="w-6 h-6" />
    </button>
  </div>
</template>

<style scoped>

</style>
