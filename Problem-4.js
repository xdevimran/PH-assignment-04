
function findAddress(obj) {
  if (obj && obj.street && obj.house && obj.society) {
    return obj.street + "," + obj.house + "," + obj.society;
  } else {
    if (!obj.street) obj.street = "__";
    if (!obj.house) obj.house = "__";
    if (!obj.society) obj.society = "__";
    return obj.street + "," + obj.house + "," + obj.society;
  }
}

let address = {
  street: 10,
  house: "10A",
  society: "Earth Perfect",
};

let formattedAddress = findAddress(address);
console.log(formattedAddress);
