import React from 'react';
import { Col, Input, Modal, Row } from 'antd/es';
import MentionsTagsComponent from '../MentionsTagsComponent';

const UploadPictureModal = ({
  visible,
  formValues,
  onCancel,
  onSubmit,
  onDescriptionChange,
  onMentionsChange,
  onHashtagsChange,
}) => (
  <Modal
    title="Upload a picture"
    okText="Upload"
    visible={visible}
    onOk={onSubmit}
    onCancel={onCancel}
  >
    <Row type="flex" justify="center" className="input-container">
      <Col span={20}>
        <b>Description:</b>
        <Input
          id="description"
          title="Description"
          type="text"
          value={formValues.description}
          onChange={(event) => onDescriptionChange(event.target.value)}
        />
      </Col>
    </Row>
    <MentionsTagsComponent
      type="mentions"
      value={formValues.mentions}
      title="Mention a user"
      setValue={onMentionsChange}
    />
    <MentionsTagsComponent
      type="tags"
      value={formValues.hashtags}
      title="Hashtags"
      setValue={onHashtagsChange}
    />
  </Modal>
);

export default UploadPictureModal;
