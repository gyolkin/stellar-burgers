import { useState, useEffect } from 'react';
import { constantsMap } from '@/shared/model';
import { Tab } from '@/shared/ui/tab';
import { handleScroll, handleClick } from '../lib';
import type { TypeTabsProps } from '../model';

export const TypeTabs: React.FC<TypeTabsProps> = ({ containerRef }) => {
  const [currentTab, setCurrentTab] = useState('bun');
  const scrollHandler = () => handleScroll(setCurrentTab, containerRef);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', scrollHandler);
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', scrollHandler);
      }
    };
  }, [containerRef]);

  return (
    <div className='inline-flex w-full h-10 mt-5 mb-10'>
      {Object.entries(constantsMap.types).map(([type, name]) => (
        <Tab
          key={type}
          value={type}
          active={currentTab === type}
          onClick={() => handleClick(setCurrentTab, type)}
        >
          {name}
        </Tab>
      ))}
    </div>
  );
};
