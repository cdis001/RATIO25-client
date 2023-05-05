import Image from "next/image";
import styled from "styled-components";

import wProductBannerImg from "public/imgs/w-product-banner.png";
import wProductItem01Img from "public/imgs/w-product-item-01.png";
import wProductMenuImg from "public/imgs/w-product-menu.png";

import downAngleBracketIcon from "public/imgs/down-angle-bracket.svg";

import MainDiv from "../components/mainDiv";
import Header from "../components/header";
import Footer from "../components/footer";

const ProductBanner = styled.div`
  width: 100%;
  aspect-ratio: 20 / 7;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProductsListBox = styled.div`
  width: 100%;
  margin-top: 80px;
  flex-direction: column;
`;

const ProductsListHeader = styled.div`
  width: 100%;
  align-items: center;
  justify-content: space-between;

  & > div {
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    padding-bottom: 18px;
  }

  & > div > button > img {
    margin-left: 10px;
  }
`;

const ProductsListUl = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  & > li {
    position: relative;
    flex-direction: column;
    align-items: center;
    margin-bottom: 80px;
    padding: 0 10px;
    border-top: 1px solid #9c9e8a;
  }
  & > li:last-child {
    grid-column: 3 / span 2;
    grid-row: 2 / span 2;
    margin-left: 20px;
    border: 0;
  }
  & > li:last-child > img {
    width: 100%;
    object-fit: cover;
  }
  & > li > div {
    position: absolute;
    right: 0;
    height: 20px;
    border-right: 1px solid #9c9e8a;
  }
  & > li > a {
    font-size: 14px;
    font-weight: 300;
    text-align: center;
    margin-top: -5px;
  }
  & > li > a > p {
    margin-top: 10px;
  }
`;

const Product = () => {
  return (
    <MainDiv>
      <Header />
      <ProductBanner>
        <Image src={wProductBannerImg} alt={"product banner"} priority={true} />
      </ProductBanner>
      <ProductsListBox>
        <ProductsListHeader>
          <div>
            <button>
              FILTERS
              <Image
                src={downAngleBracketIcon}
                alt={"down angle bracket icon"}
                priority={true}
              />
            </button>
          </div>
          <div>
            <button>
              CHANGE GRID
              <Image
                src={downAngleBracketIcon}
                alt={"down angle bracket icon"}
                priority={true}
              />
            </button>
          </div>
          <div>
            <button>
              SORT BY
              <Image
                src={downAngleBracketIcon}
                alt={"down angle bracket icon"}
                priority={true}
              />
            </button>
          </div>
        </ProductsListHeader>
        <ProductsListUl>
          <li>
            <div />
            <Image
              src={wProductItem01Img}
              alt={"down angle bracket icon"}
              priority={false}
            />
            <a>
              <p>XOXO브라렛&nbsp;&nbsp;핑크레오파드</p>
              <p>KRW 33,000</p>
            </a>
          </li>
          <li>
            <div />
            <Image
              src={wProductItem01Img}
              alt={"down angle bracket icon"}
              priority={false}
            />
            <a>
              <p>XOXO브라렛&nbsp;&nbsp;핑크레오파드</p>
              <p>KRW 33,000</p>
            </a>
          </li>
          <li>
            <div />
            <Image
              src={wProductItem01Img}
              alt={"down angle bracket icon"}
              priority={false}
            />
            <a>
              <p>XOXO브라렛&nbsp;&nbsp;핑크레오파드</p>
              <p>KRW 33,000</p>
            </a>
          </li>
          <li>
            <Image
              src={wProductItem01Img}
              alt={"down angle bracket icon"}
              priority={false}
            />
            <a>
              <p>XOXO브라렛&nbsp;&nbsp;핑크레오파드</p>
              <p>KRW 33,000</p>
            </a>
          </li>
          <li>
            <div />
            <Image
              src={wProductItem01Img}
              alt={"down angle bracket icon"}
              priority={false}
            />
            <a>
              <p>XOXO브라렛&nbsp;&nbsp;핑크레오파드</p>
              <p>KRW 33,000</p>
            </a>
          </li>
          <li>
            <Image
              src={wProductItem01Img}
              alt={"down angle bracket icon"}
              priority={false}
            />
            <a>
              <p>XOXO브라렛&nbsp;&nbsp;핑크레오파드</p>
              <p>KRW 33,000</p>
            </a>
          </li>
          <li>
            <div />
            <Image
              src={wProductItem01Img}
              alt={"down angle bracket icon"}
              priority={false}
            />
            <a>
              <p>XOXO브라렛&nbsp;&nbsp;핑크레오파드</p>
              <p>KRW 33,000</p>
            </a>
          </li>
          <li>
            <Image
              src={wProductItem01Img}
              alt={"down angle bracket icon"}
              priority={false}
            />
            <a>
              <p>XOXO브라렛&nbsp;&nbsp;핑크레오파드</p>
              <p>KRW 33,000</p>
            </a>
          </li>
          <li>
            <Image
              src={wProductMenuImg}
              alt={"women product menu icon"}
              priority={false}
            />
          </li>
        </ProductsListUl>
      </ProductsListBox>
      <Footer />
    </MainDiv>
  );
};

export default Product;
