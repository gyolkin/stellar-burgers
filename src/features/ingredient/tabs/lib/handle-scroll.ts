import { constantsMap } from '@/shared/model';
import type { HandleScrollType } from '../model';

export const handleScroll: HandleScrollType = (setCurrent, containerRef) => {
  const container = containerRef.current;
  if (!container) return;
  const tabs = Object.keys(constantsMap.types);
  for (const tab of tabs) {
    const section = document.getElementById(tab);
    if (!section) continue;
    const bounds = section.getBoundingClientRect();
    if (
      bounds.top <= container.clientHeight * 0.6 &&
      bounds.bottom >= container.clientHeight * 0.6
    ) {
      setCurrent(tab);
      break;
    }
  }
};
