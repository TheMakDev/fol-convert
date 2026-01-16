export interface Lesson {
  id: number;
  title: string;
  duration: string;
  content: {
    introduction: string;
    sections: {
      title: string;
      content: string[];
    }[];
    scripture: { text: string; reference: string };
    keyPoints: string[];
    reflection: string;
  };
}

export interface QuizQuestion {
  id: number;
  lessonId: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export const PASS_THRESHOLD = 0.7;

export const lessons: Lesson[] = [
  {
    id: 1,
    title: "Living a Holy Life",
    duration: "25 min",
    content: {
      introduction: "Holiness refers to the very nature and essence of God. God is the source and standard of holiness, purity, and sanctification. He is holy in an excellent, perfect, and incomparable way (Isaiah 6:3; Exodus 15:11). To be holy means to be set apart for God—living a life dedicated to Him, reflecting His character through transformation, and avoiding sin and its appearance.",
      sections: [
        {
          title: "1. Definition of Holiness",
          content: [
            "Holiness involves continual fellowship with God and obedience to His Word (Hebrews 12:14; Romans 12:1–2).",
            "**Holiness as God's Standard:** God's holiness is the measure for believers. Holiness is not instant perfection but a lifelong journey of faith and obedience, empowered by the Holy Spirit. Believers are called to live set apart lives that reflect Christ and draw others to Him.",
            "**The Journey to Holiness:** The journey to holiness begins with: Total submission to the lordship of Jesus Christ, yielding to the guidance of the Holy Spirit, and forsaking the old sinful nature and former lifestyle.",
            "God cannot tolerate sin because His nature is entirely holy (Isaiah 59:2; 1 Peter 1:16). Therefore, believers are commanded to live holy lives to be like God (Matthew 5:48)."
          ]
        },
        {
          title: "2. Why Believers Must Live Holy",
          content: [
            "**God Is Holy and Commands His Children to Be Holy:** God's nature is completely holy, and He calls His children to reflect His character. From the Old Testament to the New Testament, God consistently commands His people to walk blamelessly before Him (Genesis 17:1; Ephesians 1:4). Holiness, therefore, is not optional but a divine requirement for those who belong to God.",
            "**God Desires to Use Believers as Vessels to Reach the Lost:** God works through consecrated vessels. A believer who lives a holy life becomes an instrument through which God reveals His love and truth to sinners. An unholy life weakens a believer's witness, but a holy life attracts others to Christ and gives credibility to the gospel message.",
            "**Holiness Enables Believers to Do Great Works for God:** Jesus taught that those who believe in Him would do great works (John 14:12). Holy living positions believers to operate in spiritual power, effectiveness, and divine authority. Sin weakens spiritual sensitivity, but holiness enhances obedience and usefulness in God's service.",
            "**Fellowship with God Requires Holiness:** True fellowship with God is impossible without holiness. According to 1 John 1:3–7, walking in the light—symbolizing righteousness and holiness—enables continuous fellowship with God. Sin disrupts this relationship, while holiness sustains intimacy with Him.",
            "**Without Holiness, No One Will See God:** Hebrews 12:14 makes it clear that holiness is essential for eternal fellowship with God. This does not imply salvation by works, but rather that genuine salvation produces a lifestyle of holiness. A persistent rejection of holy living is evidence of spiritual separation from God."
          ]
        },
        {
          title: "3. Benefits of Living a Holy Life",
          content: [
            "**Divine Revelation and Guidance:** God reveals His secrets and direction to those who walk closely with Him (Amos 3:7). Holiness sharpens spiritual discernment and enables believers to hear God clearly.",
            "**God's Protection and Security:** The name of the Lord is a strong tower to the righteous (Proverbs 18:10). Holy living places believers under God's divine covering and protection against spiritual and physical dangers.",
            "**Peace with Enemies:** A holy life promotes peace, even in hostile environments. God can grant rest from adversaries and establish peace around those who walk uprightly, as seen in Solomon's reign (1 Kings 5:1–4).",
            "**Divine Provision and Long Life:** Obedience to God's instructions brings blessings, provision, and longevity (Proverbs 3:1–2; 9:11). While trials may still occur, God faithfully sustains those who live righteously.",
            "**Continuous Fellowship with God and Eternal Life:** Above all, holy living enables believers to enjoy God's presence daily and guarantees eternal life with Him. Holiness deepens communion with God both now and forever."
          ]
        },
        {
          title: "4. A Holy Lifestyle (Practical Application)",
          content: [
            "Holiness must be reflected in everyday conduct. According to 2 Timothy 2:16–24 (NLT), practical holy living includes the following:",
            "**Avoiding Foolish and Godless Talk:** Believers must guard their speech, knowing that careless words can promote ungodliness and spiritual decline.",
            "**Turning Away from Evil:** Holiness demands intentional separation from sinful practices, attitudes, and influences that dishonour God.",
            "**Fleeing Youthful Lusts:** Believers are instructed not to entertain sinful desires but to flee from them, choosing righteousness instead.",
            "**Being Kind, Patient, and Gentle:** A holy believer reflects Christ-like character by showing kindness, patience, humility, and the ability to teach others with love.",
            "**Avoiding Quarrels and Striving for Peace:** God's servants are called to promote peace rather than conflict, demonstrating maturity and spiritual wisdom.",
            "2 Timothy 2:21 emphasizes that purity prepares believers to be vessels for honourable use—set apart and ready for every good work God intends."
          ]
        }
      ],
      scripture: {
        text: "Pursue peace with all people, and holiness, without which no one will see the Lord.",
        reference: "Hebrews 12:14"
      },
      keyPoints: [
        "Holiness is the very nature and essence of God—He is the source and standard",
        "To be holy means to be set apart for God, living a life dedicated to Him",
        "The journey to holiness begins with total submission to Jesus Christ",
        "Fellowship with God requires holiness; without it, no one will see God",
        "Practical holy living includes guarding speech, fleeing evil, and being kind"
      ],
      reflection: "Holiness is both a calling and a process. Through God's grace and the lordship of Jesus Christ, believers grow daily in holiness. On earth, holiness is progressive; in heaven, it will be perfect and eternal. Since God cannot be separated from His holiness, the benefits of holy living are limitless. Holiness should be the daily pursuit and deep desire of every true believer."
    }
  },
  {
    id: 2,
    title: "The Church",
    duration: "30 min",
    content: {
      introduction: "The Church is not a place, a building or an organization. The church is the body of Christ. Our English word 'Church' derived its meaning from the Greek Ekklesia – meaning assembly. The church is the assembly of the called-out. It is a divine force that originated from the Lord's love for humanity and fellowship. It is the body of Christ, bought by the blood of Jesus Christ.",
      sections: [
        {
          title: "Christ as the Head of the Church",
          content: [
            "Jesus Christ is the head of the church according to Ephesians 1:20-23: \"Which He worked in Christ when He raised Him from the dead and seated Him at His right hand in the heavenly places, far above all principality and power and might and dominion, and every name that is named, not only in this age but also in that which is to come. And He put all things under His feet, and gave Him to be head over all things to the church, which is His body, the fullness of Him who fills all in all.\"",
            "The mission of the Church is rooted in Jesus' Great Commission (Matthew 28:18–20) and His command to love God and neighbour (Matthew 22:37–40). The Church exists to continue Christ's work on earth through the power of the Holy Spirit.",
            "The church is not only the body of Christ, but also the bride of Christ. She is dearly loved, and His precious blood is her bride price. Never in the New Testament are the leaders of the local church referred to as \"head\" of the church. Neither is the church viewed as a democratic organization, where the members are free to vote their own minds on issues."
          ]
        },
        {
          title: "The Word of God in the Church",
          content: [
            "The Church is the body of Christ; and Jesus is the word of God, John 1:1-3. Every member of the body of Christ should have room for the word of God. The Bible is the most wonderful book in the world – Psalm 119:1–16. It is the word of God; and, can be read, memorized, sung, reflected in art and meditated upon.",
            "When the Bible is handled appropriately, faith is increased and progressive spiritual life is ensured. The final product of all these is fruitful witness for God. 2 Tim. 3:16 ~ \"All scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness.\"",
            "**Note the following about the Bible:**",
            "a) The Bible is the Christian's light, food, sword, compass and guide book – Eph 6:17; Jer. 15:16; 1 Peter 2:2.",
            "\"And take the helmet of salvation, and the sword of the Spirit, which is the word of God\" – Ephesians 6:17",
            "\"Thy words were found, and I did eat them. And thy word was unto me the joy and rejoicing of mine heart. For I am called by thy name, O Lord God of host.\" – Jeremiah 15:16",
            "\"As newborn babies, desire the sincere milk of the word, that ye may grow thereby.\" – 1 Peter 2:2",
            "b) Daily reading and studying of the Bible stimulate spiritual understanding – Josh 1:8; John 5:39–40; Acts 20:32",
            "\"This book of the law shall not depart from thy mouth; but thou shall meditate therein day and night, that thou may observe to do according to all that is written therein. For then thou shall make thy way prosperous, and then thou shall have good success.\" – Joshua 1:8",
            "\"And now, brethren I commend you to God, and to the word of his grace, which is able to build you up, and to give you an inheritance among all them which are sanctified.\" – Acts 20:32"
          ]
        },
        {
          title: "The Church is the Elect of God",
          content: [
            "The church of Christ is described in the scriptures as the 'elect of God'. This denotes divine election. The church is not a building or house of worship, but an assembly of the called out 'people of God'.",
            "As elect of God, people of God are expected to:",
            "**I. Be Holy:** \"But as he which hath called you is holy, so be ye holy in all manner of conversation; Because it is written, Be ye holy for I am holy.\" – 1 Peter 1:15-16",
            "**II. Put on Bowels of Mercies (Be Compassionate):** \"Put on therefore, as the elect of God, holy and beloved, bowels of mercies, kindness, humbleness of mind, meekness, longsuffering.\" – Colossians 3:12",
            "**III. Put on Kindness and Humility:** \"For I say, through the grace given to me, to every man that is among you, not to think of himself more highly than he ought to think; but to think soberly, according as God hath dealt to every man the measure of faith.\" – Romans 12:3",
            "**IV. Be Meek and Patient:** \"But let patience have her perfect work, that ye may be perfect and entire, wanting nothing.\" – James 1:4"
          ]
        },
        {
          title: "The Church is the People of God",
          content: [
            "As Christians, we are expected to show forth the praises of God who has called us out of darkness into his marvellous light. We should therefore:",
            "1. **Appreciate the Lord for what He has done:** Ex. 15:1–21; Luke 17:11-19; Luke 1:46",
            "2. **Rejoice whenever we are called upon to serve God:** Luke 10:17–21",
            "3. **Be Peculiar in Prayer:** \"Then they took away the stone from the place where the dead was laid. And Jesus lifted up his eyes and said, Father, I thank thee that thou hast heard me.\" – John 11:41",
            "4. **Be Selfless in Our Commitment to Evangelism and Follow Up:** \"Jesus said unto them, my meat is to do the will of him that sent me, and to finish his work.\" – John 4:34"
          ]
        },
        {
          title: "The Church is a Royal Priesthood",
          content: [
            "The church of Christ is described in the scriptures as 'a royal priesthood'. \"But you are a chosen people, a royal priesthood, a holy nation, God's special possession, that you may declare the praises of him who called you out of darkness into his wonderful light\" – 1 Peter 2:9",
            "The primary purpose for our election into the church of Christ is to go forth and bear fruits – Jn. 15:16; Rom. 7:4.",
            "The term \"royal\" signifies a status associated with royalty, indicating not just a title but also the responsibilities and privileges that come with it. As a \"priesthood,\" believers serve as mediators between God and humanity, representing God and offering spiritual sacrifices.",
            "This concept connects the Church to the historical calling of Israel and emphasizes the Church's role in worship and intercession. The Church is tasked with representing God and offering spiritual sacrifices in the world, embodying the collective identity of believers serving and worshiping.",
            "The Royal Priesthood concept invites Christians to mediate between God and humanity, carrying the responsibilities of kingship and priesthood. It signifies the holy community's role in representing God and offering spiritual sacrifices, with all believers having access to God's presence and a purpose in leading others toward Him."
          ]
        },
        {
          title: "The Church is the Household of God",
          content: [
            "The head of the Church, Jesus, ordained the believers not only to bear fruits but also to ensure that the fruits abide – John 15:16.",
            "In order to achieve the foregoing, we should:",
            "1. **Ensure that our efforts are geared towards conserving, maturing and multiplying of the fruits:** \"Ye have not chosen me, but I have chosen you, and ordained you, that ye should go and bring forth fruit, and that your fruit should remain. That whatsoever ye shall ask of the Father in my name, he may give it you\" – John 15:16",
            "2. **Be sold out to the ministry of follow up of the souls:** \"But Paul thought not good to take him with them, who departed from them from Pamphylia and went not with them to the work\" – Acts 15:38",
            "3. **Obey the word of God:** \"If you keep My commandments, you will abide in My love, just as I have kept My Father's commandments and abide in His love.\" – John 15:10"
          ]
        },
        {
          title: "The Local Church",
          content: [
            "The local church is a visible, organized gathering of believers in a specific location who worship God, grow in faith, and carry out the mission of Christ together. While the universal Church refers to all believers worldwide, the local church is the practical expression of that body in a community.",
            "**Biblical Foundation:**",
            "• Acts 2:42–47 – The early believers met regularly for teaching, fellowship, breaking bread, and prayer.",
            "• Romans 16:5 – \"Greet also the church that meets at their house.\"",
            "• 1 Corinthians 1:2 – Paul addresses \"the church of God in Corinth,\" showing local identity.",
            "• Hebrews 10:24–25 – Encouragement to meet together and build one another up.",
            "**Characteristics of the Local Church:**",
            "• Community of Believers: United by faith in Christ (Galatians 3:28)",
            "• Regular Gathering: For worship, teaching, and fellowship (Acts 20:7)",
            "• Leadership Structure: Elders, pastors, and deacons (1 Timothy 3:1–13; Titus 1:5–9)",
            "• Mission-Oriented: Engaged in evangelism and service (Matthew 28:19–20)",
            "**Purposes of the Local Church:**",
            "• Worship: Glorifying God together (Psalm 95:6)",
            "• Discipleship: Teaching and equipping believers (Ephesians 4:11–13)",
            "• Fellowship: Building relationships and mutual support (Acts 2:46)",
            "• Service: Meeting needs within and outside the church (Galatians 6:2)",
            "• Witness: Representing Christ in the community (John 13:35)",
            "**Responsibilities of Members:**",
            "• Commitment: Faithful attendance and participation (Hebrews 10:25)",
            "• Giving: Supporting the work of the church (2 Corinthians 9:7)",
            "• Serving: Using spiritual gifts for the common good (1 Corinthians 12:7)",
            "• Unity: Maintaining peace and love (Ephesians 4:3)"
          ]
        }
      ],
      scripture: {
        text: "And He put all things under His feet, and gave Him to be head over all things to the church, which is His body, the fullness of Him who fills all in all.",
        reference: "Ephesians 1:22-23"
      },
      keyPoints: [
        "The Church is the body of Christ, not a building or organization",
        "Jesus Christ is the head of the Church",
        "The Church is described as the Elect of God, People of God, Royal Priesthood, and Household of God",
        "Every member should have room for the Word of God",
        "The local church is the practical expression of the universal Church in a community"
      ],
      reflection: "As a member of the body of Christ, commit to actively participating in your local church. Use your spiritual gifts to serve, maintain unity, and bear fruit that remains for God's glory."
    }
  }
];

export const quizQuestions: QuizQuestion[] = [
  // Lesson 1: Living a Holy Life
  {
    id: 1,
    lessonId: 1,
    question: "What best describes holiness?",
    options: [
      "Moral superiority over others",
      "Religious rituals and traditions",
      "The very nature and essence of God",
      "Human perfection"
    ],
    correctAnswer: 2
  },
  {
    id: 2,
    lessonId: 1,
    question: "God is holy in an excellent, perfect, and incomparable way according to:",
    options: [
      "Psalm 15:1",
      "Isaiah 6:3",
      "Matthew 5:48",
      "Romans 12:2"
    ],
    correctAnswer: 1
  },
  {
    id: 3,
    lessonId: 1,
    question: "To be holy means to:",
    options: [
      "Avoid people who sin",
      "Live without making mistakes",
      "Be set apart and dedicated to God",
      "Follow human rules strictly"
    ],
    correctAnswer: 2
  },
  {
    id: 4,
    lessonId: 1,
    question: "Which scripture teaches believers to present their bodies as living sacrifices?",
    options: [
      "Hebrews 12:14",
      "Romans 12:1–2",
      "1 Peter 1:16",
      "Joshua 24:19"
    ],
    correctAnswer: 1
  },
  {
    id: 5,
    lessonId: 1,
    question: "The journey to holiness begins with:",
    options: [
      "Church attendance",
      "Obedience to religious leaders",
      "Total submission to Jesus Christ",
      "Good moral behaviour"
    ],
    correctAnswer: 2
  },
  {
    id: 6,
    lessonId: 1,
    question: "Why must believers live holy lives?",
    options: [
      "To be admired by others",
      "To earn salvation",
      "Because God is holy and commands it",
      "To avoid difficulties"
    ],
    correctAnswer: 2
  },
  {
    id: 7,
    lessonId: 1,
    question: "Which verse states, 'Be holy, for I am holy'?",
    options: [
      "Genesis 17:1",
      "Matthew 5:48",
      "1 Peter 1:16",
      "John 14:12"
    ],
    correctAnswer: 2
  },
  {
    id: 8,
    lessonId: 1,
    question: "Fellowship with God requires:",
    options: [
      "Wealth",
      "Education",
      "Good intentions",
      "Holiness"
    ],
    correctAnswer: 3
  },
  {
    id: 9,
    lessonId: 1,
    question: "One benefit of living a holy life is:",
    options: [
      "Freedom from trials",
      "Divine guidance and revelation",
      "Popularity among people",
      "Financial independence"
    ],
    correctAnswer: 1
  },
  {
    id: 10,
    lessonId: 1,
    question: "Which of the following is NOT part of a holy lifestyle in 2 Timothy 2:16–24?",
    options: [
      "Being quarrelsome",
      "Avoiding foolish talk",
      "Fleeing youthful lusts",
      "Being patient with others"
    ],
    correctAnswer: 0
  },
  // Lesson 2: The Church
  {
    id: 11,
    lessonId: 2,
    question: "Who is the head of the church?",
    options: [
      "John the Baptist",
      "Apostle Paul",
      "King David",
      "Jesus Christ"
    ],
    correctAnswer: 3
  },
  {
    id: 12,
    lessonId: 2,
    question: "The church is the:",
    options: [
      "A building",
      "The gathering",
      "The parents",
      "The body of Christ"
    ],
    correctAnswer: 3
  },
  {
    id: 13,
    lessonId: 2,
    question: "As a member of a local church, you are expected to:",
    options: [
      "Gossip about the members",
      "Skip church programmes",
      "Attend services",
      "Disobey your leaders"
    ],
    correctAnswer: 2
  },
  {
    id: 14,
    lessonId: 2,
    question: "Which scripture describes Jesus Christ as the head of the Church?",
    options: [
      "Hebrews 12:14",
      "Ephesians 1:20-23",
      "John 3:16",
      "Acts 1:8"
    ],
    correctAnswer: 1
  },
  {
    id: 15,
    lessonId: 2,
    question: "One of these is NOT the purpose of the local church:",
    options: [
      "Trading",
      "Fellowship",
      "Witness",
      "Service"
    ],
    correctAnswer: 0
  },
  {
    id: 16,
    lessonId: 2,
    question: "The following are the responsibilities of a church member EXCEPT:",
    options: [
      "Unity",
      "Extortion",
      "Witnessing",
      "Giving"
    ],
    correctAnswer: 1
  },
  {
    id: 17,
    lessonId: 2,
    question: "What is the mission of church rooted in?",
    options: [
      "Tribulation",
      "Fasting",
      "Great Exchange",
      "Great Commission"
    ],
    correctAnswer: 3
  },
  {
    id: 18,
    lessonId: 2,
    question: "The characteristics of the local church does NOT include:",
    options: [
      "Community of believers",
      "Committee of friends",
      "Leadership structure",
      "Regular gatherings"
    ],
    correctAnswer: 1
  },
  {
    id: 19,
    lessonId: 2,
    question: "The Church is described as the following EXCEPT:",
    options: [
      "Elect of God",
      "Royal Priesthood",
      "Good People",
      "Household of God"
    ],
    correctAnswer: 2
  },
  {
    id: 20,
    lessonId: 2,
    question: "Every member of the body of Christ should have room for:",
    options: [
      "Word of God",
      "Campaign trips",
      "Lectures",
      "Staff training"
    ],
    correctAnswer: 0
  }
];