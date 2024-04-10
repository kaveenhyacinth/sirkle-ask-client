export interface Notification {
  title?: string
  description: string
}

export const useNotification = () => {
  const toast = useToast()

  const onSuccess = (payload: Notification) => {
    toast.add({
      title: payload.title,
      description: payload.description,
      color: 'green',
      timeout: 3000
    })
  }

  const onError = (payload: Notification) => {
    toast.add({
      title: payload.title,
      description: payload.description,
      color: 'red',
      timeout: 3000
    })
  }

  const onInfo = (payload: Notification) => {
    toast.add({
      title: payload.title,
      description: payload.description,
      color: 'blue',
      timeout: 3000
    })
  }

  return {
    onSuccess,
    onError,
    onInfo
  }
}
