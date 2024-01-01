import benchImage from './assets/images/bench-press.webp';
import benchImage2 from './assets/images/luejreww.png';
import dbLateralRaise from './assets/images/Dumbbell-Lateral-Raise.webp';
import dbLateralRaise2 from './assets/images/glffvewc.png';
import planPic from './assets/images/header-1-1.jpg';
import coachPic from './assets/images/images.jfif';

const header = {
  fname: 'فرد',
  lname: 'بی نام',
  avatar: 'avatar.png',
};
export { header };

const exercise = {
  name: 'پرس سینه هالتر',
  mainTargetMuscles: ['سینه', 'دلتای جلو'],
  secondaryTargetMuscles: ['پشت بازو'],
  difficulty: 2,
  aerobic: false, //some kinda checkbox
  mainImage: benchImage,
  secondaryImage: benchImage2,
  strengthStandardsTable: [
    [54, 25],
    [80, 37],
    [100, 47],
    [120, 58],
    [168, 90],
  ],
  howToDescription: `دراز بکشید روی نیمکت، شانه های خود را به هم فشار دهید و به سمت پایین بکشید و کمر خود را کمی خم کنید.
  میله را کمی په تر از عرض شانه خود بگیرید.
  نفس بکشید، نفس خود را نگه دارید و میله را از رک آزاد کنید.
  میله را با کنترل پایین بیاورید تا جایی که به سینه شما برخورد کند و نزدیک قفسه سینه شما باشد.
  میله را تا موقعیت شروع در حالی که نفس خود را بیرون می دهید فشار دهید.
  در موقعیت بالایی نفس دیگری بکشید و برای تکرار تکرار کنید.`,
  description: `استفاده از طراحی کاشی‌محور به اینتل امکان داده است که در پردازنده‌های میتیور لیک از چند نوع فناوری پردازشی استفاده کند. به گفته‌ی تیم آبی، واحد CPU در میتیور لیک مبتنی‌بر لیتوگرافی Intel 4 است که قبلاً «لیتوگرافی ۷ نانومتری اینتل» نام داشت.

  پردازنده‌های نسل ۱۴ اینتل با نام‌گذاری جدید Core Ultra از راه می‌رسند و دیگر خبری از Core i نیست. اینتل می‌گوید پردازنده‌های سری میتیور لیک مصرف انرژی کمتری نسبت‌به نسل ۱۳ دارند و قدرت پردازشی‌شان بیشتر شده است.
  
  بر اساس گفته‌ی اینتل، تراشه‌ی Core Ultra 7 165H درمقایسه‌با AMD Ryzen 7 7840U و Snapdragon 8cx Gen 3 و M3 تا ۱۱ درصد در پردازش‌های چند رشته‌ای بهتر ظاهر می‌شود و درمقایسه‌با Core i7-1370P تا ۲۵ درصد مصرف انرژی کمتر دارد.`,
};
export { exercise };

const exercises = [
  exercise,
  {
    name: 'نشر از جانب دمبل',
    mainTargetMuscles: ['دلتای فوقانی'],
    secondaryTargetMuscles: ['دلتای جلو'],
    difficulty: 1,
    aerobic: false,
    mainImage: dbLateralRaise,
    secondaryImage: dbLateralRaise2,
    strengthStandardsTable: null,
    howToDescription: `با دو دست خود یک جفت دمبل بگیرید و در حالی که بازوان تقریباً صاف هستند کنار بدن خود نگه دارید.
  با کنترل، دمبل ها را به سمت کناره ها بلند کنید تا زمانی که بازوهای بالایی شما افقی شوند.
  دمبل ها را با کنترل پایین بیاورید.`,
    description: `تمرین دمبل  lateral raise یک تمرین ایزوله برای عضلات دلتوئید جانبی است. این تمرین به دلیل توانایی آن در فرم دادن و تقویت عضلات شانه محبوب است و به دلیل اینکه تنها تجهیزات مورد نیاز شما یک جفت دمبل است، آسان است.
  این یک تمرین است که به راحتی می توانید وزن آن را بیش از حد زیاد انتخاب کنید. بهتر است در طرف سبک تر بمانید و برای فرمی که بر تماس خوب با دلت هایتان تمرکز می کنید، تلاش کنید.
  
  `,
  },
];
export { exercises };

