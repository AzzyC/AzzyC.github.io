function tempNotice () {
  setTimeout(() => {
    alert('  ***𝐍𝐎𝐓𝐈𝐂𝐄***' +
    '\n' +
    '𝗣𝗹𝗲𝗮𝘀𝗲 𝗯𝗲 𝗮𝗱𝘃𝗶𝘀𝗲𝗱 𝘁𝗵𝗮𝘁 𝘁𝗵𝗶𝘀 𝘀𝗶𝘁𝗲 𝗵𝗮𝘀 𝗻𝗼𝘁 𝘆𝗲𝘁 𝗯𝗲𝗲𝗻 𝘂𝗽𝗱𝗮𝘁𝗲𝗱 𝘁𝗼 𝗿𝗲𝗳𝗹𝗲𝗰𝘁 𝗿𝗲𝗰𝗲𝗻𝘁 𝗚𝗠𝗩𝗖 𝗦𝗶𝘁𝗲 𝗚𝘂𝗶𝗱𝗲𝗹𝗶𝗻𝗲 𝗰𝗵𝗮𝗻𝗴𝗲𝘀 (𝐟𝐫𝐨𝐦 𝐅𝐫𝐢 𝟏𝟎𝐭𝐡 𝐃𝐞𝐜)' +
    '\n\n' +
    '𝗣𝗹𝗲𝗮𝘀𝗲 𝗮𝗱𝗵𝗲𝗿𝗲 𝘁𝗼 𝘁𝗵𝗲 𝗹𝗮𝗺𝗶𝗻𝗮𝘁𝗲𝗱 𝗵𝗲𝗹𝗽𝘀𝗵𝗲𝗲𝘁 𝗴𝗶𝘃𝗲𝗻 𝗮𝘁 𝗲𝗮𝗰𝗵 𝗳𝗿𝗼𝗻𝘁 𝗱𝗲𝘀𝗸, 𝗳𝗼𝗿 𝗯𝗲𝘁𝘁𝗲𝗿 𝘂𝗻𝗱𝗲𝗿𝘀𝘁𝗮𝗻𝗱𝗶𝗻𝗴 𝗼𝗳 𝗱𝗮𝘁𝗲𝘀 & 𝘃𝗮𝗰𝗰𝗶𝗻𝗲𝘀' +
    '\n\n' +
    '𝗔𝗽𝗼𝗹𝗼𝗴𝗶𝗲𝘀 𝗳𝗼𝗿 𝗶𝗻𝗰𝗼𝗻𝘃𝗲𝗻𝗶𝗲𝗻𝗰𝗲𝘀' +
    '\n\n' +
    '𝙉𝙤𝙩𝙚: 𝙄 𝙤𝙣𝙡𝙮 𝙬𝙤𝙧𝙠 𝙤𝙣 𝙩𝙝𝙞𝙨 𝙨𝙞𝙩𝙚 𝙞𝙣 𝙢𝙮 𝙛𝙧𝙚𝙚 𝙩𝙞𝙢𝙚, 𝙨𝙤 𝙩𝙝𝙖𝙣𝙠 𝙮𝙤𝙪 𝙛𝙤𝙧 𝙮𝙤𝙪𝙧 𝙥𝙖𝙩𝙞𝙚𝙣𝙘𝙚');
  }, 750);
}

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

function doseGap(Gap) {
  var today = new Date();
  today.setDate(today.getDate() - Gap);
  return today.toDateString();
}

function addGap(Gap) {
  var doseDate = new Date(document.getElementById("dateInput").value);
  return doseDate.toDateString(doseDate.setDate(doseDate.getDate() + Gap));
}

function msToDays(Dose) {
  var today = new Date();
  var doseDate = new Date(Dose);
  return Math.round((doseDate - today) / (1000 * 60 * 60 * 24));
}

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

// Show times on tab title, no need to switch tabs to view
  document.title = 'ᴀᴅᴍɪɴ ┇ ' + current + ' ┇ ' + wait;

// Work the date 8 weeks ago, as that is the protocol for gap between both doses
  var normgap = doseGap(56);
  document.getElementById("normgap").innerHTML = normgap;

// Show date 12 weeks ago, as that is the protocol for gap between both doses, for 17-17 y/o
  var kidgap = doseGap(84);
  document.getElementById("kidgap").innerHTML = kidgap;

