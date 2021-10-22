 console.log("Merhaba Kodlama.io")
// //js type safe değildir

 let dolarDun = 9.20
 let dolarBugun = 9.30
 {
     let dolarDun= 9.10
 }

console.log(dolarDun)

const euroDun= 11.2
// //const'la bir veri oluşturulduğunda o artık sabittir
console.log(euroDun)

// //array
// //camelCasing
// //PascalCasing
 let konutKredileri = ["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Konut Kredisi"]
 for (let i = 0; i < konutKredileri.length; i++) {
     console.log("<li>"+konutKredileri[i]+"</li>")
    
}
console.log(konutKredileri)
// //html ürettik


let sayi1 = 10;
sayi1 = "Başak Çiftçi"
let student = {id:1, name:"Başak"}
//console.log(student);


function save(puan=10,ogrenci){
    console.log(ogrenci.name + " : " + puan)

}
save(undefined,student)


let students =["Başak Çiftçi","Engin Demiroğ"]
console.log(students)
let students2 =[student,{id:2, name:"Burcu"}]
console.log(students2)

//rest
let showProducts = function (id,...products) {
    console.log(id)
    console.log(products)

}
console.log(typeof showProducts)
showProducts(10,["Elma","Muz","Avacado"])
//bu elemanlar productsın içinde array olarak tutulmuş oluyor

//spread
let points =[1,2,3,50,3,60,14]
console.log(...points)
// console.log(Math.max(1,2,3,50,3,60,14))
console.log(Math.max(...points))
console.log("ABC","D",..."EFG","H")

//Destruckturing
 let populations =[10000,20000,30000,[40000,100000]]
 let [small,medium,high,[veryHigh,maximum]] = populations
 console.log(small)
 console.log(medium)
 console.log(high)
 console.log(veryHigh)
 console.log(maximum)


 function someFunction([small1],number) {
     console.log(small1)
     
 }

someFunction(populations)


let category = {id:1, name:"İçecek"}
console.log(category.id)
console.log(category["name"])


let{id,name} =category
console.log(id)
console.log(name)





