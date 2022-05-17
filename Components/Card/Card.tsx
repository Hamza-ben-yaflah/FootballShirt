import { Card } from "antd";
import Typography from "antd/lib/typography";

import Link from "next/link";

interface ICardShirt {
  id?: string;
  image: string;
  description: string;
  price: number;
}

const { Meta } = Card;

const CardShirt = ({ card }: { card: any }) => {
  return (
    <Link href={card.id ? `/products/${card.id}` : "#"} passHref>
      <Card
        hoverable
        style={{ width: 270 }}
        cover={
          // eslint-disable-next-line @next/next/no-img-element
          <img src={card.image} alt="car image" width={300} height={300} />
        }
      >
        <Meta title={card.description} description={card.price} />
      </Card>
    </Link>
  );
};

export default CardShirt;
