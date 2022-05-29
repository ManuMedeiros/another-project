import type { NextPage } from 'next';
import Trailer from 'src/components/trailer';
import Partner from 'src/components/partners';
import * as S from "../styles/styles"

const Home: NextPage = () => {
  return (
    <>
    <S.title>Confira o Trailer Oficial!</S.title>
    <Trailer/>
    <Partner/>
    </>
  )
}

export default Home
