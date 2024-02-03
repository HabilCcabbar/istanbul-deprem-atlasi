const button = document.getElementById("button");

const colorChange = () => {
    if (ilce == "Adalar" || "Atasehir" || "Basaksehir" || "Besiktas" || "Beykoz" || "Beyoglu" || "Cekmekoy" || "Eyupsultan" || "Kadikoy" || "Kagithane" || "Pendik" || "Sancaktepe" || "Sariyer" || "Sisli" || "Sultanbeyli" || "Sile" || "Tuzla" || "Umraniye" || "Uskudar") {
        button.addEventListener("click", () => {
            button.style.backgroundColor = "rgba(0, 255, 0, 1.0)"
        });
    }
    else if(ilce == "Kartal" || "Maltepe") {
        button.addEventListener("click", () => {
            button.style.backgroundColor = "rgba(0, 255, 0, 1.0)"
        });
        sonuç.textContent = ("Kıyı bölgeleri riskli iken genel olarak zemini sağlam bir ilçedir.")
    }
    
    else if (ilce == "Avcilar" || "Bagcilar" || "Bakirkoy" || "Buyukcekmece" || "Esenler" || "Esenyurt" || "Fatih" || "Gungoren" || "Kucukcekmece" || "Silivri" || "Zeytinburnu") {
        button.addEventListener("click", () => {
            button.style.backgroundColor = "rgba(255, 0, 0, 1.0)"
        })
    }
    else {
        button.addEventListener("click", () => {
            button.style.backgroundColor = "rgba(255, 255, 0, 1.0)"
        })
        sonuç.textContent = ("Ya bulunduğunuz ilçenin zemini geçiş bölgesindedir ya da zemin hakkında tam bilgi bulunmamaktadır.")
    }
}

const locationFinder = () => {

    const status = document.querySelector(".durum");


    const success = (position) => {
        console.log(position);
        const paralel = position.coords.latitude;
        const meridyen = position.coords.longitude;
  

        const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${paralel}&longitude=${meridyen}&localityLanguage=en`;
    
        fetch(geoApiUrl)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            durum.textContent = (`Paralel: ${paralel}, Meridyen: ${meridyen}, İlçe: ${data.locality}`);
            ilce = data.locality;
            ilce = String(ilce);
            durum.textContent = (`Paralel: ${paralel}, Meridyen: ${meridyen}, İlçe: ${data.locality}`);
            sonuç.textContent = (`Görev başarılı. Konum Bulundu.`)
            colorChange(ilce);
        })
    }

    const error = () => {
        durum.textContent = "Konumunuz bulunamadı.";
    }

    navigator.geolocation.getCurrentPosition(success,error);

}

document.querySelector(".button").addEventListener("click", locationFinder);