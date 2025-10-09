import React from 'react'

// Simple SVG growth graph (Faith + Action = Growth)
export default function Graph(){
  const points = [0, 40, 30, 70, 55, 95]
  const w = 800, h = 200
  const step = w / (points.length - 1)
  const path = points.map((p,i) => `${i===0 ? 'M' : 'L'} ${i*step} ${h - p}`).join(' ')
  return (
    <section className="mt-10 glass p-6 rounded-md">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold">Growth Journey</h3>
          <p className="text-sm text-gray-300">Faith + Action = Growth — a visual of progress through purpose-driven work.</p>
        </div>
        <div className="text-sm text-gray-400">Milestones • Mentorship • Impact</div>
      </div>

      <div className="mt-6 overflow-x-auto">
        <svg width="100%" viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="g" x1="0" x2="1">
              <stop offset="0%" stopColor="#f0d98a"/>
              <stop offset="100%" stopColor="#d4af37"/>
            </linearGradient>
          </defs>

          <path d={path} fill="none" stroke="url(#g)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
            <animate attributeName="stroke-dasharray" from="0,1000" to="1000,0" dur="1.8s" fill="freeze" />
          </path>

        </svg>
      </div>
    </section>
  )
}
