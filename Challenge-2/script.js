function speedDetector(speed){
    const topSpeedLimit = 70;
    const pointsPerKm = 5;
    if (speed<(topSpeedLimit+pointsPerKm)) {
        console.log('speed is ok');
    } else if (speed>(topSpeedLimit+pointsPerKm)) {
        demeritPoints = Math.floor((speed - topSpeedLimit) / pointsPerKm);
        if (demeritPoints>=12){
            console.log('License Suspended');
        }
        else{
            console.log('Demerit Points:'+ demeritPoints);
        }
    }
}

speedDetector(150);/*should think of using prompt*/


