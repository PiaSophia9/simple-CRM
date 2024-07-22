let alarm = new Audio("ding.mp3");
let timerStarted = false;

function startTimer() {
  if (!timerStarted) {
    let startTime = new Date().getTime();
    let minutesInp = timer.value.slice(0, 2);
    let countdownTime = 1000 * 60 * minutesInp;
    let endTime = startTime + countdownTime;

    setInterval(function () {
      let timeLeft = endTime - new Date().getTime();

      if (timeLeft > 0) {
        let minutes = timeLeft / (1000 * 60);
        minutes = Math.floor(minutes);
        minutes = ("0" + minutes).slice(-2);
        let seconds = (timeLeft / 1000) % 60;
        seconds = Math.round(seconds);
        seconds = ("0" + seconds).slice(-2);
        let text = minutes + " : " + seconds;
        timer.value = text;
      } else {
        alarm.play();
        timer.value = "00 : 00";
      }
    }, 1000);
    timerStarted = true;
  }
}

// let secondsInp = timer.value.slice(3);

// Besser ware: let minutesInp = parseInt(timer.value.substring(0, 2));

// Else vom ersten "if" um eine Formel reinzuschreiben, was passiert, wenn die Sekunden geaendert werden.

// Sekunden veraenderbar machen.

// Version machen, in der man irgendwo auf dem Bildschirm klicken muss, um zu starten, zu pausieren und doppelklicken muss, um zu resetten.