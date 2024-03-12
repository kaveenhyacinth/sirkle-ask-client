<script lang="ts" setup>
import MdiClose from '~icons/mdi/close'

const isSidebarOpen = useSidebar()

const navigationSchema = [
  {
    path: '/',
    pathName: 'Home'
  },
  {
    path: '/my-polls',
    pathName: 'My Polls'
  },
  {
    path: '/my-votes',
    pathName: 'My Votes'
  },
  {
    path: '/settings',
    pathName: 'Settings'
  }
]

const handleOnToggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}
</script>

<template>
  <USlideover v-model="isSidebarOpen" class="w-3/5" side="left">
    <div class="flex justify-between items-center py-3 px-4 gap-2">
      <nuxt-link to="/">
        <h1 class="text-xl font-bold">
          Sirkl<span class="text-emerald">Ask</span>
        </h1>
      </nuxt-link>
      <button @click="handleOnToggleSidebar">
        <mdi-close class="w-6 h-6" />
      </button>
    </div>
    <nav class="px-4 mt-4">
      <ul class="flex flex-col gap-2">
        <SidebarItem
          v-for="item in navigationSchema"
          :key="item.pathName"
          :path="item.path"
          :path-name="item.pathName"
          @toggle-sidebar="handleOnToggleSidebar"
        />
      </ul>
    </nav>
  </USlideover>
</template>

<style scoped>
</style>
