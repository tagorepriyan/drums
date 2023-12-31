var noOfButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < noOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", playSound);
}

function playSound() {
    var buttonInnerHTML = this.innerHTML;
    switch (buttonInnerHTML) {
        case "w":
            var tom1 = new Audio('./tom-1.mp3');
            tom1.play();
            break;
        
        case "a":
            var tom2 = new Audio('./tom-2.mp3'); // Corrected filename
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio('./tom-3.mp3');
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio('./tom-4.mp3');
            tom4.play();
            break;

        case "j":
            var snare = new Audio('./snare.mp3');
            snare.play();
            break;

        case "k":
            var kick = new Audio('./kick-bass.mp3'); // Corrected filename
            kick.play();
            break;

        case "l":
            var crash = new Audio('./crash.mp3');
            crash.play();
            break;
    
        default:
            console.log(buttonInnerHTML);
    }
}
