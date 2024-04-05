import type { BreadcrumbLink } from '#ui/types'

export type IPage = 'home' | 'my-polls' | 'create-poll' | 'my-votes' | 'settings'

export const breadcrumbSchema: Record<IPage, BreadcrumbLink[]> = {
  home: [
    { label: 'Home', to: '/', icon: 'mdi:home' }
  ],
  'my-polls': [
    { label: 'My Polls', to: '/my-polls', icon: 'mdi:poll' }
  ],
  'my-votes': [
    { label: 'My Votes', to: '/my-votes', icon: 'mdi:vote' }
  ],
  settings: [
    { label: 'Settings', to: '/settings', icon: 'mdi:cog' }
  ],
  'create-poll': []
}

breadcrumbSchema['create-poll'] = [
  ...breadcrumbSchema['my-polls'],
  { label: 'Create Poll', to: '/create-poll' }
]
