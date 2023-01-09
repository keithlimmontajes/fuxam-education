import { type AppType } from "next/app";
import { api } from "../utils/api";
import { useState, useEffect } from "react";

import "../styles/globals.css";
import "react-creme/dist/react-creme.css";
import "antd/dist/reset.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === "undefined") {
    return <></>;
  } else {
    return <Component {...pageProps} />;
  }

  // return <Component {...pageProps} />;
};

export default api.withTRPC(MyApp);
