'use client';

import dynamic from 'next/dynamic';

const IPhoneScene = dynamic(() => import('./IPhoneScene'), {
  ssr: false,
  loading: () => null,
});

export default function IPhoneSceneLoader() {
  return <IPhoneScene />;
}
