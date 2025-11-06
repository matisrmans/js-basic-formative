const saraksts =[
    {
        nosaukums: "kleita",
        kategorija: "apģērbs",
        cena: 40.99,
        daudzums: 10
    },
    {
        nosaukums: "lāpsta",
        kategorija: "lauksaimniecība",
        cena: 20.99,
        daudzums: 40
    },
    {
        nosaukums: "lejkanna",
        kategorija: "lauksaimniecība",
        cena: 14.99,
        daudzums: 100
    }
];

for(item of saraksts){
    if(item.kategorija === "lauksaimniecība"){
        console.log(item.nosaukums);
    }
}

//kopējā cena
sum = 0;
for(item of saraksts){
    sum+= item.cena;
}
console.log(sum);