
export const filterBrewers = brewers => {
  let filteredList = [brewers[0]];
  for (let i = 1; i < brewers.length; i++) {
    if (filteredList.indexOf(brewers[i]) === -1) {
      filteredList.push(brewers[i]);
    };
  };
  return filteredList.sort()
}

export const beerStyles = {
  AMBER_ALE: 'Amber Ale',
  AMBER_LAGER: 'Amber Lager',
  BOCK: 'Bock',
  BROWN_ALE: 'Brown Ale',
  DARK_LAGER: 'Dark Lager',
  IPA: 'IPA',
  PALE_ALE: 'Pale Ale',
  PALE_LAGER: 'Pale Lager',
  PILSNER: 'Pilsner',
  PORTER: 'Porter',
  SOUR_ALE: 'Sour Ale',
  SPECIALTY_BEER: 'Specialty Beer',
  STOUT: 'Stout',
  STRONG_ALE: 'Strong Ale',
  WHEAT_BEER: 'Wheat Beer',
  OTHER: 'Other'
}
