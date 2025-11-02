const converDta = (data, type) => {
  const convertedDta = data[type].map((item) => {
    return {
      data: item[0],
      [type]: item[1],
    };
  });
  return convertedDta;
};

export { converDta };
