import { query } from '../connect';

const createTopics = async ({ sectionId, position, content }) => {
  const sql = `INSERT INTO topics (
    section_id,
    position,
    content
  ) VALUES (
    $1,
    $2,
    $3
  ) RETURNING *`;
  const res = await query(sql, [sectionId, position, content]);
  return res.rows[0];
};

const addTopics = async ({ sections }) => {
  const {
    payingMyBills,
    payingForEssentials,
    dealingWithDebts,
    maximisingYourIncome,
    payingForHousingPrivateTenant,
    payingForHousingSocialTenant,
    payingForHousingHomeowner,
    payingForHousingSharedOwner,
  } = sections;

  const payingForHousingPrivateTenantTopic1 = await createTopics({
    sectionId: payingForHousingPrivateTenant.id,
    position: 1,
    content: {
      title: 'Talk to your landlord',
      content:
        "If you're struggling to pay your rent and/or mortgage speak to your landlord and  mortgage provider as soon as possible, even if you haven't missed a payment yet. There are often many things they can do to help you.",
      tip1: `**Tip! Read letters from your landlord and speak to them on the phone if they call you. Let your landlord know that you're getting advice, and that you'll pay in full when you can. A debt advisor can help you negotiate with your landlord.**`,
      tip2: '**Tip! In order to help, a landlord will often want to know how much money you have available to spend each month. A budget tool can help you work this out.**',
      resources: [
        {
          type: 'CUSTOM',
          key: 'BUDGET_PLANNER',
        },
      ],
    },
  });
  const payingForHousingPrivateTenantTopic2 = await createTopics({
    sectionId: payingForHousingPrivateTenant.id,
    position: 2,
    content: {
      title: "Make sure you're claiming all the benefits you're entitled to",
      content:
        "Many people aren't claiming all the financial support they're entitled to. You may be able to get support with your rent, council tax, and lots of other things. That will then free up money for you to spend on rent. If you already receive benefits you may be entitled to more , and you may be eligible for help even if you're in full time work.",
      tip1: `**Tip! You can check if you're likely to receive support by using a benefit calculator. It's free to use and usually takes 10-20 minutes. You will need to input basic information about your income and living situation.**`,
      tip2: "If you're claiming Universal Credit or housing benefit but you're not receiving enough to cover your housing costs, you may be able to claim 'Discretionary Housing Payments' from your local council.",
      resources: [
        {
          type: 'CUSTOM',
          key: 'BENEFIT_CALCULATOR',
        },
      ],
    },
  });
  const payingForHousingPrivateTenantTopic3 = await createTopics({
    sectionId: payingForHousingPrivateTenant.id,
    position: 3,
    content: {
      title: 'Get help with debts',
      content:
        "If you've already missed a payment, a debt advisor can help you plan how to manage your money. Debt advice is free, and can be provded over the phone, face-to-face, or through online self-help tools.",
      tip1: `**Tip! You can prepare for debt advice by gathering together all the information you have about money coming in and money going out. But don't delay seeking help - even if you don't have everything to hand the sooner you get help the better.**`,
      tip2: `**Tip! If you're working with a debt advisor, you may be able to access 'Breathing Space' which pauses debt collection and evictions for up to 60 days to give you time to find the right solution.**`,
      resources: [
        {
          type: 'CUSTOM',
          key: 'DEBT_ADVICE',
        },
      ],
    },
  });
  const payingForHousingPrivateTenantTopic4 = await createTopics({
    sectionId: payingForHousingPrivateTenant.id,
    position: 4,
    content: {
      title: 'Speak to your local authority',
      content:
        "If you have no money left for basics like heating and food after you've paid rent, your local council have a duty to help you.",
      tip1: `If you are claiming Universal Credit or housing benefit but you are not receiving enough to cover your housing costs you may be able to claim 'Discretionary Housing Payments' from your local council.`,
      resources: [
        {
          type: 'EXTERNAL',
          label: 'Find local council',
          url: 'https://www.gov.uk/find-local-council',
        },
      ],
    },
  });
  const payingForHousingPrivateTenantTopic5 = await createTopics({
    sectionId: payingForHousingPrivateTenant.id,
    position: 5,
    content: {
      title: 'Seek independent housing advice',
      content:
        'There are many organisations offering free advice to tenants who are worried about paying rent. Advice is usually given over the phone, and in some cases face-to- face.',
      tip1: `**Tip! Remember to let your landlord know that you're seeking advice, so that they're aware you trying to resolve your money issues.**`,
      resources: [
        {
          type: 'EXTERNAL',
          label: 'Find out where to get the right advice',
          url: 'https://england.shelter.org.uk/get_help',
        },
        {
          type: 'EXTERNAL',
          label: 'Citizens Advice',
          url: 'https://www.citizensadvice.org.uk/',
        },
      ],
    },
  });

  const payingForHousingSocialTenantTopic1 = await createTopics({
    sectionId: payingForHousingSocialTenant.id,
    position: 1,
    content: {
      title: 'Talk to your landlord',
      content:
        "If you're struggling to pay your rent and/or mortgage speak to your landlord and  mortgage provider as soon as possible, even if you haven't missed a payment yet. There are often many things they can do to help you.",
      tip1: `**Tip! Read letters from your landlord and speak to them on the phone if they call you. They'll look for ways to offer you help and support, and advise you about the steps you can take. They'll be able to refer you to specialist advice if needed.**`,
      tip2: `**Tip! In order to help, a landlord will often want to know how much money you have available to spend each month. A budget tool can help you work this out.**`,
      resources: [
        {
          type: 'CUSTOM',
          key: 'BUDGET_PLANNER',
        },
      ],
    },
  });
  const payingForHousingSocialTenantTopic2 = await createTopics({
    sectionId: payingForHousingSocialTenant.id,
    position: 2,
    content: {
      title: "Make sure you're claiming all the benefits you're entitled to",
      content:
        "Many people aren't claiming all the financial support they're entitled to. You may be able to get support with your rent, council tax, and lots of other things. That will then free up money for you to spend on rent. If you already receive benefits you may be entitled to more , and you may be eligible for help even if you're in full time work.",
      tip1: `**Tip! You can check if you're likely to receive support by using a benefit calculator. It's free to use and usually takes 10-20 minutes. You'll need to input basic information about your income and living situation.**`,
      resources: [
        {
          type: 'CUSTOM',
          key: 'BENEFIT_CALCULATOR',
        },
      ],
    },
  });
  const payingForHousingSocialTenantTopic3 = await createTopics({
    sectionId: payingForHousingSocialTenant.id,
    position: 3,
    content: {
      title: 'Get help with debts',
      content:
        "If you've already missed a payment, a debt advisor can help you plan how to manage your money. Debt advice is free, and can be provded over the phone, face-to-face, or through online self-help tools.",
      tip1: `**Tip! You can prepare for debt advice by gathering together all the information you have about money coming in and money going out. But don't delay seeking help - even if you don't have everything to hand the sooner you get help the better.**`,
      tip2: `**Tip! If you're working with a debt advisor, you may be able to access 'Breathing Space' which pauses debt collection and evictions for up to 60 days to give you time to find the right solution.**`,
      resources: [
        {
          type: 'CUSTOM',
          key: 'DEBT_ADVICE',
        },
      ],
    },
  });
  const payingForHousingSocialTenantTopic4 = await createTopics({
    sectionId: payingForHousingSocialTenant.id,
    position: 4,
    content: {
      title: 'Discretionary Housing Payments',
      content:
        "If you're claiming Universal Credit or housing benefit and it's not enough to cover your housing costs, you may be able to claim 'Discretionary Housing Payments' from your local council. ",
      tip1: `**Tip! You can contact your local council to find out more. Your landlord can support you with your application if you need help.**`,
      resources: [
        {
          type: 'EXTERNAL',
          label: 'Find local council',
          url: 'https://www.gov.uk/find-local-council',
        },
      ],
    },
  });
  const payingForHousingSocialTenantTopic5 = await createTopics({
    sectionId: payingForHousingSocialTenant.id,
    position: 5,
    content: {
      title: 'Seek independent housing advice',
      content:
        'Whilst your landlord can refer you to support you may prefer to contact a free specialist advice service directly.',
      tip1: `**Tip! Remember to let your landlord know that you're seeking advice, so that they're aware you trying to resolve your money issues.**`,
      resources: [
        {
          type: 'EXTERNAL',
          label: 'Find out where to get the right advice',
          url: 'https://england.shelter.org.uk/get_help',
        },
        {
          type: 'EXTERNAL',
          label: 'Citizens Advice',
          url: 'https://www.citizensadvice.org.uk/',
        },
      ],
    },
  });

  const payingForHousingHomeownerTopic1 = await createTopics({
    sectionId: payingForHousingHomeowner.id,
    position: 1,
    content: {
      title: 'Talk to your mortgage provider',
      content:
        "If you're struggling to pay your rent and/or mortgage speak to your landlord and  mortgage provider as soon as possible, even if you haven't missed a payment yet. There are often many things they can do to help you.",
      tip1: `**Tip! Read letters from your mortgage provider and speak to them on the phone if they call you. They'll look for ways to offer you help and support, and advise you about the steps you can take.**`,
      tip2: `**Tip! In order to help, your mortgage provider will often want to know how much money you have available to spend each month. A budget tool can help you work this out.**`,
      resources: [
        {
          type: 'CUSTOM',
          key: 'BUDGET_PLANNER',
        },
      ],
    },
  });
  const payingForHousingHomeownerTopic2 = await createTopics({
    sectionId: payingForHousingHomeowner.id,
    position: 2,
    content: {
      title: "Make sure you're claiming all the benefits you're entitled to",
      content:
        "Many people aren't claiming all the financial support they're entitled to.  If you already receive benefits, you may be entitled to more, and you may be eligible for help even if you're working full time. You may be able to get loan support with your mortgage interest payments, or access to other types of benefits which will free up money for you to spend on rent.",
      tip1: `**Tip!**

- You can check if you're likely to receive additional support by using a benefit calculator. 
- It is free to use and usually takes 10-20 minutes.
- You will need to input basic information about your income and living situation.`,
      resources: [
        {
          type: 'CUSTOM',
          key: 'BENEFIT_CALCULATOR',
        },
      ],
    },
  });
  const payingForHousingHomeownerTopic3 = await createTopics({
    sectionId: payingForHousingHomeowner.id,
    position: 3,
    content: {
      title: 'Get help with debts',
      content:
        " If you've already missed a payment, a debt advisor can help you plan how to manage your money. Debt advice is free, and can be provded over the phone, face-to-face, or through online self-help tools.",
      tip1: `**Tip! You can prepare for debt advice by gathering together all the information you have about money coming in and money going out. But don't delay seeking help - even if you don't have everything to hand the sooner you get help the better.**`,
      tip2: `**Tip! If you're working with a debt advisor, you may be able to access 'Breathing Space' which pauses debt collection and evictions for up to 60 days to give you time to find the right solution.**`,
      resources: [
        {
          type: 'CUSTOM',
          key: 'DEBT_ADVICE',
        },
      ],
    },
  });

  const payingForHousingHomeownerTopic4 = await createTopics({
    sectionId: payingForHousingHomeowner.id,
    position: 4,
    content: {
      title: 'Seek independent housing advice',
      content:
        'Whilst your mortgage lender can refer you to support you may prefer to contact a free specialist advice service directly.',
      tip1: `**Tip! Remember to let your mortgage lender know you're seeking advice, so that they are aware you trying to resolve your money issues.**`,
      resources: [
        {
          type: 'EXTERNAL',
          label: 'Find out where to get the right advice',
          url: 'https://england.shelter.org.uk/get_help',
        },
        {
          type: 'EXTERNAL',
          label: 'Citizens Advice',
          url: 'https://www.citizensadvice.org.uk/',
        },
      ],
    },
  });

  const payingForHousingSharedOwnerTopic1 = await createTopics({
    sectionId: payingForHousingSharedOwner.id,
    position: 1,
    content: {
      title: 'Talk to your landlord and mortgage provider',
      content:
        "If you're struggling to pay your rent and/or mortgage speak to your landlord and  mortgage provider as soon as possible, even if you haven't missed a payment yet. There are often many things they can do to help you.",
      tip1: `**Tip! Read letters from your landlord and mortgage provider, and speak to them on the phone if they call you. They'll look for ways to offer you help and support, and advise you about the steps you can take.**`,
      tip2: `**Tip! In order to help, your landlord and mortgage provider will often want to know how much money you have available to spend each month. A budget tool can help you work this out.**`,
      resources: [
        {
          type: 'CUSTOM',
          key: 'BUDGET_PLANNER',
        },
      ],
    },
  });
  const payingForHousingSharedOwnerTopic2 = await createTopics({
    sectionId: payingForHousingSharedOwner.id,
    position: 2,
    content: {
      title: "Make sure you're claiming all the benefits you're entitled to",
      content:
        "Many people aren't claiming all the financial support they're entitled to.  If you already receive benefits, you may be entitled to more, and you may be eligible for help even if you're working full time. You may be able to get loan support with your mortgage interest payments, or access other types of benefits which will free up money for you to spend on rent and mortgage payments.",
      tip1: `**Tip!**

- You can check if you're likely to receive additional support by using a benefit calculator. 
- It is free to use and usually takes 10-20 minutes.
- You will need to input basic information about your income and living situation.`,
      tip2: `**Tip! If you're claiming  Universal Credit (UC), housing costs make an entry in your UC journal using the heading ‘payments’. Include any mortgage, rent and service charge amounts you pay separately, and advise if these are charged monthly or weekly. The UC claim form does not ask for this information and housing cost won't be paid unless you provide it.**`,
      resources: [
        {
          type: 'CUSTOM',
          key: 'BENEFIT_CALCULATOR',
        },
      ],
    },
  });
  const payingForHousingSharedOwnerTopic3 = await createTopics({
    sectionId: payingForHousingSharedOwner.id,
    position: 3,
    content: {
      title: 'Get help with debts',
      content:
        "If you've already missed a payment, a debt advisor can help you plan how to manage your money. Debt advice is free, and can be provided over the phone, face-to-face, or through online self-help tools.",
      tip1: `**Tip! You can prepare for debt advice by gathering together all the information you have about money coming in and money going out. But don't delay seeking help - even if you don't have everything to hand the sooner you get help the better.**`,
      tip2: `**Tip! If you're working with a debt advisor, you may be able to access 'Breathing Space' which pauses debt collection and evictions for up to 60 days to give you time to find the right solution.**`,
      resources: [
        {
          type: 'CUSTOM',
          key: 'DEBT_ADVICE',
        },
      ],
    },
  });

  const payingForHousingSharedOwnerTopic4 = await createTopics({
    sectionId: payingForHousingSharedOwner.id,
    position: 4,
    content: {
      title: 'Seek independent housing advice',
      content:
        'Whilst your mortgage lender or landlord can refer you to support you may prefer to contact a free specialist advice service directly.',
      tip1: `**Tip! Remember to let your mortgage lender and landlord know you are seeking advice, so that they're aware you trying to resolve your money issues.**`,
      resources: [
        {
          type: 'EXTERNAL',
          label: 'Find out where to get the right advice',
          url: 'https://england.shelter.org.uk/get_help',
        },
        {
          type: 'EXTERNAL',
          label: 'Citizens Advice',
          url: 'https://www.citizensadvice.org.uk/',
        },
      ],
    },
  });

  const payingMyBillsTopic1 = await createTopics({
    sectionId: payingMyBills.id,
    position: 1,
    content: {
      title: 'Talk to your utility or service provider',
      content:
        ' Talk to your provider as soon as possible, even before you have missed a payment, as there are often many things they can do to help you. Set aside some time for this phone call, a lot of customers are in the same situation so their operators might be very busy.',
      tip1: `**Tip! Some utility providers have grants that customers who are struggling to pay their bills can access. Ask about this when you speak to them.**`,
      tip2: `**Tip! It is important to stay warm; turning your heating off can be bad for your health, and and cause problems such as mould in your home. Talk to your energy provider about ways to minimise use, whilst keeping the heating on when needed.**`,
      resources: [
        {
          type: 'CUSTOM',
          key: 'BUDGET_PLANNER',
        },
      ],
    },
  });
  const payingMyBillsTopic2 = await createTopics({
    sectionId: payingMyBills.id,
    position: 2,
    content: {
      title: "Check if you're eligible for a grant",
      content:
        "A grant is money that you don't have to pay back.  Many charitable organisations provide grants to people facing hardship. To apply for a grant you will usually have to provide some information about yourself and your situation.",
      tip1: `**Tip! There are many different grants out there, the best way to find out if you're eligible is to use a free grant search tool. Also remember to ask your utility provider if they have grants available.**`,
      tip2: `**Tip! Receiving a charitable grant will in most cases not affect your benefit entitlement. If you're offered a grant you should seek advice about your situation.**`,
      resources: [
        {
          type: 'CUSTOM',
          key: 'GRANT_SEARCH',
        },
      ],
    },
  });
  const payingMyBillsTopic3 = await createTopics({
    sectionId: payingMyBills.id,
    position: 3,
    content: {
      title: "Make sure you're claiming all the benefits you're entitled to",
      content:
        "Many people aren't claiming all the financial support they're entitled to. You may be able to get support with your rent, council tax, and lots of other things. That will then free up money for you to spend on rent. If you already receive benefits you may be entitled to more , and you may be eligible for help even if you're in full time work.",
      tip1: `**Tip! You can check if you're likely to receive support by using a benefit calculator. It's free to use and usually takes 10-20 minutes. You will need to input basic information about your income and living situation.**`,
      tip2: `**Tip! If you're receiving certain benefits, like Universal Credit, you may be able to access additional financial support from your local council. Contact your local Council to ask about Household Support Fund or local welfare assistance. **`,
      resources: [
        {
          type: 'CUSTOM',
          key: 'BENEFIT_CALCULATOR',
        },
      ],
    },
  });
  const payingMyBillsTopic4 = await createTopics({
    sectionId: payingMyBills.id,
    position: 4,
    content: {
      title: "Check if you're getting the best deal",
      content:
        "Even though you won't be able to access cheaper energy (gas and electricity) whilst the energy price cap is in place, you may be able to save money on other contracts, like TV packages, mobile phones and internet.  Try to negotiate a lower price with your current supplier, or switch to a more affordable provider.",
      tip1: `**Tip! Using a price comparison website is a good way to quickly check if you can save money by switching provider.**`,
      tip2: `**Tip! If you're receiving certain benefits, you may be eligible for a 'social tariff' for your water, phone and internet provision. It's worth checking with your provider, but it doesn't always work out cheaper than other deals.**`,
      resources: [
        {
          type: 'EXTERNAL',
          label: 'USwitch',
          url: 'https://www.uswitch.com/',
        },
      ],
    },
  });
  const payingMyBillsTopic5 = await createTopics({
    sectionId: payingMyBills.id,
    position: 5,
    content: {
      title: 'Get help with debts',
      content:
        'A debt advisor can help you plan how to prioritise and deal with any debts you have. Debt advice is free, and can be provided over the phone, face-to-face, or through online self-help tools.',
      tip1: `**Tip! You can prepare for debt advice by gathering together all the information you have about money coming in and money going out. But don't delay seeking help - even if you don't have everything to hand the sooner you get help the better.**`,
      tip2: `**Tip! If you're working with a debt advisor, you may be able to access 'Breathing Space' which pauses debt collection and evictions for up to 60 days to give you time to find the right solution.**`,
      resources: [
        {
          type: 'CUSTOM',
          key: 'DEBT_ADVICE',
        },
      ],
    },
  });

  const payingForEssentialsTopic1 = await createTopics({
    sectionId: payingForEssentials.id,
    position: 1,
    content: {
      title: 'Find support with food costs',
      content:
        "In many areas you can find community supermarkets, community cafe's, community fridges or community pantries. These are places you may be able to access low cost or free food. Try an internet search for any of these services in your local area, or ask your local council. ",
      tip1: `**Tip! If you're pregnant or have a child under 4, and you are receiving certain benefits , you may be eligible for a Health Start Card, which entitles you to help with purchasing milk, fruit and vegetables. If you're in receipt of benefits, any school age children may be eligible for free school meals.**`,
      tip2: `**Tip!**

- If you have no money for food you may be able to get help from a food bank.
- To use a food bank you'll need a referral from an organisation supporting you, like a school, a charity, or GP.
- You can also contact your nearest Citizen Advice, or your local council.`,
      resources: [
        {
          type: 'EXTERNAL',
          label: 'Trussell Trust Foodbanks',
          url: 'https://www.trusselltrust.org/get-help/',
        },
        {
          type: 'EXTERNAL',
          label: 'Your Local Pantry',
          url: 'https://www.yourlocalpantry.co.uk/',
        },
        {
          type: 'EXTERNAL',
          label: 'NHS Health Start',
          url: 'https://services.nhsbsa.nhs.uk/apply-for-healthy-start/',
        },
      ],
    },
  });
  const payingForEssentialsTopic2 = await createTopics({
    sectionId: payingForEssentials.id,
    position: 2,
    content: {
      title: 'Get help from your local authority or DWP',
      content: `If you're receiving certain benefits, like Universal Credit, you may be able to access additional financial support from your local council. 
        Contact your local Council to ask about Household Support Fund or local welfare assistance.`,
      tip1: `**Tip! If you're claiming Universal Credit, you may be able to receive an advance payment to cover essential expenses. This is an interest free loan which is paid back from your future Universal Credit payments. Speak to a DWP advisor to apply.**`,
      resources: [
        {
          type: 'EXTERNAL',
          label: 'Living on a squeezed income',
          url: 'https://www.moneyhelper.org.uk/en/money-troubles/way-forward/squeezed-income',
        },
      ],
    },
  });
  const payingForEssentialsTopic3 = await createTopics({
    sectionId: payingForEssentials.id,
    position: 3,
    content: {
      title: "Check if you're eligible for a grant",
      content: `A grant is money that you don't have to pay back.  Many charitable organisations provide grants to people facing hardship. To apply for a grant you will usually have to provide some information about yourself and your situation.`,
      tip1: `**Tip! There are many different grants out there, the best way to find out if you're eligible is to use a free grant search tool.**`,
      tip2: `**Tip! Receiving a charitable grant will in most cases not affect your benefit entitlement. If you're offered a grant, you should seek advice about your situation.**`,
      resources: [
        {
          type: 'CUSTOM',
          key: 'GRANT_SEARCH',
        },
      ],
    },
  });
  const payingForEssentialsTopic4 = await createTopics({
    sectionId: payingForEssentials.id,
    position: 4,
    content: {
      title: 'Get help with health related costs',
      content:
        'If you have a low income, and less than £16,000 worth of savings and other assets, you may be able to get help with dental and medical costs through the NHS Low Income Scheme. People in receipt of some benefits qualify automatically.',
      tip1: `**Tip! Because the assessment is slightly different you may be eligible for help with health costs even if your income is too high for other types of benefits.**`,
      tip2: `**Tip! You can request a refund for health related costs from the last 3 months at the same time as you apply to the Low Income Scheme.**`,
      resources: [
        {
          type: 'EXTERNAL',
          label: 'NHS Low Income Scheme',
          url: 'https://www.nhs.uk/nhs-services/help-with-health-costs/nhs-low-income-scheme-lis/',
        },
      ],
    },
  });
  const payingForEssentialsTopic5 = await createTopics({
    sectionId: payingForEssentials.id,
    position: 5,
    content: {
      title: 'Find support with transport costs',
      content:
        "If you travel regularly by train you may be able to access discounted fares by using a railcard. You may be eligible for a Jobcentre Plus Travel Discount Card if you're on Universal Credit which can save 50% on travel.",
      tip1: `**Tip! If you're of state pension age or have a disability, you may be eligible for free bus travel. Families on low income may also be entitled to help with transport to school. Contact your local authority for more information.**`,
      resources: [
        {
          type: 'EXTERNAL',
          label: 'Railcards',
          url: 'https://www.railcard.co.uk/',
        },
        {
          type: 'EXTERNAL',
          label: 'Find Local Council',
          url: 'https://www.gov.uk/find-local-council',
        },
      ],
    },
  });

  const dealingWithDebtsTopic1 = await createTopics({
    sectionId: dealingWithDebts.id,
    position: 1,
    content: {
      title: 'Talk to a debt advisor',
      content:
        'A debt advisor can help you plan how to prioritise and deal with any debts you have. Debt advice is free, and can be provided over the phone, face-to-face, or through online self-help tools.',
      tip1: `**Tip! You can prepare for debt advice by gathering together all the information you have about money coming in and money going out. But don't delay seeking help - even if you don't have everything to hand the sooner you get help the better.**`,
      tip2: `**Tip! If you're working with a debt advisor, you may be able to access 'Breathing Space' which pauses debt collection and evictions for up to 60 days to give you time to find the right solution.**`,
      resources: [
        {
          type: 'CUSTOM',
          key: 'DEBT_ADVICE',
        },
      ],
    },
  });
  const dealingWithDebtsTopic2 = await createTopics({
    sectionId: dealingWithDebts.id,
    position: 2,
    content: {
      title: 'Do a budget',
      content: `Doing a budget will help you work out how much money you have available to pay off any debts.  There are many budgeting tools available to help you do this, however a debt advisor or a money advisor will be able to help you if you find it difficult to do on your own.`,
      tip1: `**Tip! When doing your budget be as honest and accurate as possible. Put down what you actually spend, as opposed to what you think you should or could spend. By creating an accurate budget you get the best possible starting point for talking to your creditors, or receiving money or debt advice.**`,
      tip2: `**Tip! Most budgets are done for a calendar month; keep this in mind when adding your income and outgoings. For example, to work out the monthly sum for something you pay weekly you will need to multiply the sum by 52 (weeks), then divide by 12 (months).  A budget tool will do this for you automatically.**`,
      resources: [
        {
          type: 'CUSTOM',
          key: 'BUDGET_PLANNER',
        },
      ],
    },
  });
  const dealingWithDebtsTopic3 = await createTopics({
    sectionId: dealingWithDebts.id,
    position: 3,
    content: {
      title: 'Prioritise your bills',
      content: `Some bills are more important than others: Housing costs, energy bills and council tax are examples of priority bills. It's important to deal with these before other bills, even if your other creditors are asking for payment first.`,
      tip1: `**Tip! The Bill Prioritiser is an excellent tool that can help you prioritise all your bills if you're unsure which ones you should deal with first. A debt advisor will also be able to help you prioritise.**`,
      tip2: `**Tip! If you're working with a debt advisor, you may be able to access 'Breathing Space' which pauses debt collection and evictions for up to 60 days to give you time to find the right solution.**`,
      resources: [
        {
          type: 'EXTERNAL',
          label: 'Bill Prioritiser',
          url: 'https://www.moneyhelper.org.uk/en/money-troubles/way-forward/bill-prioritiser',
        },
      ],
    },
  });
  const dealingWithDebtsTopic4 = await createTopics({
    sectionId: dealingWithDebts.id,
    position: 4,
    content: {
      title: 'Talk to your creditors',
      content:
        "Speak to your creditors soon as possible, even before you have missed a payment, as there are often many things they can do to help you. It's much easier to provide help and support early on, but it's never too late to speak to them.",
      tip1: `**Tip! If you've received a letter from your creditor saying that they'll take action to recover a debt, please don't let this stop you from contacting them. Their priority when you get in touch is to help you find a solution to deal with the debt.**`,
      tip2: `**Tip! Resist the temptation to throw creditor letters away. Keep them in a safe place as they may contain important information that you need to refer to later.  If you struggle to open or understand letters from your creditors, please speak to a debt advisor; they can often help you go through it all.**`,
      resources: [
        {
          type: 'EXTERNAL',
          label: 'Talking to your creditors',
          url: 'https://www.moneyhelper.org.uk/en/money-troubles/way-forward/talking-to-your-creditor',
        },
      ],
    },
  });
  const dealingWithDebtsTopic5 = await createTopics({
    sectionId: dealingWithDebts.id,
    position: 5,
    content: {
      title: 'Work out what you owe',
      content: `A good starting point is to gather together all the information you have about any money you owe. Write down who you owe money to, how much you owe, and when you first missed a payment. 
        This information is good to have to hand when you're talking to any creditors, and for talking to a debt advisor, who can give you free advice about how to deal with your debts.`,
      tip1: `**Tip! Make sure you include all debts. Some examples include:**

- Rent or mortgage arrears
- Credit card or loan debts
- Council tax arrears and unpaid fines or taxes
- Energy or water bills 
- Money borrowed from family or friends`,
      tip2: `**Tip! By taking this first important step, you're on your way to finding a solution to dealing with your debts. However if you're unable to do this do this, please don't worry. Speak to a debt advisor, they may be able to help you collate this information in other ways.**`,
      resources: [
        {
          type: 'EXTERNAL',
          label: 'Debt Advice Locator',
          url: 'https://www.moneyhelper.org.uk/en/money-troubles/dealing-with-debt/help-if-youre-struggling-with-debt',
        },
      ],
    },
  });

  const maximisingYourIncomeTopic1 = await createTopics({
    sectionId: maximisingYourIncome.id,
    position: 1,
    content: {
      title: "Make sure you're claiming all the benefits you're entitled to",
      content: `Many people aren't claiming all the financial support they're entitled to. If you already receive benefits you may be entitled to more , and you may be eligible for help even if you're in full time work.`,
      tip1: `**Tip!**

- You can check if you're likely to receive additional support by using a benefit calculator. 
- It is free to use and usually takes 10-20 minutes.
- You will need to input basic information about your income and living situation.`,
      tip2: `**Tip! Make sure you review your budget, and check again if you're eligible for benefits, if your circumstances change. For example if you change jobs, your household change, or if you move house.**`,
      resources: [
        {
          type: 'CUSTOM',
          key: 'BENEFIT_CALCULATOR',
        },
      ],
    },
  });
  const maximisingYourIncomeTopic2 = await createTopics({
    sectionId: maximisingYourIncome.id,
    position: 2,
    content: {
      title: 'Help with finding a new or different job',
      content: `Many employers have vacancies at the moment, and there's a lot of free support you can access if you're looking for your first job, want to change your career, or if you want to work more hours. You can get support with writing or updating your CV, completing a job application, or even practising your interview skills.`,
      tip1: `**Tip! Most working households are entitled to support with childcare costs. A quick way to find out what support you are entitled to is the use the [HMRC Childcare Calculator](https://www.tax.service.gov.uk/childcare-calc) **`,
      resources: [
        {
          type: 'CUSTOM',
          key: 'EMPLOYMENT_SERVICES',
        },
      ],
    },
  });
  const maximisingYourIncomeTopic3 = await createTopics({
    sectionId: maximisingYourIncome.id,
    position: 3,
    content: {
      title: 'Review subscriptions and direct debits',
      content: `It's easy to forget payments that are automatically being deducted from your bank. Regularly review any subscriptions, memberships and direct debits that you're paying. Make sure that you're only paying for services you use. Also check if you can access discounts, if several people in your household are paying for the same service.`,
      tip1: `**Tip! Using a price comparison website is a good way to quickly check if you can save money by switching provider of services such as internet, mobile phones and cable TV.**`,
      resources: [
        {
          type: 'EXTERNAL',
          label: 'USw',
          url: 'https://www.uswitch.com/',
        },
      ],
    },
  });
  const maximisingYourIncomeTopic4 = await createTopics({
    sectionId: maximisingYourIncome.id,
    position: 4,
    content: {
      title: 'Save money or boost income',
      content:
        'Whilst not an option for many people, there are ways to bring in extra money on top of what you earn, or receive in benefits, for example by selling unwanted items or renting out a spare room. There are also ways to access lower cost or free services that you would normally pay for.',
      tip1: `**Tip! Your local library is often a great resource for finding out about services and activities that you can access at low or no cost in your local area. Libraries usually also provide free internet access and can provide help with finding information on line. **`,
      tip2: `**Tip!**

- Repairing and mending broken and worn items, and recycling or selling unwanted items are great ways of saving both money and the environment.
- There are  community organisations that can help you mend and repair broken furniture, clothes or electrical items, or pass on unwanted items to someone who need them.`,
      resources: [
        {
          type: 'EXTERNAL',
          label: 'Money Saving Expert tips on boosting income',
          url: 'https://www.moneysavingexpert.com/family/boost-your-income/',
        },
        {
          type: 'EXTERNAL',
          label: 'Repair Cafe',
          url: 'https://www.repaircafe.org/',
        },
        {
          type: 'EXTERNAL',
          label: 'Freecycle',
          url: 'https://www.freecycle.org/find-towns',
        },
      ],
    },
  });
  const maximisingYourIncomeTopic5 = await createTopics({
    sectionId: maximisingYourIncome.id,
    position: 5,
    content: {
      title: "Check if you're eligible for a grant",
      content: `A grant is money that you don't have to pay back.  Many charitable organisations provide grants to people facing hardship. To apply for a grant you will usually have to provide some information about yourself and your situation.`,
      tip1: `**Tip! There are many different grants out there, the best way to find out if you're eligible is to use a free grant search tool.**`,
      tip2: `**Tip! Receiving a charitable grant will in most cases not affect your benefit entitlement. If you're offered a grant you should seek advice about your situation.**`,
      resources: [
        {
          type: 'CUSTOM',
          key: 'GRANT_SEARCH',
        },
      ],
    },
  });

  return {
    payingForHousingPrivateTenantTopic1,
    payingForHousingPrivateTenantTopic2,
    payingForHousingPrivateTenantTopic3,
    payingForHousingPrivateTenantTopic4,
    payingForHousingPrivateTenantTopic5,
    payingForHousingSocialTenantTopic1,
    payingForHousingSocialTenantTopic2,
    payingForHousingSocialTenantTopic3,
    payingForHousingSocialTenantTopic4,
    payingForHousingSocialTenantTopic5,
    payingForHousingHomeownerTopic1,
    payingForHousingHomeownerTopic2,
    payingForHousingHomeownerTopic3,
    payingForHousingHomeownerTopic4,
    payingForHousingSharedOwnerTopic1,
    payingForHousingSharedOwnerTopic2,
    payingForHousingSharedOwnerTopic3,
    payingForHousingSharedOwnerTopic4,
    payingMyBillsTopic1,
    payingMyBillsTopic2,
    payingMyBillsTopic3,
    payingMyBillsTopic4,
    payingMyBillsTopic5,
    payingForEssentialsTopic1,
    payingForEssentialsTopic2,
    payingForEssentialsTopic3,
    payingForEssentialsTopic4,
    payingForEssentialsTopic5,
    dealingWithDebtsTopic1,
    dealingWithDebtsTopic2,
    dealingWithDebtsTopic3,
    dealingWithDebtsTopic4,
    dealingWithDebtsTopic5,
    maximisingYourIncomeTopic1,
    maximisingYourIncomeTopic2,
    maximisingYourIncomeTopic3,
    maximisingYourIncomeTopic4,
    maximisingYourIncomeTopic5,
  };
};

export default addTopics;
