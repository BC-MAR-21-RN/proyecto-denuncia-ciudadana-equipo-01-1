export const sortArrayByDate = array => {
  array.sort((a, b) => {
    return new Date(a.date) - new Date(b.date);
  });
};
