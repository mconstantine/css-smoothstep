window.addEventListener('load', function() {
  const targetTitle = document.querySelector('#target');
  const currentSizeParagraph = document.querySelector('#current-size')
  const canvas = document.querySelector('#path-drawer')

  if (!currentSizeParagraph || !canvas) {
    return
  }


  const measure = () => {
    const width = Math.min(window.innerWidth * 0.9, 1280)
    const height = 320

    canvas.width = width
    canvas.height = height

    const context = canvas.getContext('2d')
    const targetTitleFontSize = this.getComputedStyle(targetTitle).fontSize;

    currentSizeParagraph.innerText = `Current font-size: ${targetTitleFontSize}`;

    context.font = '16px sans-serif'
    context.clearRect(0, 0, canvas.width, canvas.height)

    const drawPoint = (screenSize) => {
      const fontSize = 64 / 1280 * screenSize
      const x = screenSize / 1920 * width
      const y = height - Math.min(fontSize / 64 * height, height)

      context.fillRect(x - 1, y - 1, 3, 3)
    }

    context.beginPath()
    context.moveTo(0, height)
    context.lineTo(width, height)
    context.stroke()
    context.fillText('Viewport size', width - 100, height - 16)

    context.beginPath()
    context.moveTo(0, height)
    context.lineTo(0, 0)
    context.stroke()
    context.fillText('Font size', 16, 16)

    context.fillStyle = '#F44336'

    for (let i = 0; i < window.innerWidth; i++) {
      drawPoint(i)
    }
  }

  measure()
  window.addEventListener('resize', measure)
})
