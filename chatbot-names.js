
function detectNamesAndReact(message) {
    const msgLower = message.toLowerCase();
    // Özel komutlar yapay zekadan bağımsız çalışacak
    if (msgLower.includes('sevgi küçük') || msgLower.includes('erenin karısı') || msgLower.includes('roblox')) {
        return false;
    }
    // Tüm kelimeleri ayır
    const words = message.split(/\s+/);
    // İki kelimeden oluşan tamamı büyük harfli isimleri kontrol et
    for (let i = 0; i < words.length - 1; i++) {
        if (isAllUpper(words[i]) && isAllUpper(words[i+1])) {
            openErenPage(words[i] + ' ' + words[i+1]);
            return true;
        }
    }
    // Tek kelime tamamı büyük harfli isim kontrolü
    for (let i = 0; i < words.length; i++) {
        if (isAllUpper(words[i])) {
            openErenPage(words[i]);
            return true;
        }
    }
    return false;
}

function isAllUpper(word) {
    // Sadece harflerden oluşan ve tamamı büyük harf olan kelimeler
    return /^[A-ZÇĞİÖŞÜ]+$/.test(word);
}

function isName(word) {
    // İlk harfi büyükse ve harf içeriyorsa özel isim kabul et
    return /^[A-ZÇĞİÖŞÜ][a-zçğıöşü]+$/.test(word);
}

function openErenPage(name) {
    const newWindow = window.open('', '_blank', 'width=900,height=700');
    const htmlContent = `
        <!DOCTYPE html>
        <html lang="tr">
        <head>
            <meta charset="UTF-8">
            <title>${name}</title>
            <style>
                body {
                    margin: 0;
                    padding: 0;
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    background: linear-gradient(135deg, #ff00cc, #3333ff, #00ff99, #ffcc00, #ff3300);
                    background-size: 400% 400%;
                    animation: gradientShift 4s ease infinite;
                }
                @keyframes gradientShift {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                .main-title {
                    font-size: 4em;
                    font-weight: bold;
                    color: white;
                    text-shadow: 0 2px 12px #333;
                    margin-bottom: 40px;
                    text-align: center;
                }
                .subtitle {
                    font-size: 2em;
                    color: #fff;
                    margin-bottom: 30px;
                    text-align: center;
                }
                canvas {
                    position: fixed;
                    left: 0;
                    top: 0;
                    width: 100vw;
                    height: 100vh;
                    pointer-events: none;
                    z-index: 9999;
                }
            </style>
        </head>
        <body>
            <div class="main-title">${name.toUpperCase()} ANNEN 18 YAŞINDA TAM BENLİK</div>
            <div class="subtitle">🎉🎊 Renkli ve Konfetili Sayfa 🎊🎉</div>
            <canvas id="confetti"></canvas>
            <script>
                // Konfeti efekti
                const canvas = document.getElementById('confetti');
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                const ctx = canvas.getContext('2d');
                const confetti = [];
                for (let i = 0; i < 120; i++) {
                    confetti.push({
                        x: Math.random() * canvas.width,
                        y: Math.random() * -canvas.height,
                        r: Math.random() * 8 + 4,
                        c: 'hsl(' + (Math.random()*360) + ',90%,60%)',
                        s: Math.random() * 2 + 1
                    });
                }
                let frame = 0;
                function draw() {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    for (const p of confetti) {
                        ctx.beginPath();
                        ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
                        ctx.fillStyle = p.c;
                        ctx.fill();
                        p.y += p.s + Math.sin(frame/10 + p.x/80)*1.5;
                        if (p.y > canvas.height) p.y = -10;
                    }
                    frame++;
                    if (frame < 120) requestAnimationFrame(draw);
                }
                draw();
            </script>
        </body>
        </html>
    `;
    newWindow.document.write(htmlContent);
    newWindow.document.close();
}

// Kullanım örneği:
// document.getElementById('chat-form').addEventListener('submit', function(e) {
//     e.preventDefault();
//     const input = document.getElementById('user-input');
//     const userMsg = input.value.trim();
//     if (!userMsg) return;
//     if (!detectNamesAndReact(userMsg)) {
//         // ...normal bot yanıtı...
//     }
//     input.value = '';
// });
