function incrementValue()
   {
       var value = parseInt(document.getElementById('number').value, 10);
       value = isNaN(value) ? 0 : value;
       value++;
       document.getElementById('number').value = value;
   }
  
   function decrementValue() {
    var value = parseInt(document.getElementById('number').value,10)
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('number').value = value;
   }

   function promptMotion() {
       let name = prompt("Whats your name?");
       if(name = "Samuel"){
           onclick.redirectTo(spengergasse.at)

       } else {
        console.log("We have a new Visitor :" + name);

       }
   }