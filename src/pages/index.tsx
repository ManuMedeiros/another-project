import type { NextPage } from 'next';
import Trailer from 'src/components/trailer';
import Partner from 'src/components/partners';
import * as S from "../styles/styles"
import LastEp from 'src/components/lastEp';

const Home: NextPage = () => {
  return (
    <>
      <S.DivGeneral>
        <S.ContainerTrailer>
        <S.title>Confira o Trailer Oficial!</S.title>
            <Trailer />
        </S.ContainerTrailer>
        <S.ConatinerEps>
          <LastEp
            text='Espisodio 2 - Gravura Azul'
            img={'https://images6.alphacoders.com/639/thumb-1920-639813.jpg'}
          />
          <Partner />
        </S.ConatinerEps>
      </S.DivGeneral>
    </>
  )
}

export default Home
