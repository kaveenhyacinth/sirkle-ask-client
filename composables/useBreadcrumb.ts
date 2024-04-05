import type { BreadcrumbLink } from '#ui/types'
import { breadcrumbSchema, type IPage } from '~/utils/navigation'

export const useBreadcrumb = (page: IPage): BreadcrumbLink[] => {
  return breadcrumbSchema[page]
}
