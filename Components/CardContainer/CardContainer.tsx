import Card from "../Card/Card";
import styles from "./CardContainer.module.css";

const CardContaier = ({ data }: any) => {
  console.log(data);

  return (
    <div className={styles.cardContainer}>
      {data.data.map((card: any) => (
        <Card key={card.sys.id} card={card} />
      ))}
    </div>
  );
};

export default CardContaier;
