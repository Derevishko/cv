import type { CvId } from './types'

const PARAM = 'v'

export function parseCvIdFromLocation(): CvId {
  const raw = new URLSearchParams(window.location.search).get(PARAM)
  if (raw === 'frontend' || raw === 'backend' || raw === 'fullstack') {
    return raw
  }
  return 'fullstack'
}

export function setCvIdInUrl(id: CvId): void {
  const url = new URL(window.location.href)
  url.searchParams.set(PARAM, id)
  window.history.replaceState({}, '', url)
}
