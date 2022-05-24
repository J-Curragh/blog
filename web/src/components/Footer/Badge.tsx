import { Icon } from './style';
import { Socials } from '../../constants/Socials';

interface Props {
  imageName: string;
}

const Badge = ({ imageName }: Props) => {
  return (
    <Icon href={Socials[imageName]}>
      <img
        width={35}
        height={35}
        src={`/assets/${imageName}.svg`}
        alt={imageName}
      />
    </Icon>
  );
};

export default Badge;
