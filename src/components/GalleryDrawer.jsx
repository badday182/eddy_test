import React, { useState } from 'react';
import { X, ZoomIn, PlayCircle, BookOpen } from 'lucide-react';

const DIAGRAMS = [
  {
    id: 1,
    title: '1. Ядерні Сили та Стабільність (Strong Nuclear Force)',
    filename: '/screenshots/strong-force.webp',
    phaseId: 1,
    desc: 'Усередині ядра діють протилежні сили: Сильна ядерна взаємодія утримує нуклони разом, а електростатичне кулонівське відштовхування розпихає позитивні протони.'
  },
  {
    id: 2,
    title: '2. Поглинання Нейтрона (Neutron Capture)',
    filename: '/screenshots/nutron-comming.webp',
    phaseId: 2,
    desc: 'Високошвидкісний тепловий нейтрон влучає в ядро Урану-235, утворюючи збуджене ядро Урану-236 (*).'
  },
  {
    id: 3,
    title: '3. Деформація Ядра (Liquid Drop Deformation)',
    filename: '/screenshots/Uranium destruction.webp',
    phaseId: 3,
    desc: 'Отримавши лишок енергії, ядро починає коливатися та витягуватись у форму гантелі. Відстань між протонами зростає.'
  },
  {
    id: 4,
    title: '4. Перетворення Маси в Енергію (E=mc²)',
    filename: '/screenshots/mass is converted into energy.webp',
    phaseId: 4,
    desc: 'Коли кулонівське відштовхування переважає ядерне притягання, перешийок розривається! Дефект маси перетворюється на колосальну кінетичну та випромінювану енергію E=mc².'
  },
  {
    id: 5,
    title: '5. Продукти Розпаду (Fission Products)',
    filename: '/screenshots/the result of the decay of uranium atoms.webp',
    phaseId: 5,
    desc: 'Утворюються два осколки розпаду (наприклад, Барій-142 та Криптон-91) і вивільняється 2-3 вільні нейтрони.'
  },
  {
    id: 6,
    title: 'Загальна Схема Ядерного Розпаду (Decay Overview)',
    filename: '/screenshots/The-Decay-of-Uranium.webp',
    phaseId: 1,
    desc: 'Огляд повного циклу розпаду атомів Урану від бомбардування нейтроном до вивільнення фрагментів та гамма-випромінювання.'
  },
  {
    id: 7,
    title: 'Ланцюгова Ядерна Реакція (Chain Reaction)',
    filename: '/screenshots/Chain reaction.webp',
    phaseId: 6,
    desc: 'Вивільнені нейтрони влучають у сусідні ядра Урану-235, спричиняючи лавиноподібну самопідтримувану ланцюгову реакцію.'
  }
];

export function GalleryDrawer({ isOpen, onClose, onSelectPhase }) {
  const [selectedImg, setSelectedImg] = useState(null);

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'rgba(5, 8, 18, 0.85)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem'
    }}>
      <div className="glass-panel" style={{
        width: '100%',
        maxWidth: '1000px',
        maxHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        border: '1px solid rgba(0, 210, 255, 0.4)',
        boxShadow: '0 0 40px rgba(0, 210, 255, 0.25)'
      }}>
        {/* Header */}
        <div style={{
          padding: '1.25rem 1.5rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <BookOpen color="#00d2ff" size={24} />
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', color: '#fff' }}>
              Галерея Фізичних Схем та Ілюстрацій
            </h2>
          </div>
          <button 
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-muted)',
              cursor: 'pointer',
              padding: '4px'
            }}
          >
            <X size={24} />
          </button>
        </div>

        {/* Content Body */}
        <div style={{ padding: '1.5rem', overflowY: 'auto', flex: 1 }}>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
            Натисніть на схему з папки <code style={{ color: '#00d2ff', background: 'rgba(0,210,255,0.1)', padding: '2px 6px', borderRadius: '4px' }}>/screenshots</code>, щоб переглянути пояснення та перейти до відповідного етапу 3D-моделювання:
          </p>

          <div className="gallery-grid">
            {DIAGRAMS.map((item) => (
              <div 
                key={item.id} 
                className="gallery-card"
                onClick={() => setSelectedImg(item)}
              >
                <img src={item.filename} alt={item.title} />
                <div className="gallery-card-title">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enlarged Image Modal */}
      {selectedImg && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 110,
          background: 'rgba(0, 0, 0, 0.9)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem'
        }}>
          <div className="glass-panel" style={{
            maxWidth: '850px',
            width: '100%',
            padding: '1.5rem',
            position: 'relative'
          }}>
            <button 
              onClick={() => setSelectedImg(null)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'rgba(255,255,255,0.1)',
                border: 'none',
                color: '#fff',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <X size={20} />
            </button>

            <h3 style={{ fontFamily: 'var(--font-heading)', color: '#00d2ff', marginBottom: '1rem', paddingRight: '2rem' }}>
              {selectedImg.title}
            </h3>

            <img 
              src={selectedImg.filename} 
              alt={selectedImg.title} 
              style={{
                width: '100%',
                maxHeight: '400px',
                objectFit: 'contain',
                borderRadius: '8px',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                marginBottom: '1rem'
              }} 
            />

            <p style={{ color: '#e2e8f0', lineHeight: 1.6, marginBottom: '1.5rem', fontSize: '1rem' }}>
              {selectedImg.desc}
            </p>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
              <button 
                className="btn-action primary"
                onClick={() => {
                  if (onSelectPhase) onSelectPhase(selectedImg.phaseId);
                  setSelectedImg(null);
                  onClose();
                }}
              >
                <PlayCircle size={18} /> Перейти в 3D Симуляцію
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
