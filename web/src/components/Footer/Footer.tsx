import * as SC from './style';
import Badge from './Badge';
import ThemeSelector from './ThemeSelector';

const Footer = () => {
  return (
    <SC.FooterBox>
      <SC.Container>
        <ThemeSelector />
        <div>
          <Badge imageName="Github" />
          <Badge imageName="Twitter" />
          <Badge imageName="Discord" />
        </div>
      </SC.Container>
    </SC.FooterBox>
  );
};

export default Footer;
