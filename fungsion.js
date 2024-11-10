document.addEventListener('DOMContentLoaded', function() {
    const animeitems = document.querySelectorAll('.anime-item');
    animeitems.forEach(item => {
        item.addEventListener('click', function() {
            const videoSrc = this.getAttribute('data-video');
            window.location.href = videoSrc;
        });
    });
});


const box = document.querySelector('.box');

// Ambil posisi awal objek
const initialPosition = {
    left: window.innerWidth / 2 - -280,  // Setengah dari lebar layar (untuk center)
    top: window.innerHeight / 2 - 220,  // Setengah dari tinggi layar (untuk center)
};

// Set posisi awal objek
box.style.left = `${initialPosition.left}px`;
box.style.top = `${initialPosition.top}px`;

// Event listener untuk 'mousemove'
window.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Hitung jarak antara kursor dan objek
    const boxRect = box.getBoundingClientRect();
    const boxX = boxRect.left + boxRect.width / 2;
    const boxY = boxRect.top + boxRect.height / 2;

    const distanceX = mouseX - boxX;
    const distanceY = mouseY - boxY;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    // Jika jarak kurang dari 150px, tambah efek animasi
    if (distance < 20) {
        const scale = 1 + (20 - distance) / 20;
        box.style.transform = `scale(${scale})`;
    } else {
        // Kembali ke posisi semula
        box.style.transform = 'scale(1)';
    }
});
function moveBox() {
    const box = document.querySelector('.box');
    box.classList.toggle('shifted');  }// Menambahkan/menghapus kelas "shifted"

    //let nama = prompt ('masukan nama anda')

    //alert (`halo ${nama} selamat datang di website falero selamat membaca`)