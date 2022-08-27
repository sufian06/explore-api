const user = { id: 1, name: "Gorib Aamir", job: "actor" };
// JavaScript Object Notation (JSON).
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);
/*
{ id: 1, name: 'Gorib Aamir', job: 'actor' }    [javaScript]
{"id":1,"name":"Gorib Aamir","job":"actor"}     [JSON string]
 */

const shop = {
  owner: "Alia",
  address: {
    street: "Kochukhet voot er goli",
    city: "ranbir",
    country: "Bangladesh",
  },
  products: ["laptop", "mic", "monitor", "keyboard"],
  revenue: 45000,
  isOpen: true,
  isNew: false,
};
console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
const shopObj = JSON.parse(shopJSON);
console.log(shopObj);
