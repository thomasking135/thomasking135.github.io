  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

alert("These Unicorns ain't gonna inflate themselves, people! Step on up!")
var uniOne = 1;
var uniTwo =1;
var unithree = 1;
var alertforOne = 1;
onClick();
function onClick(){
//The first unicorn search
  document.getElementById("1").addEventListener("click", function(e){ 
              if(uniOne%4===0){
                   alert("Gary the Unicorn says, churs Bro!")
                  }
              else{
              var unicorn1 = document.getElementById("1");
              unicorn1.src =  "./images/unicorn-"+uniOne+".png";
              console.log(alertforOne)  
              if(uniOne===4){
                alert("yee-aah")
              }
              else{uniOne++;
              alertforOne++}        
  }
              
  },false);

  //The second unicorn search 
  document.getElementById("2").addEventListener("click", function(e){ 
    if(uniTwo%4===0){
         alert("Gwenda the Unicorn says, muchas gracias!")
        }
    else{
    var unicorn2 = document.getElementById("2");
    unicorn2.src =  "./images/unicorn-"+uniTwo+".png";
    console.log(alertforOne)
    if(uniTwo===4){
      alert("wooaa")
    }
    else{uniTwo++;
    alertforOne++}
}
    
},false);

//The third unicorn search
document.getElementById("3").addEventListener("click", function(e){ //    for the first unicorn
  if(unithree%4===0){
       alert("Brucey the Unicorn says, you're simply the best! Tank-yo! ;)")
      }
  else{
  var unicorn3 = document.getElementById("3");
  unicorn3.src =  "./images/unicorn-"+unithree+".png";
  console.log(alertforOne)
  if(unithree===4){
    alert("buyaaah")
  }
  else{unithree++;
  alertforOne++}
}
  
},false);

}


console.log("Inflate The Unicorn!")
