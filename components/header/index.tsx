import Image from "next/image";
import styled from "styled-components";

import bagIcon from "public/imgs/bag-icon.svg";
import heartIcon from "public/imgs/heart-icon.svg";
import peopleIcon from "public/imgs/people-icon.svg";

const HeaderBox = styled.div`
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

const Header = () => {
  return (
    <HeaderBox>
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
    </HeaderBox>
  );
};

export default Header;
