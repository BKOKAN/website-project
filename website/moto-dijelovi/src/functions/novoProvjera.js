export const isNew = (datumDodavanja) => {
  const parts = datumDodavanja.split(".");
  const dateAdded = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);
  const now = new Date();
  const diffDays = (now - dateAdded) / (1000 * 60 * 60 * 24);
  if (diffDays >= 0) {
    return diffDays <= 7;
  }
};
