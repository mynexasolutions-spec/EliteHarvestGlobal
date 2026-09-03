'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { site } from '@/data/site';

type ExpandedAction = 'call' | 'whatsapp' | null;

export function FloatingActions() {
  const [expandedAction, setExpandedAction] = useState<ExpandedAction>(null);
  const actionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!expandedAction) return;

    const closeOnOutsidePress = (event: PointerEvent) => {
      if (!actionsRef.current?.contains(event.target as Node)) {
        setExpandedAction(null);
      }
    };

    document.addEventListener('pointerdown', closeOnOutsidePress);
    return () => document.removeEventListener('pointerdown', closeOnOutsidePress);
  }, [expandedAction]);

  const expandAction = (action: Exclude<ExpandedAction, null>, event: React.MouseEvent<HTMLAnchorElement>) => {
    if (expandedAction !== action) {
      event.preventDefault();
      setExpandedAction(action);
    }
  };

  return (
    <div ref={actionsRef} className="floating-actions" aria-label="Quick contact actions">
      <a className={`floating-action call ${expandedAction === 'call' ? 'is-expanded' : ''}`} href={site.primaryPhoneHref} aria-label="Call Elite Harvest Global" aria-expanded={expandedAction === 'call'} onClick={(event) => expandAction('call', event)}>
        <span className="floating-icon phone-icon" aria-hidden="true">
          <Image src="/assets/images/phone.png" alt="" width={48} height={48} />
        </span>
        <span>Call</span>
      </a>
      <a className={`floating-action whatsapp ${expandedAction === 'whatsapp' ? 'is-expanded' : ''}`} href={site.whatsappHref} target="_blank" rel="noreferrer" aria-label="Chat with Elite Harvest Global on WhatsApp" aria-expanded={expandedAction === 'whatsapp'} onClick={(event) => expandAction('whatsapp', event)}>
        <span className="floating-icon whatsapp-icon" aria-hidden="true">
          <Image src="/assets/images/whatsapp.png" alt="" width={48} height={48} />
        </span>
        <span>WhatsApp</span>
      </a>
    </div>
  );
}
