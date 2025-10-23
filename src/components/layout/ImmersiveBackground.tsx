import { useEffect, useRef } from 'react';

export function ImmersiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      opacity: number;
    }> = [];

    const colors = [
      'rgba(179, 89, 255, ',
      'rgba(89, 200, 255, ',
      'rgba(139, 255, 194, ',
      'rgba(255, 122, 215, ',
    ];

    const particleCount = window.innerWidth < 768 ? 40 : 100;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 2.5 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.6 + 0.2,
      });
    }

    function animate() {
      if (!ctx || !canvas) return;

      ctx.fillStyle = 'rgba(10, 1, 24, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color + particle.opacity + ')';
        ctx.shadowBlur = 15;
        ctx.shadowColor = particle.color + '0.5)';
        ctx.fill();
        ctx.shadowBlur = 0;

        particles.forEach((otherParticle, j) => {
          if (i === j) return;
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            const opacity = 0.15 * (1 - distance / 120);
            ctx.strokeStyle = particle.color + opacity + ')';
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{ opacity: 0.7 }}
      />
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="aurora-orb absolute top-[10%] left-[15%] w-[500px] h-[500px] bg-primary/30" style={{ animationDelay: '0s', animationDuration: '25s' }} />
        <div className="aurora-orb absolute top-[60%] right-[10%] w-[600px] h-[600px] bg-secondary/25" style={{ animationDelay: '5s', animationDuration: '30s' }} />
        <div className="aurora-orb absolute bottom-[5%] left-[40%] w-[550px] h-[550px] bg-accent/20" style={{ animationDelay: '10s', animationDuration: '28s' }} />
        
        <div className="liquid-blob absolute top-[20%] right-[20%] w-[400px] h-[400px] bg-gradient-to-br from-primary/20 to-secondary/20" style={{ animationDelay: '0s' }} />
        <div className="liquid-blob absolute bottom-[30%] left-[10%] w-[350px] h-[350px] bg-gradient-to-tr from-accent/15 to-primary/15" style={{ animationDelay: '3s' }} />
        <div className="liquid-blob absolute top-[50%] left-[50%] w-[450px] h-[450px] bg-gradient-to-bl from-secondary/15 to-accent/20" style={{ animationDelay: '7s' }} />
      </div>
    </>
  );
}
