function letterfinder(word,match){
    var condition1=typeof(word)=='string'&&word.length>=2;
    var condition2=typeof(match)=='string'&&match.length==1;
    if(condition1&&condition2==true){
    for(var i=0;i<word.length;i++){
        if(word[i]==match){
            console.log("found the",match,"at",i);
        }
        else{
            console.log("can't find",match,'at',i);
        }
    }
    }
    else{
        console.log("please pass the correct argument to the function");
    }
}
letterfinder(255,2)
letterfinder("cat",'c')