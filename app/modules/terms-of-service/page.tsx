"use client";
import React, { useState, useEffect } from "react";
import parse from "html-react-parser";
import Header from "../shered-components/header/Header";
import ShowTerms from "./services/ShowTerms";
import Loader from "../shered-components/Loader/Loader";
export default function Page() {
  const [data, setData] = useState("");
  const [spinner, setSpinner] = useState(true)
  async function getPrivatePolicy() {
    const response = await ShowTerms();
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
        <h1 className="text-4xl font-bold p-5">Termos e Condições de uso</h1>
        <div className="p-5">{parse(data)}</div>
      </div>
      {spinner ?
        <Loader></Loader>
        : ""
      }
    </div>
  );
}
