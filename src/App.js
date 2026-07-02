// Kata written by Matthieu BRAULT for the next-react formation from TheHackingProject
import React, { useState } from 'react';
import { message } from 'antd/es';
import EditProfileModal from './components/EditProfileModal';
import PreviewPublicationModal from './components/PreviewPublicationModal';
import ProfileCard from './components/ProfileCard';
import PublicationsSection from './components/PublicationsSection';
import UploadPictureModal from './components/UploadPictureModal';
import {
  initialProfileData,
  initialProfileForm,
  initialUploadForm,
} from './data/profileData';

const formatDate = (date) => {
  const newDate = new Date(date);
  return `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`;
};

const App = () => {
  const [profileData, setProfileData] = useState(initialProfileData);
  const [profileForm, setProfileForm] = useState(initialProfileForm);
  const [uploadForm, setUploadForm] = useState(initialUploadForm);
  const [isEditProfileModalVisible, setIsEditProfileModalVisible] = useState(false);
  const [isPreviewPublicationModalVisible, setIsPreviewPublicationModalVisible] = useState(false);
  const [isUploadModalVisible, setIsUploadModalVisible] = useState(false);
  const [previewItem, setPreviewItem] = useState(0);

  const currentPost = profileData.posts[previewItem];

  const openPreview = (postNumber) => {
    setPreviewItem(postNumber);
    setIsPreviewPublicationModalVisible(true);
  };

  const updatePic = () => {
    alert(`J'update la publcation avec l'id : ${currentPost.id}`);
  };

  const deletePic = () => {
    alert(`Je supprime la publcation avec l'id : ${currentPost.id}`);
  };

  const uploadPicture = () => {
    alert(
      `J'upload une image avec la description : ${uploadForm.description} et les hashtags ${uploadForm.hashtags} et les mentions ${uploadForm.mentions}`
    );
  };

  const updateProfileField = (field, value) => {
    setProfileForm((currentForm) => ({
      ...currentForm,
      [field]: value,
    }));
  };

  const updateUploadField = (field, value) => {
    setUploadForm((currentForm) => ({
      ...currentForm,
      [field]: value,
    }));
  };

  const updateProfile = () => {
    setProfileData((currentProfile) => ({
      ...currentProfile,
      ...profileForm,
    }));
    setIsEditProfileModalVisible(false);
    message.success('Profile well updated', 3);
  };

  return (
    <div style={{ margin: 50 }}>
      <PreviewPublicationModal
        post={currentPost}
        visible={isPreviewPublicationModalVisible}
        onCancel={() => setIsPreviewPublicationModalVisible(false)}
        onEdit={updatePic}
        onDelete={deletePic}
      />
      <UploadPictureModal
        visible={isUploadModalVisible}
        formValues={uploadForm}
        onCancel={() => setIsUploadModalVisible(false)}
        onSubmit={uploadPicture}
        onDescriptionChange={(value) => updateUploadField('description', value)}
        onMentionsChange={(value) => updateUploadField('mentions', value)}
        onHashtagsChange={(value) => updateUploadField('hashtags', value)}
      />
      <EditProfileModal
        visible={isEditProfileModalVisible}
        formValues={profileForm}
        onCancel={() => setIsEditProfileModalVisible(false)}
        onSubmit={updateProfile}
        onFieldChange={updateProfileField}
      />
      <ProfileCard
        profile={profileData}
        formattedCreatedAt={formatDate(profileData.createdAt)}
        onEditAccount={() => setIsEditProfileModalVisible(true)}
        onUploadPicture={() => setIsUploadModalVisible(true)}
      />
      <PublicationsSection posts={profileData.posts} onPreview={openPreview} />
    </div>
  );
};

export default App;
