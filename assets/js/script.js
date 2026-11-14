
document.addEventListener("DOMContentLoaded", function () {
 
    // =================================
    // 1. SETTINGS PANEL
    // =================================

    const settingsButton = document.getElementById("settingsButton");
    const settingsPanel = document.getElementById("settingsPanel");
    const closeSettings = document.getElementById("closeSettings");

    // Buka dan tutup Settings
    if (settingsButton && settingsPanel) {

        settingsButton.addEventListener("click", function () {

            const panelSedangTertutup = settingsPanel.hidden;

            settingsPanel.hidden = !panelSedangTertutup;

            settingsButton.setAttribute(
                "aria-expanded",
                String(panelSedangTertutup)
            );

        });

    }

    // Tombol tutup Settings
    if (closeSettings && settingsPanel) {

        closeSettings.addEventListener("click", function () {

            settingsPanel.hidden = true;

            settingsButton.setAttribute("aria-expanded", "false");

        });

    }


    // =================================
    // 2. DARK MODE DAN LIGHT MODE
    // =================================

    const themeToggle = document.getElementById("themeToggle");

    if (themeToggle) {

        themeToggle.addEventListener("change", function () {

            document.body.classList.toggle(
                "light-theme",
                themeToggle.value === "light"
            );

        });

    }


    // =================================
    // 3. LATAR BINTANG
    // =================================

    const starsToggle = document.getElementById("starsToggle");

    if (starsToggle) {

        starsToggle.addEventListener("change", function () {

            document.body.classList.toggle(
                "no-stars",
                !starsToggle.checked
            );

        });

    }


    // =================================
    // 4. MUSIK LATAR
    // =================================

    const music = document.getElementById("backgroundMusic");
    const musicButton = document.getElementById("musicButton");
    const musicVolume = document.getElementById("musicVolume");
    const volumeValue = document.getElementById("volumeValue");

    if (music && musicButton) {

        music.volume = 0.2;

        musicButton.addEventListener("click", async function () {

            if (music.paused) {

                try {

                    await music.play();
                    musicButton.textContent = "⏸ Pause Music";

                } catch (error) {

                    alert(
                        "Musik belum bisa diputar. Pastikan file lofi.mp3 sudah tersedia di assets/audio."
                    );

                }

            } else {

                music.pause();
                musicButton.textContent = "▶ Play Music";

            }

        });

        music.addEventListener("pause", function () {
            musicButton.textContent = "▶ Play Music";
        });

        music.addEventListener("play", function () {
            musicButton.textContent = "⏸ Pause Music";
        });

    }

    // Pengatur volume
    if (music && musicVolume && volumeValue) {

        musicVolume.addEventListener("input", function () {

            music.volume = Number(musicVolume.value) / 100;

            volumeValue.textContent = musicVolume.value + "%";

        });

    }
// =================================
// 6. MASKOT INTERAKTIF
// =================================

const spaceMascot = document.getElementById("spaceMascot");
const mascotMessage = document.getElementById("mascotMessage");

if (spaceMascot && mascotMessage) {

    const messages = [
        "Halo! Selamat datang di portofolio Eka! 👋",
        "Yuk, kenali lebih jauh tentang diriku!",
        "Jangan lupa lihat proyek-proyek yang pernah aku buat!",
        "Terima kasih sudah mampir. Semoga harimu menyenangkan!",
        "Tetap semangat belajar dan berkarya! 🚀"
    ];

    let messageIndex = 0;
    let hideMessageTimer;

    function showMascotMessage(message) {
        mascotMessage.textContent = message;
        mascotMessage.hidden = false;

        clearTimeout(hideMessageTimer);

        hideMessageTimer = setTimeout(function () {
            mascotMessage.hidden = true;
        }, 6000);
    }

    // Sapaan otomatis ketika website dibuka
    setTimeout(function () {
        showMascotMessage(messages[0]);
    }, 1000);

    // Pesan berganti ketika maskot diklik
    function nextMascotMessage() {
        messageIndex = (messageIndex + 1) % messages.length;
        showMascotMessage(messages[messageIndex]);
    }

    spaceMascot.addEventListener("click", nextMascotMessage);

    spaceMascot.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            nextMascotMessage();
        }
    });
}
 // =================================
// 7. ANIMASI TEKS MENGETIK
// =================================

const typingElement = document.getElementById("typing");

if (typingElement) {

    const typingWords = [
        "Pelajar TJKT",
        "Web Developer Pemula",
        "Network Enthusiast",
        "IoT Enthusiast"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {

        const currentWord = typingWords[wordIndex];

        if (isDeleting) {
            charIndex--;
        } else {
            charIndex++;
        }

        typingElement.textContent = currentWord.substring(0, charIndex);

        let typingSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentWord.length) {
            typingSpeed = 1500;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % typingWords.length;
            typingSpeed = 500;
        }

        setTimeout(typeEffect, typingSpeed);
    }

    typeEffect();
}
 
});
