class Pets{
    behave(){
        console.log("may be friendly or enjoying their own company");
    }
}
class Dogs extends Pets{
    behave(){
        console.log("plays with us!!make us happy");
    }
}
class Cats extends Pets{
    behave(){
        console.log("minding their own buisness!!");
    }
}
var pets = new Pets();
var labrador=new Dogs();
var persian=new Cats();
pets.behave();
labrador.behave();
persian.behave();