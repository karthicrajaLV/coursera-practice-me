class Person{
  constructor(name="Tom",age=20,energy=100){
    this.name=name;
    this.age=age;
    this.energy=energy;
  }
  sleep(){
    this.energy+=10;
  }
  dosomethingfun(){
    this.energy-=10;
  }
}
class Worker extends Person{
  constructor(name,age,energy,xp=0,hourlywage=10){
    super(name,age,energy);
    this.xp=xp;
    this.hourlywage=hourlywage;
  }
  gotowork(){
    this.xp+=10;
  }
}
function intern(){
  var internobject=new Worker("bob",21,110,0,10)
  internobject.gotowork();
  return internobject;
}
function manager(){
  var managerobject=new Worker("alice",30,120,100,30)
  managerobject.dosomethingfun();
  return managerobject;
}
console.log(intern());
console.log(manager());