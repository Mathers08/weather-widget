import { Clear, Clouds, Drizzle, Mist, Rain, Snow } from "@/assets";

export const weatherType = (type: string) => {
  if (type === 'Rain') {
    return `<img alt="rain" src=${Rain}/>`;
  } else if (type === 'Clouds') {
    return `<img alt="clouds" src=${Clouds}/>`;
  } else if (type === 'Snow') {
    return `<img alt="snow" src=${Snow}/>`;
  } else if (type === 'Clear') {
    return `<img alt="clear" src=${Clear}/>`;
  } else if (type === 'Mist') {
    return `<img alt="mist" src=${Mist}/>`;
  } else {
    return `<img alt="drizzle" src=${Drizzle}/>`;
  }
};