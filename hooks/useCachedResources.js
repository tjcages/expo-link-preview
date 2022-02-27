import { useEffect, useState } from 'react';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      setLoadingComplete(true);
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}