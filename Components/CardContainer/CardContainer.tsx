import Card from "../Card/Card";
import styles from "./CardContainer.module.css";

const CardContaier = ({ data }: any) => {
  console.log(data);

  return (
    <div className={styles.cardContainer}>
      {data.products.map((card: any) => (
        <Card
          key={card.id}
          card={{
            id: card.permalink,
            image: card.image.url,
            price: card.price.formatted_with_code,
            description: card.description,
          }}
        />
      ))}
    </div>
  );
};

export default CardContaier;
