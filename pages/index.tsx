import CardContainer from "../Components/CardContainer/CardContainer";
import Slider from "../Components/Slider/Slider";
import commerce from "../lib/commerce";

export async function getStaticProps() {
  const { data: products } = await commerce.products.list();

  return {
    props: {
      products,
    },
  };
}

const Home = (products: any) => {
  console.log(products);

  return (
    <div data-testid="home">
      <Slider />
      <CardContainer data={products} categorie="club" id="CLUBS" />
      <CardContainer data={products} categorie="nation" id="NATIONS" />
    </div>
  );
};

export default Home;
