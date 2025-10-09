import React, { useEffect, useRef } from 'react'

export default function ParticlesBg() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let w = canvas.width = window.innerWidth
    let h = canvas.height = window.innerHeight
    const particles = []
    const count = Math.max(40, Math.round((w*h)/60000))

    function rand(min,max){return Math.random()*(max-min)+min}
    function create(){
      return { x: rand(0,w), y: rand(h*0.2,h), vx: rand(-0.15,0.15), vy: rand(-0.15,-0.6), r: rand(0.6,2.4), a: rand(0.08,0.25) }
    }
    for(let i=0;i<count;i++) particles.push(create())

    function loop(){
      ctx.clearRect(0,0,w,h)
      particles.forEach(p=>{
        p.x += p.vx + Math.sin((p.y + performance.now()*0.0002)*0.01)*0.02
        p.y += p.vy
        if(p.y < -10 || p.x < -50 || p.x > w+50) Object.assign(p, create(), { y: h+Math.random()*h*0.1 })
        const g = ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,p.r*6)
        g.addColorStop(0, `rgba(212,160,103,${p.a})`)
        g.addColorStop(0.6, `rgba(212,160,103,${p.a*0.35})`)
        g.addColorStop(1, 'rgba(212,160,103,0)')
        ctx.fillStyle = g
        ctx.beginPath()
        ctx.arc(p.x,p.y,p.r*3,0,Math.PI*2)
        ctx.fill()
      })
      requestAnimationFrame(loop)
    }

    function onResize(){ w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight }
    window.addEventListener('resize', onResize)
    loop()
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return <canvas ref={canvasRef} id="particles" style={{ position:'fixed', inset:0, zIndex:-1, pointerEvents:'none' }} aria-hidden />
    }
