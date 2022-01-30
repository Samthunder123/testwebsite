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
      
    let arr = new Array("Samuel" , "Matteo" , "Milos" , "Sid" , "Enzo" , "Luka");
    let name = prompt("Whats your name?");
    let input = name;
  
        for(let i = 0; i < arr.length; i++){
            if(name == arr[i]){
            open("https://www.spengergasse.at/");
                 } else {
                document.getElementById('smth').innerHTML = name;

                }
                
            }
                

   }
   function RemoveText() {
  document.getElementById('smth').innerHTML = "";

   }