import React from "react";
import * as S from "./styles";

interface Props {
  src: string;
    text: string;
    onClick: () => void;
}
const ContentEps = ({ src, text, onClick }: Props) => {
  return (
    <S.Episode onClick={onClick}>
      <img src={src} />
      <span>{text}</span>
    </S.Episode>
  );
};

export default ContentEps;
