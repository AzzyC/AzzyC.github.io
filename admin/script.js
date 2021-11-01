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

// To save further calculations had to subtract 1 from endMinute, from actual times
// Explanation: Each unit of time will show an exclusive time difference; cannot adjust on subsequent time unit
// e.g.  19:55 to 20:05 ≠ 1h 10m   OR   19:54:20 to 19:55:10 ≠ 1m 50s

  var cathourmin = "" + today.getHours() + minutes;

  if ( cathourmin < 745 || cathourmin >= 2030)
    var remain = "No Shift: Go Home!";

  if ( cathourmin >= 745 && cathourmin < 1430) {
    endHour = 14;
    endMinute = 29;

    if (minutes > endMinute)
      endMinute = endMinute + 60;

    if (minutes > 29)
      endHour--;

    var remain = "AM Shift (2:30pm): " + (endHour - hours) + "h " + (endMinute - minutes) + "m " + (60 - seconds) + "s left";
  }
  else if ( cathourmin >= 1430 && cathourmin < 2030 ) {
    endHour = 20;
    endMinute = 29;

    if (minutes > endMinute)
      endMinute = endMinute + 60;

    if (minutes > 29)
      endHour--;

    var remain = "PM Shift (8:30pm): " + (endHour - hours) + "h " + (endMinute - minutes) + "m " + (60 - seconds) + "s left";
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
  var t = setTimeout(admintimes, 0);
}

function dateCopy() {
  var doseDate = new Date(document.getElementById("dateInput").value);
  secondDose = doseDate.toDateString(doseDate.setDate(doseDate.getDate() + 56));

  var doseDate = new Date(document.getElementById("dateInput").value);
  boosterDose = doseDate.toDateString(doseDate.setDate(doseDate.getDate() + 182));

  alert('𝗕𝗲𝗹𝗼𝘄 𝗮𝗿𝗲 𝗱𝗮𝘁𝗲𝘀 𝗳𝗼𝗿 𝘄𝗵𝗲𝗻 𝗽𝗮𝘁𝗶𝗲𝗻𝘁 𝗶𝘀 𝗲𝗹𝗶𝗴𝗶𝗯𝗹𝗲 𝗳𝗼𝗿 𝘀𝘂𝗯𝘀𝗲𝗾𝘂𝗲𝗻𝘁 𝗱𝗼𝘀𝗲:' +
  '\n\n' +
  '╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍' +
  '\n\n' +
  'If inputted 𝟭𝘀𝘁 Dose:  ' + secondDose + ' (𝟮𝗻𝗱 𝗗𝗼𝘀𝗲)' +
  '\n\n' +
  'If inputted 𝟮𝗻𝗱 Dose:  ' + boosterDose + ' (𝗕𝗼𝗼𝘀𝘁𝗲𝗿 𝗗𝗼𝘀𝗲)' +
  '\n\n' +
  '\t\t\t (𝙋𝙧𝙚𝙨𝙨 𝙀𝙣𝙩𝙚𝙧 𝙩𝙤 𝙘𝙡𝙤𝙨𝙚 𝙩𝙝𝙞𝙨 𝙬𝙞𝙣𝙙𝙤𝙬)'  );
}

function doseGap() {
// Work the date 8 weeks ago, as that is the protocol for the gap between both doses
  var today = new Date();
  today.setDate(today.getDate() - 56);
  var normgap = today.toDateString();
  document.getElementById("normgap").innerHTML = normgap;

// Show date 6 months ago
  var today = new Date();
  today.setDate(today.getDate() - 182);
  var shortgap = today.toDateString();
  document.getElementById("shortgap").innerHTML = shortgap;
}
