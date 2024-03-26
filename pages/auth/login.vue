<script lang="ts" setup>
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'

definePageMeta({
  noSidebar: true
})

const schema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Must be at least 8 characters')
})

type Schema = z.output<typeof schema>

const state = reactive({
  email: '',
  password: ''
})

const onSubmit = (event: FormSubmitEvent<Schema>) => {
  console.log('submit', event.data)
}
</script>

<template>
  <div class="w-full flex flex-col gap-4 mt-2">
    <h1 class="w-full text-center text-2xl font-bold">
      Login
    </h1>
    <UForm :schema="schema" :state="state" class="space-y-4 mt-4" @submit="onSubmit">
      <UFormGroup label="Email" name="email">
        <UInput
          v-model="state.email"
          class="form__input"
          placeholder="Enter your email"
          type="email"
        />
      </UFormGroup>
      <UFormGroup label="Password" name="password">
        <UInput
          v-model="state.password"
          class="form__input"
          placeholder="Enter your password"
          type="password"
        />
      </UFormGroup>

      <UButton block class="h-12 !mt-5" type="submit">
        Login
      </UButton>
    </UForm>
    <p class="text-center mt-4">
      Don't have an account?
      <ULink class="text-primary" to="/auth/register">
        Register
      </ULink>
    </p>
  </div>
</template>

<style scoped>
.form__input > :deep(input) {
  height: 3rem;
}
</style>
