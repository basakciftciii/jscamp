console.log("Merhaba Kodlama.io")
//js type safe değildir

let dolarDun = 9.20
let dolarBugun = 9.30
{
    let dolarDun= 9.10
}

console.log(dolarDun)

const euroDun= 11.2
//const'la bir veri oluşturulduğunda o artık sabittir
console.log(euroDun)

//array
//camelCasing
//PascalCasing
let konutKredileri = ["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Konut Kredisi"]
for (let i = 0; i < konutKredileri.length; i++) {
    console.log("<li>"+konutKredileri[i]+"</li>")
    
}
console.log(konutKredileri)
//html ürettik

