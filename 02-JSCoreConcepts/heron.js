// boki trójkąta
a = 3;
b = 4;
c = 5;
h = 7

// Pole trókąta o bokach ..., ... oraz ... wynosi ... .

let PoleTroj = (a, b, c) => {
    p = (a + b + c) / 2 
    Pole = p * Math.sqrt((p-a)*(p-b)*(p-c))
    return `Pole trójkąta o bokach ${a}, ${b} oraz ${c} wynosi ${Pole}`
};

console.log(PoleTroj(a,b,c));