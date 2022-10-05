import React from "react";
import * as S from "./styles";
import { Box } from "@mui/material";

const Navegation = () => {
  const links = [
    {
      title: "Episódios",
      link: "/episodios-another",
    },
    {
      title: "Mangá",
      link: "/manga",
    },
    {
      title: "Personagens",
      link: "/personagens",
    },
  ];

  return (
    <Box marginLeft="50px">
      {links.map((items) => (
        <>
          <Box padding="1.5rem 0">
            <S.Link href={items.link}>{items.title}</S.Link>
          </Box>
        </>
      ))}
    </Box>
  );
};

export default Navegation;
