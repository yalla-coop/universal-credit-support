import sgMail from '@sendgrid/mail';
import getTemplate from './templates';
import config from '../../config';
import { envTypes } from '../../constants';
import { Sentry } from '../error-handler';

const { sendGridApiKey, senderEmail } = config.emails;
const { env } = config.common;

sgMail.setApiKey(sendGridApiKey);

/**
 *
 * @param {string} templateName
 * @param {object} receiversObj
 * @param {string | string[]} receiversObj.to
 * @param {string | string[]} receiversObj.cc
 * @param {string | string[]} receiversObj.bcc
 * @param {object} paramsObj contains the place holders for the template
 * @example
 * sendEmail("confirm_account_member", {
  to: `example@example.com`,
  cc: `example@example.com`,
  bcc: `example@example.com`
  },{
    name: "Mohammed",
    orgName: "Hyde",
    link: "http://www.wearehyde.org",
  });
 */

const sendEmail = (templateName, receiversObj = {}, paramsObj) => {
  const msg = {
    from: `Hyde <${senderEmail}>`,
    ...receiversObj,
    templateId: getTemplate(templateName, paramsObj.language),
    dynamic_template_data: paramsObj,
    mailSettings: {
      sandboxMode: {
        enable: env !== envTypes.PRODUCTION,
      },
    },
  };

  if (env === envTypes.DEVELOPMENT) {
    // eslint-disable-next-line no-console
    console.log(msg);
  }

  if (env === envTypes.DEVELOPMENT || env === envTypes.PRODUCTION) {
    return sgMail.send(msg).catch((err) => {
      // TODO Sentry Logging sys
      // eslint-disable-next-line no-console
      console.error('MAILING SERVICE ERROR: ', err);
      Sentry.captureException(err);
    });
  }
};

export default sendEmail;
