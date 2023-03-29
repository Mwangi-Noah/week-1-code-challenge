const subjects = ["Maths", "English", "Swahili", "Physics", "Biology", "Chemistry", "Computers", "Social"];//we declare subjects as an array, Allows for ease of looping and filtering
let text;
const marks = new Array(); //we create a new array to store input marks
const button = document.querySelector("button") //we retrieve the button element from the HTML document to allow monitoring 
let p = document.getElementById('demo') //we retrieve the <p> element from the HTML document to allow manipulation of the HTML 
   
let grade = []; //create an empty array to store the output grades

//initializa an event listener on the button element. This checks whether the button is clicked and if yes, launch the main function
button.addEventListener("click", 
function yourGrades(){
    p.innerHTML = " ";
    for (let i = 0; i <subjects.length; i++){
      //A loop to facilitate collection of inut and population of array  
    input = parseInt(prompt('Please Enter The ' + subjects[i] + ' Marks'));
    if (input > 100){alert('Please Enter Valid Marks');return;} else {
    marks.push(input);
    }
    }
    for (let i = 0; i <marks.length; i++){
        //A loop to filter marks and populate the grades array
        if (marks[i] > 79){
            grade.push('A');
        }else if (marks[i] >= 60){
            grade.push('B');
        }else if (marks[i] >49){
            grade.push('C');
        }else if (marks[i] >= 40){
            grade.push('D');
        }else{
            grade.push('F');
        }
        
    }
    printResults(); //A callback function o launch the sub-function
   
})
    
   
let ol = document.createElement("ol"); //creates an unordered list
ol.style = "list-style: none;" //This removes the bullets from our list

function printResults(){
    //This function is for printing the results onto the screen. We append the reseults to the li elements and then append these li to the HTML document body
    for (let i = 0; i <subjects.length; i++){
        let li = document.createElement("li")
        li.innerHTML = subjects[i] + "    "+ "(" + marks[i] + ")" + "     " + grade[i]
        ol.appendChild(li);
    }
    
    p.appendChild(ol);
}

