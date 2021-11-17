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

// Show present date in DD MMM YY format as tip for input
  var today = new Date();
  var dateTip = 'e.g. ' + today.getDate() + ' '  + today.toDateString().slice(4, -8) + ' ' + today.toDateString().slice(-2);
  document.getElementById("dateTip").innerHTML = dateTip;

// Dynamically refresh times, without reloading entire page
  var t = setTimeout(admintimes, 0);
}

function dateCopy() {
  var doseDate = new Date(document.getElementById("dateInput").value);
  secondDose = doseDate.toDateString(doseDate.setDate(doseDate.getDate() + 56));

  var today = new Date();
  var secondDate = new Date(secondDose);

// Convert milliseconds into days
  secondDiff = Math.round((secondDate - today) / (1000 * 60 * 60 * 24));

// Add day if time is after 12-hour clock
  if (today.getHours() >= 12)
    secondDiff++;

  if (secondDiff > 0)
    daysDirection = ' days 𝐭͟𝐨͟ ͟𝐠͟𝐨͟)';
  else if (secondDiff < 0)
    daysDirection = ' days 𝐚͟𝐠͟𝐨͟)';
  else if (secondDiff < 0.5 || secondDiff > 0.5)
    daysDirection = ' days: 𝐓𝐨𝐝𝐚𝐲)';
  else if (!secondDiff)
    daysDirection = ') 𝐃𝐚𝐭𝐞 𝐧𝐨𝐭 𝐢𝐧𝐩𝐮𝐭𝐭𝐞𝐝 𝐜𝐨𝐫𝐫𝐞𝐜𝐭𝐥𝐲!';

// Easier to read direction in text than a '-' symbol
  secondDiffAbs = Math.abs(secondDiff)

  var doseDate = new Date(document.getElementById("dateInput").value);
  boosterDose = doseDate.toDateString(doseDate.setDate(doseDate.getDate() + 182));

  var today = new Date();
  var boosterDate = new Date(boosterDose);

// Convert milliseconds into days
  boosterDiff = Math.round((boosterDate - today) / (1000 * 60 * 60 * 24));

// Add day if time is after 12-hour clock
  if (today.getHours() >= 12)
    boosterDiff++;

  if (boosterDiff > 0)
    boosterDirection = ' days 𝐭͟𝐨͟ ͟𝐠͟𝐨͟)';
  else if (boosterDiff < 0)
    boosterDirection = ' days 𝐚͟𝐠͟𝐨͟)';
  else if (boosterDiff < 0.5 || boosterDiff > -0.5)
    boosterDirection = ' days: 𝐓𝐨𝐝𝐚𝐲)';
  else if (!boosterDiff)
    boosterDirection = ') 𝐃𝐚𝐭𝐞 𝐧𝐨𝐭 𝐢𝐧𝐩𝐮𝐭𝐭𝐞𝐝 𝐜𝐨𝐫𝐫𝐞𝐜𝐭𝐥𝐲!';

// Easier to read direction in text than a '-' symbol
  boosterDiffAbs = Math.abs(boosterDiff);

  alert('𝐁𝐞𝐥𝐨𝐰 𝐚𝐫𝐞 𝐝𝐚𝐭𝐞𝐬 𝐟𝐨𝐫 𝐰𝐡𝐞𝐧 𝐩𝐚𝐭𝐢𝐞𝐧𝐭 𝐢𝐬 𝐞𝐥𝐢𝐠𝐢𝐛𝐥𝐞 𝐟𝐨𝐫 𝐬𝐮𝐛𝐬𝐞𝐪𝐮𝐞𝐧𝐭 𝐝𝐨𝐬𝐞, 𝐛𝐚𝐬𝐞𝐝 𝐨𝐧:' +
  '\n\n' +
  new Date(document.getElementById("dateInput").value).toDateString() +
  '\n' +
  '╍ ╍ ╍ ╍ ╍ ╍ ╍ ╍ ╍ ╍ ╍ ╍ ╍ ╍ ╍ ╍ ╍ ╍ ╍ ╍ ╍ ╍ ╍ ╍ ╍ ╍ ╍ ╍ ╍ ╍ ╍' +
  '\n\n' +
  '𝟐ɴᴅ 𝐃𝐨𝐬𝐞:  ' + secondDose + ' (' + secondDiffAbs + daysDirection +
  '\n' +
  '      OR' +
  '\n' +
  '𝐁𝐨𝐨𝐬𝐭𝐞𝐫:    ' + boosterDose + ' (' + boosterDiffAbs + boosterDirection +
  '\n\n' +
  '\t\t\t (𝙋𝙧𝙚𝙨𝙨 𝙀𝙣𝙩𝙚𝙧 𝙩𝙤 𝙘𝙡𝙤𝙨𝙚 𝙩𝙝𝙞𝙨 𝙬𝙞𝙣𝙙𝙤𝙬)'  );
}
