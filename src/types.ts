export interface Section {
  id: string
  label: string
  component: JSX.Element
}

export interface NavigationProps {
  sections: Section[]
  onNavigate: (index: number) => void
}

export interface ScrollIndicatorProps {
  totalSections: number
  onNavigate: (index: number) => void
  containerRef: React.RefObject<HTMLDivElement>
}
