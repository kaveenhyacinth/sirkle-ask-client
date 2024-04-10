<script lang="ts" setup>
import type { IPoll } from '~/types/api.types'

const props = defineProps<{ poll?: IPoll, selectedVote?: string, isExpired: boolean }>()
const emits = defineEmits<{(e: 'update:selected-vote', optionId?: string): void}>()

const sortedVoteOptions = computed(() => props?.poll?.options?.map(option => ({
  ...option,
  percentage: toPercentage(option.votes, props?.poll?.votes)
}))?.sort((a, b) => b.votes - a.votes))

const toPercentage = (votes: number = 0, totalVotes: number = 0): number => {
  if (totalVotes === 0) {
    return 0
  }
  return Math.round((votes / totalVotes) * 100)
}

const onSelectVote = (optionId: string) => {
  if (props.selectedVote === optionId) {
    return emits('update:selected-vote', undefined)
  }
  emits('update:selected-vote', optionId)
}
</script>

<template>
  <div
    v-for="(option, index) in sortedVoteOptions"
    :key="option._id"
    :class="{'result__card--max': index === 0 && props?.poll?.votes !== 0, 'border-eire-black-600': selectedVote === option._id && !props.isExpired}"
    class="result__card"
    @click="() => onSelectVote(option._id)"
  >
    <h2 class="font-semibold text-md">
      {{ option.value }}
    </h2>
    <UProgress :value="option.percentage" size="lg" />
    <div class="flex justify-between">
      <p class="text-sm font-medium text-gray-500">
        {{ pluralizeNumber(option.votes, 'vote') }}
      </p>
      <p class="text-sm font-medium text-gray-500">
        {{ option.percentage }}%
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.result__card {
  @apply flex flex-col gap-1 p-2 mb-2 border border-gray-300 rounded-xl;
  border-left-width: 6px;

  &:hover {
    @apply border-gray-400;
  }

  &--max {
    @apply border-primary;
    &:hover {
      @apply border-primary-600;
    }
  }
}
</style>
