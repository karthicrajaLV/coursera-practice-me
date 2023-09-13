var dairy=['cheese','sour cream','milk','yogurt','ice cream','milkshake']
function logdiary(){
  for(var k of dairy){
    console.log(k);
  }
}
logdiary();
const animal={
  canjump:true
};
const bird=Object.create(animal);
bird.canfly = true;
bird.hasfeathers=true;
function birdcan(){
  for(key of Object.keys(bird)){
    console.log(key+':'+ bird[key]);
  }
}
birdcan();
function animalcan(){
  for (prop in bird){
  console.log(key+':'+bird[prop]);
  }
}
animalcan();

console.log("");