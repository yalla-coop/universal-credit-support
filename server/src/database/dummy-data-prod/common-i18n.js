import { query } from '../connect';
import * as T from '../../constants';

const createCommonI18n = async ({ commonId, languageCode, content }) => {
  const sql = `INSERT INTO common_i18n (
    common_id,
    language_code,
    content
  ) VALUES (
    $1,
    $2,
    $3
  ) RETURNING *`;
  const res = await query(sql, [commonId, languageCode, content]);
  return res.rows[0];
};

const addCommonI18n = async () => {
  const commonAR = await createCommonI18n({
    commonId: 1,
    languageCode: T.languageCodes.Arabic,
    content: {
      words: {
        and: 'و',
        completed: 'مكتمل',
      },
      colors: {
        0: {
          label: 'أزرق',
        },
        1: {
          label: 'أخضر',
        },
        2: {
          label: 'أصفر',
        },
        3: {
          label: 'أحمر',
        },
      },
      buttons: {
        checkHere: 'تحقق هنا',
        viewSteps: 'عرض الخطوات',
        accessibility: 'إمكانية الوصول',
        markAsComplete: 'وضع علامة على أنه مكتمل',
        decreaseTextSize: '- تقليل حجم النص',
        increaseTextSize: '+ زيادة حجم النص',
        benefitCalculator: 'محاسبة الفائدة',
        stuckCallUs: 'عالق؟ اتصل بنا للارشاد',
      },
      generalSentence: {
        ThisCanIncludeThingsLike: 'يمكن أن يشمل هذا الأمر الأشياء التالية:',
      },
      heading: {
        howLongDoesItTake: {
          title: 'كم من الوقت يستغرق ذلك؟',
        },
        thingsYouWillNeed: {
          text: 'لا تحتاج إلى تقديم أي مستندات مادية لهذه الخطوة.',
          title: 'الأشياء التي ستحتاجها',
        },
        whereDoYouNeedToGo: {
          text: 'تذكر العودة إلى هنا بمجرد الانتهاء حتى تتمكن من وضع علامة على هذه الخطوة على أنها مكتملة ومعرفة ما يجب القيام به بعد ذلك',
          title: 'أين تريد أن تذهب؟',
        },
        whatYouWillNeedToKnow: {
          title: 'ما ستحتاج إلى معرفته',
        },
      },
      section: {
        helpMe: {
          title: 'مساعدة!',
          govPhone: '0800 328 5644 (اختر الخيار 3)',
          subtitle: 'المساعدة هنا!',
          description:
            'نحتاج جميعًا إلى التحدث إلى شخص ما في بعض الأحيان! استخدم أيًا من تفاصيل الاتصال أدناه للعثور على شخص للدردشة معه.',
          govHelpline: 'خط المساعدة الحكومي',
          govOpeningTimes:
            'من الاثنين إلى الجمعة، من الساعة 8 صباحًا حتى 6 مساءً',
        },
        accessibility: {
          tip1: 'نصيحة! إذا واجهت أي مشكلة تتعلق بإمكانية الوصول على هذا الموقع أو لديك أي تعليق، يرجى',
          tip2: 'نصيحة! هناك العديد من ميزات إمكانية الوصول على الأجهزة، والتي يمكن العثور عليها في روابط مثل',
          title: 'إمكانية الوصول',
          contactUs: 'اتصل بنا',
          appleTitle: 'تفاحة',
          changeFont: 'تغيير الخط',
          forAndroid: 'للهواتف أو الأجهزة اللوحية التي تعمل بنظام Android',
          androidApps: 'تطبيقات أندرويد',
          chromeTitle: 'كروم',
          googleSpeak: 'انقر هنا لتنزيل غوغل سبيك',
          textSizetip:
            'نصيحة! انقر فوق زيادة حجم النص بنسبة 25٪ (على سبيل المثال من 16 بكسل إلى 20 بكسل)',
          description1:
            'تسترشد إمكانية الوصول على هذا الموقع بالمعايير الحكومية وإرشادات الوصول إلى محتوى الويب WCAG مقبولة على نطاق واسع كمعيار دولي لإمكانية الوصول على الويب.',
          description2:
            'بينما نهدف إلى جعل هذا الموقع متاحًا لجميع المستخدمين وتحقيق مستوى التوافق «AAA»، فإننا نعمل باستمرار مع أصحاب المصلحة لضمان الالتزام بمستوى المطابقة «A» كحد أدنى.',
          firefoxTitle: 'فيرفكس',
          addSpeakButton: 'وحدد زر الإضافة إلى Chrome',
          adjustTextSize: 'ضبط حجم النص',
          windowsEdgeTitle: 'ويندوز إيدج',
          downloadReadAloud: 'انقر هنا لتنزيل برنامج Read Aloud',
          textToSpeechTitle: 'تحويل النص إلى كلام',
          appleAccessibility: 'ميزات إمكانية الوصول من Apple',
          downloadVoiceAloud:
            'انقر هنا لتنزيل قارئ الصوت بصوت عالٍ لأجهزة Apple.',
          firefoxDescription:
            'انتقل إلى «عرض» على شريط القائمة - حدد حجم النص/التكبير. بدلاً من ذلك، استمر في الضغط على زر «Ctrl» على لوحة المفاتيح واضغط على مفتاح الجمع (+) لزيادة حجم النص. لتقليل هذا الأخير، استمر في الضغط على زر «Ctrl» واضغط على مفتاح الطرح (-). يرجى ملاحظة أن الإعدادات المذكورة أعلاه قد تختلف اعتمادًا على إصدار المتصفح.',
          androidAccessibility: 'إمكانية الوصول إلى Android',
          internetExplorerTitle: 'إنترنيت إكسبلورر',
          searchVoiceAloudReader:
            'اختر جهازك عند التنزيل. أو انتقل إلى متجر تطبيقات Apple الخاص بك وابحث عن برنامج Voice Aloud Reader',
          windowsEdgeDescription:
            'افتح متصفح Edge ثم انقر فوق خيار القراءة بصوت عالٍ أو على لوحة المفاتيح اضغط على Ctrl+Shift + U',
          textToSpeechDescription:
            'تحتوي العديد من أجهزة الكمبيوتر والأجهزة المحمولة اليوم على برنامج تحويل النص إلى كلام. فيما يلي أدلة لكل من المتصفحات والأجهزة الرئيسية:',
          internetExplorerDescription:
            'انتقل إلى «عرض» على شريط القائمة - حدد حجم النص/التكبير',
        },
        changeLanguage: {
          title: 'تغيير اللغة',
          placeholder: 'ابحث',
        },
        afterClaimContent: {
          text: {
            completed:
              'هل حصلت على الائتمان الشامل الخاص بك؟ أخبار رائعة! تحقق من هذه الخطوات حول ما يجب القيام به بعد ذلك:',
            notCompleted:
              'بمجرد الانتهاء من مطالبتك، هناك بعض الخطوات الإضافية التي يمكنك اتخاذها. افتح هذا عند الانتهاء من الخطوات المذكورة أعلاه',
          },
          title: {
            completed: 'لقد انتهيت من كل شيء!',
            notCompleted: 'ماذا يجب أن أفعل بمجرد حصولي على الائتمان الشامل؟',
          },
        },
      },
    },
  });

  return {
    commonAR,
  };
};

export default addCommonI18n;
