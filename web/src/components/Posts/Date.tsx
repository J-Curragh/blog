import { Info } from './style';

interface Props {
  date: string;
}
const Date = ({ date }: Props) => {

  const formattedDate = (date: string) => {
    return date.substring(0, date.indexOf('T'));
  };

  return (
    <Info>{formattedDate(date)}</Info>
  );
};
export default Date;