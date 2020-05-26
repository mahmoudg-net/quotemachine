const languages = {
  EN: { text: "English", newQuoteText: "New quote" },
  FR: { text: "Français", newQuoteText: "Nouvelle citation" },
  AR: { text: "العربيّة", newQuoteText: "مقولة جديدة" },
};

const quotes = {
  AR: [
    {
      author: "الإمام الشّافعي",
      text:
        "وجدت سكوتي متجرا فلزمته ..... إذا لم أجد ربحا فلست بخاسر وما الصمت إلا في الرجال متاجر ..... وتاجره يعلو على كل تاجر",
    },
    {
      author: "الإمام الشّافعي",
      text:
        "يريد المرء أن يعطى مناه ..... ويأبى الله إلا ما أراد يقول المرء فائدتي ومالي ..... وتقوى الله أفضل ما استفاد",
    },
    {
      author: "الإمام الشّافعي",
      text:
        "احفظ لسانـــك أيها الإنسان ..... لا يلدغنك .. إنه ثعبان كم في المقابر من قتيل لسانه ..... كانت تهاب لقاءه الأقران",
    },
    {
      author: "الإمام الشّافعي",
      text:
        " يا من يعانق دنيا لا بقاء لها ..... يمسي ويصبح في دنياه سافرا هلا تركت لذي الدنيا معانقة ..... حتى تعانق في الفردوس أبكارا إن كنت تبغي جنان الخلد تسكنها ..... فينبغي لك أن لا تأمن النارا",
    },
    {
      author: "الإمام الشّافعي",
      text: "يخاطبني السفيه بكل قبح ....فأكره أكــون له مجيبا",
    },
    {
      author: "الإمام الشّافعي",
      text: "يزيد سفاهة فأزيد حلـما .... كعود زادهالإحراق طيبا",
    },
    {
      author: "الإمام الشّافعي",
      text: "شكوت إلى وكيع سؤ حفظي ....فأرشدني إلى تركالمعاصي",
    },
    {
      author: "الإمام الشّافعي",
      text: "وأخبرني بأن العلم نــور ....ونور الله لا يهـدىلعاصي",
    },
    {
      author: "الإمام الشّافعي",
      text: "علي ثياب لو يباع جميعها ....بفلس لكــان الفلس منهنأكثرا",
    },
    {
      author: "الإمام الشّافعي",
      text: "وفيهن نفس لو تقاس ببعضها.... نفوس الورى كانت أجل وأكبرا",
    },
    {
      author: "الإمام الشّافعي",
      text: "وماضر السيف إغلاق غمده .... إذا كان عضبا أين ما وجهته فرى",
    },
    {
      author: "الإمام الشّافعي",
      text: "نعيب زمانناوالعيب فينا .... ومال زماننا عيب سوانا",
    },
    {
      author: "الإمام الشّافعي",
      text: "ونهجو ذا الزمان بغير ذنب .... ولو نطقالزمان لنا هجانا",
    },
    {
      author: "الإمام الشّافعي",
      text: "وليس الذئب يأكل لحم ذئب.....ويأكل بعضنا بعض عيانا",
    },
    {
      author: "الإمام الشّافعي",
      text:
        "إن الفقيه هو الفقيه بفعله...........ليس الفقيه بنطقه ومقاله وكذا الرئيس هو الرئيس بخلقه.....ليس الرئيس بقومه ورجاله وكذا الغنى هو الغنى بحاله........ليس الغنى بملكه وبماله",
    },
    {
      author: "الإمام الشّافعي",
      text: "تموت الأسد في الغابات جوعا ** ولحم الضأن تأكلهالكلاب",
    },
    {
      author: "الإمام الشّافعي",
      text: "وعبد قد ينام على حرير ** وذو نسب مفارشهالتراب",
    },
    {
      author: "الإمام الشّافعي",
      text: "الدهر يومان ذا أمن وذا خطر .... والعيش عيشان ذا صفو وذا كدر",
    },
    {
      author: "الإمام الشّافعي",
      text: "أما ترى البحر تعلو فوقه جيف .... وتستقر بأقصى قاعه الـــدرر",
    },
    {
      author: "الإمام الشّافعي",
      text: "وفيالسماء نجوم لا عداد لها .... وليس يكسف إلا الشمس والقـمر",
    },
    {
      author: "الإمام الشّافعي",
      text:
        "أحب الصالحين ولست منهم .... لعلي أن أنال بهم شفاعة وأكره من تجارته المعاصي .... ولو كنا سواء في البضاعة",
    },
    {
      author: "الإمام الشّافعي",
      text:
        "لما عفوت ولم أحقد على أحد ........أرحت نفسي من هم العداواتِ إني أحيي عدوي عند رؤيته.......... لأدفع الشر عني بالتحياتِ129 وزظهر البشر للإنسان أبغضه........كما أن قد حشى قلبي محباتِ الناس داء وداء الناس قربهم.........وفي اعتزالهم قطعُ الموداتِ",
    },
    {
      author: "الإمام الشّافعي",
      text:
        "وأنطقت الدراهم بعد صمت........أناساً بَعد ما كانوا سكوتا فما عطفوا على أحد بفضلٍ......ولا عرفوا لمكرمةٍ ثبوتا",
    },
    {
      author: "الإمام الشّافعي",
      text: "أخي لنتنال العلم إلا بستة ** سأنبيك عن تفصيلها ببـيان",
    },
    {
      author: "الإمام الشّافعي",
      text: "ذكاء وحرص واجتهاد وبلغة ** وصحبة أستاذ وطول زمان",
    },
    {
      author: "الإمام الشّافعي",
      text:
        "إذا سبني نذلٌ تزايدتُ رفعةً.........وما العيب إلا أن أكون مساببه ولو لم تكن نفسي عليّ عزيزةً......لمكنتها من كل نذلٍ تُحاربه ولو أنني أسعى لِنفعي وجدتني....كثير التواني للذي أنا طالبه ولكنني أسعى لِأنفع صاحبي.......وعار على الشبعانُ إن جاع صاحبه",
    },
    {
      author: "الإمام الشّافعي",
      text: "قالو سكت وقد خوصمت قلت لهم .... إن الجوابلباب الشر مفــتاح",
    },
    {
      author: "الإمام الشّافعي",
      text: "والصمت عن جاهل أو أحمق شرفا.... وفيه أيضا لصون العرضإصلاح",
    },
    {
      author: "الإمام الشّافعي",
      text: "أما ترى الأسد تخشى وهي صامتة .... والكلب يخسى لعمري وهـونباح",
    },
    {
      author: "الإمام الشّافعي",
      text:
        "يتكَ تكويني بمبسم مِنة .........العيشُ تكفيني إلى يوم تكويني فدعني مِنَ المَنِ الوخيمِ فلقمة مِن...العيش تكفيني إلى يوم تكفيني",
    },
    {
      author: "الإمام الشّافعي",
      text:
        "صن النفس واحملها على ما يزينها.....تعش سالماً والقول فيك جميل ولا تولين الناس إلا تجملا.....................نبا بك دهر أو جفاك خليل وإن ضاق رزق اليوم إلى غد..........عسى نكبات الدهر عنك تزول ولا خير في ود إمرئ متلون........إذا الريح مالت,مال حيث تميل وما أكثر الإخوان حين تعدهم......ولكنهم في النائباتقليل ",
    },
  ],
  EN: [
    {
      text: "It’s not about ideas. It’s about making ideas happen.",
      author: "Scott Belsky",
    },
    {
      text: "Always deliver more than expected",
      author: "Larry Page",
    },
  ],
  FR: [
    {
      text:
        "Un sourire coûte moins cher que l'électricité, mais donne autant de lumière.",
      author: "Abbé Pierre",
    },
    {
      text:
        "Le meilleur gouvernement est celui où il y a le moins d'hommes inutiles.",
      author: "Voltaire",
    },
  ],
};

const getNewQuote = (lang) =>
  quotes[lang][Math.floor(Math.random() * quotes[lang].length)];

const getRandomColor = () => {
  const rand = () => Math.floor(128 * Math.random());
  const r = rand(),
    g = rand(),
    b = rand();
  return {
    textColor: `rgb(${r},${g},${b})`,
    backgroundColor: `rgb(${128 + r},${128 + g},${128 + b})`,
  };
};

export { languages, getNewQuote, getRandomColor };
