import { site } from '../data/site'

const sizeMap = {
  sm: 'w-36 h-36',
  md: 'w-44 h-44',
  lg: 'w-52 h-52 sm:w-60 sm:h-60 lg:w-72 lg:h-72',
}

export default function ProfilePhoto({ className = '', size = 'lg' }) {
  if (!site.photo) return null

  const dim = sizeMap[size] || sizeMap.lg

  return (
    <div className={`relative ${dim} ${className}`}>
      {/* Animated ring */}
      <div
        className="absolute -inset-2 rounded-full opacity-60 animate-photoRing"
        style={{
          background: 'conic-gradient(from 0deg, #2563EB, #0EA5E9, #2563EB)',
          mask: 'radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 2px))',
          WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 2px))',
        }}
      />

      <div className="absolute inset-0 rounded-full bg-primary/10 shadow-glow" />

      <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-card shadow-card-hover ring-2 ring-primary/25">
        <img
          src={site.photo}
          alt={`${site.name} — Cloud Engineer`}
          className="w-full h-full object-cover object-[center_18%] scale-[1.12]"
        />
      </div>
    </div>
  )
}
