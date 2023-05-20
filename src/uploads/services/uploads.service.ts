import axios from 'axios';

const UploadsService = {
  createPresignedUrl: async (filename: string) => {
    const res = await axios.post<string>('/uploads/presigned-url', {
      filename,
    });
    return res.data;
  },
  uploadToBucket: (
    uploadUrl: string,
    blob: Blob,
    onUploadProgress?: (progress: number) => void,
  ) =>
    axios.put(uploadUrl, blob, {
      timeout: 0,
      transformRequest(data, headers) {
        if (headers && 'Authorization' in headers) {
          delete headers['Authorization'];
        }
        return data;
      },
      onUploadProgress(progressEvent) {
        onUploadProgress?.(progressEvent.loaded);
      },
    }),
};

export default UploadsService;
