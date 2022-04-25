import "antd/dist/antd.css";
import type { AppProps } from "next/app";
import Layout from "../Components/Layout/Layout";
import "../styles/globals.css";
import React, { useState } from "react";
import { CartProvider } from "../context/cart";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  );
}

export default MyApp;
