import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const promise = new Promise((resolve, reject) => {
    if (uploadPhoto.status === 200) {
      resolve([uploadPhoto.body, createUser.firstName, createUser.lastName]);
    } else reject(new Error('Signup system offline'));
  });
  promise.then((item) => console.log(item.join(' ')))
    .catch((err) => console.error(err));
}
