//Task1:Build a function based console log message generator
var message;
var style;
function consolestyler(color,background,fontsize,txt){
  message="%c"+txt;
  style='color: $(color);'
  style+='background: $(background);'
  style+='font-size: $(fontsize);'
  console.log(message,style);
}
//Task2:Build another consolelog message generator
function celebratestyler(reason){
  var fontstyle="color:tomato;font-size:50px";
  if(reason=="birthday"){
    console.log("%cHappy birthday",fontstyle);
  }
  else if(reason=="champions"){
    console.log("%cCongrats on the title!",fontstyle);
  }
  else{
    console.log(message,style);
  }
  
}
//Task3:Run both the consolestyler and celebratestyler
consolestyler('#1d5c63','#ede6db','40px','congrats!')
celebratestyler('birthday')
//Task4:Insert a congratulatory and custom message
function styleandcelebrate(color,background,fontsize,txt,reason){
  consolestyler(color,background,fontsize,txt);
  celebratestyler(reason);
}
//Call stylecelebrate
styleandcelebrate('ef7c8e','fae8e0','30px','you made it!','champions')