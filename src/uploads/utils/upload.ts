import UploadsService from '../services/uploads.service';

export type UploadStatus = 'created' | 'uploading' | 'succeeded' | 'failed';

export class Upload {
  public progress = 0;
  public status: UploadStatus = 'created';
  public url?: string;

  constructor(
    public file: File,
    public uploadName?: string,
    private onProgress?: (progress: number) => void,
  ) {}

  async start() {
    try {
      const filename = this.uploadName || this.file.name;

      const presignedUrl = await UploadsService.createPresignedUrl(filename);
      this.url = presignedUrl.split('?')[0];
      this.status = 'uploading';

      await UploadsService.uploadToBucket(
        presignedUrl,
        this.file,
        this.onProgress,
      );
      this.status = 'succeeded';
    } catch (error) {
      console.error('Upload file failed.', error);
      this.status = 'failed';
      throw error;
    }
  }
}
