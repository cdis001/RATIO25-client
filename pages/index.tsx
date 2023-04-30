import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

import Header from "../components/header";
import Footer from "../components/Footer";

import mainBannerImg from "public/imgs/main-banner.png";


const MainLogo = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.1em;
  color: #fff;
`;

const MainBanner = styled.div`
  width: 100%;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

  & > div {
  }
`;


  }

  }
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>RATIO25</title>
        <meta name="description" content="Ratio25" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <MainBanner styles={{ aspectRatio: 16 / 9 }}>
          <Image src={mainBannerImg} alt={"main banner"} />
        </MainBanner>
        <Footer />
      </main>
    </>
  );
}
