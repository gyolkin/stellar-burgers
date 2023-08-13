import type { CreateSectionsType, SectionType } from '../model';

export const createSections: CreateSectionsType = (data) =>
  data.reduce<SectionType>(
    (acc, item) => {
      if (!acc[item.type]) {
        acc[item.type] = [];
      }
      acc[item.type].push(item);
      return acc;
    },
    { bun: [], sauce: [], main: [] },
  );