// Show date 6 months ago, gap between second dose to booster
  var shortgap = doseGap(175);
  document.getElementById("shortgap").innerHTML = shortgap;

// Show present date in DD MMM YY format as tip for input
  var dateTip = 'e.g. ' + today.getDate() + ' '  + today.toDateString().slice(4, -8) + ' ' + today.toDateString().slice(-2);
  document.getElementById("dateTip").innerHTML = dateTip;

// Dynamically refresh times, without reloading entire page
  var t = setTimeout(admintimes, 0);
}

function dateCopy() {
  var today = new Date();

// Start of second dose
  secondDose = addGap(56);
  secondDiff = msToDays(secondDose);

// Add day if time is after 12-hour clock, to get correct day conversion from milliseconds
  if (today.getHours() >= 12)
    secondDiff++;

  secondDoseDayDirection = dayDirection(secondDiff);
  secondDiffAbs = Math.abs(secondDiff);

// Start of second dose (12-17)
  secondDoseKid = addGap(84);
  secondDiffKid = msToDays(secondDoseKid);

// Add day if time is after 12-hour clock, to get correct day conversion from milliseconds
  if (today.getHours() >= 12)
    secondDiffKid++;

  secondDoseKidDayDirection = dayDirection(secondDiffKid);
  secondDiffKidAbs = Math.abs(secondDiffKid);

// Start of booster dose
  boosterDose = addGap(175);
  boosterDiff = msToDays(boosterDose);

// Add day if time is after 12-hour clock, to get correct day conversion from milliseconds
  if (today.getHours() >= 12)
    boosterDiff++;

  boosterDiffAbs = Math.abs(boosterDiff);

// Add a note extension for booster to recognise how early patients are admitted
  if (boosterDiffAbs < 0.5 || boosterDiff)
    boosterDayDirection = dayDirection(boosterDiff) + ' - 𝘪𝘯𝘤𝘭. 7 𝘥𝘢𝘺 𝘨𝘳𝘢𝘤𝘦';
  else
    boosterDayDirection = dayDirection(boosterDiff);

  alert('𝐁𝐞𝐥𝐨𝐰 𝐚𝐫𝐞 𝐝𝐚𝐭𝐞𝐬 𝐟𝐨𝐫 𝐰𝐡𝐞𝐧 𝐩𝐚𝐭𝐢𝐞𝐧𝐭 𝐢𝐬 𝐞𝐥𝐢𝐠𝐢𝐛𝐥𝐞 𝐟𝐨𝐫 𝐬𝐮𝐛𝐬𝐞𝐪𝐮𝐞𝐧𝐭 𝐝𝐨𝐬𝐞, 𝐛𝐚𝐬𝐞𝐝 𝐨𝐧:' +
  '\n\n' +
  new Date(document.getElementById("dateInput").value).toDateString() +
  '\n' +
  '╍ ╍ ╍ ╍ ╍ ╍ ╍ ╍ ╍ ╍ ╍ ╍ ╍ ╍ ╍ ╍ ╍ ╍ ╍ ╍ ╍ ╍ ╍ ╍ ╍ ╍ ╍ ╍ ╍ ╍ ╍' +
  '\n\n' +
  '𝟐ɴᴅ 𝐃𝐨𝐬𝐞:  ' + secondDose + ' (' + secondDiffAbs + secondDoseDayDirection +
  '\n' +
  '      OR' +
  '\n' +
  '𝟐ɴᴅ 𝐃𝐨𝐬𝐞 (𝟭𝟮-𝟭𝟳 𝘆/𝗼):  ' + secondDoseKid + ' (' + secondDiffKidAbs + secondDoseKidDayDirection +
  '\n' +
  '      OR' +
  '\n' +
  '𝐁𝐨𝐨𝐬𝐭𝐞𝐫:    ' + boosterDose + ' (' + boosterDiffAbs + boosterDayDirection +
  '\n\n' +
  '              (𝙋𝙧𝙚𝙨𝙨 𝙀𝙣𝙩𝙚𝙧 𝙩𝙤 𝙘𝙡𝙤𝙨𝙚 𝙩𝙝𝙞𝙨 𝙬𝙞𝙣𝙙𝙤𝙬)'  );
}
