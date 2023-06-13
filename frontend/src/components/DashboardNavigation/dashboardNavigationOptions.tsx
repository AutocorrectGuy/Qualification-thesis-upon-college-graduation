import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import {
  faComputer,
  faDatabase,
  faFilePowerpoint,
  faFileText,
  faHome,
  faInfo,
  faPieChart,
} from '@fortawesome/free-solid-svg-icons'

type DashboardNavItem = {
  icon: IconDefinition
  innerText: string
  to: string
}

export type DashboardSection = {
  title: string
  items: DashboardNavItem[]
}

const dashboardNavigationOptions: DashboardSection[] = [
  {
    title: 'galvenā izvēlne',
    items: [
      {
        icon: faHome,
        innerText: 'sākums',
        to: '/'
      },
      {
        icon: faDatabase,
        innerText: 'Prezentācijas',
        to: '/presentations'
      }
    ],
  },
  {
    title: 'izveido prezentācijas',
    items: [
      {
        icon: faInfo,
        innerText: 'Instrukcija',
        to: '/instruction'
      },
      {
        icon: faFileText,
        innerText: 'Uzģenerē tekstu',
        to: '/create-prompt'
      },
      {
        icon: faFilePowerpoint,
        innerText: 'Izveido PPTX failu',
        to: '/create-pptx'
      },
    ],
  },
  {
    title: 'JAK uzdevumi',
    items: [
      {
        icon: faComputer,
        innerText: '1.1. - 1. uzdevums',
        to: '/uzdevums-1'
      },
      {
        icon: faComputer,
        innerText: '1.1. - 2. uzdevums',
        to: '/uzdevums-2'
      }
    ],
  },

]

export default dashboardNavigationOptions