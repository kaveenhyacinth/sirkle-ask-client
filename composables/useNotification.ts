export interface Notification {
  title?: string
  description: string
}

export const useNotification = () => {
  const toast = useToast()

  const onSuccess = (payload: Notification) => {
    toast.add({
      title: payload.title ?? 'Success!',
      description: payload.description,
      color: 'green'
    })
  }

  const onError = (payload: Notification) => {
    toast.add({
      title: payload.title ?? 'Error!',
      description: payload.description,
      color: 'red'
    })
  }

  return {
    onSuccess,
    onError
  }
}
