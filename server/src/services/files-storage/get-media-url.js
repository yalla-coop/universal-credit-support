const getMediaUrl = ({ key, bucket, bucketRegion }) => {
  return encodeURI(`https://${bucket}.s3.${bucketRegion}.amazonaws.com/${key}`);
};

export default getMediaUrl;
