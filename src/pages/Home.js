import React, { useEffect } from 'react';
import MiseApi from '@/api/index';

export default function Home() {
  useEffect(() => {
    MiseApi.get();
  });
  return <div>Home {process.env.REACT_APP_MISE_SERVICE_KEY}</div>;
}
