let num=3;
function number(){
  console.log(num);
  num=num-1;
  if(num===0) return;
  number();
}
number()//recursion using function lvk