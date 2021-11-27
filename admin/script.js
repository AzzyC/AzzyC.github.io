function msToTime(duration) {
  var milliseconds = Math.floor((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  return hours + "h " + minutes + "m " + seconds + "." + milliseconds + "s left";
}

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

// Start of shift remaining time calculation
  var cathourmin = "" + today.getHours() + minutes;

  if ( cathourmin < 745 || cathourmin >= 2030)
    var remain = "No Shift: Go Home!";

  if ( cathourmin >= 745 && cathourmin < 1430) {
    var amEndTime = new Date().toDateString() + " 14:30";
    var date = new Date(amEndTime).getTime();
    var now = new Date().getTime();
    diff = date - now;
    diffConverted = msToTime(diff);

    var remain = "AM Shift (2:30pm): " + diffConverted;
  }
  else if ( cathourmin >= 1430 && cathourmin < 2030 ) {
    var pmEndTime = new Date().toDateString() + " 20:30";
    var date = new Date(pmEndTime).getTime();
    var now = new Date().getTime();
    diff = date - now;
    diffConverted = msToTime(diff);

    var remain = "PM Shift (8:30pm): " + diffConverted;
  }

// Show time remaining until shift end
  document.getElementById("remainTime").innerHTML = remain;

// End of shift remaining time calculation

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

// Show date 12 weeks ago, as that is the protocol for the gap between both doses
  var today = new Date();
  today.setDate(today.getDate() - 84);
  var normgap = today.toDateString();
  document.getElementById("kidgap").innerHTML = normgap;


// Show date 6 months ago
  var today = new Date();
  today.setDate(today.getDate() - 175);
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
// Start of second dose
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
    daysDirection = ' days 𝐭͟𝐨͟ ͟𝐠͟𝐨)';
  else if (secondDiff < 0)
    daysDirection = ' days 𝐚͟𝐠͟𝐨)';
  else if (secondDiff < 0.5 || secondDiff > 0.5)
    daysDirection = ' days: 𝐓𝐨𝐝𝐚𝐲)';
  else if (!secondDiff)
    daysDirection = ') 𝐃𝐚𝐭𝐞 𝐧𝐨𝐭 𝐢𝐧𝐩𝐮𝐭𝐭𝐞𝐝 𝐜𝐨𝐫𝐫𝐞𝐜𝐭𝐥𝐲!';

// Easier to read direction in text than a '-' symbol
  secondDiffAbs = Math.abs(secondDiff)

// Start of second dose (12-17)
var doseDate = new Date(document.getElementById("dateInput").value);
secondDoseKid = doseDate.toDateString(doseDate.setDate(doseDate.getDate() + 84));

var today = new Date();
var secondDateKid = new Date(secondDoseKid);

// Convert milliseconds into days
secondDiffKid = Math.round((secondDateKid - today) / (1000 * 60 * 60 * 24));

// Add day if time is after 12-hour clock
if (today.getHours() >= 12)
  secondDiffKid++;

if (secondDiffKid > 0)
  daysDirectionKid = ' days 𝐭͟𝐨͟ ͟𝐠͟𝐨)';
else if (secondDiffKid < 0)
  daysDirectionKid = ' days 𝐚͟𝐠͟𝐨)';
else if (secondDiffKid < 0.5 || secondDiffKid > 0.5)
  daysDirectionKid = ' days: 𝐓𝐨𝐝𝐚𝐲)';
else if (!secondDiffKid)
  daysDirectionKid = ') 𝐃𝐚𝐭𝐞 𝐧𝐨𝐭 𝐢𝐧𝐩𝐮𝐭𝐭𝐞𝐝 𝐜𝐨𝐫𝐫𝐞𝐜𝐭𝐥𝐲!';

// Easier to read direction in text than a '-' symbol
secondDiffKidAbs = Math.abs(secondDiffKid)

// Start of booster dose
  var doseDate = new Date(document.getElementById("dateInput").value);
  boosterDose = doseDate.toDateString(doseDate.setDate(doseDate.getDate() + 175));

  var today = new Date();
  var boosterDate = new Date(boosterDose);

// Convert milliseconds into days
  boosterDiff = Math.round((boosterDate - today) / (1000 * 60 * 60 * 24));

// Add day if time is after 12-hour clock
  if (today.getHours() >= 12)
    boosterDiff++;

  if (boosterDiff > 0)
    boosterDirection = ' days 𝐭͟𝐨͟ ͟𝐠͟𝐨 - 𝗶𝗻𝗰𝗹𝘂𝗱𝗶𝗻𝗴 𝟳 𝗱𝗮𝘆 𝗴𝗿𝗮𝗰𝗲)';
  else if (boosterDiff < 0)
    boosterDirection = ' days 𝐚͟𝐠͟𝐨 - 𝗶𝗻𝗰𝗹𝘂𝗱𝗶𝗻𝗴 𝟳 𝗱𝗮𝘆 𝗴𝗿𝗮𝗰𝗲)';
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
  '𝟐ɴᴅ 𝐃𝐨𝐬𝐞 (𝟭𝟮-𝟭𝟳 𝘆/𝗼):  ' + secondDoseKid + ' (' + secondDiffKidAbs + daysDirectionKid +
  '\n' +
  '      OR' +
  '\n' +
  '𝐁𝐨𝐨𝐬𝐭𝐞𝐫:    ' + boosterDose + ' (' + boosterDiffAbs + boosterDirection +
  '\n\n' +
  '\t\t\t (𝙋𝙧𝙚𝙨𝙨 𝙀𝙣𝙩𝙚𝙧 𝙩𝙤 𝙘𝙡𝙤𝙨𝙚 𝙩𝙝𝙞𝙨 𝙬𝙞𝙣𝙙𝙤𝙬)'  );
}
