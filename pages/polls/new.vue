<script lang="ts" setup>
import { z } from 'zod'
import type { FormError } from '#ui/types'
import MdiTrashCan from '~icons/mdi/trash-can'
import MdiPlus from '~icons/mdi/plus'
import type { IPollContract } from '~/types/api.types'

const breadcrumb = useBreadcrumb('create-poll')
const { onSuccess, onError, onInfo } = useNotification()

const schema = z.object({
  question: z.string().min(5, 'Question must be at least 5 characters'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  options: z.array(z.string().min(1, 'Option must be at least 1 character')).nonempty('Poll must have at least 2 options')
})

const state = reactive({
  question: '',
  description: '',
  options: ['', '']
})

const optionErrors = ref<number[]>([])

const validate = (data: any) => {
  const errors: FormError[] = []
  if (data.options.length < 2) {
    errors.push({
      path: 'options',
      message: 'Poll must have at least 2 valid options'
    })
    optionErrors.value.push(-1)
  } else if (data.options.length > 4) {
    errors.push({
      path: 'options',
      message: 'Poll can have a maximum of 4 options'
    })
    optionErrors.value.push(-1)
  } else {
    optionErrors.value = optionErrors.value.filter(error => error !== -1)
  }

  state.options.forEach((option: string, index: number) => {
    if (option.trim() === '') {
      errors.push({
        path: `option${index}`,
        message: 'Option cannot be empty'
      })
      optionErrors.value.push(index)
    } else {
      optionErrors.value = optionErrors.value.filter(error => error !== index)
    }
  })
  return errors
}

const onSubmit = async (event: any) => {
  const payload: IPollContract = {
    question: event.data.question,
    description: event.data.description,
    options: event.data.options?.map((option: string) => ({ value: option }))
  }

  try {
    const res = await useApi().pollModule.createPoll(payload)
    if (res) {
      onSuccess({ description: 'Poll created successfully!' })
      if (res?.meta?.id) {
        navigateTo(`/polls/${res.meta.id}`)
      }
    }
  } catch (error: any) {
    onError({ description: error?.response?._data?.message ?? 'Something went wrong!' })
  }
}

const onAddOption = () => {
  if (state.options.length > 4) {
    onError({
      description: 'Poll can have a maximum of 4 options.'
    })
    return
  }
  if (state.options.length === 3) {
    onInfo({
      description: 'Maximum number of options reached.'
    })
  }
  state.options.push('')
}

const onRemoveOption = (index: number) => {
  if (state.options.length <= 2) {
    onError({
      description: 'Poll must have at least 2 options.'
    })
  } else {
    state.options.splice(index, 1)
  }
}

const canAddOptions = (currentIndex: number) => {
  return state.options.length - 1 === currentIndex && state.options.length < 4
}

const canDeleteOptions = (currentIndex: number) => {
  return currentIndex > 1 && state.options.length > 2
}

</script>

<template>
  <div class="w-full h-full pb-6 flex flex-col">
    <section>
      <Breadcrumb :links="breadcrumb" />
    </section>
    <section>
      <UForm :schema="schema" :state="state" :validate="validate" class="space-y-4 mt-4" @submit="onSubmit">
        <UFormGroup label="Question" name="question" required>
          <UInput
            v-model="state.question"
            block
            class="form__input"
            placeholder="Poll question"
          />
        </UFormGroup>
        <UFormGroup label="Description" name="description" required>
          <UTextarea
            v-model="state.description"
            block
            class="form__input"
            placeholder="Write a description for your poll..."
            type="textarea"
          />
        </UFormGroup>
        <div>
          <h3 class="text-lg font-semibold">
            Options
            <span class="text-sm text-gray-400">({{ state.options.length }}/4)</span>
          </h3>
          <div
            v-for="(_, index) in state.options"
            :key="index"
          >
            <div :class="{'border-red-500': optionErrors.includes(index) || optionErrors.includes(-1)}" class="flex gap-2 my-2 pr-2 border border-gray-300 rounded-lg items-center">
              <UInput
                v-model="state.options[index]"
                :placeholder="'Option ' + (index + 1)"
                class="form__input w-full"
                variant="none"
              />
              <div class="flex justify-center items-center">
                <mdi-plus v-if="canAddOptions(index)" class="cursor-pointer" @click="onAddOption" />
                <mdi-trash-can v-if="canDeleteOptions(index)" class=" icon--trash cursor-pointer" @click="() => onRemoveOption(index)" />
              </div>
            </div>
            <UFormGroup :name="`option${index}`" />
          </div>
          <UFormGroup name="options" />
        </div>
        <UButton block class="h-12 !mt-8" type="submit">
          Save
        </UButton>
      </UForm>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.form__input > :deep(input) {
  height: 3rem;
}
.icon {
  &--trash {
    & :deep(path) {
      @apply text-red-500;

      &:hover {
        @apply text-red-600;
      }
      &:active {
        @apply text-red-700;
      }
    }
  }
}
</style>
