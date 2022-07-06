import React from 'react';

import { Colour, Topic } from '../../../types';
import { defaultTagStyle } from './style';

interface TagProps {
  topic: Topic;
  colour: Colour;
}

const Tag = ({ topic, colour }: TagProps) => {
  return (
    <div style={{ ...defaultTagStyle, backgroundColor: colour.value }}>
      <span>{topic.name}</span>
    </div>
  );
};

export default Tag;
