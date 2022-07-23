//const button = document.querySelector('button');
//const button = document.querySelector('#buttonId');
//const button = document.querySelector('.buttonClass');
//const button = document.getElementsByClassName('buttonClass')[0];

const button = document.getElementById('buttonId'); 

// İlk Yöntem 
/*button.addEventListener('click',() =>{
    console.log("Tıklandı");
}) */

//İkinci Yöntem
/*function add()
{
   console.log("Tıklandı"); 
} */
console.log(button);

const liElemanlari = document.querySelectorAll('li');
console.log(liElemanlari);

liElemanlari.forEach(eleman => {
    eleman.addEventListener('click',e =>{
        //console.log("Tıklandı");
        //console.log(e);
        //console.log(e.target);
        e.target.style.color='blue';
    })
})
const ulDegerleri = document.querySelector('ul');
console.log(ulDegerleri);
//ulDegerleri.remove();

/*liElemanlari.forEach(eleman => {
    eleman.addEventListener('click',e =>{
        //console.log("Tıklandı");
        //console.log(e);
        //console.log(e.target);
        e.target.remove(); // tıkladığında elemanı siler.
    })
}) */


/* Step 1
   ul etiketini seçiniz.
   Step 2
   li oluştur.
   Step 3
   Butona tıklandığında ekle
*/
button.addEventListener('click',() => {
    const liElemanim = document.createElement("li");
    liElemanim.textContent = "Javascript";
    /*ulDegerleri.prepend(liElemanim);
    ulDegerleri.append(liElemanim); */
})