
import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Films from './components/Films';

const About = () => (
    <section id="about" className="section">
        <div className="section-bg-gfx"></div>
        <div className="container mx-auto max-w-5xl text-center">
            <div className="animated-element">
                <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-8 text-glow">Our Story</h2>
            </div>
            <div className="card p-8 md:p-12 text-left space-y-6 animated-element" style={{ transitionDelay: '0.2s' }}>
                <p className="text-lg leading-relaxed">Our story begins in 2021. We are a team from Indonesia who love Japanese anime and manga. On January 15, 2021, we decided to create a translation community so that people who don't understand certain languages can understand and be understood. We aim to improve your language abilities, and we translate it too.</p>
                <p className="text-lg leading-relaxed">At the beginning, we thought this method would not work. That year, our subscribers were still under 100. When we uploaded our first video on October 12, 2022, the audience was only 50 viewers. After research, we realized our translation of Doraemon Series Episode 542 was a big mistake. We had too many languages and decided to focus only on Japanese to Indonesian.</p>
                <p className="text-lg leading-relaxed">After a break of 3 months and 17 days, we re-uploaded other series episodes like 549 and 550. The 550 series became the most searched for, and by 2023, it reached our first 30,000 viewers! Finally, we started to be known on various platforms like YouTube, Bilibili, RuTube, Vimeo, and more.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mt-12 text-left">
                <div className="card p-8 animated-element" style={{ transitionDelay: '0.4s' }}>
                    <h3 className="font-orbitron text-2xl font-bold mb-4 text-accent-color">Channel Information</h3>
                    <p className="text-md mb-2">Real-time subscriber count:</p>
                    <div className="flex justify-center my-4">
                       <iframe title="YouTube Subscriber Count" height="80px" width="300px" frameBorder="0" src="https://livecounts.io/embed/youtube-live-subscriber-counter/UC96kKn3hhOmBFVQ7c0L4h4g" style={{ border: 0, width:'300px', height:'80px', background: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}></iframe>
                    </div>
                    <div className="text-center my-6">
                        <a href="https://youtube.com/@dorata-nosub" target="_blank" rel="noopener noreferrer" className="inline-block bg-accent-color text-primary-color font-bold py-3 px-8 rounded-full hover:bg-white transition-colors text-lg">
                            Kunjungi Profil YouTube Kami
                        </a>
                    </div>
                    <p>This channel provides the Doraemon anime with subtitles in languages: Arabic, Bengali, Indonesian, Malaysian, Japanese, Chinese etc. If we don't upload for a week or a month, chances are we're busy.</p>
                    <p className="mt-4 text-sm opacity-80">All content on this channel is completely owned by TV Asahi Corporation. I do not have any rights to the videos that I upload. If I violate copyright, contact me immediately and I will remove it as soon as possible.</p>
                </div>
                <div className="card p-8 animated-element" style={{ transitionDelay: '0.6s' }}>
                    <h3 className="font-orbitron text-2xl font-bold mb-4 text-accent-color">Vision & Mission</h3>
                    <p><strong className="text-white">Vision:</strong> We hope that Dora-ta-no Sub can last forever and can continue to entertain the audience so that it remains environmentally friendly.</p>
                    <p className="mt-4"><strong className="text-white">Mission:</strong> Building a Subtitle playground with the aim of improving translation accuracy and having fun together. Please help Dora-ta-no Lovers continue to support and encourage us!</p>
                </div>
            </div>
        </div>
    </section>
);

const Releases = () => (
    <section id="releases" className="section">
         <div className="section-bg-gfx"></div>
        <div className="container mx-auto max-w-6xl text-center">
             <div className="animated-element">
                <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-12 text-glow">Channel Updates</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="card p-8 animated-element" style={{ transitionDelay: '0.2s' }}>
                    <h3 className="font-orbitron text-2xl font-bold mb-4 text-accent-color">Latest Episode Release</h3>
                    <img src="https://picsum.photos/seed/episode600/600/400" alt="New Episode Thumbnail" className="rounded-lg my-4 aspect-video object-cover"/>
                    <p className="font-bold text-lg">Doraemon Series: Episode 600</p>
                    <a href="#" className="mt-6 inline-block bg-accent-color text-primary-color font-bold py-2 px-6 rounded-full hover:bg-white transition-colors">Watch Now</a>
                </div>
                <div className="card p-8 animated-element" style={{ transitionDelay: '0.4s' }}>
                    <h3 className="font-orbitron text-2xl font-bold mb-4 text-accent-color">Upcoming Video</h3>
                    <img src="https://picsum.photos/seed/trailer/600/400" alt="Upcoming Trailer Thumbnail" className="rounded-lg my-4 aspect-video object-cover"/>
                    <p className="font-bold text-lg">Movie Special Trailer</p>
                    <a href="#" className="mt-6 inline-block bg-gray-600 text-white font-bold py-2 px-6 rounded-full cursor-not-allowed">Coming Soon</a>
                </div>
                <div className="card p-8 animated-element" style={{ transitionDelay: '0.6s' }}>
                    <h3 className="font-orbitron text-2xl font-bold mb-4 text-accent-color">Fan Favorite</h3>
                    <img src="https://picsum.photos/seed/episode550/600/400" alt="Episode 550 Thumbnail" className="rounded-lg my-4 aspect-video object-cover"/>
                    <p className="font-bold text-lg">Doraemon Series: Episode 550</p>
                    <a href="#" className="mt-6 inline-block bg-accent-color text-primary-color font-bold py-2 px-6 rounded-full hover:bg-white transition-colors">Re-Watch</a>
                </div>
            </div>
        </div>
    </section>
);

const Mission = () => (
    <section id="importance" className="section bg-secondary-color">
        <div className="section-bg-gfx"></div>
        <div className="container mx-auto max-w-5xl text-center">
            <div className="animated-element">
                <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-8 text-glow">Why Fansubbers Matter</h2>
            </div>
            <div className="card p-8 md:p-12 text-left space-y-6 animated-element" style={{ transitionDelay: '0.2s' }}>
                <p className="text-lg leading-relaxed">The Dora-ta-no Sub Channel and other fansubbers are vital to the global Doraemon community. We act as a cultural bridge, making beloved series accessible to fans who don't speak Japanese. Official subtitles are not always available, especially for older episodes. Fansubbers fill this gap, ensuring that the magic of Doraemon can be enjoyed by everyone, regardless of their native language.</p>
            </div>
        </div>
    </section>
);

const IndonesiaGold = () => (
    <section id="indonesia-gold" className="section">
        <div className="section-bg-gfx"></div>
        <div className="container mx-auto max-w-4xl text-center">
             <div className="animated-element">
                <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-8 indonesia-gold">MAKE INDONESIA GOLD IN 2045</h2>
            </div>
            <div className="card p-8 md:p-12 animated-element" style={{ transitionDelay: '0.2s' }}>
                <p className="text-lg leading-relaxed">For the Indonesian population, we hope our country will be free from poverty by supporting the people around you. Our team aims to make the Indonesian nation proud one day so that Indonesia and other countries can coexist. Come on, we must continue to develop and show that we are the real sleeping Asian tigers, who are very accomplished and dedicated.</p>
                <p className="text-5xl font-orbitron mt-8 tracking-widest">MERDEKA!!!!</p>
            </div>
        </div>
    </section>
);

const Footer = () => (
    <footer className="bg-secondary-color py-8 border-t border-accent-color/20 relative z-10">
        <div className="container mx-auto text-center text-gray-400">
            <p>&copy; 2024 Dora-ta-no Sub. All Rights Reserved.</p>
        </div>
    </footer>
);


const App = () => {
    useEffect(() => {
        const animatedElements = document.querySelectorAll('.animated-element');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1 
        });

        animatedElements.forEach(el => {
            observer.observe(el);
        });

        return () => {
            animatedElements.forEach(el => {
                observer.unobserve(el);
            });
        };
    }, []);

    return (
        <>
            <Header />
            <Hero />
            <main>
                <About />
                <Films />
                <Releases />
                <Mission />
                <IndonesiaGold />
            </main>
            <Footer />
        </>
    );
};

export default App;
