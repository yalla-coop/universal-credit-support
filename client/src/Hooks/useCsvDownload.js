import { useEffect, useState } from 'react';
import axios from 'axios';

function useCsvDownload(url) {
  const [size, setSize] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  let mounted = true;
  let fileUrl;
  const handleClick = async () => {
    try {
      setLoading(true);
      setSize(0);
      setError('');
      const file = await axios({
        url,
        responseType: 'blob',
        onDownloadProgress(progressEvent) {
          setSize((s) => s + progressEvent.loaded);
        },
      });

      if (mounted) {
        setLoading(false);

        const fileName =
          file.headers['content-disposition'].split('filename=')[1];
        const tempAnchor = document.createElement('a');
        fileUrl = window.URL.createObjectURL(file.data);
        tempAnchor.href = fileUrl;
        tempAnchor.download = decodeURI(fileName);
        tempAnchor.style.display = 'none';
        document.body.appendChild(tempAnchor);
        tempAnchor.click();
        tempAnchor.parentNode.removeChild(tempAnchor);
        window.URL.revokeObjectURL(fileUrl);
      }
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };

  useEffect(
    () => () => {
      // This is ok to disable because we only need it to be false if the component is unmounted and removed from dom
      // eslint-disable-next-line react-hooks/exhaustive-deps
      mounted = false;

      if (fileUrl) {
        window.URL.revokeObjectURL(fileUrl);
      }
    },
    []
  );

  const data = { size, loading, error };
  return [data, handleClick];
}

export default useCsvDownload;
