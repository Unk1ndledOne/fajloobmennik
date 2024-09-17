// Функция для открытия модального окна
function openModal(imageSrc) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");

    modal.style.display = "block";
    modalImg.src = imageSrc;
}

// Функция для закрытия модального окна
function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
}

// Добавляем обработчик для закрытия при клике на область вне изображения
window.onclick = function(event) {
    const modal = document.getElementById("imageModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
