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
                 } else if(name != arr[i]){
                     document.getElementById('smth').innerHTML = name;
                 } else {
                     documemt.getElementById('smth').innerHTML = name;
                 }
                
            }
                

   }
   function RemoveText() {
  document.getElementById('smth').innerHTML = "";

   }

   function Login() {
    let arr = new Array("Samuel" , "Milos" , "Sid");
    let sarr = new Array("Fetene" , "Simic" , "Khadka");
    for(let i = 0; i < arr.length; i++) {
        if('uname' == arr[i] && 'psw'== sarr[i]) {
            open("https://www.spengergasse.at/")
        }
    }

   }