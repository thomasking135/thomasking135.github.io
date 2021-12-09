document.onkeydown=keyPressed;

function keyPressed(e) {//function for key switch
   
    if (e.keyCode == '38') {
     changev(-1)
    }
    else if (e.keyCode == '40') {
     changev(1)
    }
    else if (e.keyCode == '37') {
     changeh(-1)
    }
    else if (e.keyCode == '39') {
     changeh(1)
    }
}

var headSelection = 0
var bodySelection = 0
var bootsSelection = 0

var switchChoice = 0

var head = document.getElementById("head")
var body = document.getElementById("body")
var shoes = document.getElementById("shoes")

//Head selection function
function changeh(shift) {
   if(switchChoice == 0) 
    {
         headSelection += shift 

    if (headSelection < 0)
        headSelection = 5 
        if (headSelection >5)
            headSelection = 0
    //goes through head selection
    head.src = "./images/head"+ headSelection +".png"

    }

 //Body selection function
    if(switchChoice == 1) 
     {
          bodySelection += shift 
 
     if (bodySelection < 0)//<less then
         bodySelection = 5
         if (bodySelection >5)
             bodySelection = 0
     //go through body types selection
     body.src = "./images/body"+ bodySelection +".png"
 
     }
 
 //Footwear selection function
    if(switchChoice == 2) 
     {
          bootsSelection += shift 
 
     if (bootsSelection < 0)
         bootsSelection = 5
         if (bootsSelection >5)
             bootsSelection = 0
     //go through boots selection
     shoes.src = "./images/shoes"+ bootsSelection +".png"
 
     }
 }

function changev(shift){
      switchChoice += shift

      if(switchChoice < 0)
         switchChoice =2

         if(switchChoice >2)
         switchChoice =0    
}