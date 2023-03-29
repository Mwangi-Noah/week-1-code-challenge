//event listener for html button click
document.getElementById("myBtn").addEventListener("click", function(){
let grossSalary = parseFloat(prompt('Please Enter This Months Gross Salary')); //Prompts the user for his basic monthly salary
let paye; //initialization
const personalRelief = 2400; //The goverment's current standards

    if (grossSalary<24000){
        paye = 0.01*grossSalary
        
    }
    if (grossSalary<32333){
        paye = (0.25*(grossSalary-24000)) + (0.01*24000);
        
    }
    if (grossSalary>32333){
        paye = ((0.3*(grossSalary-32333)) + (0.25*(32333-24000)) + (0.01*24000))
       
    }
let nssf = prompt("Please enter NSSF Tier: (1 or 2)"); //Basic NSSF tiers in the country
if (nssf == "1"){
    nssfDeduct = 0.06*6000;
}
if (nssf == "2"){
    nssfDeduct = 0.06*18000;
}

taxableIncome = grossSalary-nssfDeduct;//this is the amount of your income that is taxed according to the different tax brackets

if (taxableIncome<5999){
    nhif = 150;
}
if (taxableIncome <=7999){
    nhif = 300;
}
if (taxableIncome <=11999){
    nhif = 400;
}
if (taxableIncome <=14999){
    nhif = 500;
}
if (taxableIncome <=19999){
    nhif = 600;
}
if (taxableIncome <= 24999)
{
    nhif = 750;
}
if (taxableIncome <= 29999)
{
    nhif = 850;
}
if (taxableIncome <=34999){
    nhif = 900;
}
if (taxableIncome <=39999){
    nhif = 950;
}
if (taxableIncome <=44999){
    nhif = 1000;
}
if (taxableIncome <=49999){
    nhif = 1100;
}

if (taxableIncome<=59999){
    nhif = 1200;
}
if (taxableIncome <=69999){
    nhif = 1300;
}
if (taxableIncome<=79999){
    nhif = 1400;
}
if (taxableIncome<=89999){
    nhif = 1500;
}
if (taxableIncome<=99999){
    nhif = 1600;
}
if (taxableIncome=>100000){
    nhif = 1700;
}

let insuranceRelief = 0.15*nhif; //this is a deductable according to current rates

taxDeductions = paye-personalRelief-insuranceRelief;
netPay = taxableIncome - taxDeductions - nhif;
//create <p> and append to document
//These tags will contain the outputs
let p1 = document.createElement("p");
let p2 = document.createElement("p");
let p3 = document.createElement("p");
let p4 = document.createElement("p");
let p5 = document.createElement("p");
p1.innerText = "With a Basic Salary of : Ksh" + grossSalary
p2.innerText = "Your NetPay is: Ksh" + netPay 
p3.innerText = "Your PAYEE is: Ksh" + paye
p4.innerText = "Your NHHF is: Ksh" + nhif
p5.innerText = "Your NSST Deductions: Ksh" + nssfDeduct
//I will now append (place) the p tags to the html body, this will output the results so they can be viewed
document.body.appendChild(p1);
document.body.appendChild(p2);
document.body.appendChild(p3);
document.body.appendChild(p4);
document.body.appendChild(p5);
});