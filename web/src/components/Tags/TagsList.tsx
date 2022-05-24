import { Container } from './style';
import { Topic } from '../../models';
import Tag from './Tag';

interface Props {
  tags: Topic[];
}
const TagsList = ({ tags }: Props) => {
  return (
    <Container>
      {tags.map((t) => (
        <Tag key={t.id} x={t.id} label={t.name} />
      ))}
    </Container>
  );
};

export default TagsList;
