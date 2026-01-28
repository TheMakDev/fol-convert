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
  },
  {
    id: 3,
    title: "Prayer and Communion with God",
    duration: "25 min",
    content: {
      introduction: "Prayer is the spiritual lifeline that connects believers to God. It is the means by which we communicate with our Heavenly Father, presenting our requests, expressing gratitude, and aligning our hearts with His will. Jesus modeled a life of prayer and taught His disciples to pray.",
      sections: [
        {
          title: "1. The Definition and Purpose of Prayer",
          content: [
            "Prayer is direct communication with God. It involves speaking to God and listening to Him through His Word and His Spirit.",
            "**The Purpose of Prayer:** To worship and glorify God, to confess sins and receive forgiveness, to present our needs and petitions, to intercede for others, and to align our will with God's will.",
            "Matthew 6:9-13 gives us the Lord's Prayer as a model for how we should approach God in prayer."
          ]
        },
        {
          title: "2. Types of Prayer",
          content: [
            "**Adoration:** Praising God for who He is (Psalm 100:4)",
            "**Confession:** Acknowledging our sins before God (1 John 1:9)",
            "**Thanksgiving:** Expressing gratitude for God's blessings (Philippians 4:6)",
            "**Supplication:** Making personal requests to God (Philippians 4:6-7)",
            "**Intercession:** Praying on behalf of others (1 Timothy 2:1-2)"
          ]
        },
        {
          title: "3. Principles of Effective Prayer",
          content: [
            "**Pray in Faith:** Believe that God hears and will answer (Mark 11:24; James 1:6)",
            "**Pray According to God's Will:** Align requests with Scripture (1 John 5:14-15)",
            "**Pray with a Clean Heart:** Confess known sins before praying (Psalm 66:18)",
            "**Pray Persistently:** Continue in prayer without giving up (Luke 18:1-8)",
            "**Pray in Jesus' Name:** Access the Father through Christ (John 14:13-14)"
          ]
        },
        {
          title: "4. Hindrances to Prayer",
          content: [
            "Unconfessed sin can block our prayers (Isaiah 59:2)",
            "Unforgiveness towards others hinders prayer (Mark 11:25)",
            "Wrong motives can prevent answers (James 4:3)",
            "Doubt and unbelief limit what we receive (James 1:6-7)",
            "Neglecting the needs of others affects our prayers (Proverbs 21:13)"
          ]
        },
        {
          title: "5. Developing a Prayer Life",
          content: [
            "Set aside specific times daily for prayer (Daniel 6:10)",
            "Find a quiet place free from distractions (Matthew 6:6)",
            "Use Scripture to guide your prayers",
            "Keep a prayer journal to track requests and answers",
            "Join with other believers in corporate prayer (Matthew 18:19-20)"
          ]
        }
      ],
      scripture: {
        text: "Rejoice always, pray without ceasing, give thanks in all circumstances; for this is the will of God in Christ Jesus for you.",
        reference: "1 Thessalonians 5:16-18"
      },
      keyPoints: [
        "Prayer is direct communication with God—speaking and listening",
        "Different types of prayer serve different purposes in our relationship with God",
        "Effective prayer requires faith, alignment with God's will, and a clean heart",
        "Sin, unforgiveness, and wrong motives can hinder our prayers",
        "A consistent prayer life requires discipline and intentionality"
      ],
      reflection: "Evaluate your current prayer life. Are there any hindrances you need to address? Commit to developing a more consistent and effective prayer life by setting specific times and places for communion with God."
    }
  },
  {
    id: 4,
    title: "The Holy Spirit",
    duration: "30 min",
    content: {
      introduction: "The Holy Spirit is the third Person of the Trinity—coequal with the Father and the Son. He is not merely a force or influence, but a divine Person who indwells believers, empowers them for service, and guides them into all truth. Understanding the Holy Spirit is essential for victorious Christian living.",
      sections: [
        {
          title: "1. The Person of the Holy Spirit",
          content: [
            "The Holy Spirit is God—fully divine and coequal with the Father and Son (Acts 5:3-4; 2 Corinthians 13:14)",
            "**The Holy Spirit has personal attributes:** Intelligence (1 Corinthians 2:10-11), Will (1 Corinthians 12:11), Emotions (Ephesians 4:30)",
            "**The Holy Spirit performs personal actions:** He teaches (John 14:26), guides (Romans 8:14), intercedes (Romans 8:26-27), and convicts (John 16:8)"
          ]
        },
        {
          title: "2. The Work of the Holy Spirit",
          content: [
            "**In Salvation:** He convicts of sin, righteousness, and judgment (John 16:8-11). He regenerates believers (Titus 3:5) and seals them for the day of redemption (Ephesians 1:13-14).",
            "**In Sanctification:** He transforms believers into Christ's likeness (2 Corinthians 3:18) and produces spiritual fruit (Galatians 5:22-23).",
            "**In Empowerment:** He gives power for witness and service (Acts 1:8) and distributes spiritual gifts (1 Corinthians 12:4-11)."
          ]
        },
        {
          title: "3. The Fruit of the Spirit",
          content: [
            "Galatians 5:22-23 lists the fruit of the Spirit: love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control.",
            "The fruit of the Spirit is evidence of the Spirit's work in a believer's life.",
            "Unlike spiritual gifts which are distributed individually, all believers should exhibit all aspects of the fruit.",
            "The fruit grows through abiding in Christ and yielding to the Spirit's work (John 15:4-5)."
          ]
        },
        {
          title: "4. The Gifts of the Spirit",
          content: [
            "Spiritual gifts are supernatural abilities given by the Holy Spirit for the edification of the Church (1 Corinthians 12:7).",
            "**Categories of Gifts:** Speaking gifts (prophecy, teaching, tongues), Serving gifts (helps, administration, mercy), Sign gifts (healing, miracles, faith).",
            "Every believer has at least one spiritual gift (1 Peter 4:10).",
            "Gifts are to be used in love for the common good (1 Corinthians 13; 14:12)."
          ]
        },
        {
          title: "5. Being Filled with the Spirit",
          content: [
            "Ephesians 5:18 commands believers to be continually filled with the Spirit.",
            "**How to be filled:** Confess all known sin, surrender fully to Christ, ask in faith for the Spirit's filling, walk in obedience.",
            "Being filled is not a one-time event but a continual experience as we yield to God daily.",
            "The evidence of being Spirit-filled includes boldness in witness, power over sin, and manifestation of spiritual fruit."
          ]
        }
      ],
      scripture: {
        text: "But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control; against such things there is no law.",
        reference: "Galatians 5:22-23"
      },
      keyPoints: [
        "The Holy Spirit is a divine Person, not merely a force or influence",
        "He convicts, regenerates, seals, sanctifies, and empowers believers",
        "The fruit of the Spirit should be evident in every believer's life",
        "Spiritual gifts are given to edify the Church and should be used in love",
        "Being filled with the Spirit is a continual experience of yielding to God"
      ],
      reflection: "Are you walking in the power of the Holy Spirit daily? Examine your life for evidence of the Spirit's fruit. Ask God to fill you afresh with His Spirit and to help you use your spiritual gifts for His glory."
    }
  },
  {
    id: 5,
    title: "Understanding Salvation",
    duration: "25 min",
    content: {
      introduction: "Salvation is God's gracious work of rescuing humanity from sin and its consequences. Through the death and resurrection of Jesus Christ, God has provided a way for all who believe to be forgiven, reconciled to Him, and granted eternal life. Understanding salvation is foundational to the Christian faith.",
      sections: [
        {
          title: "1. The Need for Salvation",
          content: [
            "All have sinned and fall short of God's glory (Romans 3:23)",
            "Sin separates us from God (Isaiah 59:2)",
            "The wages of sin is death—spiritual separation from God (Romans 6:23)",
            "No human effort can earn salvation (Ephesians 2:8-9; Titus 3:5)",
            "Every person needs a Savior to be reconciled to God"
          ]
        },
        {
          title: "2. The Provision of Salvation",
          content: [
            "God loved the world and sent His Son (John 3:16)",
            "Jesus lived a sinless life and died as a substitute for sinners (2 Corinthians 5:21; 1 Peter 3:18)",
            "His blood atones for sin and cleanses from all unrighteousness (1 John 1:7; Hebrews 9:22)",
            "Jesus rose from the dead, conquering sin and death (Romans 4:25; 1 Corinthians 15:3-4)",
            "Salvation is offered freely to all who believe (Romans 10:9-10)"
          ]
        },
        {
          title: "3. How to Receive Salvation",
          content: [
            "**Acknowledge your sin:** Recognize your need for a Savior (Luke 18:13)",
            "**Believe in Jesus Christ:** Trust that He died for your sins and rose again (Acts 16:31; Romans 10:9)",
            "**Confess Jesus as Lord:** Publicly declare your faith in Him (Romans 10:10)",
            "**Repent of sin:** Turn away from your old life and toward God (Acts 3:19)",
            "**Receive new life:** Be born again by the Spirit (John 3:3-7)"
          ]
        },
        {
          title: "4. The Results of Salvation",
          content: [
            "**Justification:** Declared righteous before God (Romans 5:1)",
            "**Adoption:** Welcomed into God's family as children (John 1:12; Galatians 4:5-6)",
            "**Forgiveness:** All sins past, present, and future are forgiven (Colossians 2:13-14)",
            "**Eternal Life:** Guaranteed life with God forever (John 5:24; 1 John 5:11-13)",
            "**The Indwelling Spirit:** The Holy Spirit lives within (Romans 8:9-11)"
          ]
        },
        {
          title: "5. Assurance and Security of Salvation",
          content: [
            "Believers can have assurance of their salvation (1 John 5:13)",
            "God keeps those who belong to Him secure (John 10:28-29; Philippians 1:6)",
            "The Holy Spirit testifies with our spirit that we are God's children (Romans 8:16)",
            "Changed life and love for others are evidence of genuine salvation (1 John 3:14)",
            "We are sealed with the Holy Spirit until the day of redemption (Ephesians 1:13-14)"
          ]
        }
      ],
      scripture: {
        text: "For by grace you have been saved through faith. And this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.",
        reference: "Ephesians 2:8-9"
      },
      keyPoints: [
        "All people have sinned and need salvation—no one can save themselves",
        "Jesus Christ died as a substitute for sinners and rose again",
        "Salvation is received by grace through faith in Jesus Christ",
        "The results include justification, adoption, forgiveness, and eternal life",
        "Believers can have full assurance of their salvation"
      ],
      reflection: "If you have received salvation, thank God for His amazing grace. If you have not, today is the day of salvation. Confess your sins, believe in Jesus Christ, and receive the gift of eternal life."
    }
  },
  {
    id: 6,
    title: "Christian Stewardship",
    duration: "20 min",
    content: {
      introduction: "Stewardship is the responsible management of all that God has entrusted to us. As believers, we recognize that everything we have—time, talents, treasure, and opportunities—belongs to God. We are merely managers, accountable to Him for how we use these resources for His glory and the advancement of His Kingdom.",
      sections: [
        {
          title: "1. The Foundation of Stewardship",
          content: [
            "God is the owner of all things (Psalm 24:1; Haggai 2:8)",
            "We are stewards, not owners, of what God has given (1 Corinthians 4:2)",
            "We will give account for how we manage God's resources (Matthew 25:14-30)",
            "Stewardship is an act of worship and gratitude to God (Romans 12:1)",
            "Faithful stewardship reflects our trust in God's provision"
          ]
        },
        {
          title: "2. Stewardship of Time",
          content: [
            "Time is a precious gift from God that cannot be reclaimed once spent (Ephesians 5:15-16)",
            "Prioritize time for God—worship, prayer, and Bible study (Matthew 6:33)",
            "Balance work, rest, family, and service to others (Ecclesiastes 3:1-8)",
            "Avoid wasting time on unprofitable pursuits (Ephesians 5:11)",
            "Use time intentionally for eternal purposes (Colossians 4:5)"
          ]
        },
        {
          title: "3. Stewardship of Talents",
          content: [
            "God gives each person unique abilities and gifts (Romans 12:6-8; 1 Peter 4:10)",
            "Talents are to be developed and used for God's glory (Matthew 25:14-30)",
            "Hiding or neglecting gifts is unfaithfulness (Matthew 25:24-28)",
            "Serve others with your gifts in humility (1 Peter 4:10-11)",
            "The Church is strengthened when each member uses their gifts (1 Corinthians 12:12-27)"
          ]
        },
        {
          title: "4. Stewardship of Treasure",
          content: [
            "**Tithing:** Giving the first tenth to God as an act of honor and trust (Malachi 3:10; Proverbs 3:9-10)",
            "**Offerings:** Giving beyond the tithe as God prospers and leads (2 Corinthians 9:7)",
            "Give cheerfully, not reluctantly or under compulsion (2 Corinthians 9:6-7)",
            "Store up treasures in heaven, not on earth (Matthew 6:19-21)",
            "Generous giving leads to God's abundant blessing (Luke 6:38; 2 Corinthians 9:8)"
          ]
        },
        {
          title: "5. Rewards of Faithful Stewardship",
          content: [
            "God promises to open the windows of heaven for faithful givers (Malachi 3:10)",
            "Faithful stewards will hear 'Well done, good and faithful servant' (Matthew 25:21)",
            "God entrusts more to those who are faithful with little (Luke 16:10-12)",
            "Stewardship leads to contentment and freedom from materialism (1 Timothy 6:6-10)",
            "Eternal rewards await faithful stewards (1 Corinthians 3:12-14)"
          ]
        }
      ],
      scripture: {
        text: "Moreover, it is required of stewards that they be found faithful.",
        reference: "1 Corinthians 4:2"
      },
      keyPoints: [
        "God owns everything; we are stewards accountable to Him",
        "We must wisely manage our time for eternal purposes",
        "Our talents should be developed and used for God's glory",
        "Tithing and generous giving honor God and invite His blessing",
        "Faithful stewardship leads to greater responsibility and eternal rewards"
      ],
      reflection: "Evaluate your stewardship in each area—time, talents, and treasure. Are you managing God's resources faithfully? Ask God to help you be a more faithful steward for His glory."
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
  },
  // Lesson 3: Prayer and Communion with God
  {
    id: 21,
    lessonId: 3,
    question: "What is prayer?",
    options: [
      "A religious ritual performed weekly",
      "Direct communication with God",
      "Reciting memorized phrases",
      "Meditation on self-improvement"
    ],
    correctAnswer: 1
  },
  {
    id: 22,
    lessonId: 3,
    question: "Which type of prayer involves praying on behalf of others?",
    options: [
      "Adoration",
      "Confession",
      "Supplication",
      "Intercession"
    ],
    correctAnswer: 3
  },
  {
    id: 23,
    lessonId: 3,
    question: "According to James 1:6, what hinders answered prayer?",
    options: [
      "Praying too often",
      "Doubt and unbelief",
      "Praying silently",
      "Praying alone"
    ],
    correctAnswer: 1
  },
  {
    id: 24,
    lessonId: 3,
    question: "What does 1 Thessalonians 5:17 instruct believers to do?",
    options: [
      "Pray once a day",
      "Pray without ceasing",
      "Pray only in church",
      "Pray with others only"
    ],
    correctAnswer: 1
  },
  {
    id: 25,
    lessonId: 3,
    question: "Which of the following is NOT a hindrance to prayer?",
    options: [
      "Unconfessed sin",
      "Unforgiveness",
      "Praying in Jesus' name",
      "Wrong motives"
    ],
    correctAnswer: 2
  },
  // Lesson 4: The Holy Spirit
  {
    id: 26,
    lessonId: 4,
    question: "The Holy Spirit is:",
    options: [
      "Just a force or energy",
      "An angel",
      "The third Person of the Trinity",
      "A symbol of God's power"
    ],
    correctAnswer: 2
  },
  {
    id: 27,
    lessonId: 4,
    question: "Which scripture lists the fruit of the Spirit?",
    options: [
      "Romans 12:1-2",
      "Galatians 5:22-23",
      "Ephesians 6:10-18",
      "1 Corinthians 13:4-7"
    ],
    correctAnswer: 1
  },
  {
    id: 28,
    lessonId: 4,
    question: "What does the Holy Spirit give believers for service?",
    options: [
      "Natural talents only",
      "Spiritual gifts",
      "Wealth and prosperity",
      "Political power"
    ],
    correctAnswer: 1
  },
  {
    id: 29,
    lessonId: 4,
    question: "According to Acts 1:8, the Holy Spirit gives believers:",
    options: [
      "Wealth",
      "Fame",
      "Power to be witnesses",
      "Long life"
    ],
    correctAnswer: 2
  },
  {
    id: 30,
    lessonId: 4,
    question: "Ephesians 5:18 commands believers to:",
    options: [
      "Be filled with knowledge",
      "Be filled with the Spirit",
      "Be filled with works",
      "Be filled with self-confidence"
    ],
    correctAnswer: 1
  },
  // Lesson 5: Understanding Salvation
  {
    id: 31,
    lessonId: 5,
    question: "According to Romans 3:23, who has sinned?",
    options: [
      "Only unbelievers",
      "Only adults",
      "All people",
      "Only criminals"
    ],
    correctAnswer: 2
  },
  {
    id: 32,
    lessonId: 5,
    question: "What is the wages of sin according to Romans 6:23?",
    options: [
      "Sickness",
      "Poverty",
      "Death",
      "Loneliness"
    ],
    correctAnswer: 2
  },
  {
    id: 33,
    lessonId: 5,
    question: "Salvation is received by:",
    options: [
      "Good works",
      "Church membership",
      "Grace through faith",
      "Religious rituals"
    ],
    correctAnswer: 2
  },
  {
    id: 34,
    lessonId: 5,
    question: "Which of the following is a result of salvation?",
    options: [
      "Guaranteed wealth",
      "Justification before God",
      "Freedom from all problems",
      "Physical immortality"
    ],
    correctAnswer: 1
  },
  {
    id: 35,
    lessonId: 5,
    question: "According to John 10:28-29, believers are:",
    options: [
      "Kept secure by God",
      "Always at risk of losing salvation",
      "Required to earn salvation daily",
      "Saved by their own efforts"
    ],
    correctAnswer: 0
  },
  // Lesson 6: Christian Stewardship
  {
    id: 36,
    lessonId: 6,
    question: "According to Psalm 24:1, who owns everything?",
    options: [
      "Governments",
      "The wealthy",
      "The Lord",
      "Individuals"
    ],
    correctAnswer: 2
  },
  {
    id: 37,
    lessonId: 6,
    question: "What is a tithe?",
    options: [
      "Any amount given to church",
      "The first tenth given to God",
      "Money for the poor only",
      "Monthly church dues"
    ],
    correctAnswer: 1
  },
  {
    id: 38,
    lessonId: 6,
    question: "According to 2 Corinthians 9:7, how should we give?",
    options: [
      "Reluctantly",
      "Under compulsion",
      "Cheerfully",
      "Secretly"
    ],
    correctAnswer: 2
  },
  {
    id: 39,
    lessonId: 6,
    question: "What happens to those who are faithful with little (Luke 16:10)?",
    options: [
      "They receive nothing more",
      "They are entrusted with more",
      "They become wealthy",
      "They are tested further"
    ],
    correctAnswer: 1
  },
  {
    id: 40,
    lessonId: 6,
    question: "Which of the following is NOT an area of stewardship?",
    options: [
      "Time",
      "Talents",
      "Treasure",
      "Temptation"
    ],
    correctAnswer: 3
  }
];