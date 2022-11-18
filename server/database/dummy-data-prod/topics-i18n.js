import { query } from '../connect';
import * as T from '../../constants';

const createTopicsI18n = async ({ topicId, languageCode, contentI18n }) => {
  const sql = `INSERT INTO topics_i18n (
    topic_id,
    language_code,
    content_i18n
  ) VALUES (
    $1,
    $2,
    $3
  ) RETURNING *`;
  const res = await query(sql, [topicId, languageCode, contentI18n]);
  return res.rows[0];
};

const addTopicsI18n = async () => {
  const payingForHousingPrivateTenantTopic1AR = await createTopicsI18n({
    topicId: 1,
    languageCode: T.languageCodes.ARABIC,
    contentI18n: {
      tip1: 'اقرأ الرسائل من المالك وتحدث معهم عبر الهاتف إذا اتصلوا بك. أخبر مالك العقار أنك تحصل على المشورة ، وأنك ستدفع بالكامل عندما يمكنك ذلك. يمكن أن يساعدك مستشار الديون في التفاوض مع المالك.',
      tip2: 'من أجل المساعدة ، غالبًا ما يرغب المالك في معرفة مقدار المال المتاح لديك لإنفاقه كل شهر. يمكن أن تساعدك أداة الميزانية في حل هذا الأمر.',
      title: 'تحدث إلى مالك العقار',
      content:
        'إذا كنت تكافح لدفع إيجارك ، فتحدث إلى مالك العقار في أقرب وقت ممكن ، حتى إذا لم تفوتك دفعة حتى الآن. غالبًا ما يكون هناك العديد من الأشياء التي يمكنهم فعلها لمساعدتك.',
      resources: [
        {
          url: '/budget-planner',
          type: 'داخلي',
          label: 'مخطط الميزانية',
        },
      ],
    },
  });

  const payingForHousingPrivateTenantTopic1FR = await createTopicsI18n({
    topicId: 1,
    languageCode: T.languageCodes.FRENCH,
    contentI18n: {
      title: 'Parlez à votre propriétaire',
      content:
        "Si vous avez du mal à payer votre loyer, parlez-en à votre propriétaire dès que possible, même si vous n'avez pas encore manqué un paiement. Il y a souvent beaucoup de choses qu'ils peuvent faire pour vous aider.",
      tip1: "Lisez les lettres de votre propriétaire et parlez-lui au téléphone s'il vous appelle. Faites savoir à votre propriétaire que vous obtenez des conseils et que vous paierez en totalité lorsque vous le pourrez. Un conseiller en dettes peut vous aider à négocier avec votre propriétaire.",
      tip2: "Pour vous aider, un propriétaire voudra souvent savoir combien d'argent vous pouvez dépenser chaque mois. Un outil budgétaire peut vous aider à résoudre ce problème.",
      resources: [
        {
          type: 'internal',
          label: 'Budget Planner',
          url: '/budget-planner',
        },
      ],
    },
  });

  return {
    payingForHousingPrivateTenantTopic1AR,
    payingForHousingPrivateTenantTopic1FR,
  };
};

export default addTopicsI18n;
