import axios from "axios";
import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import ContentEps from "src/components/ContentEps";
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
      .get("https://another-api-8bdc9-default-rtdb.firebaseio.com/another.json")
      .then((response) => {
        setAnother(response?.data);
      });
  }, [fav]);

  const selectFav = (id: any, selectedFav: any) => {
    console.log("ok");
    console.log(id)
    axios
      .patch(
        `https://another-api-8bdc9-default-rtdb.firebaseio.com/another/anime/${id}.json`,
        {
          favorite: !selectedFav,
        }
      )
      .then(() => {
        setFav(!fav)
      })
      .catch(() => {
        alert("nao foi possivel");
      });
  };

  const selectEp = (value: any, name: string, number: number) => {

    setOpenModal(value)
    setNameEp(name)
    setNumberEp(number)
    const filterAnime = another && Object.values(another?.anime).filter((ep: any) => {
      return ep?.episode === value && ep.name === name && ep.number === number
    })
    localStorage.setItem("LastEpisode", JSON.stringify(filterAnime))
  }

  return (
    <S.DivGeneral>
      <h1>Another - Anime</h1>
      <S.DivContent>
        <ModalEp
          video={openModal}
          nameEp={`${numberEp} - ${nameEp}`}
          src={another && another?.logoEps}
          description={another && another?.logoAnime.description}
        />
        <div>
          {another &&
            Object.entries(another.anime).map((items: any) => {
              return (
                <>
                  <S.DivEps>
                    <ContentEps
                      text={`${items[1].number} - ${items[1].name}`}
                      onClick={() => selectEp(items[1].episode, items[1].name, items[1].number)}
                    />
                    <Favorite
                      fav={items[1].favorite}
                      ClickFav={() => {
                        selectFav(items[0], items[1].favorite)
                      }}
                    />
                  </S.DivEps>
                </>
              );
            })}
        </div>
      </S.DivContent>
    </S.DivGeneral>
  );
};

export default Episodios;