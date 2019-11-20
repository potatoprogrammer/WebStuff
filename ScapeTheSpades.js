/* 
    Name: Caio Victor Gonçalves
    Project: ESCAPE THE SPADES 
    Date: 2019-11-20 
*/
function displayImage() {
    var result = "You win!";
    for (let index = 1; index < 5; index++) {
        var num = Math.floor(Math.random() * 4) + 1;
        document.getElementById(index).src="suit-"+num+".png";
        if (num == 4) {
            result = "You lost : (";
        }
    }
    document.getElementById("result").innerHTML = result;
  }