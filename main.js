// // const map1 = new Map();
// // map1.set("banana",2)
// // map1.set("orange",1)
// // map1.set("apple",3)

// // console.log(map1.has("appled"));

// // for (let i of map1){
// //     console.log(i[0]);
// // }

// // const map2 = new Map();
// // const map3 = new Map();
// // map2["Tuan"] = 0;
// // map2["trung"] = 1;

// // map3.set("Tuan",{
// //     "phone-number":"0348795439",
// //     "id" : 225830488
// // });
// // map3.set("Trung",{
// //     "phone-number":"0378889955",
// //     "id" : 225829598
// // });

// // console.log(map2.keys());
// // console.log(map2.size);
// // console.log(map2.has('Tuan'));
// // console.log(map3);
// // console.log(map3.size);
// // console.log(map3.has('Tuan'));


// // const ite = [
// //     ["Tuan",1345],
// //     ["Nghia",3425],
// //     ["Thao",3145],
// //     ["Minh",1424]
// // ];
// // const map4 = new Map(ite);
// // // for (i of ite){
// // //     map4.set(i[0],i[1]);  
// // // }

// // const map5 = new Map(
// //     [
// //         ["Tuan",1345],
// //         ["Nghia",3425],
// //         ["Thao",3145],
// //         ["Minh",1424]
// //     ]
// // )
// // console.log(map4);
// // console.log(map5);

// // for (let i of map5){
// //     console.log(i)
// // }
// // for (let i of map5.entries()){
// //     console.log(i)
// // }

// // for (let [key,value] of map5){
// //     console.log(`${key},${value}`);
// // }
// // // map5.forEach()


// // const car = {
// //     company : "BMW",
// //     owner : "David",
// //     color : "Red"
// // }

// // car.wheelNum = 4;

// // console.log(typeof(car));

// // let y = 10;

// // x = y => "hello world " + y;

// // console.log(typeof(x(100)));
// // console.log(x(100));


// var x = function(a,b){
//     return a+b;
// };

// let z = (a,b,c) => a*b*c; 

// const phraseSpliter = phrase => phrase.split(" ");
// const returnObj = (id = 11,name = "tran trung") => ({id:id,name:name});

// console.log(x(10,20));
// console.log(z(10,20,30));
// console.log(phraseSpliter("Toi ten tri"));
// console.log(returnObj());

// var vehicle = new Set();

// vehicle.add("car");
// vehicle.add("bike");
// vehicle.add("moto");

// console.log(vehicle.has("train"));

// const fromArray = new Set(
//     [
//         {
//             id:21434,
//             name:"maitri"
//         },
//         {   
//             id:21424,
//             name:"John"
//         }
//     ]
// );
// console.log(fromArray.add(
//     {
//         id:21144,
//         name:"orange"
//     }
// ));

// let text = "";
// vehicle.forEach((val) => {
//     text += val;
// });

// fromArray.forEach( (value) => {
//     console.log("hello " + value.name)
// })
// console.log(text);
// console.log(typeof(fromArray));

// const numbers = [4, 9, 16, 25, 29];
// let first = numbers.find(myFunction);

// function myFunction(value, index, array) {
//   return value > 18;
// }

// alert("Hello world");
// var number = [1,3,5,7,9];
// var isOdd = number.every((num) => num%2==1);
// console.log(isOdd);

// var infoRectangle=[1,2,3];
// var answer = infoRectangle.map( (num) => num*2);
// console.log(answer);
// const numbers = [1,2,3,4,5,6,7,8];
// let odds = numbers.filter(num => num % 2);
// console.log(odds);//[1,3,5,7]

// var donations = [120,35,65,70,80];
// let total = donations.reduce(
//     (total,donation) => total+=donation,
//     10
// );
// console.log(total);

// Array.prototype.newmethod = function (callback){
//     for (index in this){
//         if (this.hasOwnProperty(index)){
//             callback(index,this);
//         }
//     }
// }
// var courses = [
//     "ABC",
//     "ADS",
//     "FSD",
//     "Math",
//     "BDC",
//     "SGBVC"
// ]

// courses.newmethod((index,course,a) =>{
//     console.log(index,course,a);
// });

function User(firstName, lastName, avatar){
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
}
var author = new User("Mai","Tri","non");
var user = new User("Tran","Van","non");

console.log(author);
console.log(user);







