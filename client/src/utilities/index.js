
export const filterBrewers = brewers => {
  let filteredList = [brewers[0]];
  for (let i = 1; i < brewers.length; i++) {
    if (filteredList.indexOf(brewers[i]) === -1) {
      filteredList.push(brewers[i]);
    };
  };
  return filteredList.sort()
}
