import React from 'react';
import { Col, Input, Modal, Row } from 'antd/es';

const fields = [
  { key: 'email', label: 'EMail', id: 'email' },
  { key: 'firstname', label: 'Firstname', id: 'firstname' },
  { key: 'lastname', label: 'Lastname', id: 'lastname' },
  { key: 'phoneNumber', label: 'Phone number', id: 'phoneNumber' },
];

const EditProfileModal = ({
  visible,
  formValues,
  onCancel,
  onSubmit,
  onFieldChange,
}) => (
  <Modal
    title="Edit your account"
    okText="Update"
    visible={visible}
    onOk={onSubmit}
    onCancel={onCancel}
  >
    {fields.map((field) => (
      <Row key={field.key} type="flex" justify="center" className="input-container">
        <Col span={20}>
          <b>{field.label}</b>
          <Input
            id={field.id}
            type="text"
            value={formValues[field.key]}
            onChange={(event) => onFieldChange(field.key, event.target.value)}
          />
        </Col>
      </Row>
    ))}
  </Modal>
);

export default EditProfileModal;
