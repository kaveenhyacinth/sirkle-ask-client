<script lang="ts" setup>
const mobileFooterSchema = [
  {
    name: 'home',
    path: '/',
    icon: 'footer/home'
  },
  {
    name: 'poll',
    path: '/my-polls',
    icon: 'footer/poll'
  },
  {
    name: 'vote',
    path: '/my-votes',
    icon: 'footer/vote'
  },
  {
    name: 'settings',
    path: '/settings',
    icon: 'footer/settings'
  }
]
</script>

<template>
  <div class="w-full flex items-center justify-between py-4 shadow">
    <BottombarItemMobile v-for="item in mobileFooterSchema" :key="item.name" :path="item.path">
      <nuxt-icon :name="item.icon" class="item--active" />
    </BottombarItemMobile>
  </div>
</template>

<style lang="scss" scoped>
.shadow {
  box-shadow: 0 -8px 24px rgba(0, 0, 0, 0.1);
}

.item {
  &--active {
    & svg {
      fill: #10b981;
    }
  }
}
</style>
