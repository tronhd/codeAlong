// Problem 1:
// 	You are going to make a very simple calculator. 
// 	You will create a page with inputs for the user.
// 	You will take two numbers from user input and divide them. 
// 	You will then display that result, with two decimal points. 
// 	Hint: make sure that your user can’t break your calculator


function solve(){
    var userOne= document.getElementById('userInput').value;
    var userTwo= document.getElementById('userInput2').value;
      if(userOne > 0 &&  userOne < 0){
        console.log(userOne / userTwo);
      }  else if(userTwo == 0){
           console.log("Stop trying to crash my hardwork!!!");
      }    else{
             console.log("Go back to school and learn what numbers are.");
      }
    }// I honestly dont know whats wrong with this one.
  
 
 // Problem 2:
 // 	You will be proofreading some texts.
 // 	Given any string, find the longest word and log the length of that word.
 // 	Next, without changing the original array remove any words that are less than four characters, log the removed words, and the text after these changes.
 // 	Bonus: can you show all of this to the user? 
 
 var animals=["dog","ox","rooster","rat","dragon","snake","rabbit","pig","monkey","goat","horse","tiger"];
   console.log(animals[2].length);
 
 var less = animals
   console.log(less)
 
 
 
 // Problem 3:
 // 	You will make a barn object
 // 	This object should have three properties(these can be whatever you want i.e. what color is the barn?)
 // 	This object should have two methods(what can you do in a barn?)
 // 	Use one method to change a property of the object(for example, have a paint barn method and make the barn blue, not red)
 var barn = {
   name: "Carey Dairy",
   animals: "cows",
   color: "blue",
   material: "iron",
 }
 
 
 // Bonus:
 // 	Using regex, let a user make a new password with these requirements:
 // 1)	More than 6 characters long
 // 2)	Uses at least one number
 // 3)	Uses at least one capital letter
 // 4)	Password IS NOT “password”
 