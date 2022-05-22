const algoliasearch = require("algoliasearch");
require("dotenv").config();

const CommerceSDK = require("@chec/commerce.js");
const commerceClient = new CommerceSDK(
  process.env.NEXT_PUBLIC_CHEC_PUBLIC_API_KEY
);
const client = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_ADMIN_API_KEY
);

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
