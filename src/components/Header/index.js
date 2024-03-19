import {HeaderContainer, LinkItem, HeaderImage} from './styledComponents'

const Header = () => (
  <HeaderContainer>
    <LinkItem to="/">
      <HeaderImage
        src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
        alt="website logo"
      />
    </LinkItem>
  </HeaderContainer>
)

export default Header
