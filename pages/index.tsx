import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

import mainBannerImg from "public/imgs/main-banner.png";
import bagIcon from "public/imgs/bag-icon.svg";
import heartIcon from "public/imgs/heart-icon.svg";
import peopleIcon from "public/imgs/people-icon.svg";
import styles from "@/styles/Home.module.css";
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
`;

const MainLogo = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.1em;
  color: #fff;
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

const Footer = styled.div`
  width: 100%;
  border-top: 0.5px solid #9c9e8a;
  display: flex;
  justify-content: center;
`;

const FooterContentBox = styled.div`
  width: 100%;
  max-width: 1180px;
  margin-top: 40px;
  margin-bottom: 145px;
  display: flex;
  justify-content: space-between;

  & > div {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
`;

const FooterLogoBox = styled.div`
  flex: 1;
`;
const FooterIconUl = styled.ul`
  & > li {
    margin: 0;
  }

  & > li:not(:last-child) {
    margin-right: 19px;
  }
`;
const SocialMediaIcon = styled.button`
  width: 21px;
  height: 21px;
  background-color: #000;
  border-radius: 25%;
`;

const MenuList = styled.div`
  flex: 2;
  & strong {
    font-weight: 400;
  }
  & > ul > li {
    width: 100%;
    justify-content: space-between;
  }
  & > ul > li > ul {
    display: flex;
    flex-direction: column;
    font-family: "Poppins", sans-serif;
    line-height: 24px;
  }
  & > ul > li > ul > li:first-child {
    font-size: 14px;
    letter-spacing: -0.02em;
    margin-bottom: 33px;
  }
  & > ul > li > ul > li:not(:first-child) {
    font-size: 14px;
    color: #9c9e8a;
    letter-spacing: -0.02em;
    font-weight: 300;
  }
  & > ul > li > ul > li:nth-child(2) > p {
    margin-bottom: 24px;
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
          <MainLogo>RATIO25</MainLogo>
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
        <Footer>
          <FooterContentBox>
            <FooterLogoBox>
              <MainLogo>RATIO25</MainLogo>
              <FooterIconUl>
                <li>
                  <SocialMediaIcon></SocialMediaIcon>
                </li>
                <li>
                  <SocialMediaIcon></SocialMediaIcon>
                </li>
                <li>
                  <SocialMediaIcon></SocialMediaIcon>
                </li>
              </FooterIconUl>
            </FooterLogoBox>
            <MenuList>
              <ul>
                <li>
                  <ul>
                    <li>
                      <h3>SHOP</h3>
                    </li>
                    <li>
                      <a>New</a>
                    </li>
                    <li>
                      <a>Best</a>
                    </li>
                    <li>
                      <a>Men</a>
                    </li>
                    <li>
                      <a>Women</a>
                    </li>
                    <li>
                      <a>Copule</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <h3>ABOUT</h3>
                    </li>
                    <li>
                      <a>Brand story</a>
                    </li>
                    <li>
                      <a>Delivery</a>
                    </li>
                    <li>
                      <a>Payment</a>
                    </li>
                    <li>
                      <a>FAQ</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <h3>CONTACTS</h3>
                    </li>
                    <li>
                      <p>
                        <strong>E-mail</strong>
                        <br />
                        <span>help@ratio25.com</span>
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Bank Info</strong>
                        <br />
                        <span>기업 469-045608-01-031</span>
                      </p>
                    </li>
                  </ul>
                  <ul>
                    <li>&nbsp;</li>
                    <li>
                      <p>
                        <strong>CS Center</strong>
                        <br />
                        <span>1661-6398</span>
                      </p>
                    </li>
                    <li>
                      <p>
                        <span>평일 10:00~17:00</span>
                        <br />
                        <span>(점심시간 12:00~13:00)</span>
                      </p>
                    </li>
                  </ul>
                </li>
              </ul>
            </MenuList>
          </FooterContentBox>
        </Footer>
      </main>
    </>
  );
}
