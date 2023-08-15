import type { HandleClickType } from '../model';

export const handleClick: HandleClickType = (setCurrent, value) => {
  const element = document.getElementById(value);
  element?.scrollIntoView({ behavior: 'smooth' });
  setCurrent(value);
};
