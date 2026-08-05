import axios from 'axios';

const CLOUD_NAME = 'v8plbi5a';
const UPLOAD_PRESET = 'HabitTracker';

export async function uploadImageToCloudinary(imageUri: string): Promise<string>{
    const formData = new FormData();
    formData.append('file', {
        uri: imageUri,
        type: 'image/jpeg',
        name: 'upload.jpg',
    } as any);
    formData.append('upload_preset', UPLOAD_PRESET);
    try {
        const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        formData
        );
        return response.data.secure_url;
    } catch (error) {
  if (axios.isAxiosError(error)) {
    console.log(error.response?.data);
  }
  throw error;
}
}