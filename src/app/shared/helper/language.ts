export function languageStringToEnum(language: string) {
  if (language.includes('-')) {
    const languageSplit = language.split('-');
    return languageSplit[0] + languageSplit[1].toUpperCase();
  } else {
    return language;
  }
}
