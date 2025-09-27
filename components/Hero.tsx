
import React, { useRef, useEffect } from 'react';

const Hero = () => {
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const card = cardRef.current;
        if (!card) return;

        const layers = card.querySelectorAll<HTMLElement>('.card-layer');
        const glare = card.querySelector<HTMLElement>('.card-glare');

        const handleMouseMove = (e: MouseEvent) => {
            const { top, left, width, height } = card.getBoundingClientRect();
            const x = e.clientX - left;
            const y = e.clientY - top;
            
            const rotateX = ((y / height) - 0.5) * -15;
            const rotateY = ((x / width) - 0.5) * 15;

            card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

            layers.forEach(layer => {
                let speed = 20;
                if(layer.classList.contains('card-midground')) speed = 40;
                if(layer.classList.contains('card-foreground')) speed = 60;
                if(layer.classList.contains('card-content')) speed = 80;
                
                const moveX = ((x / width) - 0.5) * speed;
                const moveY = ((y / height) - 0.5) * speed;

                if(layer !== glare) {
                   layer.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;
                }
            });
            
            if (glare) {
                glare.style.opacity = '1';
                glare.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.2), transparent 70%)`;
            }
        };

        const handleMouseLeave = () => {
            card.style.transform = 'rotateX(0deg) rotateY(0deg)';
            layers.forEach(layer => {
                layer.style.transform = 'translateX(0px) translateY(0px)';
            });
            if (glare) {
                glare.style.opacity = '0';
            }
        };

        card.addEventListener('mousemove', handleMouseMove);
        card.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            card.removeEventListener('mousemove', handleMouseMove);
            card.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div className="hero-container">
            <div id="interactive-card" className="interactive-card" ref={cardRef}>
                <div className="card-layer card-background">
                    <img src="https://i.ibb.co.com/nspZBKsf/AIRetouch-20250923-204419961.png" alt="Future Earth background layer" />
                </div>
                <div className="card-layer card-midground">
                     <img src="https://i.ibb.co.com/spy45Jct/AIRetouch-20250923-204435054.png" alt="Future Earth with floating cities midground layer" />
                </div>
                <div className="card-layer card-foreground">
                     <img src="https://i.ibb.co.com/mCy5tGQ3/AIRetouch-20250923-204453442.png" alt="Spaceships and stations foreground layer" />
                </div>
                <div className="card-layer card-content text-center">
                    <div>
                         <h2 className="text-5xl md:text-7xl font-orbitron font-black uppercase tracking-widest">Dora-ta-no Sub</h2>
                         <p className="mt-4 text-xl md:text-2xl font-light text-accent-color">Translating the Future of Anime</p>
                    </div>
                </div>
                <div className="card-layer card-glare"></div>
            </div>
        </div>
    );
};

export default Hero;
