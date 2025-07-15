const numberWordsDict = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  15: 'quarter',
};

// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  // TODO: real code goes here!
  if (time === '0:00') {
    return 'midnight';
  }
  if (time === '12:00') {
    return 'midday';
  }

  const times = time.split(':');
  const hour = times[0];
  const minutes = times[1];
  const hourString = numberWordsDict[hour];

  if (minutes === '00') {
    return `${hourString} o'clock`;
  }

  const numMinutes = Number(minutes);

  if (numMinutes < 30) {
    return `${numberWordsDict[numMinutes]} past ${hourString}`;
  }

  if (numMinutes > 30) {
    const remainingMinutes = 60 - numMinutes;
    const nextHourString = numberWordsDict[Number(hour) + 1];
    return `${numberWordsDict[remainingMinutes]} to ${nextHourString}`;
  }

  return `half past ${hourString}`;
}

module.exports = { convertTimeToWords };
