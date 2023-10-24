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

//esercizio 2
console.log('.......................................................................................');

const alunni = [
    {
        id:213,
        name:'Marco della Rovere',
        grades:78
    },
    {
        id:250,
        name:'Andrea Mantegna',
        grades:48
    },
    {
        id:145,
        name:'Gaia Borromini',
        grades:74
    },
    {
        id:196,
        name:'Luigi Grimaldello',
        grades:68
    },
    {
        id:102,
        name:'Piero della Francesca',
        grades:50
    },
    {
        id:120,
        name:'Francesca da Polenta',
        grades:84
    }
];

const nome = alunni.map((nomeAlunno)=>nomeAlunno.name);
console.log(nome);

const over70Grades = alunni.filter((alunno)=> alunno.grades > 70);
console.log(over70Grades);

const over120IdOver70Grades = alunni.filter((alunno)=> (alunno.grades > 70) && (alunno.id > 120));
console.log(over120IdOver70Grades);
