import { renderToStaticMarkup } from 'react-dom/server'
import { Home } from './pages/Home'

export function render() {
  return renderToStaticMarkup(<Home />)
}
