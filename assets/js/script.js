
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
    // 5. FORMULIR CONTACT
    // =================================

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const nama = document.getElementById("contactName").value.trim();
            const email = document.getElementById("contactEmail").value.trim();
            const pesan = document.getElementById("contactMessage").value.trim();

            if (!nama || !email || !pesan) {

                alert("Mohon lengkapi semua data!");
                return;

            }

            // GANTI DENGAN EMAIL TUJUAN MILIKMU
            const emailTujuan = "ekadarmoko47@gmail.com";

            const subjek = "Pesan dari Website Portfolio";

            const isiPesan =
                "Halo Eka,\n\n" +
                "Nama: " + nama + "\n" +
                "Email pengirim: " + email + "\n\n" +
                "Pesan:\n" + pesan;

            const linkEmail =
                "mailto:" + emailTujuan +
                "?subject=" + encodeURIComponent(subjek) +
                "&body=" + encodeURIComponent(isiPesan);

            window.location.href = linkEmail;

        });

    }

});
