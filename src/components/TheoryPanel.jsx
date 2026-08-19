import React from 'react';
import { Atom, Zap } from 'lucide-react';

export function TheoryPanel({ phase, onOpenGallery }) {
  const phaseData = {
    1: {
      title: 'Етап 1: Рівновага Ядра U-235',
      subtitle: 'Баланс ядерних та електростатичних сил',
      desc: 'Всередині стабільного ядра Урану-235 (92 протони, 143 нейтрони) діють дві протилежні сили: Сильна ядерна взаємодія утримує нуклони разом, а Електростатична сила розпихає позитивно заряджені протони.',
      diagramImg: '/screenshots/strong-force.webp',
      strongVal: 95,
      coulombVal: 85
    },
    2: {
      title: 'Етап 2: Захоплення Теплового Нейтрона',
      subtitle: 'Формування збудженого ядра U-236',
      desc: 'Повільний (тепловий) нейтрон наближається та поглинається ядром Урану-235. Ядро отримує енергію зв’язку ~6.5 МеВ і переходить у збуджений стан.',
      diagramImg: '/screenshots/nutron-comming.webp',
      strongVal: 90,
      coulombVal: 88
    },
    3: {
      title: 'Етап 3: Деформація та Коливання',
      subtitle: 'Капельна модель ядра (Liquid Drop Model)',
      desc: 'Енергія збудження спричиняє поверхневі коливання. Ядро розтягується в еліпсоїд, а потім у форму гантелі з вузьким перешийком. Протони на протилежних кінцях віддаляються.',
      diagramImg: '/screenshots/Uranium destruction.webp',
      strongVal: 60,
      coulombVal: 92
    },
    4: {
      title: 'Етап 4: Розщеплення & E=mc²',
      subtitle: 'Кулонівський вибух та дефект маси',
      desc: 'Коли відстань між згустками перевищує радіус дії ядерних сил, Кулонівське відштовхування розриває ядро! Сумарна маса осколків менша за вихідну на delta_m = 0.2154 а.о.м. Цей дефект маси вивільняє E = mc² = 200 МеВ.',
      diagramImg: '/screenshots/mass is converted into energy.webp',
      strongVal: 10,
      coulombVal: 100
    },
    5: {
      title: 'Етап 5: Продукти Розпаду та Нейтрони',
      subtitle: 'Формування Ba-142, Kr-91 та 3n',
      desc: 'Утворюються два осколки розпаду (Ba-142 + Kr-91) з великою кінетичною енергією, а також випромінюється 2-3 швидких нейтрони та гамма-кванти.',
      diagramImg: '/screenshots/the result of the decay of uranium atoms.webp',
      strongVal: 0,
      coulombVal: 0
    }
  };

  const current = phaseData[phase] || phaseData[1];

  return (
    <div className="glass-panel" style={{
      padding: '1.25rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      maxHeight: 'calc(100vh - 120px)',
      overflowY: 'auto'
    }}>
      <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '0.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#00d2ff', fontSize: '0.85rem', fontFamily: 'var(--font-mono)' }}>
          <Atom size={16} /> ФІЗИЧНИЙ МЕХАНІЗМ
        </div>
        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', color: '#fff', marginTop: '0.25rem' }}>
          {current.title}
        </h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{current.subtitle}</p>
      </div>

      <div 
        onClick={onOpenGallery}
        style={{
          position: 'relative',
          borderRadius: '10px',
          overflow: 'hidden',
          border: '1px solid rgba(56, 189, 248, 0.3)',
          cursor: 'pointer',
          boxShadow: '0 4px 15px rgba(0,0,0,0.4)'
        }}
      >
        <img 
          src={current.diagramImg} 
          alt={current.title} 
          style={{ width: '100%', height: '140px', objectFit: 'cover', display: 'block' }}
        />
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '0.4rem 0.6rem',
          background: 'rgba(7, 9, 19, 0.85)',
          WebkitBackdropFilter: 'blur(4px)',
          backdropFilter: 'blur(4px)',
          fontSize: '0.75rem',
          color: '#00d2ff',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <span>Схема з /screenshots</span>
          <span style={{ textDecoration: 'underline' }}>Відкрити галактику схем</span>
        </div>
      </div>

      <p style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: 1.55 }}>
        {current.desc}
      </p>

      <div style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '0.85rem', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.6rem', display: 'flex', justifyContent: 'space-between' }}>
          <span>Баланс Ядерних Сил</span>
          <span>F_net = F_coulomb - F_strong</span>
        </div>

        <div style={{ marginBottom: '0.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#5ce1e6', marginBottom: '0.2rem' }}>
            <span>Сильна Ядерна Взаємодія (Притягання)</span>
            <span>{current.strongVal}%</span>
          </div>
          <div style={{ height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
            <div style={{ width: `${current.strongVal}%`, height: '100%', background: 'linear-gradient(90deg, #00d2ff, #0077b6)', transition: 'width 0.4s ease' }} />
          </div>
        </div>

        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#ff6b84', marginBottom: '0.2rem' }}>
            <span>Кулонівське Відштовхування (Протони)</span>
            <span>{current.coulombVal}%</span>
          </div>
          <div style={{ height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
            <div style={{ width: `${current.coulombVal}%`, height: '100%', background: 'linear-gradient(90deg, #ff3b5c, #ffbe0b)', transition: 'width 0.4s ease' }} />
          </div>
        </div>
      </div>

      <div style={{ background: 'rgba(10, 15, 29, 0.9)', padding: '0.85rem', borderRadius: '10px', border: '1px solid rgba(255, 190, 11, 0.3)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#ffbe0b', fontSize: '0.8rem', fontWeight: 700, fontFamily: 'var(--font-mono)', marginBottom: '0.4rem' }}>
          <Zap size={14} /> ФОРМУЛА ЕНЕРГІЇ ЕЙНШТЕЙНА
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem', color: '#fff', textAlign: 'center', margin: '0.3rem 0', letterSpacing: '1px' }}>
          E = Δm · c²
        </div>
        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
          Дефект маси: <span style={{ color: '#00d2ff' }}>Δm = 0.2154 а.о.м.</span><br />
          Енергія на 1 розпад: <span style={{ color: '#ffbe0b' }}>E ≈ 200 МеВ = 3.2 × 10⁻¹¹ Дж</span>
        </div>
      </div>
    </div>
  );
}
