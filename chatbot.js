// Basit yapay zeka chatbot mantığı (JavaScript)
const responses = {
    time: [
        () => `Şu anki saat: ${new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })}`,
        () => `Saat bilgisi: ${new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })}`,
        () => `Şu anda saat ${new Date().getHours()}:${String(new Date().getMinutes()).padStart(2, '0')}`
    ],
    date: [
        () => `Bugünün tarihi: ${new Date().toLocaleDateString('tr-TR')}`,
        () => `Tarih: ${new Date().toLocaleDateString('tr-TR')}`,
        () => `Şu anki tarih: ${new Date().toLocaleDateString('tr-TR')}`
    ],
    weather: [
        () => "Şu an hava durumu bilgisini veremiyorum, ama istersen API ile entegre edebilirim!",
        () => "Hava durumu için bir servis ekleyebilirim.",
        () => "Hava durumu: Bulutlu (örnek yanıt)"
    ],
    joke: [
        () => "Neden bilgisayarlar asla acıkmaz? Çünkü hep bir şeyler atıştırırlar!",
        () => "Yapay zekanın en sevdiği şaka: 404 - Mizah bulunamadı!",
        () => "Bir yapay zeka bara girmiş... ve hemen WiFi'ye bağlanmış!"
    ],
    jokeStory: [
        () => "Temel bir gün doktora gitmiş. Doktor: 'Neyiniz var?' Temel: 'Vallahi doktor bey, param yok!'",
        () => "Adamın biri bankaya gitmiş, para çekmek istemiş. Bankacı: 'Hesabınızda para yok.' Adam: 'Olsun, ben yine de çekeyim.'",
        () => "Nasrettin Hoca'ya sormuşlar: 'Hocam, dünya dönüyor mu?' Hoca: 'Dönüyor ama ben görmedim.'",
        () => "Bir gün bir bilgisayar, diğerine: 'Senin RAM'in çok düşük, biraz dinlen!'",
        () => "İki tavuk konuşuyormuş: 'Yumurta mı tavuktan çıkar, tavuk mu yumurtadan?' Diğeri: 'Benim kafam karıştı!'"
    ],
    motivation: [
        () => "Başarı, azimle başlar!",
        () => "Bugün harika bir gün olabilir, denemekten vazgeçme!",
        () => "Her zaman bir umut vardır, yeter ki pes etme.",
        () => "Küçük adımlar büyük değişimler yaratır.",
        () => "Hayallerin için çalışmaya devam et!"
    ],
    health: [
        () => "Sağlığınız için bol su içmeyi unutmayın!",
        () => "Düzenli egzersiz yapmak hem beden hem zihin için faydalıdır.",
        () => "Sağlıklı beslenmek yaşam kalitenizi artırır.",
        () => "Kendinizi iyi hissetmiyorsanız bir uzmana danışın.",
        () => "Uyku düzeni sağlığınız için çok önemlidir."
    ],
    sport: [
        () => "Spor yapmak hem fiziksel hem zihinsel sağlığınızı geliştirir!",
        () => "Favori sporunuz hangisi? Benimki satranç!",
        () => "Düzenli yürüyüş ve egzersiz öneririm.",
        () => "Takım sporları sosyalleşmek için harika bir fırsattır.",
        () => "Spor motivasyonu artırır, denemekten çekinmeyin!"
    ],
    music: [
        () => "Müzik ruhun gıdasıdır! Favori şarkın nedir?",
        () => "Yeni bir müzik keşfetmek ister misin?",
        () => "Farklı türlerde müzik dinlemek ufkunu açar.",
        () => "Dinlenmek için klasik müzik öneririm.",
        () => "Müzik dinlemek stresi azaltır ve motivasyonu artırır."
    ],
    film: [
        () => "Film izlemek için harika bir zaman! Favori filmin nedir?",
        () => "Son izlediğin filmi tavsiye eder misin?",
        () => "Bilim kurgu ve animasyon filmleri öneririm.",
        () => "Sinema, farklı dünyaları keşfetmek için güzel bir yol.",
        () => "Film gecesi için patlamış mısır unutma!"
    ],
    game: [
        () => "Oyun oynamak eğlencelidir! Favori oyunun nedir?",
        () => "Taş-kağıt-makas oynayalım mı? Sen seç, ben cevap vereyim!",
        () => "Zeka oyunları zihni geliştirir.",
        () => "Bilgisayar oyunları bazen sosyalleşmek için de güzel bir yol.",
        () => "Oyun molası vermek motivasyonu artırır."
    ],
    suggestion: [
        () => "Daha fazla kitap okuyabilirsin!",
        () => "Biraz yürüyüş yapmak iyi gelebilir.",
        () => "Yeni bir hobi edinmeyi düşünebilirsin."
    ],
    command: [
        () => "Emrinizi aldım! Ancak bazı komutları uygulamak için yetkim yok.",
        () => "Komutunuzu anladım, ama sadece sohbet edebilirim.",
        () => "Yardımcı olabileceğim bir komut varsa detay verin."
    ],
    info: [
        () => "Bilgi almak için daha fazla detay verebilir misiniz?",
        () => "Size yardımcı olabilmem için konuyu biraz daha açar mısınız?",
        () => "Bilgi isteğinizle ilgili araştırma yapabilirim."
    ],
    greetings: [
        () => "Merhaba! Size nasıl yardımcı olabilirim?",
        () => "Selam! Nasılsınız?",
        () => "Hoş geldiniz!",
        () => "Hey! Buradayım, bana istediğini sorabilirsin.",
        () => "Selam dostum!"
    ],
    questions: [
        () => "Güzel bir soru! Daha fazla detay verebilir misiniz?",
        () => "Sorunuzla ilgili yardımcı olabilirim!",
        () => "Sorunuzu biraz daha açıklar mısınız?",
        () => "Sorunuz çok ilginç, araştırmamı ister misiniz?",
        () => "Bunu merak etmeniz güzel, cevabım: ..."
    ],
    feelings: [
        () => "Umarım gününüz güzel geçiyordur!",
        () => "Duygularınızı anlıyorum.",
        () => "Size destek olmak için buradayım.",
        () => "Her zaman yanınızdayım.",
        () => "Duygularınızı paylaşmak istersen dinlerim."
    ],
    thanks: [
        () => "Rica ederim! Yardımcı olabildiysem ne mutlu bana.",
        () => "Teşekkürler! Size yardımcı olmak güzeldi.",
        () => "Her zaman yardımcı olmaktan mutluluk duyarım."
    ],
    goodbyes: [
        () => "Görüşmek üzere!",
        () => "Hoşça kal!",
        () => "Kendine iyi bak!",
        () => "Her zaman buradayım, tekrar beklerim."
    ],
    default: [
        () => "Size yardımcı olmaktan memnuniyet duyarım!",
        () => "Daha fazla bilgi ister misiniz?",
        () => "Yapay zeka ile ilgili bir sorunuz var mı?",
        () => "Bana istediğin her şeyi sorabilirsin.",
        () => "Daha fazla sohbet etmek ister misin?"
    ]
};

