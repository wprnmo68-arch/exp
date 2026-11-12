// Masukkan link YouTube tujuan di sini
const targetYouTubeURL = "https://www.youtube.com/watch?v=MVGoix-ambE";

// Atur waktu tunggu (dalam detik). Ubah ke 0 jika ingin langsung pindah tanpa jeda.
let timeLeft = 3;

const countdownElement = document.getElementById("countdown");
const manualLinkElement = document.getElementById("manual-link");

// Sinkronkan link tombol manual dengan variabel targetYouTubeURL
manualLinkElement.href = targetYouTubeURL;

// Jika waktu tunggu 0, langsung alihkan seketika
if (timeLeft <= 0) {
    window.location.replace(targetYouTubeURL);
} else {
    // Jalankan hitungan mundur setiap 1 detik
    const timer = setInterval(() => {
        timeLeft--;
        countdownElement.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            window.location.replace(targetYouTubeURL);
        }
    }, 1000);
}
