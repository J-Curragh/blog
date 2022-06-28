import * as SC from './style';
import ThemeSelector from './ThemeSelector';

const Footer = () => {
  return (
    <SC.FooterBox>
      <SC.Container>
        <ThemeSelector />
        <div>
        </div>
      </SC.Container>
    </SC.FooterBox>
  );
};

export default Footer;
