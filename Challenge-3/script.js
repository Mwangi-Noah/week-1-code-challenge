let grossSalary = parseFloat(prompt('Please Enter This Months Gross Salary'));
let paye;
const personalRelief = 2400;

    if (grossSalary<24000){
        paye = 0.01*grossSalary
        
    }
    if (grossSalary<32333){
        paye = (0.25*(grossSalary-24000)) + (0.01*24000);
        
    }
    if (grossSalary>32333){
        paye = ((0.3*(grossSalary-32333)) + (0.25*(32333-24000)) + (0.01*24000))
       
    }
let nssf = prompt("Please enter NSSF Tier: (1 or 2)");
if (nssf == "1"){
    nssfDeduct = 0.06*6000;
}
if (nssf == "2"){
    nssfDeduct = 0.06*18000;
}

taxableIncome = grossSalary-nssfDeduct;

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

let insuranceRelief = 0.15*nhif;

taxDeductions = paye-personalRelief-insuranceRelief;
netPay = taxableIncome - taxDeductions - nhif;
alert("With a Basic Salary of :" + grossSalary + "," + "Your Net Pay is :" + netPay);