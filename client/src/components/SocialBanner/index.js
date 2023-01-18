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
import { useTranslation } from 'react-i18next';
import { common } from '../../constants';

const ShareBox = ({ dir }) => {
  const { t } = useTranslation();
  const { pageTitle } = usePublicOrg();
  let formattedTitle;
  if (pageTitle) {
    formattedTitle = pageTitle.replace(/\*/g, '');
  }
  const url = window.location.href;
  return (
    <S.Box dir={dir}>
      <T.P isSmall color="neutralMain" weight="semi">
        {t('common.heading.shareThisPage', common.heading.shareThisPage)}
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
