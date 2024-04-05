<script lang="ts" setup>
import { breadcrumbSchema } from '~/utils/navigation'

const links = ref(breadcrumbSchema['my-polls'])

onMounted(() => {
  links.value.push({
    label: 'Create Poll'
  })
})

onBeforeUnmount(() => {
  links.value.pop()
  breadcrumbSchema['my-polls'] = links.value
})
</script>

<template>
  <div class="w-full">
    <Breadcrumb :links="links" />
  </div>
</template>

<style scoped>

</style>
