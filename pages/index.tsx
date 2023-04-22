import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

import mainBannerImg from "public/imgs/main-banner.png";
import bagIcon from "public/imgs/bag-icon.svg";
import heartIcon from "public/imgs/heart-icon.svg";
import peopleIcon from "public/imgs/people-icon.svg";
import styles from "@/styles/Home.module.css";

export default function Home() {
  const MainBanner = styled.div`
    width: 100%;
    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `;

  const Header = styled.div`
    position: fixed;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    width: 100%;
    height: 72px;
    padding: 24px 50px;
    // background-color: #ccc;

    & > h1 {
      font-family: "Poppins", sans-serif;
      font-size: 20px;
      font-weight: 500;
      letter-spacing: 0.1em;
      color: #fff;
    }

    // & > ul > li:not(:last-child) {
    //   margin-right: 35px;
    // }
  `;

  const HeaderButton = styled.a`
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    letter-spacing: -0.02em;
    color: #fff;
  `;

  const HeaderMenuUl = styled.ul`
    & > li:not(:last-child) {
      margin-right: 40px;
    }
  `;

  const HeaderIconUl = styled.ul`
    & > li:not(:last-child) {
      margin-right: 30px;
    }
  `;


  return (
    <>
      <Head>
        <title>RATIO25</title>
        <meta name="description" content="Ratio25" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header>
          <HeaderMenuUl>
            <li>
              <HeaderButton>Shop</HeaderButton>
            </li>
            <li>
              <HeaderButton>About</HeaderButton>
            </li>
            <li>
              <HeaderButton>Contacts</HeaderButton>
            </li>
          </HeaderMenuUl>
          <h1>RATIO25</h1>
          <HeaderIconUl>
            <li>
              <HeaderButton>
                <Image src={heartIcon} alt={"like icon"} />
              </HeaderButton>
            </li>
            <li>
              <HeaderButton>
                <Image src={bagIcon} alt={"like icon"} />
              </HeaderButton>
            </li>
            <li>
              <HeaderButton>
                <Image src={peopleIcon} alt={"like icon"} />
              </HeaderButton>
            </li>
          </HeaderIconUl>
        </Header>
        <MainBanner styles={{ aspectRatio: 16 / 9 }}>
          <Image src={mainBannerImg} alt={"main banner"} />
        </MainBanner>
      </main>
    </>
  );
}
