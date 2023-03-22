const subjects = ["Maths", "English", "Swahili", "Physics", "Biology", "Chemistry", "Computers", "Social"];
for (let i = 0; i <subjects.length; i++){
let marks = parseInt(prompt('Please Enter The ' + subjects[i] + ' Marks'));

    if (marks > 70){
        grade = "A";
    } else if (marks >= 60){
        grade = "B";
    } else if (marks > 49){
        grade = "C";
    } else if (marks >= 40){
        grade = "D";
    }else{
        grade = "F";
    }
    
    alert ("Your " +  subjects[i] + " grade is " + grade);
}

