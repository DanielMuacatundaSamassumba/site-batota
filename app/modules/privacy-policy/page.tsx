"use client";
import React, { useState, useEffect } from "react";
import parse from "html-react-parser";
import Header from "../shered-components/header/Header";
import ShowPrivacyPolicy from "./services/ShowPrivacyPolict";
import Loader from "../shered-components/Loader/Loader";
export default function Page() {
  const [data, setData] = useState("");
  const [spinner, setSpinner] = useState(true)
  async function getPrivatePolicy() {
    const response = await ShowPrivacyPolicy();
    setData(response[0].content);
    setSpinner(false);
  }

  useEffect(() => {
    getPrivatePolicy();
  }, []);

  return (
    <div>
      <Header />
      <div>
        <h1 className="text-4xl font-bold p-5">Política de Privacidade</h1>
        <div className="p-5">{parse(data)}</div>
      </div>
  { spinner ?
        <Loader></Loader>
        :""
  }
    </div>
  );
}
