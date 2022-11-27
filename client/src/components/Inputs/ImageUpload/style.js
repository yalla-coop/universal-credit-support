import styled from '@emotion/styled';
import setMargin from '../../../helpers/set-margin';

export const Wrapper = styled.div`
  ${setMargin};
  width: ${({ w }) => w || '100%'};

  .ant-upload.ant-upload-drag {
    opacity: ${({ disabled }) => (disabled ? '0.6' : '1')};
    background: ${({ theme }) => theme.colors.neutralSurface};

    border: 4px solid
      ${({ error, theme }) =>
        `${error ? theme.colors.error : theme.colors.neutralMid}`};
    box-sizing: border-box;
    border-radius: 12px;
  }
  .ant-upload-drag-container {
    padding: 10px;
  }

  .ant-upload-list-item-name {
    color: ${({ theme }) => theme.colors.secondaryMain};
    font-size: 1rem;
    font-weight: bold;
  }
`;

export const UploadDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FileNameWrapper = styled.div`
  margin-top: ${({ theme }) => theme.spacings[4]};
  display: flex;
`;
