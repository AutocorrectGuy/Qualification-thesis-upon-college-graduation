import pptxgen from 'pptxgenjs'
import { PresentationType } from '../presentations/PresentationsAPIHandlers'
import { toast } from 'react-toastify'

type slideType = { h1: string; p: string }

export const DEFAULT_PRESENTATION_TEXT: PresentationType = {
  name: 'Prezentācijas nosaukums',
  textContent: `[h1]:1. Virsraksts šeit!
[p]:Bet apraksts - te.

[h1]:2. Otrais virsraksts!
[p]:Un arī otrais apraksts!

[h1]:3. Trešais virsraksts!
[p]:Un tā tālāk...`,
}

const getSlidesData = (inputText: string): slideType[] => {
  return inputText
    .split('[h1]:')
    .slice(1)
    .map((slide) => {
      const [h1, p] = slide.split('[p]:').map((text) => text.trim())
      return { h1, p }
    })
}
const generateSlide = ({
  pptx,
  h1,
  p,
}: {
  pptx: pptxgen
  h1: string
  p: string
}) => {
  console.log('generating slide...')
  const slide = pptx.addSlide()
  slide.addText(h1, {
    x: 1,
    y: 0.5,
    fontFace: 'Arial',
    fontSize: 36,
    bold: true,
    h: 1,
    valign: 'top',
  })
  slide.addText(p, {
    x: 1,
    y: 2,
    fontFace: 'Arial',
    fontSize: 24,
    h: 3.5,
    valign: 'top',
  })
}

export const generatePresentation = ({
  name,
  textContent,
}: PresentationType) => {
  let pptx = new pptxgen()
  getSlidesData(textContent).forEach(({ h1, p }) =>
    generateSlide({ pptx, h1, p })
  )
  pptx
    .writeFile({ fileName: `${name}.pptx` })
    .then(() => {
      toast.success(`Prezentācija "${name}" uzģenerēta!`)
    })
    .catch(() => {
      toast.error(`Kļūda ģenerētjot prezentāciju "${name}"!`)
    })
}
