truncate = (str) => {
  return str.length > 10 ? str.substring(0, 150) + "..." : str;
};
