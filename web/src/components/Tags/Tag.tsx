import { TagColours } from '../../constants/Colors';
import { Box } from './style';

interface Props {
  x: number;
  label: string;
}
const Tag = ({ x, label }: Props) => {
  const colour = TagColours[x % TagColours.length];

  return <Box colour={colour.value}>{label}</Box>;
};
export default Tag;
