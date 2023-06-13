export const catAnimationkeyframes = `
  @keyframes cat-blinking {
    0% {
      transform: translateY(-100%);
    }
    1% {
      transform: translateY(-100%);
    }
    1.5% {
      transform: translateY(0%);
    }
    3% {
      transform: translateY(-100%);
    }
    54% {
      transform: translateY(-100%);
    }
    54.25% {
      transform: translateY(0%);
    }
    55% {
      transform: translateY(-100%);
    }
    55.5% {
      transform: translateY(-100%);
    }
    55.75% {
      transform: translateY(0%);
    }
    56.5% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(-100%);
    }
  }
`

export const catAppearDisappearAnimation = {
  animationName: 'cat-blinking',
  animationDuration: '20000ms',
  animationTimingFunction: 'ease-in-out',
  animationIterationCount: 'infinite',
}