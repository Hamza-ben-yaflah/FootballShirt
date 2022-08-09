import { Col, Divider, Row } from "antd";
import Title from "antd/lib/typography/Title";
import Text from "antd/lib/typography/Text";
import React, { useEffect, useState } from "react";
import { useCartSatet } from "../../context/cart";
import { PayPalButton } from "react-paypal-button-v2";
import styles from "./CheckoutCart.module.css";
import { useRouter } from "next/router";
import CartItem from "../../Components/CartItem/CartItem";
import emailjs from "emailjs-com";

const CheckoutCart = () => {
  const router = useRouter();
  const {
    query: { email, firstname, lastname, country, streetAdress, city, phone },
  } = router;

  const props = {
    email,
    firstname,
    lastname,
    country,
    streetAdress,
    city,
    phone,
  };
  const products = useCartSatet();
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const findCountry = (country: string, total_items: number) => {
    const europeanCountries = [
      "Albania",
      "Andorra",
      "Armenia",
      "Austria",
      "Azerbaijan",
      "Belarus",
      "Belgium",
      "Bosnia and Herzegovina",
      "Bulgaria",
      "Croatia",
      "Cyprus",
      "Czech Republic",
      "Denmark",
      "Estonia",
      "Finland",
      "France",
      "Georgia",
      "Germany",
      "Greece",
      "Hungary",
      "Iceland",
      "Ireland",
      "Italy",
      "Kosovo",
      "Latvia",
      "Liechtenstein",
      "Lithuania",
      "Luxembourg",
      "Macedonia",
      "Malta",
      "Moldova",
      "Monaco",
      "Montenegro",
      "The Netherlands",
      "Norway",
      "Poland",
      "Portugal",
      "Romania",
      "Russia",
      "San Marino",
      "Serbia",
      "Slovakia",
      "Slovenia",
      "Spain",
      "Sweden",
      "Switzerland",
      "Turkey",
      "Ukraine",
      "United Kingdom",
      "Vatican City",
    ];

    let shipp = 0;
    const includeCountry = europeanCountries.includes(country);
    includeCountry
      ? (shipp = 14 + (total_items * 2 - 2))
      : (shipp = 17.5 + (total_items * 3 - 3));
    return shipp;
  };

  const addPaypall = () => {
    if (window.paypal) {
      setScriptLoaded(true);
      return;
    }
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=AZd8WuAQ2bTZMlf0-4WjRL-kyJg5LIZceVDGC1cwOXQFVShXO-CZOomOI5len43VfbWhv_Wy4uJ3iygm&disable-funding=credit,card";

    script.type = "text/javascript";
    script.async = true;
    script.onload = () => setScriptLoaded(true);
    document.body.appendChild(script);
  };

  useEffect(() => {
    addPaypall();
  }, []);

  console.log(products, "hello");
  const ShirtsName = products.line_items
    .map((item: any) => `${item.name} `)
    .toString();

  const sum =
    products.subtotal.raw +
    findCountry(country as string, products.total_items);
  return (
    <>
      <Divider orientation="left" plain className="divider">
        <Title level={2}>PAYMENT</Title>
      </Divider>
      <Row justify="space-around">
        <Col lg={12}>
          {scriptLoaded ? (
            <PayPalButton
              amount={sum}
              onSuccess={(details: any) => {
                emailjs
                  .send(
                    "service_4fxlf8p",
                    "template_kspebic",
                    {
                      firstname: firstname,
                      lastname: lastname,
                      email: email,
                      phone: phone,
                      country: country,
                      streetAdress: streetAdress,
                      city: city,
                      shirtName: ShirtsName,
                      price: products.subtotal.formatted_with_symbol,
                    },
                    "iDjDlkC3NKipnLh_h"
                  )
                  .then((result) => {
                    console.log(result);
                  })
                  .catch((err) => {
                    console.log(err);
                  });
                alert(
                  "Transaction completed by " + details.payer.name.given_name
                );
              }}
            />
          ) : (
            <span>loading...</span>
          )}
        </Col>

        <Col lg={6}>
          <Title level={4}>Order Summary</Title>
          <Divider orientation="left" plain className="divider"></Divider>
          <div className={styles.wrapper1}>
            <Text>Cart Subtotal</Text>
            <Text strong>{`${products.subtotal.raw} $`}</Text>
          </div>
          <div className={styles.wrapper1}>
            <Text>Shipping</Text>
            <Text strong>{`${findCountry(
              country as string,
              products.total_items
            )} $`}</Text>
          </div>
          <div className={styles.wrapper1}>
            <Text>Order Total Excl. Tax</Text>
            <Text strong>{`${sum} $`}</Text>
          </div>
          <div className={styles.wrapper1}>
            <Text>Order Total Incl. Tax</Text>
            <Text strong>{`${sum} $`}</Text>
          </div>
          <br />
          <Title level={4}>Items</Title>
          <Divider orientation="left" plain className="divider"></Divider>
          <div className={styles.wrapper2}>
            {products.line_items.map((item: any) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <br />
          <Title level={4}>Ship To</Title>
          <Divider orientation="left" plain className="divider"></Divider>
          <div className={styles.shippWrapper}>
            <Text>{`Email :  ${props.email}`}</Text>
            <Text>{`First Name :  ${props.firstname}`}</Text>
            <Text>{`Last Name :  ${props.lastname}`}</Text>
            <Text>{`Country : ${props.country}`}</Text>
            <Text>{`City : ${props.city}`}</Text>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default CheckoutCart;
