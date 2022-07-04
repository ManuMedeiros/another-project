import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import MangaCap from "src/components/mangaCap";
import { cap1 } from "../../../assets/manga/volume 1/AnotherCap.1/cap1";
import { cap2 } from "../../../assets/manga/volume 1/AnotherCap.2/cap2";
import { cap3 } from "../../../assets/manga/volume 1/AnotherCap.03/cap3";
import { cap4 } from "../../../assets/manga/volume 1/AnotherCap.4/cap4";
import { cap5 } from "../../../assets/manga/volume 2/AnotherCap.5/cap5";
import { cap6 } from "../../../assets/manga/volume 2/AnotherCap.06/cap6";
import { cap7 } from "../../../assets/manga/volume 2/AnotherCap.7/cap7";
import { cap8 } from "../../../assets/manga/volume 2/AnotherCap.8/cap8";
import { cap9 } from "../../../assets/manga/volume 2/AnotherCap.9/cap9";
import { cap9_5 } from "../../../assets/manga/volume 2/AnotherCap. 9.5/cap9_5";
import { cap10 } from "../../../assets/manga/volume 3/AnotherCap.10/cap10";
import { cap11 } from "../../../assets/manga/volume 3/AnotherCap.11/cap11";
import { cap12 } from "../../../assets/manga/volume 3/AnotherCap.12/cap12";
import { cap13 } from "../../../assets/manga/volume 3/AnotherCap.13/cap13";
import { cap14 } from "../../../assets/manga/volume 3/AnotherCap.14/cap14";
import { cap16 } from "../../../assets/manga/Volume 4/AnotherCap.16/cap16";
import { cap17 } from "../../../assets/manga/Volume 4/AnotherCap.17/cap17";
import { cap18 } from "../../../assets/manga/Volume 4/AnotherCap.18/cap18";
import { cap19 } from "../../../assets/manga/Volume 4/AnotherCap.19/cap19";
import { cap20 } from "../../../assets/manga/Volume 4/AnotherCap.20/cap20";
import styled from "styled-components";

const DivGeneral = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;
  background: #000;
  padding: 25px;
  border-radius: 10px;
  margin: 1rem auto;
`;

const ContentManga = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Link = styled.a`
  color: #fff;
  font-size: 20px;
  text-decoration: none;
  margin: 2rem 4rem;
`;

const Capitulo: NextPage = () => {
  const [url, setUrl] = useState<any>();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      let urlParams: any = undefined;
      params.forEach((value, key) => {
        urlParams = Object.assign({}, urlParams, {
          [key]: value.toString(),
        });
      });

      setUrl(urlParams);
    }
  }, []);

  return (
    <>
      <Head>
        <title>{`Capítulo ${url?.numero} - Another`}</title>
      </Head>
      <ContentManga>
        <div style={{ display: "flex" }}>
          {url?.numero !== "1" && (
            <Link href={`/manga/capitulo?numero=${+url?.numero - 1}`}>
              Anterior
            </Link>
          )}
          <Link href="/manga">Voltar</Link>
          {url?.numero !== "20" && (
            <Link href={`/manga/capitulo?numero=${+url?.numero + 1}`}>
              Proximo
            </Link>
          )}
        </div>
        <div>
          <DivGeneral>
            {url?.numero === "1" && (
              <>
                {cap1 &&
                  cap1.map((cap: any, index: number) => (
                    <MangaCap img={cap.page.src} key={index} />
                  ))}
              </>
            )}
            {url?.numero === "2" && (
              <>
                {cap2.map((cap: any, index: number) => (
                  <MangaCap img={cap.page.src} key={index} />
                ))}
              </>
            )}
            {url?.numero === "3" && (
              <>
                {cap3.map((cap: any, index: number) => (
                  <MangaCap img={cap.page.src} key={index} />
                ))}
              </>
            )}
            {url?.numero === "4" && (
              <>
                {cap4.map((cap: any, index: number) => (
                  <MangaCap img={cap.page.src} key={index} />
                ))}
              </>
            )}
            {url?.numero === "5" && (
              <>
                {cap5.map((cap: any, index: number) => (
                  <MangaCap img={cap.page.src} key={index} />
                ))}
              </>
            )}
            {url?.numero === "6" && (
              <>
                {cap6.map((cap: any, index: number) => (
                  <MangaCap img={cap.page.src} key={index} />
                ))}
              </>
            )}
            {url?.numero === "7" && (
              <>
                {cap7.map((cap: any, index: number) => (
                  <MangaCap img={cap.page.src} key={index} />
                ))}
              </>
            )}
            {url?.numero === "8" && (
              <>
                {cap8.map((cap: any, index: number) => (
                  <MangaCap img={cap.page.src} key={index} />
                ))}
              </>
            )}
            {url?.numero === "9" && (
              <>
                {cap9.map((cap: any, index: number) => (
                  <MangaCap img={cap.page.src} key={index} />
                ))}
              </>
            )}
            {url?.numero === "9_5" && (
              <>
                {cap9_5.map((cap: any, index: number) => (
                  <MangaCap img={cap.page.src} key={index} />
                ))}
              </>
            )}
            {url?.numero === "10" && (
              <>
                {cap10.map((cap: any, index: number) => (
                  <MangaCap img={cap.page.src} key={index} />
                ))}
              </>
            )}
            {url?.numero === "11" && (
              <>
                {cap11.map((cap: any, index: number) => (
                  <MangaCap img={cap.page.src} key={index} />
                ))}
              </>
            )}
            {url?.numero === "12" && (
              <>
                {cap12.map((cap: any, index: number) => (
                  <MangaCap img={cap.page.src} key={index} />
                ))}
              </>
            )}
            {url?.numero === "13" && (
              <>
                {cap13.map((cap: any, index: number) => (
                  <MangaCap img={cap.page.src} key={index} />
                ))}
              </>
            )}
            {url?.numero === "14" && (
              <>
                {cap14.map((cap: any, index: number) => (
                  <MangaCap img={cap.page.src} key={index} />
                ))}
              </>
            )}
            {url?.numero === "15" && (
              <>
                {cap16.map((cap: any, index: number) => (
                  <MangaCap img={cap.page.src} key={index} />
                ))}
              </>
            )}
            {url?.numero === "16" && (
              <>
                {cap16.map((cap: any, index: number) => (
                  <MangaCap img={cap.page.src} key={index} />
                ))}
              </>
            )}
            {url?.numero === "17" && (
              <>
                {cap17.map((cap: any, index: number) => (
                  <MangaCap img={cap.page.src} key={index} />
                ))}
              </>
            )}
            {url?.numero === "18" && (
              <>
                {cap18.map((cap: any, index: number) => (
                  <MangaCap img={cap.page.src} key={index} />
                ))}
              </>
            )}
            {url?.numero === "19" && (
              <>
                {cap19.map((cap: any, index: number) => (
                  <MangaCap img={cap.page.src} key={index} />
                ))}
              </>
            )}
            {url?.numero === "20" && (
              <>
                {cap20.map((cap: any, index: number) => (
                  <MangaCap img={cap.page.src} key={index} />
                ))}
              </>
            )}
          </DivGeneral>
        </div>
        <div style={{ display: "flex" }}>
          {url?.numero !== "1" && (
            <Link href={`/manga/capitulo?numero=${+url?.numero - 1}`}>
              Anterior
            </Link>
          )}
          <Link href="/manga">Voltar</Link>
          {url?.numero !== "20" && (
            <Link href={`/manga/capitulo?numero=${+url?.numero + 1}`}>
              Proximo
            </Link>
          )}
        </div>
      </ContentManga>
    </>
  );
};

export default Capitulo;
