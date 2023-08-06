export const weatherType = (type: string) => {
  if (type === 'Clouds') {
    return '<img alt="" src="../assets/clouds.png"/>';
  } else if (type === 'Rain') {
    return '<img alt="" src="../assets/rain.png"/>';
  } else if (type === 'Snow') {
    return '<img alt="" src="../assets/snow.png"/>';
  } else if (type === 'Clear') {
    return '<img alt="" src="../assets/clear.png"/>';
  } else if (type === 'Mist') {
    return '<img alt="" src="../assets/mist.png"/>';
  } else {
    return '<img alt="" src="../assets/drizzle.png"/>';
  }
};