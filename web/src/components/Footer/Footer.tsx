import './Footer.css'
import Badge from "./Badge";
import ThemeSelector from "./ThemeSelector";

const Footer = () => {
  return (
    <footer id="absolute-footer">

      <div id="footer-social-container">
        <div>
          <ThemeSelector />
        </div>
        <div>
          <Badge imageName="Github" />
          <Badge imageName="Twitter" />
          <Badge imageName="Discord" />
        </div>
      </div>
    </footer>
  )
}

export default Footer;