import { Topic } from "../../models";
import Tag from "./Tag";

interface Props {
  tags: Topic[]
}
const TagsList = ({ tags }: Props) => {

  return (
    <div className="post-preview-tag-list">
      {tags.map(t => <Tag key={t.id} x={t.id} label={t.name} />)}
    </div>
  )

};

export default TagsList;