export type Block = "T" | "TO" | "O" | "W" | "C" | "CC" | "U";
export type Social = "fb" | "insta" | "metawiki" | "linkedin" | "website" | "slack" | "twitter" | "email";
export interface ISociety {
  symbol: string;
  name: string;
  year: number;
  size: "S" | "M" | "L" | "XL" | "NA";
  tsg_recognized: boolean;
  links: {
    [key in Social]?: string
  };
  description: string;
  /**
   * Block of the periodic table:
   * T - Technical
   * O - Organizational
   * C - Creative
   * W - Welfare
   * U - Uncategorized
   *
   * A combination of these letters denotes a special block that is either a cross between two blocks or a sub-block.
   */
  block: Block;
  inactive?: boolean;
}

export const SOCIETIES: ISociety[] = [
  {
    symbol: 'Ar',
    name: 'Aerial Robotics Kharagpur',
    year: 2013,
    size: 'M',
    tsg_recognized: true,
    description: 'The ARK consists of a group of students working towards building autonomous aerial vehicles, based at Indian Institute of Technology Kharagpur.',
    block: 'T',
    links: { fb: 'https://www.facebook.com/aerialroboticskgp' }
  },
  {
    symbol: 'Aw',
    name: 'Awaaz',
    year: 2006,
    size: 'L',
    tsg_recognized: false,
    description: "आवाज़ पिछले १० वर्षों से कैम्पस सम्बन्धी ताज़ा समाचार तथा सामयिक विषयों पे समीक्षा प्रस्तुत करती रही है | इन वर्षों में कैम्पस में काफी कुछ बदला है और राजभाषा हिंदी के माध्यम से 'आवाज़' आपसे अनवरत जुड़ी रही |",
    block: 'U',
    links: { fb: 'https://www.facebook.com/awaaziitkgp/' }
  },
  {
    symbol: 'Ag',
    name: 'Autonomous Ground vehicle Research Group',
    year: 2007,
    size: 'NA',
    tsg_recognized: false,
    description: 'AGV is an interdisciplinary team aspiring to win the Intelligent Ground Vehicle Competition held at Oakland University and be involved in the Research work related to autonomous and mobile robots.',
    block: 'T',
    links: { fb: 'https://www.facebook.com/agvkgp/' }
  },
  {
    symbol: 'Gt',
    name: 'The KGPian Game Theory Society',
    year: 2010,
    size: 'M',
    tsg_recognized: false,
    description: 'KGTS is dedicated towards spreading awareness, knowledge and application of Game Theory. They are involved in publishing the half-yearly newspaper, "The Strategist".',
    block: 'T',
    links: { fb: 'https://www.facebook.com/The.KGTS/' }
  },
  {
    symbol: 'Qc',
    name: 'Quiz Club',
    year: 2003,
    size: 'S',
    tsg_recognized: true,
    description: 'The Quiz Club conducts branstorming sessions and mock quizzes to promote the quizzing culture in the campus. The club usually meets once a week and conducts quizzes.',
    block: 'C',
    links: { fb: 'https://www.facebook.com/iitkgp.quizclub/', insta: 'https://www.instagram.com/iitkgp.qc/' }
  },
  {
    symbol: 'Sp',
    name: 'Spectra',
    year: 2007,
    size: 'M',
    tsg_recognized: true,
    description: 'Spectra is the Fine Arts Group of the campus which aims to bring together like-minded people who have the shared love for art.',
    block: 'C',
    links: { fb: 'https://www.facebook.com/Spectra.IITKGP/' }
  },
  {
    symbol: 'Dr',
    name: 'Bengali Technology Dramatics Society (Druheen)',
    year: 1970,
    size: 'XL',
    tsg_recognized: true,
    description: 'Technology Dramatics Society Druheen is one of the oldest societies of IIT Kharagpur. It is a dedicated group for theatrical plays in Bengali.',
    block: 'C',
    links: { fb: 'https://www.facebook.com/tdsdruheen/' }
  },
  {
    symbol: 'Wt',
    name: 'Western Technology Music Society',
    year: 2008,
    size: 'S',
    tsg_recognized: true,
    description: 'WTMS is a group of self learned musicians who explore different genres of western music. They perform an hourly concert every semester and keep the musical veins throbbing in the campus.',
    block: 'CC',
    links: { fb: 'https://www.facebook.com/wtmsiitkgp/' }
  },
  {
    symbol: 'Lg',
    name: 'KGP Language Learners’ Group',
    year: 2015,
    size: 'S',
    tsg_recognized: false,
    description: 'An interest driven group of enthusiastic Language Learners who use the group as a platform to reach other learners, organize meetups and share language learning resources.',
    block: 'U',
    links: { fb: 'https://www.facebook.com/groups/732492363547374/' },
    inactive: true
  },
  {
    symbol: 'Au',
    name: 'Autonomous Underwater Vehicle Research Group',
    year: 2010,
    size: 'S',
    tsg_recognized: false,
    description: 'The IIT Kharagpur AUV Team (nicknamed iKat) was conceived to develop an autonomous underground vehicle to participate in student level competitions and demonstrate the Robotics and Intelligent Systems Lab of the campus.',
    block: 'T',
    links: { fb: 'https://www.facebook.com/auviitkgp/' },
    inactive: true
  },
  {
    symbol: 'St',
    name: 'Space Technology Students’ Society (spAts)',
    year: 2008,
    size: 'M',
    tsg_recognized: false,
    description: 'spAts functions as the student body of Kalpana Chawla Space Technology Cell, the contact point of ISRO at IIT Kharagpur.They are dedicated to explore space technology and astronomy by conducting lectures, events and workshops.',
    block: 'TO',
    links: { fb:'https://www.facebook.com/spAts.iitkgp', insta: 'https://www.instagram.com/spats.nssc.iitkgp/', linkedin:'https://www.linkedin.com/company/spats/', website: 'https://spats.co.in/', metawiki: 'https://wiki.metakgp.org/w/Space_Technology_Students%27_Society' }
  },
  {
    symbol: 'Bc',
    name: 'Business Club',
    year: 2009,
    size: 'M',
    tsg_recognized: true,
    description: 'B-Club is the campus society for all things business. A student run forum, BClub has built an analytical framework with their technical background with which they apply in domains related to business.',
    block: 'O',
    links: { fb: 'https://www.facebook.com/bclubkgp/' }
  },
  {
    symbol: 'Li',
    name: 'Technology Literary Society',
    year: 1951,
    size: 'M',
    tsg_recognized: true,
    description: "TLS, one of the oldest societies of the campus, has been an outlet for the literary skills of the Kgp populace. Their notable works include Hang On's, Pulse and Alankar. They also hold the events 'Kavyanjali', 'Kavya Sandhya', and 'Farrago.'",
    block: 'C',
    links: { fb: 'https://www.facebook.com/tlsiitkgp/', insta: 'https://www.instagram.com/tls.iitkgp' }
  },
  {
    symbol: 'Pr',
    name: 'Telugu technology Dramatics Society (Prasthanam)',
    year: 2010,
    size: 'XL',
    tsg_recognized: true,
    description: 'Prasthanam is the youngest of all dramatics societies formed to assimilate and integrate the rich culture and dramatics heritage of the Telugu speaking people into the mainstream culture of IIT Kharagpur.',
    block: 'C',
    links: { fb: 'https://www.facebook.com/Prasthanam.TDS/' }
  },
  {
    symbol: 'Fp',
    name: 'Technology Filmmaking and Photography Society',
    year: 2011,
    size: 'L',
    tsg_recognized: true,
    description: 'TFPS is the campus group for students interested in filmmaking, photography and film-appreciation. The society has been a launchpad for students interested in pursuing careers in the Entertainment Industry.',
    block: 'CC',
    links: { fb: 'https://www.facebook.com/tfps.iitkgp/' }
  },
  {
    symbol: 'Fm',
    name: 'Food/Mess Monitoring Committee',
    year: 2010,
    size: 'S',
    tsg_recognized: true,
    description: 'Helps in quality control of the functioning of the mess across all halls and food outlets in the campus.',
    block: 'U',
    links: { fb: 'https://www.facebook.com/groups/402924043246682/' },
    inactive: true
  },
  {
    symbol: 'Dt',
    name: 'Kharagpur Data Analytics Group',
    year: 2014,
    size: 'S',
    tsg_recognized: true,
    description: 'KDAG is aimed at bringing Data Analytics and Machine Learning enthusiasts together under the umbrella of a single society. The group holds selections each year and conducts workshops and helps assimilate analytics skills in the students.',
    block: 'T',
    links: { fb: 'https://www.facebook.com/kgpdag/' }
  },
  {
    symbol: 'Rx',
    name: 'Technology Robotix Society',
    year: 2001,
    size: 'M',
    tsg_recognized: true,
    description: 'Technology Robotix Society conducts activities and projects related to robotics in the campus. With its reach expanding steadily each year, it has also cemented its position as one of the nerve centres of amateur robotics in India.',
    block: 'TO',
    links: { fb: 'https://www.facebook.com/robotixiitkgp/' }
  },
  {
    symbol: 'Os',
    name: 'Kharagpur Open Source Society',
    year: 2013,
    size: 'M',
    tsg_recognized: false,
    description: 'A bunch of open source enthusiasts and previously called the ‘Firefox club’, KOSS is aimed at creating awareness about web and the open source movement.',
    block: 'TO',
    links: { insta: 'https://www.instagram.com/kossiitkgp/', website: 'https://kossiitkgp.org', fb: 'https://www.facebook.com/kossiitkgp/' }
  },
  {
    symbol: 'Ac',
    name: 'Alumni Cell',
    year: 2008,
    size: 'L',
    tsg_recognized: false,
    description: 'Alumni cell is a student body in IIT Kharagpur with the aim to foster and bridge the interaction between the institute and its Alumni. IIT Kharagpur has always maintained strong Alumni –Institute relation.',
    block: 'O',
    links: { fb: 'https://www.facebook.com/iitkgp.alumnicell/' }
  },
  {
    symbol: 'Sf',
    name: 'Spring Fest',
    year: 1960,
    size: 'XL',
    tsg_recognized: true,
    description: 'Spring Fest is the annual Social and Cultural fest of IIT Kharagpur, West Bengal held in the month of January.',
    block: 'O',
    links: { fb: 'https://www.facebook.com/springfest.iitkgp/' }
  },
  {
    symbol: 'Br',
    name: 'Branding and Relations Cell',
    year: 2015,
    size: 'S',
    tsg_recognized: false,
    description: 'BARC works to bring media attention to notable events in the campus and promote IIT Kharagpur as a reputable brand.',
    block: 'O',
    links: {
      fb: 'https://www.facebook.com/Branding-And-Relations-Cell-IIT-Kharagpur-123930134625611/'
    }
  },
  {
    symbol: 'Ai',
    name: 'AIESEC IITKGP',
    year: 2010,
    size: 'L',
    tsg_recognized: false,
    description: 'AIESEC is focused on providing a platform for youth leadership development by providing opportunities to participate in International Internships, Experiential leadership opportunities and a global learning environment.',
    block: 'O',
    links: { fb: 'https://www.facebook.com/aieseciitkgp/' }
  },
  {
    symbol: 'Cq',
    name: 'Communiqué',
    year: 2006,
    size: 'S',
    tsg_recognized: true,
    description: 'Communique aims to be an interface between professional communication experts and individual students and work with the students to ensure that there is a perceptible change in the level of communication skills in the campus.',
    block: 'O',
    links: { fb: 'https://www.facebook.com/communique.iitkgp/' }
  },
  {
    symbol: 'Ta',
    name: 'IIT Tech Ambit',
    year: 2018,
    size: 'L',
    tsg_recognized: false,
    description: 'The IIT Tech Ambit covers research and tech stories from the PAN IIT ecosystem.',
    block: 'C',
    links: { fb: 'https://www.facebook.com/iit.tech.ambit/' }
  },
  {
    symbol: 'Ph',
    name: 'Hindi Technology Dramatics Society (Pravaah)',
    year: 1967,
    size: 'XL',
    tsg_recognized: true,
    description: 'Pravaah is the Hindi theater group of IIT Kharagpur which aims to create awareness about theatre and its various aspects in the students by bringing together people who are interested in the performing arts.',
    block: 'C',
    links: { fb: 'https://www.facebook.com/Pravaah/' }
  },
  {
    symbol: 'Bk',
    name: 'Technology Dance Society (Breakfree)',
    year: 2012,
    size: 'L',
    tsg_recognized: true,
    description: 'Breakfree is the campus dance society that acts as a common platform for students interested in dancing and choreography, and exploring the various genres of dance.',
    block: 'CC',
    links: { fb: 'https://www.facebook.com/Breakfreenowornever/' }
  },
  {
    symbol: 'Ch',
    name: 'Chess Club, IIT Kharagpur',
    year: 2017,
    size: 'NA',
    tsg_recognized: true,
    description: 'Chess Club is an open-for-all club meant to boost the enthusiasm for chess and improve the chess culture in IIT Kharagpur.',
    block: 'U',
    links: {
      insta: 'https://www.instagram.com/chessclub_iitkgp',
      fb: 'https://www.facebook.com/ChessClubIITKGP/'
    }
  },
  {
    symbol: 'Tk',
    name: 'Team KART',
    year: 2008,
    size: 'M',
    tsg_recognized: false,
    description: 'TeamKART is the official Formula Student team of IIT Kharagpur. They are a group of students who design, manufacture and test Formula style racecars and represent IIT Kharagpur in FSAE competitions.',
    block: 'TO',
    links: { fb: 'https://www.facebook.com/TeamKART/' }
  },
  {
    symbol: 'Kr',
    name: 'Kharagpur Robosoccer Students’ Group',
    year: 2008,
    size: 'L',
    tsg_recognized: true,
    description: "A students' group in IIT Kharagpur which works on building autonomous bots for playing soccer and participating in international events like F.I.R.A. World Championship and RoboCup soccer.",
    block: 'T',
    links: { fb: 'https://www.facebook.com/krssg/' }
  },
  {
    symbol: 'Cy',
    name: 'Child Rights and You KGP',
    year: 2014,
    size: 'NA',
    tsg_recognized: false,
    description: 'CRY IITKGP a group of volunteers working under the Child Rights and You (CRY) IIT Kharagpur Volunteer Chapter. CRY is an internationally renowned NGO working on Child Rights in India & abroad for over 30 years.',
    block: 'W',
    links: { fb: 'https://www.facebook.com/CRY.IITKGP/' }
  },
  {
    symbol: 'Gw',
    name: 'Gopali Youth Welfare Society',
    year: 2002,
    size: 'NA',
    tsg_recognized: false,
    description: 'GYWS is a NGO run by a team of students and professors of the campus, with assistance from local social enthusiasts. GYWS aims to improve the living standards of the people of Gopali (a village located 5 km from the IIT campus)',
    block: 'W',
    links: { fb: 'https://www.facebook.com/gyws.iitkgp/' }
  },
  {
    symbol: 'Am',
    name: 'Ambar',
    year: 2015,
    size: 'M',
    tsg_recognized: true,
    description: 'Ambar is the Gender and Sexual diversity group of the campus for the LGBTQ community residing in the campus comprised of current students, alumni, staff and family of staff.',
    block: 'W',
    links: { fb: 'https://www.facebook.com/ambar.iitkgp/' }
  },
  {
    symbol: 'Mk',
    name: 'metaKGP',
    year: 2015,
    size: 'S',
    tsg_recognized: false,
    description: 'metaKGP is a collective interest group of engineers, hackers, and artists from IIT Kharagpur, who collaborate on various technical and non-technical projects.',
    block: 'TO',
    links: { slack: 'https://slack.metakgp.org', insta: 'https://instagram.com/metakgp_/', metawiki: 'https://wiki.metakgp.org/w/Metakgp:About', website: 'https://metakgp.github.io' }
  },
  {
    symbol: 'Ni',
    name: 'NET Impact IIT Kharagpur',
    year: 2015,
    size: 'XL',
    tsg_recognized: false,
    description: 'Net Impact IIT Kharagpur aims at creating a positive impact in the campus. The students can use their platform to develop themselves for the type of career they are looking for.',
    block: 'W',
    links: { fb: 'https://www.facebook.com/netimpactiitkharagpur/' },
    inactive: true
  },
  {
    symbol: 'Ec',
    name: 'Entrepreneurship Cell',
    year: 2006,
    size: 'L',
    tsg_recognized: false,
    description: 'E-Cell aims to foster the spirit of entrepreneurship among college students in India and nurture young people with bright ideas. It is ranked as one of the most active entrepreneurship promoting bodies by several rating agencies.',
    block: 'O',
    links: { fb: 'https://www.facebook.com/ecell.iitkgp/' }
  },
  {
    symbol: 'Kj',
    name: 'Kshitij',
    year: 2004,
    size: 'XL',
    tsg_recognized: true,
    description: 'KTJ is the annual techno-management fest of the campus. It aims to promote the technical and managerial output of the nation by providing a platform for the youth to display their inputs and skills.',
    block: 'O',
    links: { fb: 'https://www.facebook.com/ktj.iitkgp/' }
  },
  {
    symbol: 'Ir',
    name: 'International Relations Cell',
    year: 2015,
    size: 'S',
    tsg_recognized: false,
    description: 'IRC is formed under Dean Alumni Affairs and International Relations, with the aim to develop and manage partnerships, linkages and networks with institutions of academic excellence and repute all over the world.',
    block: 'W',
    links: { fb: 'https://www.facebook.com/IRCIITKGP/' }
  },
  {
    symbol: 'Fc',
    name: 'Finance Club, IIT Kharagpur',
    year: 2019,
    size: 'NA',
    tsg_recognized: false,
    description: 'Finance Club conducts events, initiates programs and acts as an intermediary to ensure maximum benefit to students including, but not limited to those in the Financial Engineering program.',
    block: 'O',
    links: { fb: 'https://www.facebook.com/financeclubiitkgp/' }
  },
  {
    symbol: 'Ds',
    name: 'Debating Society',
    year: 2009,
    size: 'M',
    tsg_recognized: true,
    description: "The Debating Society, IIT Kharagpur, is a full-fledged society under the Technology Students' Gymkhana, IIT Kharagpur, which aims to promote the culture of debating on the campus and provides a platform to bring all the debaters together.",
    block: 'C',
    links: { fb: 'https://www.facebook.com/kgpdebsoc/' }
  },
  {
    symbol: 'Sa',
    name: 'The Scholars’ Avenue',
    year: 2005,
    size: 'M',
    tsg_recognized: false,
    description: 'The Scholars’ Avenue (TSA) is the independent student run English newsbody of the campus. TSA reports campus events and functions as a public interface between students and the administration. Often, they make cool stuff like the table you are reading right now.',
    block: 'C',
    links: { insta: 'https://www.instagram.com/scholarsavenue', fb: 'https://www.facebook.com/scholarsavenue/', email: 'mailto:thescholarsavenue@gmail.com' }
  },
  {
    symbol: 'En',
    name: 'English Technology Dramatics Society (Encore)',
    year: 1980,
    size: 'XL',
    tsg_recognized: true,
    description: 'Encore is the English dramatics society of the campus. Their goal is to enjoy the moments on stage and give their audience a worthwhile experience. They go by their tagline "Stage humare baap ka hai".',
    block: 'C',
    links: { fb: 'https://www.facebook.com/TDSEncore/', insta: 'https://www.instagram.com/iitkgpencore' }
  },
  {
    symbol: 'Et',
    name: 'Eastern Technology Music Society',
    year: 2008,
    size: 'S',
    tsg_recognized: true,
    description: 'ETMS is a group of self-learned musicians who find a common interest in the wide sea of music. They perform twice annually covering a spectrum of genres ranging from classical to fusion to popular bollywood hits.',
    block: 'CC',
    links: { fb: 'https://www.facebook.com/ETMSIITKGP/' }
  },
  {
    symbol: 'Cc',
    name: 'Technology Comedy Club',
    year: 2019,
    size: 'M',
    tsg_recognized: false,
    description: 'Comedy Club is a society for stand-up and comedy enthusiasts.',
    block: 'U',
    links: {
      insta: 'https://www.instagram.com/comedy_club_iit_kharagpur',
      fb: 'https://www.facebook.com/comedyclubiitkgp/'
    }
  },
  {
    symbol: 'Ev',
    name: 'Electric Ground Vehicle',
    year: 2016,
    size: 'M',
    tsg_recognized: false,
    description: 'EVG is involved in building Electric Vehicles that are fast, affordable and energy-efficient.',
    block: 'T',
    links: { fb: 'https://www.facebook.com/EVG.IITKGP/' },
    inactive: true
  },
  {
    symbol: 'Sw',
    name: 'Swarm Robotics',
    year: 2016,
    size: 'M',
    tsg_recognized: false,
    description: 'Swarm explores the contemporary field of distributed algorithms for robot swarms and their implementation.',
    block: 'TO',
    links: { fb: 'https://www.facebook.com/swarmroboticskgp' },
    inactive: true
  },
  {
    symbol: 'Ma',
    name: 'Manga and Anime Society Kharagpur',
    year: 2019,
    size: 'S',
    tsg_recognized: false,
    description: 'MASK is a group of otakus engaging in art, AMV making, manga creation and quizzing.',
    block: 'C',
    links: { website: 'https://kgpmask.club/', insta: 'https://www.instagram.com/maskiitkgp/', fb: 'https://www.facebook.com/maskiitkgp' }
  },
  {
    symbol: 'Pd',
    name: 'ProDex',
    year: 2012,
    size: 'M',
    tsg_recognized: false,
    description: 'ProDex is a technical society based on the concept of Product Design with an objective to fuel the technological advancement of India through its activities.',
    block: 'TO',
    links: { fb: 'https://www.facebook.com/prodex.iitkgp/' }
  },
  {
    symbol: 'As',
    name: 'Technology Adventure Society',
    year: 2008,
    size: 'L',
    tsg_recognized: true,
    description: 'TAdS is the adventure society of the campus that brings extreme sports closer to the students. They explore Mountaineering, Rock Climbing, Mountain Biking, Hang Gliding, Bungee jumping, and organize adventure trips in the country for students.',
    block: 'O',
    links: {
      website: 'https://www.tadsiitkgp.in/',
      insta: 'https://www.instagram.com/tads_iitkgp/',
      fb: 'https://www.facebook.com/TAdS.IIT/'
    }
  },
  {
    symbol: 'Rm',
    name: 'IIT Kharagpur Recreational Mathematics Club',
    year: 2018,
    size: 'XL',
    tsg_recognized: false,
    description: 'The recreational math club hosts weekly sessions and reading groups for math lovers.',
    block: 'C',
    links: { fb: 'https://www.facebook.com/groups/300564543844072' }
  },
  {
    symbol: 'Dc',
    name: '180 Degree Consulting, IIT Kharagpur',
    year: 2019,
    size: 'M',
    tsg_recognized: false,
    description: '180 Degree Consulting provides socially conscious organizations around the world with high quality and affordable consulting services.',
    block: 'O',
    links: { fb: 'https://www.facebook.com/180dckgp/' }
  },
  {
    symbol: 'Tg',
    name: 'Technology Transfer Group',
    year: 2007,
    size: 'L',
    tsg_recognized: false,
    description: "Technology Transfer Group (TTG) is a students' initiative under the aegis of Sponsored Research & Industrial Consultancy (SRIC), IIT Kharagpur, which believes in the potential of the Institute as a premier Research & Development center.",
    block: 'O',
    links: { fb: 'https://www.facebook.com/TTG.SRIC/' }
  },
  {
    symbol: 'Sg',
    name: 'Student Welfare Group',
    year: 2011,
    size: 'M',
    tsg_recognized: true,
    description: 'SWG helps students in improving their skills, attitude and resources necessary to both succeed in the college environment as well as to pursue productive and satisfying lives by organizing different activities on the campus.',
    block: 'W',
    links: { fb: 'https://www.facebook.com/SWGIITKGP/' }
  },
  {
    symbol: 'Ig',
    name: 'Institute Wellness Group',
    year: 2017,
    size: 'M',
    tsg_recognized: true,
    description: "Under the Students' Welfare portfolio of the Technology Students' Gymkhana, IWG consists of trained students who conduct welfare activities among the student community and act as primary nodes for mature student counselling.",
    block: 'W',
    links: { fb: 'https://www.facebook.com/iwg.iitkgp/' }
  },
  {
    symbol: 'Tc',
    name: 'Aroma: Technology Culinary Arts Society',
    year: 2019,
    size: 'L',
    tsg_recognized: true,
    description: 'The Culinary Arts Society encourages and facilitates students to learn and develop a diverse set of culinary arts and specific cooking techniques.',
    block: 'C',
    links: { fb: 'https://www.facebook.com/aroma.iitkgp/' }
  },
  {
    symbol: 'Ck',
    name: 'Click KGP',
    year: 2011,
    size: 'M',
    tsg_recognized: false,
    description: 'Click KGP is a group of photo-enthusiasts with the sole aim of capturing the campus, people and culture of IIT Kharagpur.',
    block: 'C',
    links: { fb: 'https://www.facebook.com/clickkgp/' }
  },
  {
    symbol: 'Lo',
    name: 'La Obscura',
    year: 2018,
    size: 'M',
    tsg_recognized: false,
    description: 'La Obscura is a group that features photographs from KGP and all over India as well.',
    block: 'C',
    links: {
      fb: 'https://www.facebook.com/LaObscuraPhotographyandVisualArt/'
    },
    inactive: true
  },
  {
    symbol: 'Cg',
    name: 'Computer Graphics Society',
    year: 2015,
    size: 'NA',
    tsg_recognized: true,
    description: "IIT KGP's first of its kind graphics development group focused on game development, AR/VR and graphics research.",
    block: 'CC',
    links: { fb: 'https://www.facebook.com/cgsiitkgp/' }
  },
  {
    symbol: 'Sc',
    name: 'KGP Speedcubers',
    year: 2015,
    size: 'NA',
    tsg_recognized: false,
    description: 'The KGP Speedcubers is a hobby group for speedcubers in IIT Kharagpur that organizes workshops and competitions on campus.',
    block: 'U',
    links: { fb: 'https://www.facebook.com/kgpspeedcubers/' },
    inactive: true
  },
  {
    symbol: 'Tr',
    name: 'Team TRAK',
    year: 2024,
    size: 'M',
    tsg_recognized: false,
    description: "Railway Research Students' Group of IIT Kharagpur",
    block: 'T',
    links: { fb: 'https://www.facebook.com/team.trakgp', insta: 'https://www.instagram.com/team_trakgp' }
  },
  {
    symbol: 'Gc',
    name: 'Grimoire of Code',
    year: 2019,
    size: 'M',
    tsg_recognized: true,
    description: "Grimoire of Code, abbreviated as GoC, is IIT Kharagpur's competitive programming club involving a group of passionate competitive programmers. The club conducts global and intra-campus competitive programming contests, and workshops for students on campus, fostering the competitive programming culture within IIT Kharagpur.",
    block: 'TO',
    links: { insta: 'https://www.instagram.com/grimoireofcode', fb: 'https://www.facebook.com/goc.iitkgp' }
  },
  {
    symbol: 'Kq',
    name: 'Kharagpur Quantum Information and Computing Club',
    year: 2024,
    size: 'S',
    tsg_recognized: false,
    description: "KQICC is a society dedicated to conducting research and spreading awareness about Quantum Information and Computing in IIT Kharagpur. They conduct various events including workshops and hackathons for everyone on the campus.",
    block: 'TO',
    links: {
      insta: 'https://www.instagram.com/qicckgp/',
      linkedin: 'https://www.linkedin.com/company/quantum-information-and-computing-club/'
    }
  },
  {
    symbol: 'Es',
    name: 'Technology Environment Society',
    year: 2018,
    size: 'S',
    tsg_recognized: false,
    description: "TES is dedicated to the conservation and preservation of the environment, and to promoting sustainability in society. Through a range of initiatives and activities, TES strives towards more sustainable future by finding solutions to environmental challenges and promoting conservation efforts within the campus and the wider community.",
    block: 'TO',
    links: {
      metawiki: 'https://wiki.metakgp.org/w/Technology_Environment_Society',
      insta: 'https://www.instagram.com/tesiitkgp/',
      fb: 'https://www.facebook.com/TESIITKGP/',
      email: 'mailto:tesiitkgp@gmail.com'
    }
  },
  {
    symbol: 'Dv',
    name: "Developers' Society",
    year: 2022,
    size: 'M',
    tsg_recognized: true,
    description: "Developers' Society is an initiative to foster and encourage the development culture of IIT Kharagpur.",
    block: 'T',
    links: {
      linkedin: 'https://linkedin.com/company/devsoc-iitkgp',
      insta: 'https://www.instagram.com/devsoc.iitkgp',
      fb: 'https://www.facebook.com/devsoc.iitkgp',
      email: 'mailto:devsoc.iitkgp@gmail.com'
    }
  }
].filter((soc) => !('inactive' in soc) || !soc.inactive).sort((a, b) => a.year - b.year) as ISociety[];