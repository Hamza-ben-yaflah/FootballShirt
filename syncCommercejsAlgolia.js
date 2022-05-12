// import commerce from "./lib/commerce";
const CommerceSDK = require("@chec/commerce.js");
const algoliasearch = require("algoliasearch");

const commerceClient = new CommerceSDK(
  "pk_423404c1106d64cdc90541b24c191b120c413498279c6"
);
const client = algoliasearch("MK5PVV9FL2", "5f7438a9862dba119cf7ab68bc725827");

const index = client.initIndex("products");

const main = async () => {
  const { data: products } = await commerceClient.products.list();
  console.log(products);
  index
    .saveObjects(
      products.map((product) => ({ objectID: product.id, ...product }))
    )
    .then(({ objectIDs }) => {
      console.log(objectIDs);
    })
    .catch((err) => {
      console.log(err);
    });
};

main();
