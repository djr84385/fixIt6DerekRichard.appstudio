/*
a. All output goes to the console and uses template literals (with the ticks). 
b. Rename the Form1 form 'pets'.
c. On the 'pets' form, create an array named 'petNames' that contains the pet names below.
Hint: remember to add quotes around each name to show it is a string.
Darcy, Jack, Jerry, Marty, Vito, Vinny, Riley, Saddie, Marge, Sam
d. Use an array method to create a new array named "withMarmaduke" that holds the original array data with the string "Marmaduke" added as the last item. Use the 'pets' array in this one line of code.  
e. Write some code that uses at least one array method to do something - pick an interesting one from  the MSN Javascript Array Reference Guide provided by Code Academy: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array (Links to an external site.)
f. The program must let the user pick one of these to do - there are many ways you can write code to do this - think of one :)
> remove "Vinny" from the array.
> remove "Marty" from the array.
> add "Nancy" to the front of the array.
> add their name to the end of the array.
> tell the user the array index where "Riley" is located in the array.
> tell the user the array index where "Cindy" is located. This should return-1 since "Cindy" is not in the array.
> show the 'withMarmaduke' array data.
g. After each user-chosen activity (eg. remove 'Vinny'), output to the console the action taken ('remove Vinny') and the current state of the petNames array using this format:

The action taken was: Remove Vinny
The remaining array data are:
Darcy, Jack, Jerry, Marty, Vito, Riley, Saddie, Marge, Sam
h. When you are completely done coding and it all works perfectly, in GH Desktop create a Pull Request and send it up to GitHub website. 
Then do a Pull Request, and then Merge (have to scroll down for this). GH will merge your branch (with your changes/commits) with the current master. This has the net effect of replacing or overwriting the master with your branch version. Now your branch is the new master!
*/
let petNames = ['Darcy', ' Jack', ' Jerry', ' Marty', ' Vito', ' Vinny', ' Riley', ' Saddie', ' Marge', ' Sam'];

console.log(`${petNames}`);

let withMarmaduke = petNames.push(' Marmaduke');

let userChoice = prompt("Please pick one of these to do:\n 1 Remove \'Vinny\' from the array \n 2 Remove \'Marty\' from the array \n 3 Add \'Nancy\' to the front of the arrray \n 4 Add your name to the end of the array \n 5 Find out where \'Riley\' is located within the array \n 6 Find out where \'Cindy\' is located \n 7 Show the \'Marmaduke\' array");

switch(userChoice) {
case(userChoice = "1"):
  let removeVinny = petNames.splice(5, 1)
  console.log(`${petNames}`)
  alert(`The action taken was: Remove \'Vinny\' from the array \n The remaining data are: ${petNames}.`);
  break;

case(userChoice = "2"):
  let removeMarty = petNames.splice(3, 1)
  console.log(`${petNames}`)
  alert(`The action taken was: Remove \'Marty\' from the array \n The remaining data are: ${petNames}.`);
  break;

case(userChoice = "3"):
  let addNancy = petNames.unshift('Nancy')
  console.log(`${petNames}`)
  alert(`The action taken was: Add \'Nancy\' to the front of the arrray \n The remaining data are: ${petNames}.`);
  break;

case(userChoice = "4"):
  let userName = prompt("Enter your name: ")
  console.log(`${petNames}`)
  alert(`The action taken was: Add user name \'${petNames.push((userName))}\' to the end of the array \n The remaining data are: ${petNames}.`);
  break;

case(userChoice = "5"):
  let rileyIndex = petNames.indexOf(' Riley')
  console.log(`${petNames}`)
  alert(`The action taken was: \'Riley\' is located at ${rileyIndex} in the array \n The remaining data are: ${petNames}.`);
  break;

case(userChoice = "6"):
  let cindyIndex = petNames.indexOf(' Cindy')
  console.log(`${petNames}`)
  alert(`The action taken was: \'Cindy\' is located at ${cindyIndex} in the array \n The remaining data are: ${petNames}.`);
  break;

case(userChoice = "7"):
  console.log(`${petNames}`)
  alert(`The action taken was: You chose the array ${withMarmaduke} \n The remaining data are: ${petNames}.`);
  break;

default:
  alert('Please enter one of the following option\'s numbers.');
}
