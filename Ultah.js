// Bintang acak warna variatif
const colors = ['#ffffff', '#cceeff', '#e0e0ff'];
for (let i = 0; i < 400; i++) {
  const star = document.createElement("div");
  star.classList.add("star");
  star.style.top = Math.random() * 100 + "vh";
  star.style.left = Math.random() * 100 + "vw";
  star.style.animationDuration = (1 + Math.random() * 2) + "s";
  star.style.opacity = Math.random();
  star.style.background = colors[Math.floor(Math.random() * colors.length)];
  document.body.appendChild(star);
}

// Konfeti meledak saat halaman dibuka
confetti({
  particleCount: 150,
  spread: 70,
  origin: { y: 0.6 }
});

// Tambah konfeti berulang dikit biar rame
setTimeout(() => {
  confetti({
    particleCount: 100,
    spread: 100,
    angle: 90,
    origin: { y: 0.3 }
  });
}, 1500);
