import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

import Header from "../components/header";
import Footer from "../components/Footer";

import mainBannerImg from "public/imgs/main-banner.png";
import bestWomenUnderwearImg from "public/imgs/best-w-underwear.png";
import wUnderwearImg01 from "public/imgs/w-underwear-01.png";
import bestMenUnderwearImg from "public/imgs/best-m-underwear.png";
import mUnderwearImg01 from "public/imgs/m-underwear-01.png";

import wMainProductLeftImg from "public/imgs/w-main-product-left.png";
import wMainProductRightImg from "public/imgs/w-main-product-right.png";
import mMainProductLeftImg from "public/imgs/m-main-product-left.png";
import mMainProductRightImg from "public/imgs/m-main-product-right.png";
import wMainProductItemImg01 from "public/imgs/w-main-product-item-01.png";
import mMainProductItemImg01 from "public/imgs/m-main-product-item-01.png";

import RightAngleBracket from "public/imgs/right-angle-bracket.png";

import styles from "@/styles/Home.module.css";

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

const BestUnderwear = styled.div`
  aspect-ratio: 12 / 5;
  & > div {
    flex: 1;
    height: 100%;
    align-items: center;
  }
  & > div > img {
    width: 100%;
    height: fit-content;
  }
`;

const UnderwearList = styled.ul`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  & > li {
    height: 100%;
    justify-content: center;
    align-items: center;
  }

  & > li > img {
    width: 80%;
    height: fit-content;
  }
`;

const BrandStoryPreview = styled.div`
  justify-content: center;
  align-items: center;
  padding: 150px 0;
  flex-direction: column;

  & > h1 {
    font-family: "Poppins", sans-serif;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0.1em;
  }

  & > p {
    margin: 35px 0;
    text-align: center;
    font-size: 14px;
    font-weight: 300;
    line-height: 24px;
  }
`;

const MoreView = styled.a`
  font-weight: 300;
  text-align: center;
  font-size: 14px;
  padding: 0 15px;
  border-right: 1px solid #9c9e8a;
  border-left: 1px solid #9c9e8a;
  color: #9c9e8a;
`;

const MainProductBox = styled.div`
  width: 100%;
  margin-bottom: 150px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainProductImgBox = styled.div`
  width: 100%;
  aspect-ratio: 16 / 5;
  align-items: center;
  & > div > img {
    width: 100%;
    height: auto;
  }
`;

const MainProduct2XImg = styled.div`
  flex: 2;
`;

const MainProductImg = styled.div`
  flex: 1;
  height: 100%;
`;

const MainProductDetailBox = styled.div`
  padding-top: 40px;
  width: 100%;
  max-width: 1180px;
  flex-direction: column;
`;

const MainProductDescription = styled.div`
  padding-bottom: 145px;
  justify-content: space-between;
  border-bottom: 1px solid #9c9e8a;

  & > div {
    flex-direction: column;
    justify-content: space-between;
  }

  & > div > h2 {
    font-family: "Poppins", sans-serif;
    font-size: 28px;
    font-weight: 500;
    letter-spacing: -0.02em;
  }

  & > div > p {
    vertical-align: middle;
    font-size: 14px;
    font-weight: 300;
    line-height: 24px;
    letter-spacing: -0.02em;
  }

  & > div > p > span {
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    font-weight: 300;
    line-height: 24px;
    letter-spacing: -0.02em;
  }

  & > div > p > img {
    margin-left: 8px;
  }
`;

const MainMainProductList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: center;
  & > li {
    flex-direction: column;
    position: relative;
    align-items: center;
    padding: 0 20px;
  }

  & > li > div {
    position: absolute;
    width: 100%;
    height: 20px;
    border-right: 1px solid #9c9e8a;
  }
  & > li > img {
    object-fit: cover;
  }
`;

