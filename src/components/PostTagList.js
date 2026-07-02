import React from 'react';
import { List, Tag } from 'antd/es';

const PostTagList = ({ items, prefix = '' }) => (
  <List
    grid={{ gutter: 16, column: 2 }}
    dataSource={items}
    renderItem={(item) => (
      <List.Item>
        <Tag>{`${prefix}${item}`}</Tag>
      </List.Item>
    )}
  />
);

export default PostTagList;
