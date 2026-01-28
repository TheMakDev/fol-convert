import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

const AudioSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const playerRef = useRef<any>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);

  const audioTracks = [
    {
      title: 'The Foundation of Faith',
      speaker: 'Pastor E.A. Adeboye',
      duration: '45:32',
      youtubeId: 'vY0lOSFxf7c',
    },
    {
      title: 'Living a Life of Prayer',
      speaker: 'Pastor E.A. Adeboye',
      duration: '52:18',
      youtubeId: 'bzQPt1-oYq0',
    },
  ];

  // Load YouTube IFrame API
  useEffect(() => {
    if (window.YT) return;

    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player('yt-player', {
        videoId: audioTracks[currentTrack].youtubeId,
        playerVars: {
          controls: 0,
          modestbranding: 1,
          rel: 0,
        },
        events: {
          onStateChange: (event: any) => {
            setIsPlaying(event.data === window.YT.PlayerState.PLAYING);
          },
        },
      });
    };
  }, []);

  // Change track
  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.loadVideoById(audioTracks[currentTrack].youtubeId);
      setIsPlaying(true);
    }
  }, [currentTrack]);

  const togglePlay = () => {
    if (!playerRef.current) return;

    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
  };

  const prevTrack = () => {
    setCurrentTrack((prev) => Math.max(0, prev - 1));
  };

  const nextTrack = () => {
    setCurrentTrack((prev) => Math.min(audioTracks.length - 1, prev + 1));
  };

  return (
    <section id="audio" className="py-20 bg-primary text-primary-foreground">
      <div className="section-container">
        <div ref={ref} className={isVisible ? 'animate-fade-up' : 'opacity-0'}>
          {/* Hidden YouTube Player */}
          <div className="hidden">
            <div id="yt-player" />
          </div>

          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-gold-light uppercase text-sm font-medium">
              Listen & Learn
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
              Audio Messages
            </h2>
            <p className="text-primary-foreground/80 text-lg">
              Take the Word with you wherever you go.
            </p>
          </div>

          {/* Player */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-primary-foreground/10 rounded-2xl p-8 mb-6">
              <div className="flex items-center gap-6">
                <div className="w-32 h-32 rounded-xl bg-gradient-to-br from-accent to-gold-light flex items-center justify-center">
                  <Volume2 className="w-12 h-12 text-accent-foreground" />
                </div>

                <div className="flex-1">
                  <p className="text-gold-light text-sm mb-1">Now Playing</p>
                  <h3 className="text-2xl font-bold">
                    {audioTracks[currentTrack].title}
                  </h3>
                  <p className="text-primary-foreground/70">
                    {audioTracks[currentTrack].speaker}
                  </p>
                </div>
              </div>

              {/* Controls */}
              <div className="flex justify-center gap-6 mt-8">
                <button onClick={prevTrack} className="p-3 hover:bg-white/10 rounded-full">
                  <SkipBack />
                </button>

                <button
                  onClick={togglePlay}
                  className="p-4 bg-accent text-accent-foreground rounded-full"
                >
                  {isPlaying ? <Pause /> : <Play className="ml-1" />}
                </button>

                <button onClick={nextTrack} className="p-3 hover:bg-white/10 rounded-full">
                  <SkipForward />
                </button>
              </div>
            </div>

            {/* Playlist */}
            <div className="bg-primary-foreground/5 rounded-xl">
              {audioTracks.map((track, index) => (
                <button
                  key={track.youtubeId}
                  onClick={() => setCurrentTrack(index)}
                  className={`w-full p-4 text-left hover:bg-white/10 ${
                    currentTrack === index ? 'bg-white/10' : ''
                  }`}
                >
                  <p className={currentTrack === index ? 'text-accent font-medium' : ''}>
                    {track.title}
                  </p>
                  <p className="text-sm text-primary-foreground/60">
                    {track.speaker} • {track.duration}
                  </p>
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
