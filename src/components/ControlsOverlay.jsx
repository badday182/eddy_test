import React from 'react';
import { Play, Pause, RotateCcw, Eye, Flame, ShieldAlert, Cpu } from 'lucide-react';

export function ControlsOverlay({
  mode, // 'single' or 'chain'
  phase,
  setPhase,
  isPlaying,
  setIsPlaying,
  speed,
  setSpeed,
  showForces,
  setShowForces,
  controlRodLevel,
  setControlRodLevel,
  reactorStats,
  onResetReactor
}) {
  if (mode === 'single') {
    return (
      <div className="glass-panel" style={{
        position: 'absolute',
        bottom: '1.5rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 40,
        padding: '0.85rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        gap: '1.5rem',
        maxWidth: '90vw',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        {/* Play/Pause */}
        <button 
          className="btn-action primary"
          onClick={() => setIsPlaying(!isPlaying)}
          style={{ width: '42px', height: '42px', padding: 0, borderRadius: '50%' }}
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} style={{ marginLeft: '2px' }} />}
        </button>

        {/* Phase Buttons Scrubbers */}
        <div style={{ display: 'flex', gap: '0.4rem', background: 'rgba(10, 15, 29, 0.8)', padding: '4px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)' }}>
          {[
            { id: 1, label: '1. Рівновага' },
            { id: 2, label: '2. Влучання n' },
            { id: 3, label: '3. Деформація' },
            { id: 4, label: '4. Розщеплення' },
            { id: 5, label: '5. Продукти' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setPhase(item.id)}
              style={{
                background: phase === item.id ? 'linear-gradient(135deg, #00d2ff, #0077b6)' : 'transparent',
                color: phase === item.id ? '#ffffff' : 'var(--text-muted)',
                border: 'none',
                padding: '0.45rem 0.85rem',
                borderRadius: '6px',
                fontFamily: 'var(--font-body)',
                fontSize: '0.82rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Speed Selector */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          <span>Швидкість:</span>
          {[0.25, 0.5, 1, 2].map((s) => (
            <button
              key={s}
              onClick={() => setSpeed(s)}
              style={{
                background: speed === s ? 'rgba(56, 189, 248, 0.25)' : 'transparent',
                color: speed === s ? '#00d2ff' : 'var(--text-muted)',
                border: speed === s ? '1px solid #00d2ff' : '1px solid transparent',
                borderRadius: '4px',
                padding: '2px 6px',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                cursor: 'pointer'
              }}
            >
              {s}x
            </button>
          ))}
        </div>

        {/* Force Vectors Toggle */}
        <button
          onClick={() => setShowForces(!showForces)}
          className="btn-action"
          style={{
            background: showForces ? 'rgba(0, 210, 255, 0.2)' : 'rgba(20, 28, 48, 0.8)',
            borderColor: showForces ? '#00d2ff' : 'var(--border-color)',
            color: showForces ? '#00d2ff' : 'var(--text-muted)'
          }}
        >
          <Eye size={16} /> Сили {showForces ? 'ON' : 'OFF'}
        </button>
      </div>
    );
  }

  // Reactor Mode Controls & HUD
  return (
    <div className="glass-panel" style={{
      position: 'absolute',
      bottom: '1.5rem',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 40,
      padding: '1rem 1.5rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.85rem',
      width: '900px',
      maxWidth: '90vw'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        {/* Control Rod Slider */}
        <div style={{ flex: 1, minWidth: '260px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', fontWeight: 600, color: '#fff', marginBottom: '0.4rem' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Cpu size={16} color="#00d2ff" /> Понурення Керуючих Стержнів (Кадмій/Бор):
            </span>
            <span style={{ color: '#00d2ff', fontFamily: 'var(--font-mono)' }}>{controlRodLevel}%</span>
          </div>
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={controlRodLevel} 
            onChange={(e) => setControlRodLevel(Number(e.target.value))}
            className="custom-slider"
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
            <span>0% (Розгін k &gt; 1)</span>
            <span>50% (Критичний k = 1.0)</span>
            <span>100% (Поглинання k &lt; 1)</span>
          </div>
        </div>

        {/* Reset Reactor */}
        <button className="btn-action" onClick={onResetReactor}>
          <RotateCcw size={16} /> Скинути Реактор
        </button>
      </div>

      {/* Realtime Telemetry HUD */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '0.75rem' }}>
        {/* K_eff Factor */}
        <div style={{ background: 'rgba(15, 23, 42, 0.7)', padding: '0.5rem 0.8rem', borderRadius: '8px', border: '1px solid rgba(0, 210, 255, 0.2)' }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Коефіцієнт k_eff</div>
          <div style={{
            fontSize: '1.2rem',
            fontFamily: 'var(--font-mono)',
            fontWeight: 700,
            color: reactorStats.keff > 1.1 ? '#ff3b5c' : reactorStats.keff >= 0.95 ? '#00d2ff' : '#ffbe0b'
          }}>
            {reactorStats.keff}
            <span style={{ fontSize: '0.75rem', marginLeft: '0.4rem', fontWeight: 400 }}>
              {reactorStats.keff > 1.1 ? '(Надкритичний)' : reactorStats.keff >= 0.95 ? '(Критичний)' : '(Підкритичний)'}
            </span>
          </div>
        </div>

        {/* Neutron Count */}
        <div style={{ background: 'rgba(15, 23, 42, 0.7)', padding: '0.5rem 0.8rem', borderRadius: '8px', border: '1px solid rgba(0, 210, 255, 0.2)' }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Вільні Нейтрони в Ядрі</div>
          <div style={{ fontSize: '1.2rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#5ce1e6' }}>
            {reactorStats.neutronCount}
          </div>
        </div>

        {/* Fission Reactions Count */}
        <div style={{ background: 'rgba(15, 23, 42, 0.7)', padding: '0.5rem 0.8rem', borderRadius: '8px', border: '1px solid rgba(0, 210, 255, 0.2)' }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Всього Розпадів</div>
          <div style={{ fontSize: '1.2rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#ffbe0b' }}>
            {reactorStats.reactionTotal}
          </div>
        </div>

        {/* Core Temperature */}
        <div style={{ background: 'rgba(15, 23, 42, 0.7)', padding: '0.5rem 0.8rem', borderRadius: '8px', border: '1px solid rgba(0, 210, 255, 0.2)' }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
            <Flame size={12} color="#ff3b5c" /> Температура АЗ
          </div>
          <div style={{ fontSize: '1.2rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: reactorStats.temperature > 600 ? '#ff3b5c' : '#fff' }}>
            {reactorStats.temperature} °C
          </div>
        </div>
      </div>
    </div>
  );
}
