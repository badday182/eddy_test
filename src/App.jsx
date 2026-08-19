import React, { useState } from 'react';
import { Atom, Layers, Image as ImageIcon, BookOpen, Sparkles } from 'lucide-react';
import { Nucleus3D } from './components/Nucleus3D';
import { ChainReaction3D } from './components/ChainReaction3D';
import { TheoryPanel } from './components/TheoryPanel';
import { ControlsOverlay } from './components/ControlsOverlay';
import { GalleryDrawer } from './components/GalleryDrawer';

export function App() {
  const [mode, setMode] = useState('single'); // 'single' or 'chain'
  const [phase, setPhase] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);
  const [speed, setSpeed] = useState(1);
  const [showForces, setShowForces] = useState(true);

  // Reactor Mode state
  const [controlRodLevel, setControlRodLevel] = useState(50); // 50% = Critical equilibrium
  const [isReactorRunning, setIsReactorRunning] = useState(true);
  const [reactorStats, setReactorStats] = useState({
    neutronCount: 4,
    reactionTotal: 0,
    temperature: 300,
    keff: 1.0
  });

  // Gallery Modal state
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const handlePhaseSelectFromGallery = (newPhase) => {
    if (newPhase === 6) {
      setMode('chain');
    } else {
      setMode('single');
      setPhase(newPhase);
    }
  };

  const handleResetReactor = () => {
    setControlRodLevel(50);
    setReactorStats({
      neutronCount: 4,
      reactionTotal: 0,
      temperature: 300,
      keff: 1.0
    });
  };

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden', backgroundColor: 'var(--bg-dark)' }}>
      {/* App Top Header */}
      <header className="app-header glass-panel">
        <div className="brand-title">
          <Atom size={28} className="pulse-glow" color="#00d2ff" />
          <div>
            <div>NUCLEAR FISSION 3D</div>
            <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: 400 }}>
              Візуалізація Ядерного Розпаду на Three.js
            </div>
          </div>
        </div>

        {/* Mode Navigation Tabs */}
        <div className="mode-tabs">
          <button 
            className={`tab-btn ${mode === 'single' ? 'active' : ''}`}
            onClick={() => setMode('single')}
          >
            <Sparkles size={16} /> 1. Подетальний Розпад ²³⁵U
          </button>
          <button 
            className={`tab-btn ${mode === 'chain' ? 'active' : ''}`}
            onClick={() => setMode('chain')}
          >
            <Layers size={16} /> 2. Ланцюгова Реакція
          </button>
        </div>

        {/* Gallery / Screenshots Button */}
        <button 
          className="btn-action" 
          onClick={() => setIsGalleryOpen(true)}
          style={{ background: 'linear-gradient(135deg, rgba(0,210,255,0.15), rgba(255,59,92,0.15))' }}
        >
          <ImageIcon size={18} color="#00d2ff" />
          <span>Схеми з /screenshots</span>
        </button>
      </header>

      {/* Main 3D Viewport */}
      <main style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}>
        {mode === 'single' ? (
          <Nucleus3D 
            phase={phase}
            speed={speed}
            showForces={showForces}
            isPlaying={isPlaying}
          />
        ) : (
          <ChainReaction3D 
            controlRodLevel={controlRodLevel}
            isRunning={isReactorRunning}
            onStatsUpdate={setReactorStats}
          />
        )}
      </main>

      {/* Floating Theory Side Panel (Single mode) */}
      {mode === 'single' && (
        <aside style={{
          position: 'absolute',
          top: '5.5rem',
          left: '1.5rem',
          width: '360px',
          maxWidth: 'calc(100vw - 3rem)',
          zIndex: 30
        }}>
          <TheoryPanel 
            phase={phase}
            onOpenGallery={() => setIsGalleryOpen(true)}
          />
        </aside>
      )}

      {/* Bottom Interactive HUD Overlay */}
      <ControlsOverlay 
        mode={mode}
        phase={phase}
        setPhase={setPhase}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        speed={speed}
        setSpeed={setSpeed}
        showForces={showForces}
        setShowForces={setShowForces}
        controlRodLevel={controlRodLevel}
        setControlRodLevel={setControlRodLevel}
        reactorStats={reactorStats}
        onResetReactor={handleResetReactor}
      />

      {/* Screenshots Gallery Modal */}
      <GalleryDrawer 
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
        onSelectPhase={handlePhaseSelectFromGallery}
      />
    </div>
  );
}
