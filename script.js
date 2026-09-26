document.addEventListener("DOMContentLoaded", function () {
    // 1. Ambil Elemen DOM
    const articleContent = document.getElementById("articleContent");
    const fontSelect = document.getElementById("fontSelect");
    const lineHeightSelect = document.getElementById("lineHeightSelect");
    const btnDecrease = document.getElementById("btnDecrease");
    const btnIncrease = document.getElementById("btnIncrease");
    const fontSizeDisplay = document.getElementById("fontSizeDisplay");
    const themeButtons = document.querySelectorAll(".btn-theme");
    const btnReset = document.getElementById("btnReset");

    // Nilai Default Pengaturan Teks
    const DEFAULT_FONT_SIZE = 18; // dalam pixel
    const MIN_FONT_SIZE = 14;
    const MAX_FONT_SIZE = 28;

    let currentFontSize = DEFAULT_FONT_SIZE;

    // 2. Fungsi Mengubah Ukuran Teks
    function updateFontSize(newSize) {
        if (newSize >= MIN_FONT_SIZE && newSize <= MAX_FONT_SIZE) {
            currentFontSize = newSize;
            articleContent.style.fontSize = `${currentFontSize}px`;
            fontSizeDisplay.textContent = `${currentFontSize}px`;
        }
    }

    btnIncrease.addEventListener("click", function () {
        updateFontSize(currentFontSize + 2);
    });

    btnDecrease.addEventListener("click", function () {
        updateFontSize(currentFontSize - 2);
    });

    // 3. Fungsi Mengubah Jenis Font
    fontSelect.addEventListener("change", function () {
        articleContent.style.fontFamily = this.value;
    });

    // 4. Fungsi Mengubah Jarak Baris (Line Height)
    lineHeightSelect.addEventListener("change", function () {
        articleContent.style.lineHeight = this.value;
    });

    // 5. Fungsi Mengubah Tema Warna (Light / Sepia / Dark)
    themeButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            // Hapus kelas tema aktif dari tombol
            themeButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            // Ambil tema dari atribut data-theme
            const selectedTheme = this.getAttribute("data-theme");

            // Bersihkan kelas tema sebelumnya pada artikel
            articleContent.classList.remove("theme-light", "theme-sepia", "theme-dark");
            
            // Tambahkan kelas tema baru
            articleContent.classList.add(selectedTheme);
        });
    });

    // 6. Fungsi Reset Ke Pengaturan Awal
    btnReset.addEventListener("click", function () {
        // Reset ukuran font
        updateFontSize(DEFAULT_FONT_SIZE);

        // Reset jenis font
        fontSelect.selectedIndex = 0;
        articleContent.style.fontFamily = fontSelect.value;

        // Reset line height
        lineHeightSelect.value = "1.8";
        articleContent.style.lineHeight = "1.8";

        // Reset tema warna ke light mode
        themeButtons.forEach(btn => btn.classList.remove("active"));
        themeButtons[0].classList.add("active"); // tombol light mode
        articleContent.classList.remove("theme-sepia", "theme-dark");
        articleContent.classList.add("theme-light");
    });

    // Inisialisasi awal nilai default
    articleContent.style.fontSize = `${DEFAULT_FONT_SIZE}px`;
    articleContent.style.lineHeight = lineHeightSelect.value;
    articleContent.style.fontFamily = fontSelect.value;
});
