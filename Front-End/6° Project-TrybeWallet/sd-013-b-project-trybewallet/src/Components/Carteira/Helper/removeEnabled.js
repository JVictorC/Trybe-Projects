const removeEnabled = (payload) => {
  let newObject = {};
  Object.keys(payload).filter((e) => e !== 'enabled')
    .forEach((k) => { newObject = { ...newObject, [k]: payload[k] }; });
  return newObject;
};

export default removeEnabled;
