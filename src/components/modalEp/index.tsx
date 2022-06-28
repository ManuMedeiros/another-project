import React from "react";
import * as S from "./styles";
import CloseIcon from "../../assets/close";

interface Props {
  video: any;
  nameEp: string;
  description: string;
  src: string;
}
const ModalEp = ({ video, nameEp, src, description }: Props) => {
  return (
    <S.DivGeneral>
      <S.ContarinerEp>
        <S.Episode src={video} width="720" height="480" allowFullScreen />
      </S.ContarinerEp>
      <S.ContarinerInfo>
        <S.Image src={src} alt="Logo do anime" />
        <div>
          <h2>{nameEp}</h2>
          <span>
            <strong>Genero:</strong> Terror/Suspense
          </span>
          <p>
              {description}
          </p>
        </div>
      </S.ContarinerInfo>
    </S.DivGeneral>
  );
};

export default ModalEp;
