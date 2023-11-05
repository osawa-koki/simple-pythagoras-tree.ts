import fs from 'fs'
import path from 'path'
import { createCanvas } from 'canvas'
import drawPythagorasTree, { type Props } from './drawPythagorasTree'

const outputDir = './images/'
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir)

const propsList: Array<Props & { fileName: string }> = [
  {
    canvasSize: 512,
    colorHueStart: 0,
    colorHueEnd: 360,
    size: 15,
    left: 35,
    bottom: 15,
    baseDegree: 60,
    maxIterations: 10,
    fileName: 'pythagoras-tree-1.png'
  },
  {
    canvasSize: 512,
    colorHueStart: 0,
    colorHueEnd: 360,
    size: 15,
    left: 65,
    bottom: 15,
    baseDegree: 30,
    maxIterations: 10,
    fileName: 'pythagoras-tree-2.png'
  },
  {
    canvasSize: 512,
    colorHueStart: 0,
    colorHueEnd: 360,
    size: 15,
    left: 50,
    bottom: 15,
    baseDegree: 45,
    maxIterations: 10,
    fileName: 'pythagoras-tree-3.png'
  },
  {
    canvasSize: 512,
    colorHueStart: 0,
    colorHueEnd: 360,
    size: 14,
    left: 35,
    bottom: 15,
    baseDegree: 60,
    maxIterations: 15,
    fileName: 'pythagoras-tree-4.png'
  },
  {
    canvasSize: 512,
    colorHueStart: 0,
    colorHueEnd: 360,
    size: 13,
    left: 35,
    bottom: 20,
    baseDegree: 60,
    maxIterations: 25,
    fileName: 'pythagoras-tree-5.png'
  }
]

function main (): void {
  propsList.forEach((props) => {
    const canvas = createCanvas(props.canvasSize, props.canvasSize)
    const ctx = canvas.getContext('2d')
    ctx.fillStyle = 'rgb(255, 255, 255)'
    ctx.fillRect(0, 0, props.canvasSize, props.canvasSize)

    // @ts-expect-error `node-canvas` does not have some properties.
    drawPythagorasTree(ctx, props)

    const out = fs.createWriteStream(path.join(outputDir, props.fileName))
    const stream = canvas.createPNGStream()
    stream.pipe(out)
  })
}
main()
