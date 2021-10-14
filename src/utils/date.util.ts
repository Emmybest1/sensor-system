const formatDate = (date:string) => {
  const _date = new Date(date);
  const $formattedDate = _date.toISOString().substring(0, 10);

  return $formattedDate;
};

export {
  formatDate
};
