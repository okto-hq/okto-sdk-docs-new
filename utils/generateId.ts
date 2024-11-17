// utils/generateId.ts
export const generateId = (key: string): string => {
    return key.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '');
  };
  