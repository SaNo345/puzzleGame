var divArray=[];
var picName="cat";
var imgSrc="";
var div1;
var randArray=[];
var vinArr=[0,1,2,3,4,5,6,7,8];
var count=0;

for(var i=0;i<9;i++){
        imgSrc=picName+(i+1)+".jpeg";
    divArray[i]=document.getElementById(i);
    divArray[i].style.backgroundImage="url('cats/"+imgSrc+"')";
}

function userClick(id){
 
    count++;
    if(count<2){
         div1=id;
    }else if(count==2){
        var div2=id;
              
        picExchange(div1,div2);
        exchAngeArray(div1,div2);
        count=0; 
    }
       win();
}
 function picExchange(id1,id2){
     	var nkar=document.getElementById(id1).style.backgroundImage;
        var nkar2=document.getElementById(id2).style.backgroundImage;
	    document.getElementById(id2).style.backgroundImage = nkar;
	    document.getElementById(id1).style.backgroundImage = nkar2;
 }
function randPuzzle(){
    var tempArray=[];
while(randArray.length < 9){
    var randomnumber = getRandomInt(0,9);
    if(randArray.indexOf(randomnumber) > -1) continue;
    randArray[randArray.length] = randomnumber;
    }
    for(var i=0;i<9;i++){
        if(tempArray.indexOf(i)>-1 || tempArray.indexOf(randArray[i])>-1) continue;
        picExchange(i,randArray[i]);
        exchAngeArray(i,randArray[i]);
        tempArray.push(i);
        tempArray.push(randArray[i]);
    }
   
}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function exchAngeArray(id1,id2){ 
        var temp=vinArr[parseInt(id1)];
        vinArr[parseInt(id1)]=vinArr[(parseInt(id2))];
        vinArr[parseInt(id2)]=temp;
}
function win(){
    var b=false;
    for(var k=0;k<9;k++){
            if(k!=vinArr[k]){
                b=false;
                break;
            }
            if(k==vinArr[k]){
                b=true;
                continue;}
        }
    if(b){
        for(var j=0;j<divArray.length;j++){
            divArray[j].style.border='none';
        }
     document.getElementById("win").innerHTML="WInnnn";
    } 
    
}