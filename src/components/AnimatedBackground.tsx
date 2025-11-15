
import React, { useEffect, useRef } from 'react';

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 100;
    const connectionDistance = 150;
    const mouseRadius = 120;

    let mouse = {
      x: null as number | null,
      y: null as number | null,
    };

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.6;
        this.speedY = (Math.random() - 0.5) * 0.6;
        this.color = `rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1})`;
      }

      update() {
        // Move particles
        this.x += this.speedX;
        this.y += this.speedY;

        // Handle mouse interaction
        if (
          mouse.x != null &&
          mouse.y != null &&
          Math.hypot(mouse.x - this.x, mouse.y - this.y) < mouseRadius
        ) {
          const angle = Math.atan2(mouse.y - this.y, mouse.x - this.x);
          this.speedX -= Math.cos(angle) * 0.02;
          this.speedY -= Math.sin(angle) * 0.02;
        }

        // Bounce off walls
        if (this.x < 0 || this.x > canvas.width) {
          this.speedX *= -1;
        }
        if (this.y < 0 || this.y > canvas.height) {
          this.speedY *= -1;
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function connectParticles() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.hypot(dx, dy);

          if (distance < connectionDistance) {
            const opacity = 1 - distance / connectionDistance;
            ctx!.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.15})`;
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            ctx!.stroke();
          }
        }
      }
    }

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    }

    function initParticles() {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }

    function animate() {
      ctx!.clearRect(0, 0, canvas.width, canvas.height);
      
      for (const particle of particles) {
        particle.update();
        particle.draw(ctx!);
      }
      
      connectParticles();
      animationFrameId = requestAnimationFrame(animate);
    }

    // Set up event listeners
    window.addEventListener('resize', resizeCanvas);
    canvas.addEventListener('mousemove', (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    });
    canvas.addEventListener('mouseleave', () => {
      mouse.x = null;
      mouse.y = null;
    });

    // Initialize canvas and start animation
    resizeCanvas();
    animate();

    // Clean up
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', (e) => {
        mouse.x = e.x;
        mouse.y = e.y;
      });
      canvas.removeEventListener('mouseleave', () => {
        mouse.x = null;
        mouse.y = null;
      });
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full -z-10"
      style={{
        background: 'linear-gradient(to bottom, rgba(15, 23, 42, 1), rgba(30, 41, 59, 1))',
      }}
    />
  );
};

export default AnimatedBackground;
