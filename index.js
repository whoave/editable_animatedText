
let text = document.getElementById('animatedText');
let a = 0;
var text1Int = null;
var text2Int = null;
var text1 = "USLU";
var text2 = "WAS HERE";
var t1Array = ['U','S','L','U'];
var t2Array = ['W','A','S',' ','H','E','R','E'];

changer = function(){
    text1 = document.getElementById('blinks1').value;
    text2 = document.getElementById('blinks2').value;
    t1Array = text1.split('');
    t2Array = text2.split('');
}

loadEr = function(){
    text1Int = setInterval(Text1,300);
}


addLetter = function(letter,lim,main){
    if(main == text1){
        if(lim>t1Array.length-1){
            a=0;
            text.innerHTML='';
            clearInterval(text1Int);
            text2Int = setInterval(Text2,300);
        }else{
            a++;
            text.innerHTML+=letter;
        }
    }
    if(main == text2){
        if(lim>t2Array.length-1){
            a=0;
            text.innerHTML='';
            clearInterval(text2Int);
            text1Int = setInterval(Text1,300);
        }else{
            a++;
            text.innerHTML+=letter;
        }
    }
}



Text1 = function(){
    let Text1 = t1Array;
    let main = text1;
    addLetter(Text1[a],a,main);
    }

Text2 = function(){
    let Text2 = t2Array;
    let main = text2;
    addLetter(Text2[a],a,main);
    }

Blink = function(){
    let cibik = document.getElementById('cibik');
    if(blink==false){
        cibik.setAttribute('style','color:white;');
        blink=true;
    }else{
        cibik.setAttribute('style','color:black;');
        blink=false;
    }
    }
let blink = false;
let blinker = setInterval(Blink,225);
