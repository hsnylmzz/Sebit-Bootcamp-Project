

//Step 1 

//Doğru Cevapları bir dizide tut.

//Step 2

//Formu bir şekilde check'in içindeki kullanıcın girdiği değerleri alın formu
//çektikten sonra içindeki değerlere örneğini al.

//Step 3
//İster forma submit olduğunda eventi eklersiniz ister buttona click eventi

//Step 4
//Doğru Cevaplarla kullanıcının girdiği cevaplara foreach yardımıyla kontrol edip doğru cevap sayısı kadar
//puanı attırın başlangıç score u na 0 atayın.

//Step 5 
// d none class'ını kaldırın.Elde ettiğiniz score u span içine atayın.

const correctAnswers = ["E","E","E","E"];
const form = document.querySelector('.question-form');
const result = document.querySelector('.result');


form.addEventListener('submit', (e) => {
    e.preventDefault(); // Preventdefault kavramı ilgili elementin tarayıcı tarafından o an yaptığı varsayılan işlemi engellemeye yarar. 
    const userAnswers = [
        form.q1.value,
        form.q2.value,
        form.q3.value,
        form.q4.value,
    ];

    let score = 0;
    userAnswers.forEach((cevaplar,index) => {
        if(cevaplar === correctAnswers[index])
        {
            score += 25;
        }
    });
    result.classList.remove('d-none');
    result.querySelector('#percentage').textContent = `${score}%`;
});