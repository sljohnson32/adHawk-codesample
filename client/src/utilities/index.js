
export const filterBrewers = brewers => {
  let filteredList = [brewers[0]];
  for (let i = 1; i < brewers.length; i++) {
    if (filteredList.indexOf(brewers[i]) === -1) {
      filteredList.push(brewers[i]);
    };
  };
  return filteredList.sort();
};

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
};

export const sortHistory = (history, order) => {
  if (order === 'recent') {
    return history.sort((a, b) => {
      return new Date(b.start_date) - new Date(a.start_date);
    })
  } else {
    return history.sort((a, b) => {
      return new Date(a.start_date) - new Date(b.start_date);
    })
  }
};

export const sortBeerData = data => {
  return data.sort((a, b) => {
    return b.kegPrice - a.kegPrice;
  })
};

export const sortTapData = data => {
  return data.sort((a, b) => {
    return b.aveGlassPrice - a.aveGlassPrice;
  })
};

export const formatDollars = num => {
  return num.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
};

export const calcAvePrice = data => {
  return data.map(tap => {
    let average = tap.glassPrice / tap.kegs;
    tap.aveGlassPrice = formatDollars(average);
    return tap
  })
};
