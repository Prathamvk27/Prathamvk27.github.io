import { renderToStaticMarkup } from 'react-dom/server'
import App from './App'
import { workNotes } from './data/profileData'

export function render(pathname = '/') {
  return renderToStaticMarkup(<App pathname={pathname} />)
}

export const pages = workNotes.map((note) => ({
  path: `/blog/${note.slug}/`,
  title: note.title,
  description: note.introduction,
}))
