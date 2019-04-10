import useWindowDimensions from './useWindowDimensions'

function useViewport() {
  const { windowWidth } = useWindowDimensions()

  // small
  if (windowWidth <= 767) {
    return {
      isSmall: true,
      isMedium: false,
      isLarge: false,
    }
  }

  // medium
  if (windowWidth >= 768 && windowWidth <= 1024) {
    return {
      isSmall: false,
      isMedium: true,
      isLarge: false,
    }
  }

  // large
  if (windowWidth > 1025) {
    return {
      isSmall: false,
      isMedium: false,
      isLarge: true,
    }
  }

  return {}
}

export default useViewport
