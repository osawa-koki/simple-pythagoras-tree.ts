import fs from 'fs'
import { createCanvas } from 'canvas'
import drawPythagorasTree from './drawPythagorasTree'

function main (): void {
  const canvasSize = 256
  const canvas = createCanvas(canvasSize, canvasSize)
  const ctx = canvas.getContext('2d')
  ctx.fillStyle = 'rgb(255, 255, 255)'
  ctx.fillRect(0, 0, canvasSize, canvasSize)

  // @ts-expect-error `node-canvas` does not have some properties.
  drawPythagorasTree(ctx, canvasSize)

  const out = fs.createWriteStream('./image.png')
  const stream = canvas.createPNGStream()
  stream.pipe(out)
}
main()
