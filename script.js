document.addEventListener("DOMContentLoaded", function() {
    const popupOverlay = document.getElementById('popup-overlay');
    const popupCloseBtn = document.getElementById('popup-close-btn');
  
    // Cek kunjungan pertama dengan sessionStorage
    let isFirstVisit = sessionStorage.getItem('isFirstVisit');
  
    if (!isFirstVisit) {
      // Tampilkan popup
      popupOverlay.style.display = 'flex';
      sessionStorage.setItem('isFirstVisit', true);
    }
  
    // Klik tombol "Siap!" untuk menutup popup
    popupCloseBtn.addEventListener('click', function() {
      popupOverlay.style.display = 'none';
    });
  });  