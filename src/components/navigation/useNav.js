export const useNav = (onNavigate) => {
  const navigateTo = (item) => {
    if (item.type === 'section') {
      document
        .getElementById(item.target)
        ?.scrollIntoView({ behavior: 'smooth' })
    }

    onNavigate?.()
  }

  return { navigateTo }
}