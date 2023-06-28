import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const userName = signUpUser(firstName, lastName);
  const userPic = uploadPhoto(fileName);

  const info = await Promise.allSettled([userName, userPic])
    .then((response) => response.map((resp) => {
      if (resp.status !== 'fulfilled') {
        return {
          status: 'rejected',
          value: resp.reason.toString(),
        };
      }
      return resp;
    }));
  return Promise.resolve(info);
}
