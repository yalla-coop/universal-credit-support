import { query } from '../connect';
import * as T from '../../constants';

const createSteps = async ({
  stage,
  stepOrder,
  title,
  description,
  pageTitle,
  pageDescription,
  howLongDoesItTake,
  WhereDoYouNeedToGo,
  thingsYouWillNeed,
  whatYouWillNeedToKnow,
  topTip,
  otherTips,
  isOptional,
}) => {
  const sql = `INSERT INTO steps (
   stage, 
   step_order,
   title, 
   description, 
   page_title,
   page_description,
   how_long_does_it_take, 
   where_do_you_need_to_go, 
   things_you_will_need, 
   what_you_will_need_to_know, 
   top_tip, 
   other_tips,
   is_optional
  ) VALUES (
    $1,
    $2,
    $3,
    $4,
    $5,
    $6,
    $7,
    $8,
    $9,
    $10,
    $11,
    $12,
    $13
  ) RETURNING *`;
  const res = await query(sql, [
    stage,
    stepOrder,
    title,
    description,
    pageTitle,
    pageDescription,
    howLongDoesItTake,
    WhereDoYouNeedToGo,
    thingsYouWillNeed,
    whatYouWillNeedToKnow,
    topTip,
    otherTips,
    isOptional,
  ]);
  return res.rows[0];
};