function getBotResponse(message) {
    const msg = message.toLowerCase();
    // Özel renkli yanıt
    if (msg.includes("erenin karısı")) {
        return '<span style="font-size:3em; font-weight:bold; background:linear-gradient(90deg, #ff00cc, #3333ff, #00ff99, #ffcc00, #ff3300); -webkit-background-clip:text; -webkit-text-fill-color:transparent; text-shadow:0 2px 12px #333; display:block; text-align:center;">SAKSOCU</span>';
    }
    // Sevgi küçük özel sayfası
    if (msg.includes("sevgi küçük")) {
        openSevgiKucukPage();
        return "Sevgi Küçük sayfası yeni sekmede açılıyor...";
    }
    if (msg.includes("saat") || msg.includes("zaman") || (msg.includes("kaç") && msg.includes("saat"))) {
        return pick(responses.time)();
    } else if (msg.includes("tarih") || msg.includes("bugün") || msg.includes("günlerden")) {
        return pick(responses.date)();
    } else if (msg.includes("hava") || msg.includes("yağmur") || msg.includes("güneşli") || msg.includes("bulutlu")) {
        return pick(responses.weather)();
    } else if (msg.includes("şaka") || msg.includes("gülmek") || msg.includes("mizah")) {
        return pick(responses.joke)();
    } else if (msg.includes("fıkra") || msg.includes("komik hikaye") || msg.includes("temel") || msg.includes("nasrettin hoca") || msg.includes("adamın biri")) {
        return pick(responses.jokeStory)();
    } else if (msg.includes("motivasyon") || msg.includes("ilham") || msg.includes("azim") || msg.includes("başarı") || msg.includes("umut") || msg.includes("hayal")) {
        return pick(responses.motivation)();
    } else if (msg.includes("sağlık") || msg.includes("hasta") || msg.includes("iyileş") || msg.includes("doktor") || msg.includes("beslenme") || msg.includes("uyku") || msg.includes("egzersiz")) {
        return pick(responses.health)();
    } else if (msg.includes("spor") || msg.includes("egzersiz") || msg.includes("yürüyüş") || msg.includes("koşu") || msg.includes("futbol") || msg.includes("basketbol") || msg.includes("voleybol") || msg.includes("satranç")) {
        return pick(responses.sport)();
    } else if (msg.includes("müzik") || msg.includes("şarkı") || msg.includes("dinle") || msg.includes("albüm") || msg.includes("sanatçı") || msg.includes("tür")) {
        return pick(responses.music)();
    } else if (msg.includes("film") || msg.includes("sinema") || msg.includes("dizi") || msg.includes("izle") || msg.includes("yönetmen") || msg.includes("oyuncu")) {
        return pick(responses.film)();
    } else if (msg.includes("oyun") || msg.includes("taş") || msg.includes("kağıt") || msg.includes("makas") || msg.includes("bilgisayar oyunu") || msg.includes("zeka oyunu")) {
        return pick(responses.game)();
    } else if (msg.startsWith("yap") || msg.startsWith("aç") || msg.startsWith("kapat") || msg.startsWith("göster")) {
        return pick(responses.command)();
    } else if (msg.includes("öner") || msg.includes("tavsiye") || msg.includes("ne yapmalıyım")) {
        return pick(responses.suggestion)();
    } else if (msg.includes("bilgi") || msg.includes("nedir") || msg.includes("açıkla") || msg.includes("detay")) {
        return pick(responses.info)();
    } else if (msg.includes("merhaba") || msg.includes("selam") || msg.includes("hoş geldin") || msg.includes("hey")) {
        return pick(responses.greetings)();
    } else if (msg.includes("?") || msg.startsWith("neden") || msg.startsWith("nasıl") || msg.startsWith("kim") || msg.startsWith("ne")) {
        return pick(responses.questions)();
    } else if (msg.includes("mutlu") || msg.includes("üzgün") || msg.includes("iyi") || msg.includes("kötü") || msg.includes("hisset")) {
        return pick(responses.feelings)();
    } else if (msg.includes("teşekkür") || msg.includes("sağ ol") || msg.includes("eyvallah")) {
        return pick(responses.thanks)();
    } else if (msg.includes("görüşürüz") || msg.includes("hoşça kal") || msg.includes("bay bay") || msg.includes("bye")) {
        return pick(responses.goodbyes)();
    } else if (msg.length > 120) {
        return "Mesajınız oldukça uzun, özetleyebilir misiniz?";
    } else if (msg.length < 5) {
        return "Biraz daha detay verebilir misiniz?";
    } else {
        return pick(responses.default)();
    }
}

