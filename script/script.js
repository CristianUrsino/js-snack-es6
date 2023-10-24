//esercizio 1 

let vip = [ 
    'Brad Pitt',
    'Johnny Depp',
    'Lady Gaga',
    'Cristiano Ronaldo',
    'Georgina Rodriguez',
    'Chiara Ferragni',
    'Fedez',
    'George Clooney',
    'Amal Clooney',
    'Maneskin'
];
const postiPerTavolo = 4;

const invitati = vip.map((actualVip,i)=>{
    return{tavolo: Math.ceil((i+1) / postiPerTavolo),
    nome: actualVip,
    posto: (i % 4) + 1}
});

console.log(invitati);