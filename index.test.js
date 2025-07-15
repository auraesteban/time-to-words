const { convertTimeToWords } = require('./index');

describe('Time to words', () => {
  it('Handles midnight', () => {
    const timeInWords = convertTimeToWords('0:00');
    expect(timeInWords).toBe('midnight');
  });

  it('Handles midday', () => {
    const timeInWords = convertTimeToWords('12:00');
    expect(timeInWords).toBe('midday');
  });

  it('Handles 00 - 8:00', () => {
    const timeInWords = convertTimeToWords('8:00');
    expect(timeInWords).toBe("eight o'clock");
  });

  it('Handles 30 - 8:30', () => {
    const timeInWords = convertTimeToWords('8:30');
    expect(timeInWords).toBe('half past eight');
  });

  it('Handles times after 30 mins - 2:45', () => {
    const timeInWords = convertTimeToWords('2:45');
    expect(timeInWords).toBe('quarter to three');
  });

  it('Handles other minutes - 2:47', () => {
    const timeInWords = convertTimeToWords('2:47');
    expect(timeInWords).toBe('thirteen to three');
  });

  it('Handles other minutes - 12:18', () => {
    const timeInWords = convertTimeToWords('12:18');
    expect(timeInWords).toBe('eighteen past twelve');
  });
});
