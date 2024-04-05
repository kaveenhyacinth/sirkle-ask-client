<script lang="ts" setup>
import { z } from 'zod'
import type { FormError, FormSubmitEvent } from '#ui/types'
import type { RegisterContract } from '~/types/api.types'

definePageMeta({
  noSidebar: true,
  public: true
})

const { register } = useAuthStore()

const schema = z.object({
  email: z.string().email('Invalid email address'),
  username: z.string().min(5),
  password: z.string().min(8, 'Must be at least 8 characters'),
  confirmPassword: z.string().min(8, 'Must be at least 8 characters')
})

type Schema = z.output<typeof schema>

const validate = (data: any): FormError[] => {
  const errors: FormError[] = []
  if (data.password !== data.confirmPassword) {
    errors.push({
      path: 'confirmPassword',
      message: 'Passwords do not match'
    })
  }
  return errors
}

const state = reactive({
  email: '',
  username: '',
  password: '',
  confirmPassword: ''
})

const onSubmit = async (event: FormSubmitEvent<Schema>) => {
  const registerObj: RegisterContract = {
    email: event.data.email,
    username: event.data.username,
    password: event.data.password
  }

  await register(registerObj)
}
</script>

<template>
  <div class="w-full flex flex-col gap-4 mt-2">
    <h1 class="w-full text-center text-2xl font-bold">
      Register
    </h1>
    <UForm :schema="schema" :state="state" :validate="validate" class="space-y-4 mt-4" @submit="onSubmit">
      <UFormGroup label="Username" name="username">
        <UInput
          v-model="state.username"
          block
          class="form__input"
          placeholder="Enter your username"
        />
      </UFormGroup>
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
      <UFormGroup label="Confirm Password" name="confirmPassword">
        <UInput
          v-model="state.confirmPassword"
          class="form__input"
          placeholder="Re-enter your password"
          type="password"
        />
      </UFormGroup>
      <UButton block class="h-12 !mt-5" type="submit">
        Register
      </UButton>
    </UForm>
    <div>
      <p class="text-center mt-4">
        Already have an account?
        <ULink class="text-primary" to="/auth/login">
          Login
        </ULink>
      </p>
    </div>
  </div>
</template>

<style scoped>
.form__input > :deep(input) {
  height: 3rem;
}
</style>
