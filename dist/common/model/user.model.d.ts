export interface UserModel {
    id: string;
    name: string;
    gender: string;
    dob: string;
    status: string;
    lastActive: string;
    deviceToken: string;
    publicId: string;
    url: string;
    createdAt: string;
    updatedAt: string;
    refreshToken?: string;
}
