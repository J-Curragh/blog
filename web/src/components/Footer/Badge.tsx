import { Socials } from "../../constants/Socials";

interface Props {
  imageName: string;
}

const Badge = ({ imageName }: Props) => {

  return (
    <a className="badge-icon" href={Socials[imageName]}>
      <img width="35" height="35" src={`/assets/${imageName}.svg`} alt={imageName} />
    </a>
  )

}

export default Badge;