// Convert milliseconds difference between current to shift end time, into human-readable format
function msToTime(endTime) {
  var endTimeDate = new Date().toDateString() + ' ' + endTime;
  var date = new Date(endTimeDate).getTime();
  var now = new Date().getTime();
  diff = date - now;

  var milliseconds = Math.floor((diff % 1000) / 100),
    seconds = Math.floor((diff / 1000) % 60),
    minutes = Math.floor((diff / (1000 * 60)) % 60),
    hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

  return hours + "h " + minutes + "m " + seconds + "." + milliseconds + "s left";
}

// Deduct specified days from current date
function doseGap(Gap) {
  var today = new Date();
  today.setDate(today.getDate() - Gap);
  return today.toDateString();
}

// Add specified days onto current date
function addGap(Gap) {
  var doseDate = new Date(document.getElementById("dateInput").value);
  return doseDate.toDateString(doseDate.setDate(doseDate.getDate() + Gap));
}

// Convert from milliseconds into days
function msToDays(Dose) {
  var today = new Date();
  var doseDate = new Date(Dose);
  days = Math.round((doseDate - today) / (1000 * 60 * 60 * 24));

// Add 1-day if curent time is after 12-hour clock, to get correct conversion
  if (today.getHours() >= 12)
    days++;

  return days;
}

// Easier to display direction of days in words than showing/lacking a '-' symbol
function dayDirection(Diff) {
  if (Diff >= 0.5)
    daysDirection = ' days 𝐭𝐨 𝐠𝐨)';
  else if (Diff <= -0.5)
    daysDirection = ' days 𝐚𝐠𝐨)';
  else if (Math.abs(Diff) < 0.5)
    daysDirection = ' days: 𝐓𝐨𝐝𝐚𝐲)';
  else if (!Diff)
    daysDirection = ') 𝐃𝐚𝐭𝐞 𝐧𝐨𝐭 𝐢𝐧𝐩𝐮𝐭𝐭𝐞𝐝 𝐜𝐨𝐫𝐫𝐞𝐜𝐭𝐥𝐲!';

  return daysDirection;
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

// Start of shift remaining time section
// Concatenate hours and minutes to easily compare times
  var cathourmin = "" + today.getHours() + minutes;

  if ( cathourmin < 745 || cathourmin >= 2030)
    var remain = "No Shift: Go Home!";

  if ( cathourmin >= 745 && cathourmin < 1430) {
    amConverted = msToTime('14:30');
    var remain = "AM Shift (2:30pm): " + amConverted;
  }

  else if ( cathourmin >= 1430 && cathourmin < 2030 ) {
    pmConverted = msToTime('20:30');
    var remain = "PM Shift (8:30pm): " + pmConverted;
  }

  document.getElementById("remainTime").innerHTML = remain;
// End of shift remaining time section

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

// Dynamic tab title w/ refreshing times
  document.title = 'ᴀᴅᴍɪɴ ┇ ' + current + ' ┇ ' + wait;

// Show date 8 weeks ago - 2nd Dose
  var normgap = doseGap(56);
  document.getElementById("normgap").innerHTML = normgap;

// Show date 12 weeks ago - 2nd Dose (12-17 y/o)
  var kidgap = doseGap(84);
  document.getElementById("kidgap").innerHTML = kidgap;

// Show date 13 weeks ago - Booster
  var threeMonth = doseGap(91);
  document.getElementById("threeMonth").innerHTML = threeMonth;

// Show present date in DD MMM YY format as tip for input
  var dateTip = 'e.g. ' + today.getDate() + ' '  + today.toDateString().slice(4, -8) + ' ' + today.toDateString().slice(-2);
  document.getElementById("dateTip").innerHTML = dateTip;

// Dynamically refresh times, without reloading entire page
  var t = setTimeout(admintimes, 0);
}

function dateCopy() {
  var today = new Date();

  userInput = new Date(document.getElementById("dateInput").value)

// Start of: Days Diff between Today and User Inputted Date
  daysAgoFromToday = msToDays(userInput)

  daysAgoFromTodayAbs = Math.abs(daysAgoFromToday);
  daysAgoFromTodayDirection = dayDirection(daysAgoFromToday);

// Start of: Date after add 56 days - For 2nd Dose
  secondDose = addGap(56);
  secondDiff = msToDays(secondDose);

  secondDoseDayDirection = dayDirection(secondDiff);
  secondDiffAbs = Math.abs(secondDiff);

// Start of: Date after add 84 days - For 2nd Dose (12-17 y/o)
  secondDoseKid = addGap(84);
  secondDiffKid = msToDays(secondDoseKid);

  secondDoseKidDayDirection = dayDirection(secondDiffKid);
  secondDiffKidAbs = Math.abs(secondDiffKid);

// Start of: Date after add 91 days - For Booster
  boosterDose = addGap(91);
  boosterDiff = msToDays(boosterDose);

  boosterDayDirection = dayDirection(boosterDiff);
  boosterDiffAbs = Math.abs(boosterDiff);

  alert('𝐁𝐞𝐥𝐨𝐰 𝐚𝐫𝐞 𝐝𝐚𝐭𝐞𝐬 𝐟𝐨𝐫 𝐰𝐡𝐞𝐧 𝐩𝐚𝐭𝐢𝐞𝐧𝐭 𝐢𝐬 𝐞𝐥𝐢𝐠𝐢𝐛𝐥𝐞 𝐟𝐨𝐫 𝐬𝐮𝐛𝐬𝐞𝐪𝐮𝐞𝐧𝐭 𝐝𝐨𝐬𝐞, 𝐛𝐚𝐬𝐞𝐝 𝐨𝐧:' +
  '\n\n' +
  userInput.toDateString() + ' (' + daysAgoFromTodayAbs + daysAgoFromTodayDirection +
  '\n' +
  '╍ ╍ ╍ ╍ ╍ ╍ ╍ ╍ ╍ ╍ ╍ ╍ ╍ ╍ ╍ ╍ ╍ ╍ ╍ ╍ ╍ ╍ ╍ ╍ ╍ ╍ ╍ ╍ ╍ ╍ ╍' +
  '\n\n' +
  '𝟐ɴᴅ 𝐃𝐨𝐬𝐞 (𝟭𝟲-𝟭𝟳 𝘆/𝗼):  ' + secondDoseKid + ' (' + secondDiffKidAbs + secondDoseKidDayDirection +
  '\n' +
  '      OR' +
  '\n' +
  '𝟐ɴᴅ 𝐃𝐨𝐬𝐞:  ' + secondDose + ' (' + secondDiffAbs + secondDoseDayDirection +
  '\n' +
  '      OR' +
  '\n' +
  '𝐁𝐨𝐨𝐬𝐭𝐞𝐫:    ' + boosterDose + ' (' + boosterDiffAbs + boosterDayDirection +
  '\n\n' +
  '         (𝙋𝙧𝙚𝙨𝙨 𝙀𝙣𝙩𝙚𝙧 𝙩𝙤 𝙘𝙡𝙤𝙨𝙚 𝙩𝙝𝙞𝙨 𝙬𝙞𝙣𝙙𝙤𝙬)'  );
}
