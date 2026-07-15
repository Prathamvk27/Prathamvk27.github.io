export function GearDoodle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="30" cy="30" r="8" />
      <path d="M30 12v4M30 44v4M12 30h4M44 30h4M17.5 17.5l2.8 2.8M39.7 39.7l2.8 2.8M17.5 42.5l2.8-2.8M39.7 20.3l2.8-2.8" />
      <circle cx="30" cy="30" r="3" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function GraphDoodle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 52 V12" />
      <path d="M8 52 H52" />
      <circle cx="16" cy="40" r="3" fill="currentColor" stroke="none" />
      <circle cx="28" cy="28" r="3" fill="currentColor" stroke="none" />
      <circle cx="40" cy="20" r="3" fill="currentColor" stroke="none" />
      <path d="M16 40 L28 28 L40 20" strokeWidth="1.5" />
      <path d="M28 28 L40 28" strokeWidth="1" strokeDasharray="2 2" />
      <path d="M16 40 L28 40" strokeWidth="1" strokeDasharray="2 2" />
      <path d="M28 20 L40 20" strokeWidth="1" strokeDasharray="2 2" />
    </svg>
  )
}

export function SparkleDoodle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2 L13 9 L20 10 L13 11 L12 18 L11 11 L4 10 L11 9 Z" />
    </svg>
  )
}

export function UnderlineDoodle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 12" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" preserveAspectRatio="none">
      <path d="M2 8 Q 20 2 40 8 T 80 8 T 118 6" strokeWidth="2.5" />
    </svg>
  )
}

export function ArrowDoodle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12 H32" />
      <path d="M24 4 L32 12 L24 20" />
    </svg>
  )
}

export function CircleFrameDoodle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" preserveAspectRatio="none">
      <path d="M100 10 C145 10 190 55 190 100 C190 145 145 190 100 190 C55 190 10 145 10 100 C10 55 55 10 100 10 Z" strokeDasharray="4 4" />
      <path d="M100 6 C150 6 194 50 194 100 C194 150 150 194 100 194 C50 194 6 150 6 100 C6 50 50 6 100 6 Z" />
      <path d="M30 30 L40 40 M170 30 L160 40 M30 170 L40 160 M170 170 L160 160" strokeWidth="1.5" />
    </svg>
  )
}

export function PenUnderline({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 8" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" preserveAspectRatio="none">
      <path d="M2 4 C 30 1 50 7 80 4 S 100 6 118 4" />
    </svg>
  )
}
