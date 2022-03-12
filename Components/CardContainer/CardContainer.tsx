import Card from "../Card/Card";
import styles from "./CardContainer.module.css";

const CardContaier = ({ data }: any) => {
  console.log(data);

  return (
    <div className={styles.cardContainer}>
      {data.data.map((card: any) => (
        <Card
          key={card.sys.id}
          card={{
            id: card.sys.id,
            image: card.fields.shirtImage.fields.file.url,
            price: card.fields.price,
            description: card.fields.description,
          }}
        />
      ))}
    </div>
  );
};

export default CardContaier;
