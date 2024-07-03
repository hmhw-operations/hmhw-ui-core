const sanitizeForId = (label: string) => {
  return label
    .trim()
    .toLowerCase()
    .replace(/[^\w\s]|(\s+)/g, (_match: string, group1: string) => (group1 ? "-" : ""));
};

export { sanitizeForId };
