import { query } from '../connect';
import * as T from '../../constants';

const createCommonI18n = async ({ commonId, languageCode, contentI18n }) => {
  const sql = `INSERT INTO common_i18n (
    common_id,
    language_code,
    content_i18n
  ) VALUES (
    $1,
    $2,
    $3
  ) RETURNING *`;
  const res = await query(sql, [commonId, languageCode, contentI18n]);
  return res.rows[0];
};

const addCommonI18n = async () => {
  const commonAR = await createCommonI18n({
    commonId: 1,
    languageCode: T.languageCodes.ARABIC,
    contentI18n: {
      buttons: {
        readMore: 'اقرأ المزيد',
        seeAdvice: 'انظر النصيحة',
        stuckTalkToSomeOne: 'عالق؟ تحدث إلى شخص ما',
      },
      heading: {
        costOfLivingHelper: 'مساعد تكاليف المعيشة',
        payingForHousing: 'مساعد تكاليف المعيشة',
        payingForMyBills: 'مساعد تكاليف المعيشة',
        payingForEssentials: 'مساعد تكاليف المعيشة',
        dealingWithDebts: 'مساعد تكاليف المعيشة',
        maximiseIncome: 'مساعد تكاليف المعيشة',
      },
      section: {
        worriedAbout: {
          title: 'أنا قلق بشأن ...',
          description:
            'إذا كنت قلقًا بشأن المال ، فهناك الكثير من المساعدة. قد تكون معرفة من أين تبدأ أمرًا صعبًا ، ولكن في هذه الأداة ستجد نصائح وإرشادات مفيدة حول ما يمكنك القيام به. يمكنك أيضًا وضع إشارة مرجعية على الإجراءات أثناء استعراضها.',
        },
        helpMe: {
          title: 'ساعدني!',
          subtitle: 'المساعدة هنا!',
          description:
            'نحتاج جميعًا إلى التحدث إلى شخص ما في بعض الأحيان! استخدم أيًا من تفاصيل الاتصال أدناه للعثور على شخص للدردشة معه.',
          govHelpline: 'خط مساعدة الحكومة',
          govOpeningTimes: 'انظر النصيحة',
          govPhone: 'انظر النصيحة1',
        },
        helpBudget: {
          title: 'انظر النصيحة',
          description: 'انظر النصيحة',
        },
        stressedOrOverwhelmed: {
          title: 'الشعور بالتوتر أو الإرهاق',
        },
      },
    },
  });

  return {
    commonAR,
  };
};

export default addCommonI18n;
