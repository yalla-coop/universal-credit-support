import {
  FacebookShareButton,
  WhatsappShareButton,
  EmailShareButton,
} from 'react-share';
import { message } from 'antd';

import FacebookIcon from '../assets/Facebook.svg';
import WhatsappIcon from '../assets/Whatsapp.svg';
import EmailIcon from '../assets/Email.svg';
import CopyImg from '../assets/Copy.svg';
import { Typography as T } from '..';
import { usePublicOrg } from '../../context/public-org';
import * as S from './style';

const ShareBox = () => {
  const { pageTitle } = usePublicOrg();
  let formattedTitle;
  if (pageTitle) {
    formattedTitle = pageTitle.replaceAll('*', '');
  }
  const url = window.location.href;
  return (
    <S.Box>
      <T.P isSmall color="neutralMain" weight="semi">
        Share this page
      </T.P>
      <S.SocialWrapper>
        <FacebookShareButton url={url} quote={`Advice for ${formattedTitle}`}>
          <S.SocialImg alt="Facebook" src={FacebookIcon} />
        </FacebookShareButton>
        <WhatsappShareButton url={url} title={`Advice for ${formattedTitle}`}>
          <S.SocialImg alt="whatsapp" src={WhatsappIcon} />
        </WhatsappShareButton>

        <EmailShareButton
          url={url}
          subject={`Advice for ${formattedTitle}`}
          body={`Here is Advice for  ${formattedTitle}`}
        >
          <S.SocialImg alt="email" src={EmailIcon} />
        </EmailShareButton>
        <S.SocialImg
          alt="copy"
          src={CopyImg}
          mr="0px"
          onClick={() => {
            navigator.clipboard.writeText(url);
            message.info(`Link copied to clipboard ${url}`);
          }}
        />
      </S.SocialWrapper>
    </S.Box>
  );
};

export default ShareBox;