const muscles = [
  'سینه',
  'جلوبازو',
  'پشت بازو',
  'دلتای جلو',
  'دلتای فوقانی',
  'دلتای عقب',
  'ساعد',
  'پشت ساعد',
  'شکم',
  'باسن',
  'همسترینگ',
  'چهارسر',
  'ساق پا',
  'کمر تحتانی',
  'کمر میانی',
  'لت ها',
  'ترپ ها',
];
export { muscles };

const plan = {
  name: 'برنامه تست',
  id: 0,
  isFavorite: false,
  pic: planPic,
  for: '', //id
  tags: ['حرفه ای', 'کاهش وزن', 'حجم گیری'],
  sat: {
    hour: 13,
    min: 0,
    exercises: [
      {
        name: 'نشر از جانب دمبل',
        sets: [
          { reps: 10, weight: 5, rest: 60 },
          { reps: 15, weight: 10, rest: 60 },
          { reps: 15, weight: 10, rest: 180 },
          { reps: 10, weight: 5, rest: 60 },
          { reps: 15, weight: 10, rest: 60 },
          { reps: 15, weight: 10, rest: 180 },
        ],
      },
      {
        name: 'پرس سینه هالتر',
        sets: [
          { reps: 15, weight: 5, rest: 40 },
          { reps: 10, weight: 15, rest: 40 },
          { reps: 10, weight: 15, rest: 180 },
          { reps: 10, weight: 15, rest: 180 },
        ],
      },
    ],
  },
  sun: {},
  mon: {},
  tue: {
    hour: 18,
    min: 30,
    exercises: [
      {
        name: 'پرس سینه هالتر',
        sets: [
          { reps: 15, weight: 5, rest: 40 },
          { reps: 10, weight: 15, rest: 40 },
          { reps: 10, weight: 15, rest: 180 },
        ],
      },
      {
        name: 'نشر از جانب دمبل',
        sets: [
          { reps: 20, weight: 5, rest: 60 },
          { reps: 15, weight: 10, rest: 60 },
          { reps: 15, weight: 10, rest: 60 },
          { reps: 10, weight: 15, rest: 180 },
        ],
      },
    ],
  },
  wen: {},
  thu: {},
};
export { plan };
const plans = [plan, plan, plan, plan];
export { plans };

const coach = {
  name: 'فرد بی نام',
  id: 0,
  speciality: 'مدرک معادل دکتری فیزیولوژی ورزشی',
  experience: 10,
  rating: 3,
  tags: ['کاهش وزن', 'حجم گیری', 'دوستانه', 'جدی', 'قدرت'],
  price: 500,
  pic: coachPic,
  isAvailable: true,
  description: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
  چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
  `,
  email: 'goodcoach@gmail.com',
  phone: '09123456789',
};
export { coach };
const coaches = [coach, coach, coach];
export { coaches };

const specialities = [
  'کارشناس فیزیولوژی و تغذيه ورزشى',
  'مدرس بين المللي فيتنس دانشگاه تيف (TAFE)',
];

const trainee = {
  name: 'فرد بی نام',
  id: 1234567890,
  gender: 'مرد',
  pic: coachPic,
  email: 'email@gmail.com',
  phone: '09123456789',
  height: 170,
  weight: 96,
  targetWeight: 70,
  tags: ['کاهش وزن', 'حجم گیری', 'دوستانه', 'جدی', 'قدرت'],
  preferredTimes: ['صبح', 'ظهر', 'شب'],
};
export { trainee }; 
