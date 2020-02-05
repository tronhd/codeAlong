//print all prime numbers up to a 1000
//prime numbers
//print number
    //console.log()
//count
//    for(var i=0; i<1000;i++)\


function printPrimes(){
    for(var i=0; i<1000;i++){
        if(i<= 3){
            console.log(i);
        }   else if(i %2 != 0|| i% 3 !=0){
                //the number is not 1 or 2 and is odd
                var j=5;
                while(j*j <= i){
                    if(i % j === 0 || i%(j+2)===0){
                        return false;
                    }
                    j +=6;
                    console.log(i);
                }
        }
    }
}
printPrimes();


function printPrimes(){
    for(var i=0; i<100;i++){
      if(i==1||i==2||i==3||i==5){
        console.log(i);
      } else if(i%2 !=0|| i%3 !=0|| i%5 !=0){
          console.log(i);
      }   else console.log(i);
    }
  }
function printPrimes();