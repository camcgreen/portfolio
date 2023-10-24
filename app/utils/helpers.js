export function remap(value, oldMin, oldMax, newMin, newMax) {
  return newMin + ((value - oldMin) * (newMax - newMin)) / (oldMax - oldMin)
}

export function easeOutCubic(t) {
  // return --t * t * t + 1
  return t
}

export function handleCardShuffling() {
  console.log("woo")
}

export function calculateProjectIndex(scrollLevel, numCards) {
  return (((scrollLevel + 1) % numCards) + numCards) % numCards
}
