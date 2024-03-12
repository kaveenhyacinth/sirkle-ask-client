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
  <aside>
    <div v-show="isSidebarOpen" class="fixed inset-0 bg-black bg-opacity-20 z-50" @click="handleOnToggleSidebar" />
    <div v-show="isSidebarOpen" class="fixed top-0 left-0 w-3/4 h-full bg-white z-50 rounded-tr-2xl rounded-br-2xl">
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
    </div>
  </aside>
</template>

<style scoped>

</style>