function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function openSevgiKucukPage() {
    const newWindow = window.open('', '_blank', 'width=800,height=600');
    const htmlContent = `
        <!DOCTYPE html>
        <html lang="tr">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Sevgi Küçük</title>
            <style>
                body {
                    margin: 0;
                    padding: 20px;
                    font-family: Arial, sans-serif;
                    background: linear-gradient(45deg, #ff0080, #8000ff, #0080ff, #00ff80, #ff8000);
                    background-size: 400% 400%;
                    animation: gradientShift 3s ease infinite;
                    color: white;
                    text-align: center;
                    min-height: 100vh;
                }
                
                @keyframes gradientShift {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                
                .main-title {
                    font-size: 4em;
                    font-weight: bold;
                    text-shadow: 3px 3px 6px rgba(0,0,0,0.5);
                    margin: 50px 0;
                    animation: pulse 2s ease-in-out infinite;
                }
                
                @keyframes pulse {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                    100% { transform: scale(1); }
                }
                
                .subtitle {
                    font-size: 2em;
                    margin: 30px 0;
                    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
                }
                
                .price-table {
                    margin: 40px auto;
                    background: rgba(255,255,255,0.2);
                    border-radius: 15px;
                    padding: 30px;
                    max-width: 600px;
                    backdrop-filter: blur(10px);
                    box-shadow: 0 8px 32px rgba(0,0,0,0.3);
                }
                
                table {
                    width: 100%;
                    border-collapse: collapse;
                    font-size: 1.2em;
                }
                
                th, td {
                    padding: 15px;
                    text-align: left;
                    border-bottom: 2px solid rgba(255,255,255,0.3);
                }
                
                th {
                    background: rgba(255,255,255,0.3);
                    font-weight: bold;
                    font-size: 1.3em;
                }
                
                tr:hover {
                    background: rgba(255,255,255,0.1);
                    transform: scale(1.02);
                    transition: all 0.3s ease;
                }
                
                .sparkle {
                    display: inline-block;
                    animation: sparkle 1.5s ease-in-out infinite;
                }
                
                @keyframes sparkle {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.7; transform: scale(1.1); }
                }
            </style>
        </head>
        <body>
            <div class="main-title">
                <span class="sparkle">✨</span> FAHİŞE SEVGİ KÜÇÜK <span class="sparkle">✨</span>
            </div>
            
            <div class="subtitle">ÜCRETLER</div>
            
            <div class="price-table">
                <table>
                    <thead>

                    </thead>
                    <tbody>
                        <tr>
                            <td>posta</td>
                            <td>3000₺</td>
                        </tr>
                        <tr>
                            <td>1 saat</td>
                            <td>4000₺</td>
                        </tr>
                        <tr>
                            <td>gece boyu</td>
                            <td>6000₺</td>
                        </tr>
                        
                    </tbody>
                    
                </table>
                <div class="main-title">
                <span class="sparkle"></span> ÇAYLIDAYIM GEL BEN ÇAY KOYİM SENDE BANA KOY <span class="sparkle"></span>
            </div>
            </div>
        </body>
        </html>
    `;
    
    newWindow.document.write(htmlContent);
    newWindow.document.close();
}

