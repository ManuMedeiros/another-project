import React from "react";
import * as S from "./styles";

interface Props {
  text: string;
  onClick: () => void;
}
const ContentEps = ({ text, onClick }: Props) => {

  return (
    <S.Episode onClick={onClick}>
        <span>{text}</span>
    </S.Episode>
  );
};

export default ContentEps;
