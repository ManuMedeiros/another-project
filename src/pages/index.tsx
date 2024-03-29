import type { NextPage } from "next";
import { useState, useEffect } from "react";
import axios from "axios";
import Trailer from "src/components/trailer";
import Partner from "src/components/partners";
import * as S from "../styles/styles";
import LastEp from "src/components/lastEp";
import Head from "next/head";

const Home: NextPage = () => {
  const [another, setAnother] = useState<any>();
  const [lastEpisode, setLastEpisode] = useState<any>();

  useEffect(() => {
    axios
      .get(
        "https://api-another-project-default-rtdb.firebaseio.com/another.json"
      )
      .then((response) => {
        setAnother(response?.data);
      });
  }, []);

  useEffect(() => {
    if (localStorage.getItem("LastEpisode")) {
      setLastEpisode(localStorage.getItem("LastEpisode"));
    } else {
      return;
    }
  }, [lastEpisode]);
  const last = lastEpisode && JSON.parse(lastEpisode);

  const filterFirst =
    another &&
    Object.values(another.anime).filter((first: any) => {
      return first.name === "Esboço aspero";
    });

  return (
    <>
      <Head>
        <title>Home - Another</title>
      </Head>
      <S.DivGeneral>
        <S.ContainerTrailer>
          <S.title>Confira o Trailer Oficial!</S.title>
          <Trailer />
          <span>{another?.logoAnime?.description}</span>
        </S.ContainerTrailer>
        <S.ConatinerEps>
          {last ? (
            <LastEp
              text={`${last && last[0]?.number} - ${last && last[0]?.name}`}
              img={last && last[0]?.episode}
            />
          ) : (
            <>
              <LastEp
                text={`${filterFirst && filterFirst[0].number} - ${
                  filterFirst && filterFirst[0].name
                }`}
                img={filterFirst && filterFirst[0].episode}
              />
            </>
          )}

          <Partner />
        </S.ConatinerEps>
      </S.DivGeneral>
    </>
  );
};

export default Home;
