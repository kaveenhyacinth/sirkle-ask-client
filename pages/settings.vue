<script lang="ts" setup>
import { breadcrumbSchema } from '~/utils/navigation'

const formState = reactive({
  username: '',
  currentPassword: '',
  newPassword: '',
  confirmPassword: ''
})
</script>

<template>
  <div class="w-full h-full pb-6 flex flex-col gap-6">
    <section>
      <Breadcrumb :links="breadcrumbSchema['settings']" />
    </section>
    <section>
      <div>
        <UForm :state="formState" class="w-full flex flex-col gap-4">
          <UFormGroup label="Username" name="username">
            <UInput v-model="formState.username" type="text" />
          </UFormGroup>

          <div class="border border-gray-400 rounded-xl border-dashed p-4">
            <h2 class="text-md font-semibold mb-4">
              Change Password
            </h2>
            <div class="flex flex-col gap-2">
              <UFormGroup label="Current Password" name="currentPassword">
                <UInput v-model="formState.currentPassword" type="password" />
              </UFormGroup>
              <UFormGroup label="New Password" name="newPassword">
                <UInput v-model="formState.newPassword" type="password" />
              </UFormGroup>
              <UFormGroup label="Confirm Password" name="confirmPassword">
                <UInput v-model="formState.confirmPassword" type="password" />
              </UFormGroup>
            </div>
          </div>

          <UButton class="h-10 flex justify-center items-center" type="submit">
            Save Changes
          </UButton>
        </UForm>
      </div>
    </section>
    <section class="mt-auto">
      <div
        class="w-full flex justify-between items-center border border-error rounded-xl border-dashed p-4"
      >
        <p>Delete user account</p>
        <UButton
          class="h-10 flex justify-center items-center bg-error hover:bg-red-700 w-20"
          type="button"
        >
          Delete
        </UButton>
      </div>
    </section>
  </div>
</template>

<style scoped>

</style>
