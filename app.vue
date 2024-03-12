<script lang="ts" setup>
const { width: screenWidth } = useWindowSize()

const isMobile = ref(false)
const isAppReady = ref(false)

onNuxtReady(() => {
  isAppReady.value = true
})

watchEffect(() => {
  isMobile.value = screenWidth.value <= MAX_ALLOWED_SCREEN_WIDTH
})

const schema = {
  users: {
    1: {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com'
    }
  },
  polls: {
    1: {
      id: 1,
      title: 'Best programming language',
      options: [
        { id: 1, label: 'JavaScript', votes: 0 },
        { id: 2, label: 'TypeScript', votes: 0 },
        { id: 3, label: 'Python', votes: 0 }
      ],
      createdBy: 1,
      createdAt: new Date()
    }
  },
  votes: {
    1: {
      id: 1,
      pollId: 1,
      userId: 1,
      optionId: 1
    }
  }
}
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
    <NotSupported v-if="!isMobile && isAppReady" />
  </NuxtLayout>
</template>
