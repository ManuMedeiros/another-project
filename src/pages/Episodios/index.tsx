import axios from "axios";
import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import ContentEps from "src/components/ContentEps";
import ModalEp from "src/components/modalEp";
import * as S from "./styles";

const Episodios: NextPage = () => {
  const [another, setAnother] = useState<any>();
  const [openModal, setOpenModal] = useState('https://drive.google.com/file/d/1h6kGnUiqRzUNXC9tWsVfnsjQtX8uMRlt/preview');

  useEffect(() => {
    axios
      .get("https://another-api-8bdc9-default-rtdb.firebaseio.com/another.json")
      .then((response) => {
        console.log(response.data)
        setAnother(response?.data);
      });
  }, []);

  const teste = (value: any) => {
    setOpenModal(value)
    console.log(value, 'value')
  }

  return (
    <S.DivGeneral>
      <h2>Another - Anime</h2>
      <S.DivContent>
        <ModalEp
          video={openModal}
        />
        <div>
        {another &&
          Object.values(another.anime).map((items: any) => {
            return (
              <>
                  <ContentEps
                    text={`${items.number} - ${items.name}`}
                    onClick={() => teste(items.episode)}
                  />
              </>
            );
          })}
          </div>
      </S.DivContent>
    </S.DivGeneral>
  );
};

export default Episodios;
