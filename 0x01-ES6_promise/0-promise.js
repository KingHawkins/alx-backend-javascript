export default function getResponseFromApi() {
  const uploadPhoto = {
    status: 200,
    body: 'photo-profile-1',
  };
  return new Promise((resolve, reject) => {
    if (uploadPhoto.status === 200) {
      resolve(uploadPhoto);
    } else reject(new Error('Error'));
  });
}
