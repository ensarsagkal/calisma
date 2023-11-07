// let element = document.getElementsByTagName("h2")
// console.log(element);
// let element2 = document.querySelectorAll("h2")
// console.log(element2);

// let classSelector= document.querySelector(".section-c").style.backgroundColor="red";
// console.log(classSelector);


// let lion = {
//     'lion-baby' : "cub"
//   };
  
  // dot notation
  // console.log(lion.lion-baby); // error: ReferenceError: baby is not defined
  // bracket notation
  // console.log(lion['lion-baby']); // "cub"
  // console.log(lion["lion-baby"]);


//   let category = 'carnivore';
//  let lion = {
//   'lion-baby' : "cub",
//   [category] : true,
// };

// console.log(lion); // { lion-baby: "cub" , carnivore: true }



//   const number = 5;
//   const gavebirth = true;
  
//   let animal = {
//     name: 'lion',
//     age: 6,
//     [gavebirth && 'babies']: number
//   };
  
//   console.log(animal)
let staffs = [
    { name: "Susan", age: 14, salary: 100 },
    { name: "Daniel", age: 16, salary: 120 },
    { name: "Bruno", age: 56, salary: 400 },
    { name: "Jacob", age: 15, salary: 110 },
    { name: "Sam", age: 64, salary: 500 },
    { name: "Dave", age: 56, salary: 380 },
    { name: "Neils", age: 65, salary: 540 }
  ];

 const totalSalary = staffs.reduce((sum,staff)=>sum + (staff.salary)*1.10 ,0 )
 console.log(totalSalary);







// const salary1 = staffs.reduce((sum,p)=>sum + p.salary*1.10,0)
// console.log(salary1);
