/* var timeleft = 13;
var downloadTimer = setInterval(function () {
  if (timeleft <= 0) {
    timeleft = 13;
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = " ";
  } else {
    document.getElementById("countdown").innerHTML =
      "Cod control valabil " + timeleft + " secunde.";
  }
  timeleft -= 1;
}, 1300);
 */
/* function startCountdown() {
  var timeleft = 13;

  var downloadTimer = setInterval(function () {
    if (timeleft <= 0) {
      clearInterval(downloadTimer);
      document.getElementById("countdown").innerHTML = " ";

      // După ce contorul ajunge la zero și dispare mesajul, așteptăm 1.3 secunde și apoi începem din nou funcția
      setTimeout(startCountdown, 500);
    } else {
      document.getElementById("countdown").innerHTML =
        "Cod control valabil " + timeleft + " secunde.";
    }
    timeleft -= 1;
  }, 1300);
}

// Inițializăm numărătoarea
startCountdown(); */

function startCountdown() {
  let timeleft = 13;

  let downloadTimer = setInterval(function () {
    if (timeleft <= 0) {
      clearInterval(downloadTimer);
      document.getElementById("countdown").innerHTML = " ";

      // Schimbă imaginea
      let imgElement = document.getElementById("codprincipal");
      if (imgElement.src.endsWith("me1.png")) {
        imgElement.src = "me2.png";
      } else {
        imgElement.src = "me2.png";
      }

      // După ce contorul ajunge la zero și dispare mesajul, așteptăm 1.3 secunde și apoi începem din nou funcția
      setTimeout(startCountdown, 1300);
    } else {
      document.getElementById("countdown").innerHTML =
        "Cod control valabil " + timeleft + " secunde.";
    }
    timeleft -= 1;
  }, 1300);
}

// Inițializăm numărătoarea
startCountdown();
