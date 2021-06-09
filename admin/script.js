function admintimes() {
  var today = new Date();

  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();

// Pad the time with leading zeroes
  hours = ("0" + hours).slice(-2);
  minutes = ("0" + minutes).slice(-2);
  seconds = ("0" + seconds).slice(-2);

  var current = hours + ":" + minutes + ":" + seconds;

  document.getElementById("currentTime").innerHTML = current;

// To save further calculations had to subtract 1 from both endHour/Minute, from actual times
// Explanation: Each unit of time will show an exclusive time difference; cannot adjust on subsequent time unit
// e.g.  19:55 to 20:05 ≠ 1h 10m   OR   19:54:20 to 19:55:10 ≠ 1m 50s

  var cathourmin = "" + today.getHours() + minutes;

  if ( cathourmin < 745 || cathourmin > 2015)
    var remain = "No Shift: Go Home!";

  if ( cathourmin >= 745 && cathourmin < 1430) {
    shiftType = 'Morning';
    endHour = 13;
    endMinute = 29;

    if (hours > endHour)
      endHour++;
    else if (cathourmin > 1300 && cathourmin < 1330)
      endHour++;

    if (minutes > endMinute)
      endMinute = endMinute + 60;

    var remain = shiftType + " Shift: " + (endHour - hours) + "h " + (endMinute - minutes) + "m " + (60 - seconds) + "s left";
  }
  else if ( cathourmin >= 1430 && cathourmin < 2015 ) {
    shiftType = 'Afternoon';
    endHour = 19;
    endMinute = 14;

    if (hours > endHour)
      endHour++;
    else if (cathourmin > 2000 && cathourmin < 2015)
      endHour++;

    if (minutes > endMinute)
      endMinute = endMinute + 60;

    var remain = shiftType + " Shift: " + (endHour - hours) + "h " + (endMinute - minutes) + "m " + (60 - seconds) + "s left";
  }

// Show time remaining until shift end
  document.getElementById("remainTime").innerHTML = remain;

// Incorrect time display if add 15 minutes to a time that is past 45th minute
// Therefore, reverse the calculation by subtracting 45 minutes
  if (minutes >= 45) {
    hours++;
    minutes = minutes - 45;
  }
  else
    minutes = today.getMinutes() + 15;

// Pad the time with leading zeroes
  hours = ("0" + hours).slice(-2);
  minutes = ("0" + minutes).slice(-2);

  var wait = hours + ":" + minutes;

  document.getElementById("waitTime").innerHTML = wait;

// Show times on tab title, no need to switch tabs to view
  document.title = 'ᴀᴅᴍɪɴ ┇ ' + current + ' ┇ ' + wait;

// Dynamically refresh times, without reloading entire page
  var t = setTimeout(admintimes);
}

function copyToClipboard(text) {
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}

function dateCopy() {
  copyText = document.getElementById("dateInput").value;
  newDate = copyText.slice(0, 2) + '-' + copyText.slice(3, 6) + '-' + copyText.slice(-4);
  copyToClipboard(newDate);
}
