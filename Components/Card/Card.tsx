import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
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
const CardShirt = ({ card }: { card: any }) => {
  console.log(card);

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
