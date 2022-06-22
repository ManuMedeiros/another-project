import React from "react";
import * as S from "./styles";
import CloseIcon from "../../assets/close";

interface Props {
  video: any;
}
const ModalEp = ({ video }: Props) => {
  return (
    <S.DivGeneral>
      <S.ContarinerEp>
        <S.Episode src={video} width="720" height="480" />
      </S.ContarinerEp>
    </S.DivGeneral>
  );
};

export default ModalEp;
