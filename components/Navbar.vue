<script lang="ts" setup>
import MdiMenu from '~icons/mdi/menu'

const isSidebarOpen = useSidebar()
const { noSidebar } = useLayout()

const handleOnToggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}
</script>

<template>
  <div class="flex items-center py-3 px-4 gap-4">
    <h1 class="text-xl font-bold">
      Sirkl<span class="text-primary">Ask</span>
    </h1>
    <button v-if="!noSidebar" @click="handleOnToggleSidebar">
      <mdi-menu class="w-6 h-6" />
    </button>
  </div>
</template>

<style scoped>

</style>
