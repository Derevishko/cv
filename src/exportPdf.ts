import html2pdf from 'html2pdf.js'

function waitForPaint(): Promise<void> {
  return new Promise((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => resolve())
    })
  })
}

export async function exportCvToPdf(
  element: HTMLElement,
  filename: string,
): Promise<void> {
  const root = document.documentElement
  root.classList.add('pdf-export-capture')
  if (document.fonts?.ready) {
    await document.fonts.ready
  }
  await waitForPaint()

  const opt = {
    margin: [8, 8, 8, 8] as [number, number, number, number],
    filename,
    image: { type: 'jpeg' as const, quality: 0.95 },
    /* avoid-all creates huge gaps; css/legacy only respect explicit break rules below */
    pagebreak: {
      mode: ['css', 'legacy'],
    },
    html2canvas: {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
    },
    jsPDF: {
      unit: 'mm',
      format: 'a4',
      orientation: 'portrait' as const,
    },
    enableLinks: true,
  }

  try {
    await html2pdf().set(opt).from(element).save()
  } finally {
    root.classList.remove('pdf-export-capture')
  }
}
