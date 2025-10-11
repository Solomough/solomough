import React from 'react'

export default function Projects(){
  const items = [
    {title:'The Ark Academy', desc:'Education & skill platform for kingdom-driven developers and leaders.'},
    {title:'The Ark — Christ Riches in Glory', desc:'Discipleship and accountability platform.'},
    {title:'SEEPAF (Web3)', desc:'Donation & aid platform on blockchain.'},
    {title:'Faith-Tech Tools', desc:'Open-source ministry utilities.'}
  ]
  return (
    <section id="projects" className="mt-12">
      <h2 className="text-3xl font-bold">Projects</h2>
      <p className="text-gray-400 mt-2">Works that blend faith and innovation.</p>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(i=> (
          <article key={i.title} className="p-5 glass rounded-md shadow-md hover:scale-105 transition-transform">
            <h3 className="font-semibold text-white">{i.title}</h3>
            <p className="text-gray-300 mt-1 text-sm">{i.desc}</p>
            <div className="mt-3 text-xs">
              <a href="#" className="text-gold hover:underline">View Repo</a>
            </div>
          </article>
        ))}

        <article className="p-5 glass rounded-md shadow-md col-span-full sm:col-span-2 lg:col-span-1">
          <div className="flex items-start gap-4">
          
             <div>
              <h3 className="font-semibold text-white">From Visions to Call</h3>
              <p className="text-gray-300 mt-1 text-sm">A testimony of divine encounters and practical steps into destiny.</p>
              <div className="mt-3 text-xs">
                <a href="https://solomough.github.io/From-visions-to-call-/" target="_blank" rel="noreferrer" className="text-gold hover:underline">Open Book</a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
