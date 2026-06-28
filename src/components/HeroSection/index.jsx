import { ArrowDown } from 'lucide-react';

export const HeroSection = () => {
    return (
        <section
            id="hero"
            className="relative min-h-[100dvh] flex flex-col items-center justify-center px-4 pt-16 md:pt-24"
        >
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight font-display">
                        <span className="opacity-0 animate-fade-in block">Hi, I'm</span>
                        <span className="text-primary text-glow opacity-0 animate-fade-in-delay-1 block mt-2">
                            Arun Kumar Yarlagadda
                        </span>
                    </h1>

                    <div className="flex flex-row gap-4 justify-center items-center pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">
                            View Work
                        </a>
                        <a
                            href="/src/assets/Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            download="Arun_Kumar_Yarlagadda_Resume.pdf"
                            className="px-6 py-2 rounded-full border border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary transition-all duration-300 active:scale-95 text-sm font-semibold"
                        >
                            My Resume
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-xs text-muted-foreground mb-2">Scroll</span>
                <ArrowDown className="h-4 w-4 text-primary" />
            </div>
        </section>
    );
};
