// ==========================================
// 1. EFEK MENGETIK OTOMATIS (TYPING EFFECT)
// ==========================================
const textArray = ["Informatics Student", "Web Developer", "Network Engineer"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingText = document.querySelector('.typing-test');

function type() {
    const currentText = textArray[textIndex];

    if (isDeleting) {
        typingText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % textArray.length;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
}

document.addEventListener("DOMContentLoaded", type);

// ==========================================
// 2. SAKELAR DARK MODE
// ==========================================
// Catatan: Pastikan id di HTML-mu tetap "darModeToggle" sesuai kodemu sebelumnya
const darkModeToggle = document.getElementById('darModeToggle');

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if(document.body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = '☀️';
    } else {
        darkModeToggle.textContent = '🌙';
    }
});

// ==========================================
// 3. FILTER GALERI PORTOFOLIO
// ==========================================
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Hapus class active dari semua tombol
        filterBtns.forEach(b => b.classList.remove('active'));
        // Tambahkan class active ke tombol yang diklik
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        // Filter karya
        portfolioItems.forEach(item => {
            if(filterValue == 'all' || item.getAttribute('data-category') === filterValue) {
                item.classList.remove('hide');
            } else {
                item.classList.add('hide');
            }            
        });
    });
});