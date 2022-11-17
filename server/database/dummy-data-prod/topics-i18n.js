import { query } from '../connect';

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
    languageCode: 'ar',
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

  const payingForHousingPrivateTenantTopic1EN = await createTopicsI18n({
    topicId: 1,
    languageCode: 'en',
    contentI18n: {
      title: 'Talk to your landlord',
      content:
        "If you're struggling to pay your rent speak to your landlord as soon as possible, even if you haven't missed a payment yet. There are often many things they can do to help you.",
      tip1: "Read letters from your landlord and speak to them on the phone if they call you. Let your landlord know that you're getting advice, and that you'll pay in full when you can. A debt advisor can help you negotiate with your landlord.",
      tip2: 'In order to help, a landlord will often want to know how much money you have available to spend each month. A budget tool can help you work this out.',
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
    payingForHousingPrivateTenantTopic1EN,
  };
};

export default addTopicsI18n;
