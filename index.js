class Formatter {
  static capitalize(string) {
    const firstChar = string.charAt(0).toUpperCase();
    return firstChar + string.slice(1);
  }
  static sanitize(string) {
    const specialChars = '!@#$%^&*()_+=[]{}|;:,<.>/?';
    let newString = string;
    for (let char of specialChars) {
      newString = newString.replace(char, '');
    }
    return newString;
  }
  static titleize(string) {
    const wordsToIgnore = [
      'the',
      'a',
      'an',
      'but',
      'of',
      'and',
      'for',
      'at',
      'by',
      'from',
    ];
    let titled = string.split(' ');
    titled[0] = titled[0].charAt(0).toUpperCase() + titled[0].slice(1);
    for (let i = 0; i < titled.length; i++) {
      if (!wordsToIgnore.includes(titled[i])) {
        titled[i] = titled[i].charAt(0).toUpperCase() + titled[i].slice(1);
      }
    }
    return titled.join(' ');
  }
}
