var x = document.createElement("BUTTON"); //First we create a button element
  var t = document.createTextNode("Input Speed"); // This creates the text that will be shown inside the button
  x.appendChild(t); //we place the text within the button
  document.body.appendChild(x); //we place the button into the HTML document, we put it inside the body
  //Below is an event listener linked to the button that activates the jscript function once button is pressed
  x.addEventListener("click", function speedDetector(speed){
    speed = parseInt(prompt('Enter Speed'));
    const topSpeedLimit = 70;
    const pointsPerKm = 5;
    const p = document.createElement('p');
    let h = document.getElementById("welcome");
    //an if-else statement to check speed condintions and whether that satisfy our test conditions
    if (speed<(topSpeedLimit+pointsPerKm)) {
        p.innerText = ('speed is ok');
        document.body.appendChild(p); //we display the innertext (results) of the p element in the body
    } else if (speed>(topSpeedLimit+pointsPerKm)) {
        demeritPoints = Math.floor((speed - topSpeedLimit) / pointsPerKm);
        if (demeritPoints>=12){
            p.innerText = ('License Suspended');
            document.body.appendChild(p); //Similar display of output satisfying these considitions
        }
        else{
            p.innerText = ('Demerit Points:'+ demeritPoints);
            document.body.appendChild(p); //Here, we display demerit points since the speed is above safety  point but below excessive that necessitated licence suspension
        }
    }
})





