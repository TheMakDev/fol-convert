import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';
import { useState } from 'react';

const AudioSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);

  const audioTracks = [
    { title: 'The Foundation of Faith', speaker: 'Pastor E.A. Adeboye', duration: '45:32' },
    { title: 'Living a Life of Prayer', speaker: 'Pastor E.A. Adeboye', duration: '52:18' },
    { title: 'Understanding Grace', speaker: 'Pastor E.A. Adeboye', duration: '38:45' },
    { title: 'The Holy Spirit in You', speaker: 'Pastor E.A. Adeboye', duration: '41:20' },
    { title: 'Growing in Holiness', speaker: 'Pastor E.A. Adeboye', duration: '49:15' },
  ];

  return (
    <section id="audio" className="py-20 bg-primary text-primary-foreground">
      <div className="section-container">
        <div
          ref={ref}
          className={`${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
        >
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-gold-light font-medium tracking-wide uppercase text-sm">
              Listen & Learn
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3 mb-4">
              Audio Messages
            </h2>
            <p className="text-primary-foreground/80 text-lg">
              Take the Word with you wherever you go. Listen to life-changing 
              audio messages that will strengthen your faith.
            </p>
          </div>

          {/* Audio Player */}
          <div className="max-w-3xl mx-auto">
            {/* Now Playing Card */}
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 mb-6">
              <div className="flex flex-col md:flex-row items-center gap-6">
                {/* Album Art */}
                <div className="w-32 h-32 rounded-xl bg-gradient-to-br from-accent to-gold-light flex items-center justify-center shrink-0">
                  <Volume2 className="w-12 h-12 text-accent-foreground" />
                </div>

                {/* Track Info */}
                <div className="flex-1 text-center md:text-left">
                  <p className="text-gold-light text-sm font-medium mb-1">Now Playing</p>
                  <h3 className="font-heading text-2xl font-bold mb-1">
                    {audioTracks[currentTrack].title}
                  </h3>
                  <p className="text-primary-foreground/70">
                    {audioTracks[currentTrack].speaker}
                  </p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-6">
                <div className="h-2 bg-primary-foreground/20 rounded-full overflow-hidden">
                  <div className="h-full w-1/3 bg-accent rounded-full transition-all duration-300" />
                </div>
                <div className="flex justify-between text-sm text-primary-foreground/60 mt-2">
                  <span>15:24</span>
                  <span>{audioTracks[currentTrack].duration}</span>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-center gap-6 mt-6">
                <button
                  onClick={() => setCurrentTrack(Math.max(0, currentTrack - 1))}
                  className="p-3 hover:bg-primary-foreground/10 rounded-full transition-colors"
                >
                  <SkipBack className="w-6 h-6" />
                </button>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-4 bg-accent text-accent-foreground rounded-full hover:scale-105 transition-transform shadow-lg"
                >
                  {isPlaying ? (
                    <Pause className="w-8 h-8" />
                  ) : (
                    <Play className="w-8 h-8 ml-1" />
                  )}
                </button>
                <button
                  onClick={() => setCurrentTrack(Math.min(audioTracks.length - 1, currentTrack + 1))}
                  className="p-3 hover:bg-primary-foreground/10 rounded-full transition-colors"
                >
                  <SkipForward className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Playlist */}
            <div className="bg-primary-foreground/5 rounded-xl overflow-hidden">
              <h4 className="font-semibold p-4 border-b border-primary-foreground/10">
                Recommended for New Believers
              </h4>
              {audioTracks.map((track, index) => (
                <button
                  key={track.title}
                  onClick={() => setCurrentTrack(index)}
                  className={`w-full flex items-center gap-4 p-4 hover:bg-primary-foreground/10 transition-colors text-left ${
                    currentTrack === index ? 'bg-primary-foreground/10' : ''
                  }`}
                >
                  <span className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center text-sm">
                    {currentTrack === index && isPlaying ? (
                      <span className="flex gap-0.5">
                        <span className="w-1 h-3 bg-accent animate-pulse" />
                        <span className="w-1 h-3 bg-accent animate-pulse delay-100" />
                        <span className="w-1 h-3 bg-accent animate-pulse delay-200" />
                      </span>
                    ) : (
                      index + 1
                    )}
                  </span>
                  <div className="flex-1">
                    <p className={`font-medium ${currentTrack === index ? 'text-accent' : ''}`}>
                      {track.title}
                    </p>
                    <p className="text-sm text-primary-foreground/60">{track.speaker}</p>
                  </div>
                  <span className="text-sm text-primary-foreground/60">{track.duration}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudioSection;
