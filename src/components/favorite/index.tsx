import React, { useState } from "react";
import { FavIcon, FavIconNone } from "../../assets/favIcon";
import * as S from "./styles";

interface Props {
  fav: boolean;
  ClickFav: () => void;
}

const Favorite = ({ fav, ClickFav }: Props) => {
  return (
    <S.DivGeneral>
      {fav ? (
        <div onClick={ClickFav}>
          <FavIcon />
        </div>
      ) : (
        <div onClick={ClickFav}>
          <FavIconNone />
        </div>
      )}
    </S.DivGeneral>
  );
};

export default Favorite;
