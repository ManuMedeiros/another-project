import axios from "axios";
import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import AnotherAnime from "src/components/anotherAnime";
import ContentEps from "src/components/ContentEps";
import ModalEp from "src/components/modalEp";
import * as S from "./styles";

const Episodios: NextPage = () => {
  const [another, setAnother] = useState<any>();
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    axios
      .get("https://another-api-8bdc9-default-rtdb.firebaseio.com/another.json")
      .then((response) => {
        setAnother(response?.data);
      });
  }, []);

  return (
    <S.DivGeneral>
      <AnotherAnime
        title={another?.logoAnime?.name}
        description={another?.logoAnime?.description}
        src={another?.logoAnime?.logo}
      />
      <S.DivContent>
        {another &&
          Object.values(another.anime).map((items: any) => {
            return (
              <>
                <ContentEps
                  src={another?.logoEps}
                  text={`${items.number} - ${items.name}`}
                  onClick={() => setOpenModal(!openModal)}
                />
                {openModal && (
                  <S.DivModal>
                    <ModalEp video={items.episode} close={() => setOpenModal(!openModal)} />
                  </S.DivModal>
                )}
              </>
            );
          })}
      </S.DivContent>
    </S.DivGeneral>
  );
};

export default Episodios;
