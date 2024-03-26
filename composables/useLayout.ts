export const useLayout = () => {
  const route = useRoute()

  const noSidebar = computed(() => route.meta?.noSidebar ?? false)

  return {
    noSidebar
  }
}
