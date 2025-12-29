/* eslint-disable prettier/prettier */

export interface UserModel {
  id: string;
  name: string;
  gender: string;
  dob: string;
  status: string;  // online, offline, in_chat
  lastActive: string;
  deviceToken: string;  // For push notifications
  publicId: string;
  url: string;
  createdAt: string;
  updatedAt: string;
  refreshToken?: string
}
