export const NotFound = () => {
  return (
    <div className="w-full h-screen bg-cream flex flex-col items-center justify-center gap-4">
      <h1 className="text-ink text-4xl font-display font-bold">404</h1>
      <p className="text-muted text-sm font-body">This page doesn't exist.</p>
      <a href="/" className="text-blush text-sm font-body hover:underline">Go home</a>
    </div>
  )
}
