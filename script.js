function openImage(src) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = src;
    lightbox.style.display = 'flex';
}

function closeImage() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}
