
// constract object function (create object ) 
/*
let person =function(username,age,salary,gender ){ // parameters contain values 
this.username=username; // created name of proberty 
this.age=age;
this.salary=salary;    // dynamic كل  واحد يعمل بروبيرتى لوحده 
this.gender=gender;
}
// usermame = ahmed  ___>> static 

let ahmedAli = new person('Ahmed Ali',25,7000,'male') // para


console.log(ahmedAli);



class Student {
  constructor(name,age,uni,gpa,salary){
this.name=name;
this.age=age;
this.university=uni;
this.gpa=gpa;
this.salary=salary;

  }
  hello(){
    console.log('hello');
  }
}

*/



/*function student(name,age,uni,gpa){
this.username=name;
this.age=age;
this.university=uni;
this.age=age;

}
student.prototype.hello=function(){
  console.log(`hello ${this.username}`);
}
let s1 = new student('ali',22,'cairo',4);
let s2 = new student('ali mahmoud',62,'Giza',4.5);
console.log(s1);
console.log(s2);


// object create with this + prototype */
/*
class person{
 constructor (name,age,gender){
  this.username=name;
  this.age=age;
  this.gender=gender;
  
}
}
class student extends person{
  constructor (name,age,gender,skills,university,gpa){
    super(name,age,gender)
    this.username=name;
    this.age=age;
    this.gender=gender;
    this.skills=skills;
    this.university=university;
    this.gpa=gpa;
  }
hello(){
  console.log('hello')
}
}
let s1= new student('ahemed',22,"male",'developer','cairo',4);
console.log(s1)
*/



/*
$('sction').animate({width:'100%'},1000)
$('section').animate({hight:'100vvh'},1000,()=>{
$('h2').slideDown(1000)
})*/
$('#demo').on('click', function () {
$(".test").slideUp(2000 ,()=> {
  $('#demo').slideUp(2000);
} );


});

$(".test").animate({width:'100%',hight:"100vh"},2000)