function addMessage(text, sender = 'bot') {
    const chatBox = document.getElementById('chat-box');
    const msgDiv = document.createElement('div');
    msgDiv.className = 'message ' + sender;
    if (/<span|<div|<br|<b|<i|<u|<a|<img|<svg|<strong|<em|<p|<h[1-6]/.test(text)) {
        msgDiv.innerHTML = text;
    } else {
        msgDiv.textContent = text;
    }
    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
    // Konfeti efekti
    if (text.includes('SAKSOCU')) showConfetti();
}

function showConfetti() {
    // Basit konfeti efekti (canvas ile)
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.left = 0;
    canvas.style.top = 0;
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = 9999;
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    const confetti = [];
    for (let i = 0; i < 120; i++) {
        confetti.push({
            x: Math.random() * canvas.width,
            y: Math.random() * -canvas.height,
            r: Math.random() * 8 + 4,
            c: `hsl(${Math.random()*360},90%,60%)`,
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
        else setTimeout(() => document.body.removeChild(canvas), 800);
    }
    draw();
}

document.getElementById('chat-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const input = document.getElementById('user-input');
    const userMsg = input.value.trim();
    if (!userMsg) return;
    addMessage(userMsg, 'user');
    setTimeout(() => {
        const botMsg = getBotResponse(userMsg);
        addMessage(botMsg, 'bot');
    }, 400);
    input.value = '';
});

// Hoş geldin mesajı
window.onload = () => {
    addMessage('Merhaba! Ben basit bir yapay zeka sohbet botuyum.');
};
