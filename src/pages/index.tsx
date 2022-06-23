import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Trailer from 'src/components/trailer';
import Partner from 'src/components/partners';
import * as S from "../styles/styles"
import LastEp from 'src/components/lastEp';

const Home: NextPage = () => {

  const [another, setAnother] = useState<any>();
  const [lastEpisode, setLastEpisode] = useState<any>()

  useEffect(() => {
    axios
      .get("https://another-api-8bdc9-default-rtdb.firebaseio.com/another.json")
      .then((response) => {
        setAnother(response?.data);
      });
  }, []);

  useEffect(() => {
    setLastEpisode(localStorage.getItem('LastEpisode'))
  }, [lastEpisode])
  const teste = lastEpisode && JSON.parse(lastEpisode);

  return (
    <>
      <S.DivGeneral>
        <S.ContainerTrailer>
        <S.title>Confira o Trailer Oficial!</S.title>
            <Trailer />
            <span>{another?.logoAnime?.description}</span>
        </S.ContainerTrailer>
        <S.ConatinerEps>
          <LastEp
            text={`${teste && teste[0].number} - ${teste && teste[0].name}`}
            img={teste && teste[0].episode}
          />
          <Partner />
        </S.ConatinerEps>
      </S.DivGeneral>
    </>
  )
}

export default Home
