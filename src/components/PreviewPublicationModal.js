import React from 'react';
import { Button, Col, Modal, Row } from 'antd/es';
import PostTagList from './PostTagList';

const PreviewPublicationModal = ({
  post,
  visible,
  onCancel,
  onEdit,
  onDelete,
}) => {
  if (!post) {
    return null;
  }

  return (
    <Modal
      width={520}
      visible={visible}
      onCancel={onCancel}
      footer={(
        <Row type="flex">
          <Col span={12} className="text-center">
            <Button type="ghost" icon="edit" onClick={onEdit}>Edit</Button>
          </Col>
          <Col span={12} className="text-center">
            <Button type="danger" icon="delete" onClick={onDelete}>Delete</Button>
          </Col>
        </Row>
      )}
    >
      <Row type="flex" align="middle">
        <Col xs={24} md={12} className="text-center">
          <img src={post.imageUrl} width={200} height={200} alt={post.description} />
        </Col>
        <Col xs={24} md={12}>
          <div>
            <b>Description: </b>
            <p>{post.description}</p>
          </div>
          <div>
            <b>Hashtag:</b>
            <PostTagList items={post.hashtags} />
          </div>
          <div>
            <b>Mention:</b>
            <PostTagList items={post.mentions} prefix="@" />
          </div>
        </Col>
      </Row>
    </Modal>
  );
};

export default PreviewPublicationModal;
