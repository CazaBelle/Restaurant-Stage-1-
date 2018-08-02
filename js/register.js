//Register Service Worker//
registerServiceWorker = () => {
    if (!navigator.serviceWorker) return;
  
    navigator.serviceWorker.register('/sw.js').then(() => {
      console.log('Service worker registered!')
    }).catch(() => {
      console.log('Failed to register service worker.')
    })
  }         