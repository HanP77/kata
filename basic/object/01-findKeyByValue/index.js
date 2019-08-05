// How to find a key in a object with it's value

const getKey = (obj,val) => Object.keys(obj).find(key => obj[key] === val);

// 