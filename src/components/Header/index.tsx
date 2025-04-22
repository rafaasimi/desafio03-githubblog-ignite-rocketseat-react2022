import { HeaderContainer, HeaderContent } from "./styles";

import logoImg from "../../assets/logo.svg";
import headerLeftImg from "../../assets/header-left.png";
import headerRightImg from "../../assets/header-right.png";

export function Header() {
  return (
    <HeaderContainer>
      <img src={headerLeftImg} alt="" />
      <img src={headerRightImg} alt="" />
      
      <HeaderContent>
        <img src={logoImg} alt="" />
      </HeaderContent>
    </HeaderContainer>
  );
}
