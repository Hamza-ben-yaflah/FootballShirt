import { Card } from "antd";
import Typography from "antd/lib/typography";
import Image from "next/image";
import Link from "next/link";

interface ICardShirt {
  id?: string;
  image: string;
  description: string;
  price: number;
}

const { Meta } = Card;

const { Text } = Typography;
const CardShirt = ({ card }: { card: ICardShirt }) => {
  console.log(card);

  return (
    <Link href={card.id ? `/products/${card.id}` : "#"} passHref>
      <Card
        hoverable
        style={{ width: 270 }}
        cover={
          <Image
            src={"https:" + card.image}
            alt=" car image"
            width={500}
            height={500}
          />
        }
      >
        <Meta title={card.description} description={`${card.price} £ `} />
      </Card>
    </Link>
  );
};

export default CardShirt;
