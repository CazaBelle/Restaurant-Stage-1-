//Register Service Worker//
// registerServiceWorker = () => {
//     if (!navigator.serviceWorker) return;
  
//     navigator.serviceWorker.register('/sw.js').then(() => {
//       console.log('Service worker registered!')
//     }).catch(() => {
//       console.log('Failed to register service worker.')
//     })
//   }         

if ('serviceWorker' in navigator) {

  navigator.serviceWorker
    .register('./sw.js', { scope: './' })
    .then(function(registration) {
      console.log("Service Worker Registered");
    })
    .catch(function(err) {
      console.log("Service Worker Failed to Register", err);
    })

}