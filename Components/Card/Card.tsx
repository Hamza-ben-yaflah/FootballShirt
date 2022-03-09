import { Card } from "antd";
import Typography from "antd/lib/typography";
import Image from "next/image";
import Link from "next/link";

const { Meta } = Card;

const { Text } = Typography;
const CardShirt = ({ card }: any) => {
  console.log(card);

  return (
    <Link href={`/products/${card.sys.id}`} passHref>
      <Card
        hoverable
        style={{ width: 270 }}
        cover={
          <Image
            src={"https:" + card.fields.shirtImage.fields.file.url}
            alt=" car image"
            width={500}
            height={500}
          />
        }
      >
        <Meta
          title={card.fields.description}
          description={`${card.fields.price} £ `}
        />
      </Card>
    </Link>
  );
};

export default CardShirt;
