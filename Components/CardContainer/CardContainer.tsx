import Card from "../Card/Card";
import styles from "./CardContainer.module.css";

const CardContaier = ({ data, categorie }: any) => {
  console.log(data);

  return (
    <div className={styles.cardContainer}>
      {data.products.map((card: any) =>
        card.categories[0].name === categorie ? (
          <Card
            key={card.id}
            card={{
              id: card.permalink,
              image: card.image.url,
              price: card.price.formatted_with_symbol,
              description: card.name,
            }}
          />
        ) : null
      )}
    </div>
  );
};

export default CardContaier;
