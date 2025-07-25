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

async function getBotResponse(message) {
    // OpenAI ChatGPT API ile gerçek yanıt
    const apiKey = "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";
    const url = "https://api.openai.com/v1/chat/completions";
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: message }],
                max_tokens: 256,
                temperature: 0.7
            })
        });
        const data = await response.json();
        if (data.choices && data.choices[0] && data.choices[0].message) {
            return data.choices[0].message.content;
        } else {
            return "Bot yanıtı alınamadı.";
        }
    } catch (err) {
        return "Bot API hatası: " + err.message;
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
    // Özel komutlar
    const msgLower = userMsg.toLowerCase();
    if (msgLower.includes('sevgi küçük')) {
        openSevgiKucukPage();
        addMessage('Sevgi Küçük sayfası yeni sekmede açılıyor...', 'bot');
        input.value = '';
        return;
    }
    if (msgLower.includes('erenin karısı')) {
        addMessage('<span style="font-size:3em; font-weight:bold; background:linear-gradient(90deg, #ff00cc, #3333ff, #00ff99, #ffcc00, #ff3300); -webkit-background-clip:text; -webkit-text-fill-color:transparent; text-shadow:0 2px 12px #333; display:block; text-align:center;">SAKSOCU</span>', 'bot');
        input.value = '';
        return;
    }
    if (msgLower.includes('roblox')) {
        window.open('https://reemans.github.io/simple-js/', '_blank');
        addMessage('Roblox linki yeni sekmede açılıyor...', 'bot');
        input.value = '';
        return;
    }
    // Özel isim algılama
    if (!detectNamesAndReact(userMsg)) {
        addMessage(userMsg, 'user');
        getBotResponse(userMsg).then(botMsg => {
            addMessage(botMsg, 'bot');
        });
    }
    input.value = '';
});

// Hoş geldin mesajı
window.onload = () => {
    addMessage('Merhaba! Ben basit bir yapay zeka sohbet botuyum.');
};
