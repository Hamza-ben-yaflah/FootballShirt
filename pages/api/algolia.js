import algoliasearch from "algoliasearch";

const client = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_ADMIN_API_KEY
);

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  if (!req.body) {
    return res.status(422).json({ message: "Invalid webhook payload" });
  }

  const {
    event,
    payload: { id: objectId, ...payload },
  } = req.body;

  console.log(objectId, "heloo");

  const [resource, trigger] = event.split(".");

  try {
    const index = client.initIndex(resource);

    if (trigger === "delete") {
      await index.deleteObject(objectId);
      return res.status(204).end();
    }
    if (!["create ", "update"].includes(trigger)) {
      return res
        .status(422)
        .json({ message: `${trigger} is not a valid trigger` });
    }

    return res
      .status(trigger === "create" ? 201 : 202)
      .json(await index.saveObject({ objectID: objectId, ...payload }));
  } catch ({ message = "something went wrong" }) {
    res.status(500).json({ message });
  }
};
