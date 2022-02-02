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
      
    let arr = new Array("samuel" , "admin" , "Samuel" , "Admin");
    let name = prompt("Whats your name?");
    let input = name;
    let status = false;
  
        for(let i = 0; i < arr.length; i++){
            if(name == arr[i]){
                open("https://www.spengergasse.at/");
                status = true;
                break;
                 }
            if(name != arr[i]){

                status = false;
            }
                
            }
        if(status === false){
            document.getElementById('smth').innerHTML = input;
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