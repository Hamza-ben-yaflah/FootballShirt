import { Divider } from "antd";
import Title from "antd/lib/typography/Title";
import Card from "../Card/Card";
import styles from "./CardContainer.module.css";

const CardContaier = ({ data, categorie }: any) => {
  return (
    <div id="shirts">
      <Divider orientation="left" plain className="divider">
        <Title level={1}>SHIRTS</Title>
      </Divider>
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
    </div>
  );
};

export default CardContaier;
