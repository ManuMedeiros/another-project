import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import EpisodesAnother from "src/components/episodesAnother";
import Favorite from "src/components/favorite";
import ModalEp from "src/components/modalEp";
import * as S from "./styles";

const Episodios: NextPage = () => {
  const [another, setAnother] = useState<any>();
  const [openModal, setOpenModal] = useState(
    "https://drive.google.com/file/d/1h6kGnUiqRzUNXC9tWsVfnsjQtX8uMRlt/preview"
  );
  const [nameEp, setNameEp] = useState<string>("Esboço aspero");
  const [numberEp, setNumberEp] = useState<any>(1);
  const [fav, setFav] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get(
        "https://api-another-project-default-rtdb.firebaseio.com/another.json"
      )
      .then((response) => {
        setAnother(response?.data);
      });
  }, [fav]);

  const selectFav = (id: any, selectedFav: any) => {
    axios
      .patch(
        `https://another-api-8bdc9-default-rtdb.firebaseio.com/another/anime/${id}.json`,
        {
          favorite: !selectedFav,
        }
      )
      .then(() => {
        setFav(!fav);
      })
      .catch(() => {
        alert("nao foi possivel");
      });
  };

  const selectEp = (value: any, name: string, number: number) => {
    setOpenModal(value);
    setNameEp(name);
    setNumberEp(number);
    const filterAnime =
      another &&
      Object.values(another?.anime).filter((ep: any) => {
        return (
          ep?.episode === value && ep.name === name && ep.number === number
        );
      });
    localStorage.setItem("LastEpisode", JSON.stringify(filterAnime));
  };

  return (
    <>
      <Head>
        <title>Episódios - Another</title>
      </Head>
      <S.DivGeneral>
        <h1>Another - Anime</h1>
        <S.DivContent>
          <ModalEp
            video={openModal}
            nameEp={`${numberEp} - ${nameEp}`}
            src={
              "https://img1.ak.crunchyroll.com/i/spire1/6a63d28dc4193210a69c83f1fca67bf21325886769_full.jpg"
            }
            description={
              "Há 26 anos, em uma sala de aula do terceiro ano de uma escola média, houve um aluno chamado Misaki. Como um estudante de honra que também era boa em esportes, ela era popular com os colegas de classe. Quando ela morreu de repente, seus colegas decidiram continuar como se ela ainda estava viva até a formatura. Então, na primavera de 1998, um garoto chamado Sakakibara Kouichi transfere para a classe, e ele começa a suspeitar da atmosfera terrível em que a sala de aula. Em particular, há uma garota bonita e distante chamada Mei Misaki que usa um tapa-olho e está sempre sozinha desenhando retratos."
            }
          />
          <div>
            {another &&
              Object.entries(another.anime).map((items: any) => {
                return (
                  <>
                    <S.DivEps>
                      <EpisodesAnother
                        text={`${items[1].number} - ${items[1].name}`}
                        onClick={() =>
                          selectEp(
                            items[1].episode,
                            items[1].name,
                            items[1].number
                          )
                        }
                      />
                      <Favorite
                        fav={items[1].favorite}
                        ClickFav={() => {
                          selectFav(items[0], items[1].favorite);
                        }}
                      />
                    </S.DivEps>
                  </>
                );
              })}
          </div>
        </S.DivContent>
      </S.DivGeneral>
    </>
  );
};

export default Episodios;
