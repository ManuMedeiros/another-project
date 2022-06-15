import React from "react";
import * as S from "./styles";
import CloseIcon from "../../assets/close";

interface Props {
  close: () => void;
  video: any;
}
const ModalEp = ({ close, video }: Props) => {
  return (
    <S.DivGeneral>
      <S.ContarinerEp>
        <S.Episode src={video} width="720" height="480" />
        <S.Close onClick={close}>
          <div style={{margin: '1px'}}>
            <CloseIcon />
          </div>
        </S.Close>
      </S.ContarinerEp>
    </S.DivGeneral>
  );
};

export default ModalEp;
