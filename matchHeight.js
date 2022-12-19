const matchHeight = (className) => {
  let cards = document.getElementsByClassName(className)
  if (cards.length != 0) {
    cards = Array.from(cards)
    const heights = []
    cards.forEach((card) => {
      heights.push(card.clientHeight)
    })

    const aryMax = (a, b) => {
      return Math.max(a, b)
    }
    cards.forEach((card) => {
      card.style.height = heights.reduce(aryMax) + "px"
    })
  }
}
