<script lang="ts" setup>
import { breadcrumbSchema } from '~/utils/navigation'
</script>

<template>
  <div class="w-full">
    <Breadcrumb :links="breadcrumbSchema['my-votes']" />
  </div>
</template>

<style scoped>

</style>
