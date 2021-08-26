import { Upload } from 'antd';

import * as T from '../../Typography';

import { Media } from '../../../api-calls';
import { Icon } from '../../../components';
import * as S from './style';
const { Dragger } = Upload;

const initState = {
  fileUploading: false,
  data: {
    id: null,
    name: '',
    key: '',
    bucketRegion: '',
    bucket: '',
    fileType: '',
    fileCategory: '',
    size: 0,
    new: false,
    uploadedToS3: false,
  },
};

const ImageUpload = ({
  w, // width
  fileCategory = 'LOGO',
  setUploading,
  uploading,
  setFileInfo,
  fileInfo = {},
  setError,
  error,
  maxSize,
  disabled,
  contentInputMissingError,
  ...rest
}) => {
  let updatedFile;

  // get signed url to be used as action / upload url
  const getSignedURL = async (file) => {
    const { data, error: _error } = await Media.getSignedURL({
      fileType: file.type,
      fileName: file.name,
      fileSize: file.size,
      fileCategory,
      fileMaxSize: maxSize,
    });

    if (_error) {
      setError(_error.message);
      return false;
    } else {
      updatedFile = { ...data, new: true };
      setFileInfo(updatedFile);
      setError(null);
      return data.url;
    }
  };

  // here you can controll state depending on upload status
  const handleFileChanged = async ({ file }) => {
    const { status } = file;

    if (!error) {
      if (status === 'removed') {
        setUploading(false);

        setFileInfo(initState);
      } else if (status === 'uploading') {
        setUploading(true);
      } else if (status === 'done') {
        setUploading(false);
        setError(null);
      }
    }
  };

  const checkFileTypes = ({ name, type, size }) => {
    let correctFileType;
    // size in Megabites
    const sizeInMb = size > 0 && size / 1024 / 1024;

    //  check 1: correct file type
    if (['.jpg', '.jpeg'].includes(type)) {
      setError(
        `${name} must be one of the following file types: ${[
          '.jpg',
          '.jpeg',
        ].join('/')}`
      );
      correctFileType = false;

      // check 2: max size
    } else if (sizeInMb > 5) {
      setError(`File is too large. Maximum file size is 5MBs`);
      correctFileType = false;
    } else {
      setError('');
      correctFileType = true;
    }

    // if false upload doesn't run
    return !!correctFileType;
  };

  // uploads to S3 using signed URL
  const uploadFile = async (options) => {
    const { onSuccess, onError, file, onProgress } = options;
    // check if signed URL is present
    if (fileInfo.url && fileInfo.new) {
      //  add custom progress to axios
      const config = {
        onUploadProgress: (event) => {
          onProgress({ percent: (event.loaded / event.total) * 100 });
        },
      };

      // upload file
      const {
        data: newUploadedFileInfo,
        error: _error,
      } = await Media.uploadToS3({
        signedURL: fileInfo.url,
        file,
        options: config,
      });

      if (_error) {
        onError(setError(_error.message));
      } else {
        updatedFile = {
          ...fileInfo,
          ...newUploadedFileInfo,
          uploadedToS3: true,
          fileCategory,
        };
        setFileInfo(updatedFile);
        onSuccess('OK');
      }
    }
  };

  const props = {
    name: 'file',
    multiple: true,
    maxCount: 1,

    accept: '.jpg, .jpeg',
    progress: {
      strokeColor: {
        '0%': '#108ee9',
        '100%': '#87d068',
      },
    },
    action: (_file) => getSignedURL(_file),
    onChange: (e) => handleFileChanged(e),
    beforeUpload: (_file) => checkFileTypes(_file),
    customRequest: (options) => uploadFile(options),
    format: (percent) => `${parseFloat(percent.toFixed(2))}%`,
  };

  return (
    <S.Wrapper error={error}>
      <Dragger {...props}>
        <S.UploadDetails>
          <Icon icon="upload" />
          <T.P mt="2" ta="center" color="neutralMain" weight="bold">
            Click or drag and drop to upload
          </T.P>
          <T.P color="neutralMain">(jpeg or jpg)</T.P>
        </S.UploadDetails>
      </Dragger>
      {error && (
        <T.P bold color="error">
          {error}
        </T.P>
      )}
    </S.Wrapper>
  );
};

export default ImageUpload;
