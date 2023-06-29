/* eslint-disable import/extensions */
import ClassRoom from './0-classroom.js';

export default function initializeRooms() {
  const first = new ClassRoom(19);
  const second = new ClassRoom(20);
  const third = new ClassRoom(34);
  return ([first, second, third]);
}
