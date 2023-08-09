function findAddress(address) {
  if (address && address.street && address.house && address.society) {
    return address.street + "," + address.house + "," + address.society;
  } else {
    if (!address.street) address.street = "__";
    if (!address.house) address.house = "__";
    if (!address.society) address.society = "__";
    return address.street + "," + address.house + "," + address.society;
  }
}

let address = {
  street: 10,
  house: "10A",
  society: "Earth Perfect",
};

let formattedAddress = findAddress(address);
console.log(formattedAddress);
