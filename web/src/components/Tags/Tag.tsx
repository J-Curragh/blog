import {TagColours} from "../../constants/Colors";

interface Props {
  x: number;
  label: string
}
const Tag = ({ x, label}: Props)=> {

  const colour = TagColours[x % TagColours.length]

  return (
    <div className="post-preview-tag" style={{borderColor: colour.value, backgroundColor: colour.value}}>
      {label}
    </div>
  )
}
export default Tag;