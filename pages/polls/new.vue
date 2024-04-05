<script lang="ts" setup>

const breadcrumb = useBreadcrumb('create-poll')
</script>

<template>
  <div class="w-full">
    <Breadcrumb :links="breadcrumb" />
  </div>
</template>

<style scoped>

</style>
