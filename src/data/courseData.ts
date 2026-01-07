export interface Lesson {
  id: number;
  title: string;
  duration: string;
  content: {
    introduction: string;
    mainContent: string[];
    scripture: { text: string; reference: string };
    keyPoints: string[];
    reflection: string;
  };
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export const lessons: Lesson[] = [
  {
    id: 1,
    title: "Understanding Salvation",
    duration: "15 min",
    content: {
      introduction: "Salvation is the greatest gift God has given to humanity. When you accepted Jesus Christ as your Lord and Savior, you received eternal life and became a child of God.",
      mainContent: [
        "Salvation means being rescued from sin and its consequences. Before Christ, we were all separated from God because of sin. But God, in His infinite love, sent His only Son Jesus to die for our sins.",
        "When Jesus died on the cross, He paid the penalty for all our sins - past, present, and future. His resurrection proved His victory over sin and death, and now that victory belongs to everyone who believes in Him.",
        "Being saved is not about being perfect or doing good works. It's about accepting God's free gift of grace through faith in Jesus Christ. Ephesians 2:8-9 tells us that we are saved by grace through faith, not by our own efforts.",
        "Now that you are saved, you have a new identity. You are no longer defined by your past mistakes or failures. You are a new creation in Christ, with a fresh start and a bright future."
      ],
      scripture: {
        text: "For God so loved the world that He gave His only begotten Son, that whoever believes in Him should not perish but have everlasting life.",
        reference: "John 3:16"
      },
      keyPoints: [
        "Salvation is a free gift from God, not earned by works",
        "Jesus paid the full price for your sins on the cross",
        "You are now a child of God with eternal life",
        "Your past is forgiven, and you have a new beginning"
      ],
      reflection: "Take a moment to thank God for His incredible gift of salvation. Reflect on what it means to be completely forgiven and accepted by the Creator of the universe."
    }
  },
  {
    id: 2,
    title: "Who is Jesus Christ?",
    duration: "20 min",
    content: {
      introduction: "Jesus Christ is the center of the Christian faith. Understanding who He is will transform your relationship with God and deepen your faith.",
      mainContent: [
        "Jesus is fully God and fully man. He existed before time began as part of the Trinity - Father, Son, and Holy Spirit. He chose to take on human form to save us from our sins.",
        "During His time on earth, Jesus demonstrated God's love through His teachings, miracles, and ultimately His sacrifice on the cross. He healed the sick, raised the dead, and showed compassion to all who came to Him.",
        "Jesus is not just a historical figure or a good teacher - He is the Son of the living God, the Messiah prophesied throughout the Old Testament. He is the only way to the Father and the source of eternal life.",
        "Today, Jesus is alive and seated at the right hand of God the Father. He intercedes for us daily and has promised to return one day to take His children home to be with Him forever."
      ],
      scripture: {
        text: "Jesus said to him, 'I am the way, the truth, and the life. No one comes to the Father except through Me.'",
        reference: "John 14:6"
      },
      keyPoints: [
        "Jesus is fully God and fully man",
        "He is the only way to salvation and eternal life",
        "Jesus is alive today and intercedes for you",
        "He will return again to gather His children"
      ],
      reflection: "Spend time getting to know Jesus through reading the Gospels (Matthew, Mark, Luke, John). He wants to be your closest friend and guide."
    }
  },
  {
    id: 3,
    title: "The Holy Spirit - Your Helper",
    duration: "18 min",
    content: {
      introduction: "When you accepted Christ, something amazing happened - the Holy Spirit came to live inside you. He is your constant companion, guide, and source of power.",
      mainContent: [
        "The Holy Spirit is the third person of the Trinity. He is not an impersonal force but a divine person who loves you, speaks to you, and helps you in your daily life.",
        "Jesus promised His disciples that He would send the Holy Spirit to be with them forever. The same Spirit that raised Jesus from the dead now lives in you, empowering you to live a victorious Christian life.",
        "The Holy Spirit helps you in many ways: He teaches you God's Word, convicts you when you stray, comforts you in difficult times, gives you strength to overcome temptation, and produces spiritual fruit in your life.",
        "Learning to recognize and follow the Holy Spirit's leading is essential for every believer. He speaks through Scripture, godly counsel, circumstances, and that still small voice in your heart."
      ],
      scripture: {
        text: "But the Helper, the Holy Spirit, whom the Father will send in My name, He will teach you all things, and bring to your remembrance all things that I said to you.",
        reference: "John 14:26"
      },
      keyPoints: [
        "The Holy Spirit is a divine person living inside you",
        "He guides, teaches, comforts, and empowers you",
        "He produces spiritual fruit in your life",
        "Learning to hear His voice is essential for growth"
      ],
      reflection: "Ask the Holy Spirit to make His presence known to you. Invite Him to guide your decisions and fill you with His power each day."
    }
  },
  {
    id: 4,
    title: "How to Pray Effectively",
    duration: "22 min",
    content: {
      introduction: "Prayer is simply talking to God. It's not about using fancy words or long prayers - it's about having a genuine conversation with your Heavenly Father who loves you.",
      mainContent: [
        "Prayer is your direct line of communication with God. Through Jesus Christ, you have access to approach God's throne boldly and confidently. He wants to hear from you about everything - big or small.",
        "Jesus taught His disciples to pray using what we call 'The Lord's Prayer' as a model. It includes worship, submission to God's will, asking for daily needs, seeking forgiveness, and requesting protection from evil.",
        "Effective prayer involves speaking AND listening. After sharing your heart with God, take time to be quiet and listen. He may speak through His Word, through thoughts, or through a sense of peace and direction.",
        "Make prayer a daily habit, not just something you do in emergencies. Set aside specific times each day to talk to God. Morning prayer sets the tone for your day; evening prayer allows you to reflect and rest in His presence."
      ],
      scripture: {
        text: "Be anxious for nothing, but in everything by prayer and supplication, with thanksgiving, let your requests be made known to God; and the peace of God, which surpasses all understanding, will guard your hearts and minds through Christ Jesus.",
        reference: "Philippians 4:6-7"
      },
      keyPoints: [
        "Prayer is simply talking to God like a friend",
        "You can pray about anything - God cares about every detail",
        "Effective prayer involves speaking and listening",
        "Make prayer a daily habit, not just for emergencies"
      ],
      reflection: "Start a prayer journal where you write your prayers and God's answers. This will build your faith as you see how God responds to your prayers."
    }
  },
  {
    id: 5,
    title: "Reading & Understanding the Bible",
    duration: "25 min",
    content: {
      introduction: "The Bible is God's written Word to you. It contains everything you need to know about God, life, and how to live in a way that pleases Him and brings you joy.",
      mainContent: [
        "The Bible is not just an ancient book - it is alive and active. When you read Scripture, the Holy Spirit illuminates its meaning and applies it to your specific situation. It's God speaking directly to you.",
        "Start your Bible reading with the New Testament, particularly the Gospels (Matthew, Mark, Luke, John). These books tell the story of Jesus' life and teachings. Then explore Acts and the letters written to early churches.",
        "When reading the Bible, don't rush. Read a passage slowly, ask yourself what it means, how it applies to your life, and what action you should take. This is called meditation - thinking deeply about God's Word.",
        "The Bible is your spiritual food. Just as your body needs daily nourishment, your spirit needs the daily nutrition of God's Word. Set aside time each day to read, even if it's just a few verses."
      ],
      scripture: {
        text: "Your word is a lamp to my feet and a light to my path.",
        reference: "Psalm 119:105"
      },
      keyPoints: [
        "The Bible is God's living Word that speaks to you personally",
        "Start with the Gospels to learn about Jesus",
        "Read slowly and meditate on what you read",
        "Make Bible reading a daily habit like eating"
      ],
      reflection: "Commit to reading at least one chapter of the Bible each day. Start with the Gospel of John and let Jesus reveal Himself to you through His Word."
    }
  },
  {
    id: 6,
    title: "Living a Holy Life",
    duration: "20 min",
    content: {
      introduction: "Holiness is not about being perfect - it's about being set apart for God's purposes. As a new believer, you are called to live differently from the world around you.",
      mainContent: [
        "Holiness begins with a heart change, not behavior modification. When you gave your life to Christ, you received a new nature. Now your job is to cooperate with the Holy Spirit as He transforms you from the inside out.",
        "Living holy means making choices that honor God. This includes what you watch, listen to, say, and how you treat others. It doesn't mean you'll never make mistakes, but your overall direction should be toward godliness.",
        "You are not alone in this journey. God gives you the Holy Spirit to empower you, His Word to guide you, and the church community to support you. Surround yourself with other believers who will encourage your faith.",
        "When you fall short (and you will), don't give up. God's grace is always available. Confess your sin, receive His forgiveness, learn from the experience, and keep moving forward with Him."
      ],
      scripture: {
        text: "But as He who called you is holy, you also be holy in all your conduct, because it is written, 'Be holy, for I am holy.'",
        reference: "1 Peter 1:15-16"
      },
      keyPoints: [
        "Holiness is about being set apart for God, not perfection",
        "True change comes from the inside out through the Holy Spirit",
        "Make daily choices that honor God in all areas of life",
        "When you fail, receive God's grace and keep moving forward"
      ],
      reflection: "Ask God to show you one area of your life where He wants to bring transformation. Surrender that area to Him and trust Him to change you."
    }
  },
  {
    id: 7,
    title: "The Importance of the Local Church",
    duration: "18 min",
    content: {
      introduction: "God never intended for you to live the Christian life alone. The local church is not just a building or a weekly event - it's your spiritual family, a place where you belong, grow, and serve alongside other believers.",
      mainContent: [
        "When you gave your life to Christ, you became part of the global Body of Christ - the Church. But God also designed you to be connected to a local assembly of believers. The early Christians understood this and devoted themselves to meeting together regularly (Acts 2:42-47).",
        "The local church provides essential elements for your spiritual growth: biblical teaching to build your faith, fellowship with other believers who understand your journey, accountability to help you stay on track, and opportunities to discover and use your God-given gifts.",
        "Church is not about attending a service - it's about belonging to a family. In the church, you find pastors and leaders who guide you, fellow believers who encourage you, and brothers and sisters who pray with you through life's challenges and celebrate your victories.",
        "Being part of a local church also means you have a role to play. Every believer has spiritual gifts given by the Holy Spirit to serve and strengthen the Body. When you actively participate in church life, you not only receive but also contribute to the growth of others."
      ],
      scripture: {
        text: "And let us consider how to stir up one another to love and good works, not neglecting to meet together, as is the habit of some, but encouraging one another, and all the more as you see the Day drawing near.",
        reference: "Hebrews 10:24-25"
      },
      keyPoints: [
        "The local church is your spiritual family, not just a weekly event",
        "You need the support, teaching, and accountability that church provides",
        "Every believer has a role to play in the local church",
        "Consistent fellowship with other believers is essential for spiritual growth"
      ],
      reflection: "If you haven't already, make a commitment to find and join a Bible-believing local church. Ask God to lead you to the right church family where you can grow, serve, and be connected."
    }
  }
];

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "How are we saved according to the Bible?",
    options: [
      "By doing good works and being a good person",
      "By grace through faith in Jesus Christ",
      "By attending church every Sunday",
      "By following all the commandments perfectly"
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "Who is Jesus Christ?",
    options: [
      "Just a good teacher and prophet",
      "An angel sent from heaven",
      "Fully God and fully man, the Son of God",
      "A wise philosopher from ancient times"
    ],
    correctAnswer: 2
  },
  {
    id: 3,
    question: "What is the role of the Holy Spirit in a believer's life?",
    options: [
      "He visits us only during church services",
      "He guides, teaches, comforts, and empowers us daily",
      "He only helps pastors and ministers",
      "He watches us from heaven"
    ],
    correctAnswer: 1
  },
  {
    id: 4,
    question: "What is prayer?",
    options: [
      "A ritual that must use specific religious words",
      "Something only for emergencies and desperate times",
      "Talking to God like a friend about anything",
      "Reciting memorized verses repeatedly"
    ],
    correctAnswer: 2
  },
  {
    id: 5,
    question: "Which books should new believers start reading in the Bible?",
    options: [
      "The book of Revelation",
      "The Gospels (Matthew, Mark, Luke, John)",
      "The book of Leviticus",
      "The book of Numbers"
    ],
    correctAnswer: 1
  },
  {
    id: 6,
    question: "What does it mean to live a holy life?",
    options: [
      "Being perfect and never making mistakes",
      "Living in a monastery away from the world",
      "Being set apart for God and making choices that honor Him",
      "Following a strict list of religious rules"
    ],
    correctAnswer: 2
  },
  {
    id: 7,
    question: "What happens when a believer sins after being saved?",
    options: [
      "They lose their salvation permanently",
      "They must get baptized again",
      "They confess, receive forgiveness, and keep moving forward",
      "They can never be forgiven"
    ],
    correctAnswer: 2
  },
  {
    id: 8,
    question: "According to John 14:6, how many ways are there to God the Father?",
    options: [
      "Many ways through different religions",
      "Only one way - through Jesus Christ",
      "Two ways - through works and faith",
      "It depends on your culture and background"
    ],
    correctAnswer: 1
  },
  {
    id: 9,
    question: "What did Jesus promise to send after He returned to heaven?",
    options: [
      "More prophets and teachers",
      "Angels to protect believers",
      "The Holy Spirit as our Helper",
      "Written instructions for living"
    ],
    correctAnswer: 2
  },
  {
    id: 10,
    question: "Why is daily Bible reading important?",
    options: [
      "It earns extra points with God",
      "It's spiritual food that nourishes our spirit",
      "It's required to stay saved",
      "It replaces the need for prayer"
    ],
    correctAnswer: 1
  },
  {
    id: 11,
    question: "Why is being part of a local church important?",
    options: [
      "It's optional for mature Christians",
      "It provides fellowship, teaching, accountability, and opportunities to serve",
      "Only to fulfill religious obligations",
      "It's only necessary for new believers"
    ],
    correctAnswer: 1
  }
];

export const PASS_THRESHOLD = 0.7; // 70% to pass