const addStepContent = async () => {
  const eligibilityContent = {
    stage: T.stageTypes.BEFORE_CLAIMING,
    stepOrder: 1,
    title: 'Wait! Should I apply?',
    description: `Let's find out with a quick and easy benefit calculator`,
    pageTitle: `Should you claim?`,
    pageDescription: `Using the benefit calculator enables you to find out an estimate of how much Universal Credit you may be entitled to.`,
    howLongDoesItTake: { timeRangeText: `15 to 25 minutes` },
    whereDoYouNeedToGo: {
      link:
        'https://www.entitledto.co.uk/benefits-calculator/Intro/Home?cid=0af743fb-414d-4559-a0c9-b88d26a88671',
      type: T.linkTypes.LINK,
      title: `Our Benefit Calculator`,
    },
    thingsYouWillNeed: [],
    whatYouWillNeedToKnow: [
      {
        title: `Income details`,
        description: ``,
        thisCanInclude: [
          `Salaries from an employer or self-employment`,
          `Other Benefits you and/or your partner already receive`,
          `Private pensions`,
        ],
        tips: [`Benefit income and salaries can be found on P60s/P45s`],
      },
      {
        title: `Details of any capital, savings and investments`,
        description: ``,
        thisCanInclude: [],
        tips: [
          `This includes ALL money you hold anywhere, including in current bank accounts, ISAs and property you own that you don’t live in`,
        ],
      },
      {
        title: `Housing costs`,
        description: `You can get this from your landlord or mortgage provider.`,
        thisCanInclude: [
          `How much rent you are charged and how often`,
          `How much service charges you are charged and how often`,
          `Mortgage payments`,
          `Ground rent`,
        ],
        tips: [],
      },
      {
        title: `Childcare costs`,
        description: ``,
        thisCanInclude: [],
        tips: [],
      },
      {
        title: `Income details of any other adults living in the property that are not lodgers e.g. grown up children, elderly parents`,
        description: ``,
        thisCanInclude: [],
        tips: [],
      },
    ],
    topTip: `The more accurate the information you give the more accurate the estimate will be.`,
    otherTips: [
      `Keep hold of any documents you dig out to help you work out the bits you need to know for the calculator. These are often needed in the application so having them stored can be helpful to make things quicker!`,
    ],
    isOptional: true,
  };

  // CLAIMING
  const createAccountContent = {
    stage: T.stageTypes.CLAIMING,
    stepOrder: 2,
    title: `Create account`,
    description: `Create an account on the Government website if you haven’t already. You’ll want to do this as soon as possible!`,
    pageTitle: ``,
    pageDescription: ``,
    howLongDoesItTake: { timeRangeText: `5 to 10 minutes` },
    WhereDoYouNeedToGo: {
      link: 'https://www.universal-credit.service.gov.uk',
      type: T.linkTypes.LINK,
      title: `Create account`,
    },
    thingsYouWillNeed: [
      {
        title: `Email address`,
        description: `This should be the bank account that your Universal Credit will be paid into. You can set up a free bank account in most high street banks or an online bank if you don’t already have one.`,
        thisCanInclude: [],
        tips: [],
      },
      { title: `Bank account`, description: ``, thisCanInclude: [], tips: [] },
      {
        title: `Access to your mobile phone (if you have one)`,
        description: ``,
        thisCanInclude: [],
        tips: [],
      },
      {
        title: `Your partner's Universal Credit linking code (if you have a partner and they have one)`,
        description: ``,
        thisCanInclude: [],
        tips: [
          `If with a partner BOTH will need to do this separately and then the accounts will need to be ‘LINKED’ via a linking code that will be given on the screen during this process.`,
        ],
      },
    ],
    whatYouWillNeedToKnow: [],
    topTip: '',
    otherTips: [
      `You now have 28 days in which to make and submit the claim. The start date will be from the date the claim is submitted.`,
    ],
  };

  const makeTheClaimContent = {
    stage: T.stageTypes.CLAIMING,
    stepOrder: 3,
    title: `Make the claim`,
    description: `Now it’s time to complete the main part of the application form. Let’s do this!`,
    pageTitle: ``,
    pageDescription: ``,
    howLongDoesItTake: { timeRangeText: `30 to 45 minutes` },
    WhereDoYouNeedToGo: {
      link: 'https://www.universal-credit.service.gov.uk/sign-in',
      type: T.linkTypes.LINK,
      title: `Make the claim`,
    },
    thingsYouWillNeed: [
      {
        title: `Account log in information (that you created in the previous step)`,
        description: ``,
        thisCanInclude: [],
        tips: [
          `Click the checkbox telling them to remember you for 7 days. It'll save you having to receive a code every time you want to log in!`,
        ],
      },
      {
        title: `Access to the mobile phone stored for your account`,
        description: ``,
        thisCanInclude: [],
        tips: [],
      },
      {
        title: `A bank account`,
        description: ``,
        thisCanInclude: [],
        tips: [],
      },
    ],
    whatYouWillNeedToKnow: [
      {
        title: `Details of your home`,
        description: `e.g. the information on your tenancy agreement`,
        thisCanInclude: [
          `Address`,
          `Landlord details (e.g. name, possibly their contact details)`,
          `Number of bedrooms`,
        ],
        tips: [],
      },
      {
        title: `Housing costs`,
        description: `You can get this from your landlord or mortgage provider.`,
        thisCanInclude: [
          `How much rent you are charged and how often`,
          `How much service charges you are charged and how often`,
          `Mortgage payments`,
          `Ground rent`,
        ],
        tips: [
          `If you are charged weekly but pay monthly, put down your weekly charge. Or if you have no charge then put it in as £0.00.`,
          `Shared owner with a part-rent? Ensure that you write a note in your journal after you make a claim the amount of rent and service charges you are charged and how often.`,
        ],
      },
      {
        title: `Income details`,
        description: ``,
        thisCanInclude: [
          `Salaries from an employer or self-employment`,
          `Other Benefits you and/or your partner receive already receive`,
          `Private pensions`,
          `Any other regular income`,
        ],
        tips: [
          `You do not need to include child benefit or child maintenance as income`,
          `Benefit income can be found on Award letters, P60s/P45s issued by the DWP. Wage details can be found on wage slips/P60s and P45s and the Gross and Net income along the necessary deductions`,
        ],
      },
      {
        title: `Details of any capital, savings and investments`,
        description: ``,
        thisCanInclude: [],
        tips: [
          `This includes ALL money you hold anywhere, including in current bank accounts, ISAs and property you own that you don’t live in`,
        ],
      },
      {
        title: `Details of caring responsibilities for a disabled person (if providing over 35 hours per week)`,
        description: ``,
        thisCanInclude: [`When you first started (can be approximate!)`],
        tips: [],
      },
      {
        title: `Your bank account details where Universal Credit will be paid into`,
        description: ``,
        thisCanInclude: [],
        tips: [],
      },
      {
        title: `Details of any health issues that affect your ability to work`,
        description: ``,
        thisCanInclude: [],
        tips: [],
      },
      {
        title: ``,
        description: ``,
        thisCanInclude: [
          `Dates of sickness`,
          `Medical issues`,
          `Doctor's contact details`,
          `Fit notes`,
        ],
        tips: [
          `Once you've submitted your claim, remember to report your fit note details on your home page and further fit notes you receive. Also mention if you are receiving ESA with the Severe Disability Premium because you might be entitled to more money.`,
        ],
      },
      {
        title: `Make sure your partner does all of this as well on their claim (if you are linking them)`,
        description: ``,
        thisCanInclude: [],
        tips: [],
      },
    ],
    topTip: '',
    otherTips: [
      `You are able to review everything at the end and change anything you like, so always know you can review and edit before hitting submit and you have up to a month after submitting your claim to correct any information that you have entered`,
      `Once completed you will now have access to a journal. If unsure about anything, always just add a note in your journal (generally using payments or work coach is fine!) and remember to check your journal regularly so you don’t miss any deadlines.`,
    ],
  };

  const verifyIdentityContent = {
    stage: T.stageTypes.CLAIMING,
    stepOrder: 4,
    title: `Verify Identity`,
    description: `Claim submitted! Now to be considered, you’ll need to ‘verify’ your identity`,
    pageTitle: ``,
    pageDescription: `Before your claim can be considered, you will need to ‘verify’ your identity. The online system will automatically direct you to Gov UK Verify.`,
    howLongDoesItTake: { timeRangeText: `5 to 15 minutes` },
    WhereDoYouNeedToGo: {
      link: 'https://www.universal-credit.service.gov.uk/sign-in',
      type: T.linkTypes.LINK,
      title: `Gov UK Verify`,
    },
    thingsYouWillNeed: [
      { title: `Passport`, description: ``, thisCanInclude: [], tips: [] },
      {
        title: `Driving Licence`,
        description: ``,
        thisCanInclude: [],
        tips: [],
      },
      {
        title: `Debit or Credit card`,
        description: ``,
        thisCanInclude: [],
        tips: [],
      },
      {
        title: `Benefit letter`,
        description: ``,
        thisCanInclude: [],
        tips: [],
      },
      {
        title: `Proof of address`,
        description: ``,
        thisCanInclude: [],
        tips: [
          `For proofs of address make sure its from within the last 3 months`,
        ],
      },
    ],
    whatYouWillNeedToKnow: [],
    topTip: `Don't worry if you can't do this, you can do it at the interview, but make sure sign back into the UC online account and click the ‘I can’t do this online’ in the 'To-do-list task`,
    otherTips: [
      `If you already have a government gateway account, you can use this to verify your identity instead `,
    ],
  };

  const attendInterviewContent = {
    stage: T.stageTypes.CLAIMING,
    stepOrder: 5,
    title: `Attend Interview`,
    description: `Nearly there! The final step to accessing your Universal Credit is an interview`,
    pageTitle: ``,
    pageDescription: `This might be in person or by phone. Phone the number at the bottom of this page to arrange your interview. If you haven't been able to verify your identity online you might need to have an extra interview just to sort that out first. Remember, you don’t have to attend the interview alone.`,
    howLongDoesItTake: { timeRangeText: `` },
    WhereDoYouNeedToGo: {
      link: '0800 328 5644',
      type: T.linkTypes.PHONE,
      title: `0800 328 5644`,
    },
    thingsYouWillNeed: [
      {
        title: `National Insurance number`,
        description: ``,
        thisCanInclude: [],
        tips: [
          `You can generally find this on wage slips, benefits letters, P60s and P45s`,
        ],
      },
      {
        title: `When arranging an interview, ask them what you need to bring`,
        description: ``,
        thisCanInclude: [
          `Proof of address`,
          `Proof of rent e.g. Tenancy agreement/rent statement`,
          `Proof of ID`,
          `Proof of Nationality or Settled Status`,
          `CV (only if you have one)`,
          `Proof of health issues (e.g. fit notes, consultant letters)`,
        ],
        tips: [],
      },
      {
        title: `Make sure you're ready to tell them about any limitations you have on getting work`,
        description: ``,
        thisCanInclude: [],
        tips: [],
      },
      {
        title: ``,
        description: ``,
        thisCanInclude: [
          `Fit notes from your GP`,
          `Childcare responsibilities`,
          `Caring for a disabled person responsibilities`,
          `Health conditions that limit types of work or distance you can travel`,
        ],
        tips: [
          `If you're currently claiming PIP, make sure to tell them in the journal. Don't worry you won't lose this, it helps prove your limitations on work`,
        ],
      },
    ],
    whatYouWillNeedToKnow: [],
    topTip: `Put on the kettle and enjoy some mindfulness! You can sometimes have to wait a while on the phone, but it's worth it!`,
    otherTips: [
      `Just remember to be honest, don't worry about trying to make out you can do more than you can.`,
      `You will have time to get your documents together. Usually the interview will be a week or so from the point you claim `,
    ],
  };

  // AFTER CLAIMING
  const advanceContent = {
    stage: T.stageTypes.AFTER_CLAIMING,
    stepOrder: 6,
    title: `Want to apply for an advance payment?`,
    description: `Don’t be scared about applying for this if you definitely do need it!`,
    pageTitle: `Apply for an advance payment (optional)`,
    pageDescription: `Don't be scared about applying for this if you definitely do need it! But make sure you go in with your eyes open. Taking an Advance payment is optional and it is a loan and it will be taken from your UC at an amount set by the DWP. Once it is being deducted there is no renegotiation on the rate it is paid back at so it is best to go for the lowest amount needed to get you through to the first UC payment and the longest repayment time`,
    howLongDoesItTake: { timeRangeText: `` },
    WhereDoYouNeedToGo: {
      link: 'https://www.universal-credit.service.gov.uk',
      type: T.linkTypes.LINK,
      title: `Apply for advance`,
    },
    thingsYouWillNeed: [
      {
        title: `Account log in information (created in the Apply step)`,
        description: ``,
        thisCanInclude: [],
        tips: [],
      },
      { title: `Mobile phone`, description: ``, thisCanInclude: [], tips: [] },
    ],
    whatYouWillNeedToKnow: [
      {
        title: `Details of your job centre where you have had your interview and identity checked`,
        description: ``,
        thisCanInclude: [],
        tips: [],
      },
    ],
    topTip: '',
    otherTips: [
      `If your employment has stopped through being made unemployed - or through sickness and you no longer receive statutory sick pay - remember to claim New Style ESA or JSA. We won't overwhelm you with the details but it gives you some useful things like protecting your National Insurance contribution record and any future entitlement (i.e. benefits)
    `,
    ],
  };

  const firstPaymentContent = {
    stage: T.stageTypes.AFTER_CLAIMING,
    stepOrder: 7,
    title: `Getting your first payment`,
    description: `Make sure you have done the things you need to get paid!`,
    pageTitle: ``,
    pageDescription: `First payment is made 1 month and 7 days after you submitted your claim. Make sure you have done the things you need listed below or you won't get paid! Your first payment will include housing costs you will need to pay to your landlord.`,
    howLongDoesItTake: { timeRangeText: `` },
    WhereDoYouNeedToGo: {
      link: 'https://www.universal-credit.service.gov.uk',
      type: T.linkTypes.LINK,
      title: `Check your UC account`,
    },
    thingsYouWillNeed: [
      {
        title: `Account log in information created in the set up account stage - keep these safe and not just autosaved`,
        description: ``,
        thisCanInclude: [
          `Mobile phone you have registered with UC (if using one), or`,
          `Access to your email address that you have registered with UC`,
        ],
        tips: [],
      },
    ],
    whatYouWillNeedToKnow: [
      {
        title: `Completed all your to-do-list tasks`,
        description: ``,
        thisCanInclude: [],
        tips: [],
      },
      {
        title: `Accepted your claimant commitment`,
        description: ``,
        thisCanInclude: [],
        tips: [],
      },
    ],
    topTip: `Any limitation you have told your work coach about, make sure to put it in your journal as well, to keep a record of your conversations.`,
    otherTips: [
      `Keep checking your journal and To-do-list in your UC account so you can answer any more questions that the DWP ask you and take any action they request of you`,
      `As soon as you are awarded Universal Credit don’t forget to claim for Council Tax support by contacting your local council`,
    ],
  };

  const checkEligibility = await createSteps(eligibilityContent);
  const createAccount = await createSteps(createAccountContent);
  const makeTheClaim = await createSteps(makeTheClaimContent);
  const verifyIdentity = await createSteps(verifyIdentityContent);
  const attendInterview = await createSteps(attendInterviewContent);
  const advance = await createSteps(advanceContent);
  const firstPayment = await createSteps(firstPaymentContent);

  return {
    checkEligibility,
    createAccount,
    makeTheClaim,
    verifyIdentity,
    attendInterview,
    advance,
    firstPayment,
  };
};

export default addStepContent;
