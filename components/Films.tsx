
import React from 'react';

const filmData = Array.from({ length: 26 }, (_, i) => ({
  id: i + 1,
  title: `Doraemon Film ${i + 1}`,
  imageUrl: `https://picsum.photos/seed/film${i + 1}/400/600`,
}));

const Films = () => {
    return (
        <section id="films" className="section bg-secondary-color">
             <div className="section-bg-gfx" style={{ backgroundImage: 'radial-gradient(circle, rgba(13, 26, 45, 0.5) 0%, transparent 60%)' }}></div>
            <div className="container mx-auto max-w-7xl text-center">
                <div className="animated-element">
                    <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-8 text-glow">Translated Films</h2>
                    <p className="text-lg mb-12 max-w-3xl mx-auto">A collection of 26 Doraemon films, carefully translated for our global audience. Each one is a journey into the world of dreams and adventure.</p>
                </div>
                <div className="film-grid animated-element" style={{ transitionDelay: '0.2s' }}>
                    {filmData.map(film => (
                        <div 
                            key={film.id}
                            className="film-card card"
                            style={{ backgroundImage: `url('${film.imageUrl}')` }}
                        >
                            <h3 className="film-title">{film.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Films;
