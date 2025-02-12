'use client';

import { useEffect } from 'react';
import Intercom from '@intercom/messenger-js-sdk';

export default function IntercomProvider() {
  useEffect(() => {
    // Initialize Intercom with environment variable
    Intercom({
      app_id: process.env.NEXT_PUBLIC_INTERCOM_APP_ID || 'zkny2o1x',
    });

    // Cleanup
    return () => {
      if (window.Intercom) {
        window.Intercom('shutdown');
      }
    };
  }, []);

  return null;
}