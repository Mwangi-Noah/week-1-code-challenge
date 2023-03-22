const subjects = ["Maths", "English", "Swahili", "Physics", "Biology", "Chemistry", "Computers", "Social"];
let text;
const marks = new Array();
let grade = [];
function yourGrades(){
    for (let i = 0; i <subjects.length; i++){
    input = parseInt(prompt('Please Enter The ' + subjects[i] + ' Marks'));
    marks.push(input);
    }
   
}
yourGrades();    
    for (let i = 0; i <marks.length; i++){
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
    

for (let i = 0; i <subjects.length; i++){
    console.log(subjects[i] + ' : ' + marks[i] + " - " + grade[i]);
}



