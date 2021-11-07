const getTime = () => {
  const today = new Date();
  const dateN =
    today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  const time =
    today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
  const dateTime = dateN + ' ' + time;
  return dateTime;
};

export default getTime;