const SlideListBtns = styled.ul`
  margin: auto;
  & > li {
    margin: 8px 4px;
  }
  & > li > button {
    width: 8px;
    height: 8px;
    background-color: #a3a3a3;
    border-radius: 50%;
    padding: 0;
  }
  & > li > .active {
    background-color: #000;
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
        <BestUnderwear>
          <div>
            <UnderwearList>
              <li>
                <Image src={wUnderwearImg01} alt={"women underwear img 01"} />
              </li>
              <li>
                <Image src={wUnderwearImg01} alt={"women underwear img 01"} />
              </li>
              <li>
                <Image src={wUnderwearImg01} alt={"women underwear img 01"} />
              </li>
              <li>
                <Image src={wUnderwearImg01} alt={"women underwear img 01"} />
              </li>
              <li>
                <Image src={wUnderwearImg01} alt={"women underwear img 01"} />
              </li>
              <li>
                <Image src={wUnderwearImg01} alt={"women underwear img 01"} />
              </li>
            </UnderwearList>
          </div>
          <div>
            <Image
              src={bestWomenUnderwearImg}
              alt={"best women underwear img"}
            />
          </div>
        </BestUnderwear>
        <BestUnderwear>
          <div>
            <Image src={bestMenUnderwearImg} alt={"best men underwear img"} />
          </div>
          <div>
            <UnderwearList>
              <li>
                <Image src={mUnderwearImg01} alt={"men underwear img 01"} />
              </li>
              <li>
                <Image src={mUnderwearImg01} alt={"men underwear img 01"} />
              </li>
              <li>
                <Image src={mUnderwearImg01} alt={"men underwear img 01"} />
              </li>
              <li>
                <Image src={mUnderwearImg01} alt={"men underwear img 01"} />
              </li>
              <li>
                <Image src={mUnderwearImg01} alt={"men underwear img 01"} />
              </li>
              <li>
                <Image src={mUnderwearImg01} alt={"men underwear img 01"} />
              </li>
            </UnderwearList>
          </div>
        </BestUnderwear>
        <BrandStoryPreview>
          <h1>RATIO25</h1>
          <p>
            우리는 바디사이즈와 연령, 스킨 컬러, 성별의 틀에 사로잡히지 않는
            새로운 세대가 갖는
            <br />
            Young&Sporty 바이브, 그 섹시한 에너지를 통해 영감을 얻으며 성장해
            나갑니다.
          </p>
          <MoreView>More View</MoreView>
        </BrandStoryPreview>
        <MainProductBox>
          <MainProductImgBox>
            <MainProductImg>
              <Image
                src={wMainProductLeftImg}
                alt={"women main product left img"}
              />
            </MainProductImg>
            <MainProduct2XImg>
              <Image
                src={wMainProductRightImg}
                alt={"women main product right img"}
              />
            </MainProduct2XImg>
          </MainProductImgBox>
          <MainProductDetailBox>
            <MainProductDescription>
              <div>
                <h2>OMG Sexy Bra</h2>
                <p>
                  <span>SEXY FIT</span>
                  <br />
                  <span>SPORTY FIT</span>
                  <Image src={RightAngleBracket} alt={">"} />
                </p>
              </div>
              <div>
                <p>
                  라티오는 오랜 고민 끝에 섹시함은 잃지 않으면서 내 몸에
                  편안하게
                  <br />
                  밀착되는 OMG 섹시 브라를 개발하였습니다. 클래식한 디자인과
                  색상
                  <br />
                  들로 구성되어 있어 다양한 TPO에 최적화되어 있습니다.
                  <br />
                  <br />
                  오랫동안 입을 수 있는 다크한 색상이면서 얇은 옷에도 쉽게
                  비치지
                  <br />
                  않아 부담스럽지 않게 매일 착용하기 좋은 색상입니다.
                </p>
              </div>
            </MainProductDescription>
            <MainMainProductList>
              <li>
                <div />
                <Image
                  src={wMainProductItemImg01}
                  alt={"wamen main product item image 1"}
                />
              </li>
              <li>
                <div />
                <Image
                  src={wMainProductItemImg01}
                  alt={"wamen main product item image 1"}
                />
              </li>
              <li>
                <div />
                <Image
                  src={wMainProductItemImg01}
                  alt={"wamen main product item image 1"}
                />
              </li>
              <li>
                <Image
                  src={wMainProductItemImg01}
                  alt={"wamen main product item image 1"}
                />
              </li>
            </MainMainProductList>
            <SlideListBtns>
              <li>
                <button class={"active"} />
              </li>
              <li>
                <button />
              </li>
            </SlideListBtns>
          </MainProductDetailBox>
        </MainProductBox>
        <MainProductBox>
          <MainProductImgBox>
            <MainProduct2XImg>
              <Image
                src={mMainProductLeftImg}
                alt={"men main product left img"}
              />
            </MainProduct2XImg>
            <MainProductImg>
              <Image
                src={mMainProductRightImg}
                alt={"men main product right img"}
              />
            </MainProductImg>
          </MainProductImgBox>
          <MainProductDetailBox>
            <MainProductDescription>
              <div>
                <h2>ENERGY DRAWERS</h2>
                <p>
                  <span>SPORTY FIT</span>
                  <br />
                  <span>SEXY FIT</span>
                  <Image src={RightAngleBracket} alt={">"} />
                  <br />
                  <span>BIKINI FIT</span>
                  <Image src={RightAngleBracket} alt={">"} />
                </p>
              </div>
              <div>
                <p>
                  퍼포먼스에 최적화 되어있는 역동적인 스타일의 &apos;스포티핏
                  에너지&apos;
                  <br />
                  자사 &apos;섹시핏&apos; 라인보다 기장을 늘려 좀 더 안정감있는
                  <br />
                  착용감을 선사합니다.
                  <br />
                  <br />
                  고급 공제방식인 오드람프로 마무리하여 민감한 부위의 피부를 좀
                  더
                  <br />
                  편안하게 감싸줍니다.
                </p>
              </div>
            </MainProductDescription>
            <MainMainProductList>
              <li>
                <div />
                <Image
                  src={wMainProductItemImg01}
                  alt={"wamen main product item image 1"}
                />
              </li>
              <li>
                <div />
                <Image
                  src={wMainProductItemImg01}
                  alt={"wamen main product item image 1"}
                />
              </li>
              <li>
                <div />
                <Image
                  src={wMainProductItemImg01}
                  alt={"wamen main product item image 1"}
                />
              </li>
              <li>
                <Image
                  src={wMainProductItemImg01}
                  alt={"wamen main product item image 1"}
                />
              </li>
            </MainMainProductList>
            <SlideListBtns>
              <li>
                <button class={"active"} />
              </li>
              <li>
                <button />
              </li>
            </SlideListBtns>
          </MainProductDetailBox>
        </MainProductBox>

        <Footer />
      </main>
    </>
  );
}
