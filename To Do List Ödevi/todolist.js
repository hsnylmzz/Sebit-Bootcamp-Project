// Sayfadaki elementlerin seçilmesi
const ekleButonu = document.getElementById("buton");
const girilenGorev = document.getElementById("isim");
const gorevListeKutusu = document.getElementById("tasklistbox");
let elemanSilmeButonu = document.querySelectorAll(".fa-times");
const temizleButonu = document.querySelector("#hepsinisil");
 
 
// Butonlara Eleman ekleme ve silme işlemi
ekleButonu.addEventListener("click", elemanEkle);
temizleButonu.addEventListener("click", elemanlariSil);
 
// Fonksiyonlar
function elemanEkle() {
    // Eğer input kısmı null ise uyarı verir
    if (girilenGorev.value == "")      
        alert("Lütfen değer giriniz");
    
    // input kısmı null değilse aşağıdaki işlemler yapılır
    else {
        
        
        let li = document.createElement("li");
        li.innerText = girilenGorev.value
        let i = document.createElement("i");
        i.classList = "fas fa-times";
        li.appendChild(i);
        gorevListeKutusu.appendChild(li);
        girilenGorev.value = "";
        elemanSilmeButonu = document.querySelectorAll(".fa-times");
        for (let i = 0; i < elemanSilmeButonu.length; i++) {
            elemanSilmeButonu[i].addEventListener("click", elemansil);
        }
    }
}
function elemansil() {
    let secim = confirm("Emin Misiniz?");
    if (secim == true) {
        let silinecek = this.parentElement;
        silinecek.remove();
    }
}
 
function elemanlariSil() {
    let secim = confirm("Hepsini Kalıcı Olarak Silmek İstediğinize Emin Misiniz?");
    if (secim == true) {
        
        let silinecekler = document.querySelectorAll("li");
 
        for (let j = 0; j < silinecekler.length; j++) {
            silinecekler[j].remove();
        }
    }
}