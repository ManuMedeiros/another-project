import type { AppProps } from 'next/app';
import Footer from 'src/components/footer';
import Header from 'src/components/header';
import { GlobalStyle } from 'src/styles/styles';
import * as S from "../styles/styles"


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <S.FullContent>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </S.FullContent>
    </>
  )
}

export default MyApp
