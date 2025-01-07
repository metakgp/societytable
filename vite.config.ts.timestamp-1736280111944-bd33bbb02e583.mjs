// vite.config.ts
import { defineConfig } from "file:///home/uday/projs/societytable/node_modules/.pnpm/vite@5.2.11_sass@1.77.2/node_modules/vite/dist/node/index.js";
import react from "file:///home/uday/projs/societytable/node_modules/.pnpm/@vitejs+plugin-react@4.3.0_vite@5.2.11_sass@1.77.2_/node_modules/@vitejs/plugin-react/dist/index.mjs";

// src/data/societies.ts
var SOCIETIES_ALL = [
  {
    symbol: "Ar",
    name: "Aerial Robotics Kharagpur",
    year: 2013,
    size: "M",
    tsg_recognized: true,
    description: "The ARK consists of a group of students working towards building autonomous aerial vehicles, based at Indian Institute of Technology Kharagpur.",
    block: "T",
    links: {
      website: "https://arl-kgp.github.io/",
      fb: "https://www.facebook.com/aerialroboticskgp",
      email: "aerialroboticskharagpur@gmail.com",
      metawiki: "https://wiki.metakgp.org/w/Aerial_Robotics_Kharagpur"
    }
  },
  {
    symbol: "Aw",
    name: "Awaaz",
    year: 2006,
    size: "L",
    tsg_recognized: false,
    description: "\u0906\u0935\u093E\u091C\u093C \u092A\u093F\u091B\u0932\u0947 \u0967\u0966 \u0935\u0930\u094D\u0937\u094B\u0902 \u0938\u0947 \u0915\u0948\u092E\u094D\u092A\u0938 \u0938\u092E\u094D\u092C\u0928\u094D\u0927\u0940 \u0924\u093E\u091C\u093C\u093E \u0938\u092E\u093E\u091A\u093E\u0930 \u0924\u0925\u093E \u0938\u093E\u092E\u092F\u093F\u0915 \u0935\u093F\u0937\u092F\u094B\u0902 \u092A\u0947 \u0938\u092E\u0940\u0915\u094D\u0937\u093E \u092A\u094D\u0930\u0938\u094D\u0924\u0941\u0924 \u0915\u0930\u0924\u0940 \u0930\u0939\u0940 \u0939\u0948 | \u0907\u0928 \u0935\u0930\u094D\u0937\u094B\u0902 \u092E\u0947\u0902 \u0915\u0948\u092E\u094D\u092A\u0938 \u092E\u0947\u0902 \u0915\u093E\u092B\u0940 \u0915\u0941\u091B \u092C\u0926\u0932\u093E \u0939\u0948 \u0914\u0930 \u0930\u093E\u091C\u092D\u093E\u0937\u093E \u0939\u093F\u0902\u0926\u0940 \u0915\u0947 \u092E\u093E\u0927\u094D\u092F\u092E \u0938\u0947 '\u0906\u0935\u093E\u091C\u093C' \u0906\u092A\u0938\u0947 \u0905\u0928\u0935\u0930\u0924 \u091C\u0941\u0921\u093C\u0940 \u0930\u0939\u0940 |",
    block: "U",
    links: {
      website: "https://issuu.com/awaaz",
      fb: "https://www.facebook.com/awaaziitkgp/",
      insta: "https://www.instagram.com/awaaziitkgp",
      linkedin: "https://linkedin.com/company/awaaz-iit-kharagpur",
      metawiki: "https://wiki.metakgp.org/w/Awaaz"
    }
  },
  {
    symbol: "Ag",
    name: "Autonomous Ground vehicle Research Group",
    year: 2007,
    size: "NA",
    tsg_recognized: false,
    description: "AGV is an interdisciplinary team aspiring to win the Intelligent Ground Vehicle Competition held at Oakland University and be involved in the Research work related to autonomous and mobile robots.",
    block: "T",
    links: {
      fb: "https://www.facebook.com/agvkgp/",
      website: "https://www.agv.iitkgp.ac.in/",
      linkedin: "https://www.linkedin.com/company/autonomous-ground-vehicle-research-group",
      metawiki: "https://wiki.metakgp.org/w/AGV"
    }
  },
  {
    symbol: "Gt",
    name: "The KGPian Game Theory Society",
    year: 2010,
    size: "M",
    tsg_recognized: false,
    description: 'KGTS is dedicated towards spreading awareness, knowledge and application of Game Theory. They are involved in publishing the half-yearly newspaper, "The Strategist".',
    block: "U",
    links: {
      fb: "https://www.facebook.com/The.KGTS/",
      insta: "https://www.instagram.com/kgts.iitkgp/",
      website: "https://thekgts.wordpress.com/",
      metawiki: "https://wiki.metakgp.org/w/The_KGPian_Game_Theory_Society"
    }
  },
  {
    symbol: "Qc",
    name: "Quiz Club",
    year: 2003,
    size: "NA",
    tsg_recognized: true,
    description: "The Quiz Club conducts branstorming sessions and mock quizzes to promote the quizzing culture in the campus. The club usually meets once a week and conducts quizzes.",
    block: "C",
    links: {
      fb: "https://www.facebook.com/iitkgp.quizclub/",
      insta: "https://www.instagram.com/iitkgp.qc/"
    }
  },
  {
    symbol: "Sp",
    name: "Spectra",
    year: 2007,
    size: "M",
    tsg_recognized: true,
    description: "Spectra is the Fine Arts Group of the campus which aims to bring together like-minded people who have the shared love for art.",
    block: "C",
    links: {
      fb: "https://www.facebook.com/Spectra.IITKGP/",
      insta: "https://www.instagram.com/spectra.iitkgp/",
      metawiki: "https://wiki.metakgp.org/w/Spectra"
    }
  },
  {
    symbol: "Dr",
    name: "Bengali Technology Dramatics Society (Druheen)",
    year: 1970,
    size: "XL",
    tsg_recognized: true,
    description: "Technology Dramatics Society Druheen is one of the oldest societies of IIT Kharagpur. It is a dedicated group for theatrical plays in Bengali.",
    block: "C",
    links: {
      fb: "https://www.facebook.com/tdsdruheen/"
    }
  },
  {
    symbol: "Wt",
    name: "Western Technology Music Society",
    year: 2008,
    size: "S",
    tsg_recognized: true,
    description: "WTMS is a group of self learned musicians who explore different genres of western music. They perform an hourly concert every semester and keep the musical veins throbbing in the campus.",
    block: "CC",
    links: { fb: "https://www.facebook.com/wtmsiitkgp/" }
  },
  {
    symbol: "Lg",
    name: "KGP Language Learners\u2019 Group",
    year: 2015,
    size: "S",
    tsg_recognized: false,
    description: "An interest driven group of enthusiastic Language Learners who use the group as a platform to reach other learners, organize meetups and share language learning resources.",
    block: "U",
    links: { fb: "https://www.facebook.com/groups/732492363547374/" },
    inactive: true
  },
  {
    symbol: "Au",
    name: "Autonomous Underwater Vehicle Research Group",
    year: 2010,
    size: "S",
    tsg_recognized: false,
    description: "The IIT Kharagpur AUV Team (nicknamed iKat) was conceived to develop an autonomous underground vehicle to participate in student level competitions and demonstrate the Robotics and Intelligent Systems Lab of the campus.",
    block: "T",
    links: { fb: "https://www.facebook.com/auviitkgp/" },
    inactive: true
  },
  {
    symbol: "St",
    name: "Space Technology Students\u2019 Society (spAts)",
    year: 2008,
    size: "M",
    tsg_recognized: false,
    description: "spAts functions as the student body of Kalpana Chawla Space Technology Cell, the contact point of ISRO at IIT Kharagpur.They are dedicated to explore space technology and astronomy by conducting lectures, events and workshops.",
    block: "TO",
    links: { fb: "https://www.facebook.com/spAts.iitkgp", insta: "https://www.instagram.com/spats.nssc.iitkgp/", linkedin: "https://www.linkedin.com/company/spats/", website: "https://spats.co.in/", metawiki: "https://wiki.metakgp.org/w/Space_Technology_Students%27_Society" }
  },
  {
    symbol: "Bc",
    name: "Business Club",
    year: 2009,
    size: "M",
    tsg_recognized: true,
    description: "B-Club is the campus society for all things business. A student run forum, BClub has built an analytical framework with their technical background with which they apply in domains related to business.",
    block: "O",
    links: { fb: "https://www.facebook.com/bclubkgp/" }
  },
  {
    symbol: "Li",
    name: "Technology Literary Society",
    year: 1951,
    size: "M",
    tsg_recognized: true,
    description: "TLS, one of the oldest societies of the campus, has been an outlet for the literary skills of the Kgp populace. Their notable works include Hang On's, Pulse and Alankar. They also hold the events 'Kavyanjali', 'Kavya Sandhya', and 'Farrago.'",
    block: "C",
    links: { fb: "https://www.facebook.com/tlsiitkgp/", insta: "https://www.instagram.com/tls.iitkgp" }
  },
  {
    symbol: "Pr",
    name: "Telugu technology Dramatics Society (Prasthanam)",
    year: 2010,
    size: "XL",
    tsg_recognized: true,
    description: "Prasthanam is the youngest of all dramatics societies formed to assimilate and integrate the rich culture and dramatics heritage of the Telugu speaking people into the mainstream culture of IIT Kharagpur.",
    block: "C",
    links: { fb: "https://www.facebook.com/Prasthanam.TDS/" }
  },
  {
    symbol: "Fp",
    name: "Technology Filmmaking and Photography Society",
    year: 2011,
    size: "L",
    tsg_recognized: true,
    description: "TFPS is the campus group for students interested in filmmaking, photography and film-appreciation. The society has been a launchpad for students interested in pursuing careers in the Entertainment Industry.",
    block: "CC",
    links: { fb: "https://www.facebook.com/tfps.iitkgp/" }
  },
  {
    symbol: "Fm",
    name: "Food/Mess Monitoring Committee",
    year: 2010,
    size: "S",
    tsg_recognized: true,
    description: "Helps in quality control of the functioning of the mess across all halls and food outlets in the campus.",
    block: "U",
    links: { fb: "https://www.facebook.com/groups/402924043246682/" },
    inactive: true
  },
  {
    symbol: "Dt",
    name: "Kharagpur Data Analytics Group",
    year: 2014,
    size: "S",
    tsg_recognized: true,
    description: "KDAG is aimed at bringing Data Analytics and Machine Learning enthusiasts together under the umbrella of a single society. The group holds selections each year and conducts workshops and helps assimilate analytics skills in the students.",
    block: "T",
    links: { fb: "https://www.facebook.com/kgpdag/" }
  },
  {
    symbol: "Rx",
    name: "Technology Robotix Society",
    year: 2001,
    size: "M",
    tsg_recognized: true,
    description: "Technology Robotix Society conducts activities and projects related to robotics in the campus. With its reach expanding steadily each year, it has also cemented its position as one of the nerve centres of amateur robotics in India.",
    block: "TO",
    links: { fb: "https://www.facebook.com/robotixiitkgp/", insta: "https://www.instagram.com/robotix_iitkgp/", linkedin: "https://www.linkedin.com/company/technology-robotix-society/", website: "https://www.robotix.in/" }
  },
  {
    symbol: "Os",
    name: "Kharagpur Open Source Society",
    year: 2013,
    size: "M",
    tsg_recognized: false,
    description: "A bunch of open source enthusiasts and previously called the \u2018Firefox club\u2019, KOSS is aimed at creating awareness about web and the open source movement.",
    block: "TO",
    links: { insta: "https://www.instagram.com/kossiitkgp/", website: "https://kossiitkgp.org", fb: "https://www.facebook.com/kossiitkgp/" }
  },
  {
    symbol: "Ac",
    name: "Alumni Cell",
    year: 2008,
    size: "L",
    tsg_recognized: false,
    description: "Alumni cell is a student body in IIT Kharagpur with the aim to foster and bridge the interaction between the institute and its Alumni. IIT Kharagpur has always maintained strong Alumni \u2013Institute relation.",
    block: "O",
    links: { fb: "https://www.facebook.com/iitkgp.alumnicell/" }
  },
  {
    symbol: "Sf",
    name: "Spring Fest",
    year: 1960,
    size: "XL",
    tsg_recognized: true,
    description: "Spring Fest is the annual Social and Cultural fest of IIT Kharagpur, West Bengal held in the month of January.",
    block: "O",
    links: { fb: "https://www.facebook.com/springfest.iitkgp/" }
  },
  {
    symbol: "Br",
    name: "Branding and Relations Cell",
    year: 2015,
    size: "S",
    tsg_recognized: false,
    description: "BARC works to bring media attention to notable events in the campus and promote IIT Kharagpur as a reputable brand.",
    block: "O",
    links: {
      fb: "https://www.facebook.com/Branding-And-Relations-Cell-IIT-Kharagpur-123930134625611/"
    }
  },
  {
    symbol: "Ai",
    name: "AIESEC IITKGP",
    year: 2010,
    size: "L",
    tsg_recognized: false,
    description: "AIESEC is focused on providing a platform for youth leadership development by providing opportunities to participate in International Internships, Experiential leadership opportunities and a global learning environment.",
    block: "O",
    links: { fb: "https://www.facebook.com/aieseciitkgp/" }
  },
  {
    symbol: "Cq",
    name: "Communiqu\xE9",
    year: 2006,
    size: "S",
    tsg_recognized: true,
    description: "Communique aims to be an interface between professional communication experts and individual students and work with the students to ensure that there is a perceptible change in the level of communication skills in the campus.",
    block: "O",
    links: { fb: "https://www.facebook.com/communique.iitkgp/" }
  },
  {
    symbol: "Ta",
    name: "IIT Tech Ambit",
    year: 2018,
    size: "L",
    tsg_recognized: false,
    description: "The IIT Tech Ambit covers research and tech stories from the PAN IIT ecosystem.",
    block: "C",
    links: { fb: "https://www.facebook.com/iit.tech.ambit/" }
  },
  {
    symbol: "Ph",
    name: "Hindi Technology Dramatics Society (Pravaah)",
    year: 1967,
    size: "XL",
    tsg_recognized: true,
    description: "Pravaah is the Hindi theater group of IIT Kharagpur which aims to create awareness about theatre and its various aspects in the students by bringing together people who are interested in the performing arts.",
    block: "C",
    links: { fb: "https://www.facebook.com/Pravaah/" }
  },
  {
    symbol: "Bk",
    name: "Technology Dance Society (Breakfree)",
    year: 2012,
    size: "L",
    tsg_recognized: true,
    description: "Breakfree is the campus dance society that acts as a common platform for students interested in dancing and choreography, and exploring the various genres of dance.",
    block: "CC",
    links: { fb: "https://www.facebook.com/Breakfreenowornever/" }
  },
  {
    symbol: "Ch",
    name: "Chess Club, IIT Kharagpur",
    year: 2017,
    size: "NA",
    tsg_recognized: true,
    description: "Chess Club, IIT Kharagpur creates a lively chess culture on campus with regular tournaments and casual play sessions. It provides a welcoming space where players of all skill levels can learn, compete, and enjoy the game together.",
    block: "U",
    links: {
      insta: "https://www.instagram.com/chessclub_iitkgp",
      fb: "https://www.facebook.com/ChessClubIITKGP/"
    }
  },
  {
    symbol: "Tk",
    name: "Team KART",
    year: 2008,
    size: "M",
    tsg_recognized: false,
    description: "TeamKART is the official Formula Student team of IIT Kharagpur. They are a group of students who design, manufacture and test Formula style racecars and represent IIT Kharagpur in FSAE competitions.",
    block: "TO",
    links: { fb: "https://www.facebook.com/TeamKART/" }
  },
  {
    symbol: "Kr",
    name: "Kharagpur Robosoccer Students\u2019 Group",
    year: 2008,
    size: "L",
    tsg_recognized: true,
    description: "A students' group in IIT Kharagpur which works on building autonomous bots for playing soccer and participating in international events like F.I.R.A. World Championship and RoboCup soccer.",
    block: "T",
    links: { fb: "https://www.facebook.com/krssg/" }
  },
  {
    symbol: "Cy",
    name: "Child Rights and You KGP",
    year: 2014,
    size: "NA",
    tsg_recognized: false,
    description: "CRY IITKGP a group of volunteers working under the Child Rights and You (CRY) IIT Kharagpur Volunteer Chapter. CRY is an internationally renowned NGO working on Child Rights in India & abroad for over 30 years.",
    block: "W",
    links: { fb: "https://www.facebook.com/CRY.IITKGP/" }
  },
  {
    symbol: "Gw",
    name: "Gopali Youth Welfare Society",
    year: 2002,
    size: "NA",
    tsg_recognized: false,
    description: "GYWS is a NGO run by a team of students and professors of the campus, with assistance from local social enthusiasts. GYWS aims to improve the living standards of the people of Gopali (a village located 5 km from the IIT campus)",
    block: "W",
    links: { fb: "https://www.facebook.com/gyws.iitkgp/" }
  },
  {
    symbol: "Am",
    name: "Ambar",
    year: 2015,
    size: "M",
    tsg_recognized: true,
    description: "Ambar is the Gender and Sexual diversity group of the campus for the LGBTQ community residing in the campus comprised of current students, alumni, staff and family of staff.",
    block: "W",
    links: { fb: "https://www.facebook.com/ambar.iitkgp/" }
  },
  {
    symbol: "Mk",
    name: "metaKGP",
    year: 2015,
    size: "NA",
    tsg_recognized: false,
    description: "metaKGP is a collective interest group of engineers, hackers, and artists from IIT Kharagpur, who collaborate on various technical and non-technical projects.",
    block: "TO",
    links: { slack: "https://slack.metakgp.org", insta: "https://instagram.com/metakgp_/", metawiki: "https://wiki.metakgp.org/w/Metakgp:About", website: "https://metakgp.github.io" }
  },
  {
    symbol: "Ni",
    name: "NET Impact IIT Kharagpur",
    year: 2015,
    size: "XL",
    tsg_recognized: false,
    description: "Net Impact IIT Kharagpur aims at creating a positive impact in the campus. The students can use their platform to develop themselves for the type of career they are looking for.",
    block: "W",
    links: { fb: "https://www.facebook.com/netimpactiitkharagpur/" },
    inactive: true
  },
  {
    symbol: "Ec",
    name: "Entrepreneurship Cell",
    year: 2006,
    size: "L",
    tsg_recognized: false,
    description: "E-Cell aims to foster the spirit of entrepreneurship among college students in India and nurture young people with bright ideas. It is ranked as one of the most active entrepreneurship promoting bodies by several rating agencies.",
    block: "O",
    links: { fb: "https://www.facebook.com/ecell.iitkgp/" }
  },
  {
    symbol: "Kj",
    name: "Kshitij",
    year: 2004,
    size: "XL",
    tsg_recognized: true,
    description: "KTJ is the annual techno-management fest of the campus. It aims to promote the technical and managerial output of the nation by providing a platform for the youth to display their inputs and skills.",
    block: "O",
    links: { fb: "https://www.facebook.com/ktj.iitkgp/" }
  },
  {
    symbol: "Ir",
    name: "International Relations Cell",
    year: 2015,
    size: "S",
    tsg_recognized: false,
    description: "IRC is formed under Dean Alumni Affairs and International Relations, with the aim to develop and manage partnerships, linkages and networks with institutions of academic excellence and repute all over the world.",
    block: "W",
    links: { fb: "https://www.facebook.com/IRCIITKGP/" }
  },
  {
    symbol: "Fc",
    name: "Finance Club, IIT Kharagpur",
    year: 2019,
    size: "NA",
    tsg_recognized: false,
    description: "Finance Club conducts events, initiates programs and acts as an intermediary to ensure maximum benefit to students including, but not limited to those in the Financial Engineering program.",
    block: "O",
    links: { fb: "https://www.facebook.com/financeclubiitkgp/" }
  },
  {
    symbol: "Ds",
    name: "Debating Society",
    year: 2009,
    size: "M",
    tsg_recognized: true,
    description: "The Debating Society, IIT Kharagpur, is a full-fledged society under the Technology Students' Gymkhana, IIT Kharagpur, which aims to promote the culture of debating on the campus and provides a platform to bring all the debaters together.",
    block: "C",
    links: {
      fb: "https://www.facebook.com/kgpdebsoc/",
      insta: "https://www.instagram.com/debsoc.iitkgp"
    }
  },
  {
    symbol: "Sa",
    name: "The Scholars\u2019 Avenue",
    year: 2005,
    size: "M",
    tsg_recognized: false,
    description: "The Scholars\u2019 Avenue (TSA) is the independent student run English newsbody of the campus. TSA reports campus events and functions as a public interface between students and the administration. Often, they make cool stuff like the table you are reading right now.",
    block: "C",
    links: { insta: "https://www.instagram.com/scholarsavenue", fb: "https://www.facebook.com/scholarsavenue/", email: "mailto:thescholarsavenue@gmail.com" }
  },
  {
    symbol: "En",
    name: "English Technology Dramatics Society (Encore)",
    year: 1980,
    size: "XL",
    tsg_recognized: true,
    description: 'Encore is the English dramatics society of the campus. Their goal is to enjoy the moments on stage and give their audience a worthwhile experience. They go by their tagline "Stage humare baap ka hai".',
    block: "C",
    links: { fb: "https://www.facebook.com/TDSEncore/", insta: "https://www.instagram.com/iitkgpencore" }
  },
  {
    symbol: "Et",
    name: "Eastern Technology Music Society",
    year: 2008,
    size: "S",
    tsg_recognized: true,
    description: "ETMS is a group of self-learned musicians who find a common interest in the wide sea of music. They perform twice annually covering a spectrum of genres ranging from classical to fusion to popular bollywood hits.",
    block: "CC",
    links: { fb: "https://www.facebook.com/ETMSIITKGP/" }
  },
  {
    symbol: "Cc",
    name: "Technology Comedy Club",
    year: 2019,
    size: "M",
    tsg_recognized: true,
    description: "Comedy Club is a society for stand-up and comedy enthusiasts.",
    block: "U",
    links: {
      insta: "https://www.instagram.com/comedy_club_iit_kharagpur",
      fb: "https://www.facebook.com/comedyclubiitkgp/"
    }
  },
  {
    symbol: "Ev",
    name: "Electric Ground Vehicle",
    year: 2016,
    size: "M",
    tsg_recognized: false,
    description: "EVG is involved in building Electric Vehicles that are fast, affordable and energy-efficient.",
    block: "T",
    links: { fb: "https://www.facebook.com/EVG.IITKGP/" },
    inactive: true
  },
  {
    symbol: "Sw",
    name: "Swarm Robotics",
    year: 2016,
    size: "M",
    tsg_recognized: false,
    description: "Swarm explores the contemporary field of distributed algorithms for robot swarms and their implementation.",
    block: "TO",
    links: { fb: "https://www.facebook.com/swarmroboticskgp" },
    inactive: true
  },
  {
    symbol: "Ma",
    name: "Manga and Anime Society Kharagpur",
    year: 2019,
    size: "S",
    tsg_recognized: false,
    description: "MASK is a group of otakus engaging in art, AMV making, manga creation and quizzing.",
    block: "C",
    links: { website: "https://kgpmask.club/", insta: "https://www.instagram.com/maskiitkgp/", fb: "https://www.facebook.com/maskiitkgp" }
  },
  {
    symbol: "Pd",
    name: "ProDex",
    year: 2012,
    size: "M",
    tsg_recognized: true,
    description: "ProDex is a technical society focused on promoting Hardware modelling, Design and Innovation among the students of IIT Kharagpur.",
    block: "T",
    links: { insta: "https://www.instagram.com/prodex.iitkgp/", fb: "https://www.facebook.com/prodex.iitkgp/", linkedin: "https://www.linkedin.com/company/prodex-iit-kharagpur/", website: "https://prodex-iitkgp.netlify.app/", email: "mailto:prodex.iitkgp@gmail.com" }
  },
  {
    symbol: "As",
    name: "Technology Adventure Society",
    year: 2008,
    size: "L",
    tsg_recognized: true,
    description: "TAdS is the adventure society of the campus that brings extreme sports closer to the students. They explore Mountaineering, Rock Climbing, Mountain Biking, Hang Gliding, Bungee jumping, and organize adventure trips in the country for students.",
    block: "O",
    links: {
      website: "https://www.tadsiitkgp.in/",
      insta: "https://www.instagram.com/tads_iitkgp/",
      fb: "https://www.facebook.com/TAdS.IIT/"
    }
  },
  {
    symbol: "Rm",
    name: "IIT Kharagpur Recreational Mathematics Club",
    year: 2018,
    size: "XL",
    tsg_recognized: false,
    description: "The recreational math club hosts weekly sessions and reading groups for math lovers.",
    block: "C",
    links: { fb: "https://www.facebook.com/groups/300564543844072" }
  },
  {
    symbol: "Dc",
    name: "180 Degree Consulting, IIT Kharagpur",
    year: 2019,
    size: "M",
    tsg_recognized: true,
    description: "180 Degree Consulting provides socially conscious organizations around the world with high quality and affordable consulting services.",
    block: "O",
    links: {
      fb: "https://www.facebook.com/180dckgp/",
      insta: "https://www.instagram.com/180dc.iitkgp",
      linkedin: "https://www.linkedin.com/company/180-degrees-consulting-iit-kharagpur",
      website: "https://www.180dciitkgp.in"
    }
  },
  {
    symbol: "Tg",
    name: "Technology Transfer Group",
    year: 2007,
    size: "L",
    tsg_recognized: false,
    description: "Technology Transfer Group (TTG) is a students' initiative under the aegis of Sponsored Research & Industrial Consultancy (SRIC), IIT Kharagpur, which believes in the potential of the Institute as a premier Research & Development center.",
    block: "O",
    links: { fb: "https://www.facebook.com/TTG.SRIC/" }
  },
  {
    symbol: "Sg",
    name: "Student Welfare Group",
    year: 2011,
    size: "M",
    tsg_recognized: true,
    description: "SWG helps students in improving their skills, attitude and resources necessary to both succeed in the college environment as well as to pursue productive and satisfying lives by organizing different activities on the campus.",
    block: "W",
    links: { fb: "https://www.facebook.com/SWGIITKGP/" }
  },
  {
    symbol: "Ig",
    name: "Institute Wellness Group",
    year: 2017,
    size: "M",
    tsg_recognized: true,
    description: "Under the Students' Welfare portfolio of the Technology Students' Gymkhana, IWG consists of trained students who conduct welfare activities among the student community and act as primary nodes for mature student counselling.",
    block: "W",
    links: { fb: "https://www.facebook.com/iwg.iitkgp/" }
  },
  {
    symbol: "Tc",
    name: "Aroma: Technology Culinary Arts Society",
    year: 2019,
    size: "L",
    tsg_recognized: true,
    description: "The Culinary Arts Society encourages and facilitates students to learn and develop a diverse set of culinary arts and specific cooking techniques.",
    block: "C",
    links: { fb: "https://www.facebook.com/aroma.iitkgp/" }
  },
  {
    symbol: "Ck",
    name: "Click KGP",
    year: 2011,
    size: "M",
    tsg_recognized: false,
    description: "Click KGP is a group of photo-enthusiasts with the sole aim of capturing the campus, people and culture of IIT Kharagpur.",
    block: "C",
    links: { fb: "https://www.facebook.com/clickkgp/" }
  },
  {
    symbol: "Lo",
    name: "La Obscura",
    year: 2018,
    size: "M",
    tsg_recognized: false,
    description: "La Obscura is a group that features photographs from KGP and all over India as well.",
    block: "C",
    links: {
      fb: "https://www.facebook.com/LaObscuraPhotographyandVisualArt/"
    },
    inactive: true
  },
  {
    symbol: "Cg",
    name: "Computer Graphics Society",
    year: 2015,
    size: "NA",
    tsg_recognized: true,
    description: "IIT KGP's first of its kind graphics development group focused on game development, AR/VR and graphics research.",
    block: "CC",
    links: { fb: "https://www.facebook.com/cgsiitkgp/" }
  },
  {
    symbol: "Sc",
    name: "KGP Speedcubers",
    year: 2015,
    size: "NA",
    tsg_recognized: false,
    description: "The KGP Speedcubers is a hobby group for speedcubers in IIT Kharagpur that organizes workshops and competitions on campus.",
    block: "U",
    links: { fb: "https://www.facebook.com/kgpspeedcubers/" },
    inactive: true
  },
  {
    symbol: "Tr",
    name: "Team TRAK",
    year: 2024,
    size: "M",
    tsg_recognized: false,
    description: "Railway Research Students' Group of IIT Kharagpur",
    block: "T",
    links: { fb: "https://www.facebook.com/team.trakgp", insta: "https://www.instagram.com/team_trakgp" }
  },
  {
    symbol: "Gc",
    name: "Grimoire of Code",
    year: 2019,
    size: "M",
    tsg_recognized: true,
    description: "Grimoire of Code, abbreviated as GoC, is IIT Kharagpur's competitive programming club involving a group of passionate competitive programmers. The club conducts global and intra-campus competitive programming contests, and workshops for students on campus, fostering the competitive programming culture within IIT Kharagpur.",
    block: "TO",
    links: { insta: "https://www.instagram.com/grimoireofcode", fb: "https://www.facebook.com/goc.iitkgp" }
  },
  {
    symbol: "Kq",
    name: "Kharagpur Quantum Information and Computing Club",
    year: 2024,
    size: "S",
    tsg_recognized: false,
    description: "KQICC is a society dedicated to conducting research and spreading awareness about Quantum Information and Computing in IIT Kharagpur. They conduct various events including workshops and hackathons for everyone on the campus.",
    block: "TO",
    links: {
      insta: "https://www.instagram.com/qicckgp/",
      linkedin: "https://www.linkedin.com/company/quantum-information-and-computing-club/"
    }
  },
  {
    symbol: "Es",
    name: "Technology Environment Society",
    year: 2018,
    size: "S",
    tsg_recognized: true,
    description: "TES is dedicated to the conservation and preservation of the environment, and to promoting sustainability in society. Through a range of initiatives and activities, TES strives towards more sustainable future by finding solutions to environmental challenges and promoting conservation efforts within the campus and the wider community.",
    block: "TO",
    links: {
      metawiki: "https://wiki.metakgp.org/w/Technology_Environment_Society",
      insta: "https://www.instagram.com/tesiitkgp/",
      fb: "https://www.facebook.com/TESIITKGP/",
      email: "mailto:tesiitkgp@gmail.com"
    }
  },
  {
    symbol: "Dv",
    name: "Developers' Society",
    year: 2022,
    size: "M",
    tsg_recognized: true,
    description: "Developers' Society is an initiative to foster and encourage the development culture of IIT Kharagpur.",
    block: "T",
    links: {
      linkedin: "https://linkedin.com/company/devsoc-iitkgp",
      insta: "https://www.instagram.com/devsoc.iitkgp",
      fb: "https://www.facebook.com/devsoc.iitkgp",
      email: "mailto:devsoc.iitkgp@gmail.com"
    }
  },
  {
    symbol: "Qf",
    name: "Quant Club",
    year: 2019,
    size: "M",
    tsg_recognized: false,
    description: "Quant Club, IIT KGP is a student body that aims at increasing the awareness of Quantitative Finance.",
    block: "TO",
    links: {
      fb: "https://www.facebook.com/quantclubiitkgp/",
      insta: "https://www.instagram.com/quantclub_iitkgp",
      linkedin: "https://in.linkedin.com/company/qciitkgp"
    }
  },
  {
    symbol: "Ks",
    name: "Kharagpur Speedcubers",
    year: 2024,
    size: "S",
    tsg_recognized: false,
    description: "Kharagpur Speedcubers is a group of speedcubers in IIT Kharagpur that organizes workshops and competitions on campus.",
    block: "U",
    links: {
      fb: "https://www.facebook.com/kgpspeedcubers/"
    }
  },
  {
    symbol: "Sk",
    name: "Spark4AI",
    year: 2023,
    size: "L",
    tsg_recognized: false,
    description: "SPARK4AI is a vibrant community of AI enthusiasts united by a common passion for harnessing the transformative power of Artificial Intelligence.",
    block: "TO",
    links: {
      insta: "https://www.instagram.com/spark4ai.iitkgp/",
      linkedin: "https://www.linkedin.com/company/spark4ai/"
    }
  },
  {
    symbol: "Pg",
    name: "Public Policy and Governance Society",
    year: 2023,
    size: "L",
    tsg_recognized: false,
    description: "Public Policy and Governance Society, IIT Kharagpur is a platform for students and civil service enthusiasts to examine and actively engage with current public Policy and governance issues thorugh mentorship programmes and organising public events.",
    block: "O",
    links: {
      fb: "https://www.facebook.com/ppgs.iitkgp",
      insta: "https://www.instagram.com/ppgs.iitkgp/",
      linkedin: "https://www.linkedin.com/company/civil-services-club-iitkgp/"
    }
  },
  {
    symbol: "Kb",
    name: "Kharagpur Blockchain Society",
    year: 2023,
    size: "M",
    tsg_recognized: false,
    description: "KBS is a dynamic community of passionate students dedicated to exploring, understanding, and shaping the future of Decentralized technologies. Our mission is to bridge the gap between curiosity and mastery in the world of Blockchain.",
    block: "TO",
    links: {
      website: "https://www.kgpchain.org/",
      fb: "https://www.facebook.com/blockchainkgp",
      insta: "https://www.instagram.com/blockchainkgp/",
      linkedin: "https://www.linkedin.com/company/blockchainkgp"
    }
  },
  {
    symbol: "At",
    name: "Atelier - Design Club",
    year: 2024,
    size: "S",
    tsg_recognized: false,
    description: "Atelier is the design society dedicated to exploring every facet of design and providing hands-on and industry-level experience to its members",
    block: "C",
    links: {
      website: "https://linktr.ee/atelier.iitkgp",
      insta: "https://www.instagram.com/atelier.iitkgp/",
      linkedin: "https://www.linkedin.com/company/atelier-design-club-iit-kharagpur/",
      youtube: "https://www.youtube.com/@atelier.iitkgp"
    }
  },
  {
    symbol: "Rs",
    name: "the RAP society (tRAPs)",
    year: 2023,
    size: "M",
    tsg_recognized: false,
    description: "tRAPs is a society that conducts rap battles, cyphers and jamming sessions for hip-hop enthusiasts.",
    block: "U",
    links: {
      insta: "https://www.instagram.com/traps.iitkgp/",
      email: "mailto:traps.iitkgp@gmail.com"
    }
  },
  {
    symbol: "Tx",
    name: "TedX IIT Kharagpur",
    year: 2019,
    size: "S",
    tsg_recognized: true,
    description: "TEDxIITKharagpur is an independently organized TED event at IIT KGP",
    block: "O",
    links: {
      insta: "https://www.instagram.com/tedxiitkharagpur/"
    }
  },
  {
    symbol: "Fn",
    name: "Finesse",
    year: 2023,
    size: "M",
    tsg_recognized: true,
    description: "The Fashion society of IIT KGP",
    block: "C",
    links: {
      insta: "https://www.instagram.com/finesse_iitkgp"
    }
  },
  {
    symbol: "Fn",
    name: "Finesse",
    year: 2023,
    size: "M",
    tsg_recognized: true,
    description: "The Fashion society of IIT KGP",
    block: "C",
    links: {
      insta: "https://www.instagram.com/finesse_iitkgp"
    }
  }
];
var checkForSocErrors = (societies) => {
  const symbol_map = {};
  for (const i in societies) {
    const soc = societies[i];
    if (soc.symbol === "") {
      throw `Error: Society \`${soc.name}\` has an empty symbol.`;
    }
    if (soc.symbol in symbol_map) {
      throw `Error: Societies \`${soc.name}\` and \`${societies[symbol_map[soc.symbol]].name}\` have the same symbol.`;
    } else {
      symbol_map[soc.symbol] = parseInt(i);
    }
    if (Object.keys(soc.links).length === 0 && !soc.inactive) {
      throw `Error: Society \`${soc.name}\` has no links.`;
    }
  }
};
var SOCIETIES = SOCIETIES_ALL.filter((soc) => !("inactive" in soc) || !soc.inactive).sort((a, b) => a.year - b.year);

// vite.config.ts
try {
  checkForSocErrors(SOCIETIES);
} catch (e) {
  console.log(`Society data invalid.`);
  console.error(e);
  process.exit(1);
}
var vite_config_default = defineConfig({
  plugins: [react()]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAic3JjL2RhdGEvc29jaWV0aWVzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvdWRheS9wcm9qcy9zb2NpZXR5dGFibGVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL3VkYXkvcHJvanMvc29jaWV0eXRhYmxlL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3VkYXkvcHJvanMvc29jaWV0eXRhYmxlL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcbmltcG9ydCB7IFNPQ0lFVElFUywgY2hlY2tGb3JTb2NFcnJvcnMgfSBmcm9tICcuL3NyYy9kYXRhL3NvY2lldGllcydcblxuLy8gQ2hlY2sgZm9yIHNvY2lldHkgZXJyb3JzXG4vLyBUT0RPOiBUaGVyZSBpcyBwcm9iYWJseSBhIGJldHRlciB3YXkgb2YgZG9pbmcgdGhpcy5cbnRyeSB7XG4gIGNoZWNrRm9yU29jRXJyb3JzKFNPQ0lFVElFUyk7XG59IGNhdGNoIChlKSB7XG4gIGNvbnNvbGUubG9nKGBTb2NpZXR5IGRhdGEgaW52YWxpZC5gKTtcbiAgY29uc29sZS5lcnJvcihlKTtcbiAgcHJvY2Vzcy5leGl0KDEpO1xufVxuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3JlYWN0KCldXG59KVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS91ZGF5L3Byb2pzL3NvY2lldHl0YWJsZS9zcmMvZGF0YVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvdWRheS9wcm9qcy9zb2NpZXR5dGFibGUvc3JjL2RhdGEvc29jaWV0aWVzLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3VkYXkvcHJvanMvc29jaWV0eXRhYmxlL3NyYy9kYXRhL3NvY2lldGllcy50c1wiO2V4cG9ydCB0eXBlIEJsb2NrID0gXCJUXCIgfCBcIlRPXCIgfCBcIk9cIiB8IFwiV1wiIHwgXCJDXCIgfCBcIkNDXCIgfCBcIlVcIjtcbmV4cG9ydCB0eXBlIFNvY2lhbCA9IFwiZmJcIiB8IFwiaW5zdGFcIiB8IFwibWV0YXdpa2lcIiB8IFwibGlua2VkaW5cIiB8IFwid2Vic2l0ZVwiIHwgXCJzbGFja1wiIHwgXCJ0d2l0dGVyXCIgfCBcImVtYWlsXCIgfCBcInlvdXR1YmVcIjtcbmV4cG9ydCBpbnRlcmZhY2UgSVNvY2lldHkge1xuICAvKipcbiAgICogVGhlIGNoZW1pY2FsIHN5bWJvbCBlcXVpdmFsZW50IGZvciB0aGUgc29jaWV0eSBlbGVtZW50LiBDYW4gYmUgYW55IHVuaXF1ZSB0d28tbGV0dGVyIGNvbWJpbmF0aW9uLlxuICAgKi9cbiAgc3ltYm9sOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgZnVsbCBuYW1lIG9mIHRoZSBzb2NpZXR5LlxuICAgKi9cbiAgbmFtZTogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIHllYXIgdGhlIHNvY2lldHkgd2FzIGZvdW5kZWQuXG4gICAqL1xuICB5ZWFyOiBudW1iZXI7XG4gIC8qKlxuICAgKiBUaGUgdGVhbSBzaXplOiAoUyltYWxsLCAoTSllZGl1bSwgKEwpYXJnZSwgZShYKXRyYSAoTClhcmdlLCBhbmQgKE4pb3QgKEEpcHBsaWNhYmxlIFtmb3Igb3BlbiBzb2NpZXRpZXNdLlxuICAgKiBUaGVyZSBpcyBubyBzdHJpY3QgZGVmaW5pdGlvbiBmb3IgdGhpcyB5ZXQsIHVzZSB5b3VyIGRpc2NyZXRpb24uXG4gICAqL1xuICBzaXplOiBcIlNcIiB8IFwiTVwiIHwgXCJMXCIgfCBcIlhMXCIgfCBcIk5BXCI7XG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBzb2NpZXR5IGlzIHJlY29nbml6ZWQgYnkgdGhlIFRlY2hub2xvZ3kgU3R1ZGVudHMnIEd5bWtoYW5hIChUU0cpLlxuICAgKi9cbiAgdHNnX3JlY29nbml6ZWQ6IGJvb2xlYW47XG4gIC8qKlxuICAgKiBMaW5rcyB0byB0aGUgc29jaWV0eSdzIHNvY2lhbHMuIEVtYWlsIGFkZHJlc3NlcyBzaG91bGQgYmUgcHJlcGVuZGVkIHdpdGggYSBgbWFpbHRvOmAgYW5kIGFsbCBVUkxzIG11c3QgdXNlIGh0dHBzLlxuICAgKiBTZWUgdGhlIGBTb2NpYWxgIHR5cGUgZm9yIHN1cHBvcnRlZCBzb2NpYWxzLlxuICAgKi9cbiAgbGlua3M6IHtcbiAgICBba2V5IGluIFNvY2lhbF0/OiBzdHJpbmdcbiAgfTtcbiAgLyoqXG4gICAqIEEgc2hvcnQgZGVzY3JpcHRpb24gZm9yIHRoZSBzb2NpZXR5LlxuICAgKi9cbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgLyoqXG4gICAqIEJsb2NrIG9mIHRoZSBwZXJpb2RpYyB0YWJsZTpcbiAgICogVCAtIFRlY2huaWNhbFxuICAgKiBPIC0gT3JnYW5pemF0aW9uYWxcbiAgICogQyAtIENyZWF0aXZlXG4gICAqIFcgLSBXZWxmYXJlXG4gICAqIFUgLSBVbmNhdGVnb3JpemVkXG4gICAqXG4gICAqIEEgY29tYmluYXRpb24gb2YgdGhlc2UgbGV0dGVycyBkZW5vdGVzIGEgc3BlY2lhbCBibG9jayB0aGF0IGlzIGVpdGhlciBhIGNyb3NzIGJldHdlZW4gdHdvIGJsb2NrcyBvciBhIHN1Yi1ibG9jay5cbiAgICovXG4gIGJsb2NrOiBCbG9jaztcbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIHNvY2lldHkgaXMgbm93IGluYWN0aXZlLlxuICAgKi9cbiAgaW5hY3RpdmU/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgU09DSUVUSUVTX0FMTDogSVNvY2lldHlbXSA9IFtcbiAge1xuICAgIHN5bWJvbDogJ0FyJyxcbiAgICBuYW1lOiAnQWVyaWFsIFJvYm90aWNzIEtoYXJhZ3B1cicsXG4gICAgeWVhcjogMjAxMyxcbiAgICBzaXplOiAnTScsXG4gICAgdHNnX3JlY29nbml6ZWQ6IHRydWUsXG4gICAgZGVzY3JpcHRpb246ICdUaGUgQVJLIGNvbnNpc3RzIG9mIGEgZ3JvdXAgb2Ygc3R1ZGVudHMgd29ya2luZyB0b3dhcmRzIGJ1aWxkaW5nIGF1dG9ub21vdXMgYWVyaWFsIHZlaGljbGVzLCBiYXNlZCBhdCBJbmRpYW4gSW5zdGl0dXRlIG9mIFRlY2hub2xvZ3kgS2hhcmFncHVyLicsXG4gICAgYmxvY2s6ICdUJyxcbiAgICBsaW5rczoge1xuICAgICAgd2Vic2l0ZTogJ2h0dHBzOi8vYXJsLWtncC5naXRodWIuaW8vJyxcbiAgICAgIGZiOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2FlcmlhbHJvYm90aWNza2dwJyxcbiAgICAgIGVtYWlsOiAnYWVyaWFscm9ib3RpY3NraGFyYWdwdXJAZ21haWwuY29tJyxcbiAgICAgIG1ldGF3aWtpOiAnaHR0cHM6Ly93aWtpLm1ldGFrZ3Aub3JnL3cvQWVyaWFsX1JvYm90aWNzX0toYXJhZ3B1cidcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBzeW1ib2w6ICdBdycsXG4gICAgbmFtZTogJ0F3YWF6JyxcbiAgICB5ZWFyOiAyMDA2LFxuICAgIHNpemU6ICdMJyxcbiAgICB0c2dfcmVjb2duaXplZDogZmFsc2UsXG4gICAgZGVzY3JpcHRpb246IFwiXHUwOTA2XHUwOTM1XHUwOTNFXHUwOTFDXHUwOTNDIFx1MDkyQVx1MDkzRlx1MDkxQlx1MDkzMlx1MDk0NyBcdTA5NjdcdTA5NjYgXHUwOTM1XHUwOTMwXHUwOTREXHUwOTM3XHUwOTRCXHUwOTAyIFx1MDkzOFx1MDk0NyBcdTA5MTVcdTA5NDhcdTA5MkVcdTA5NERcdTA5MkFcdTA5MzggXHUwOTM4XHUwOTJFXHUwOTREXHUwOTJDXHUwOTI4XHUwOTREXHUwOTI3XHUwOTQwIFx1MDkyNFx1MDkzRVx1MDkxQ1x1MDkzQ1x1MDkzRSBcdTA5MzhcdTA5MkVcdTA5M0VcdTA5MUFcdTA5M0VcdTA5MzAgXHUwOTI0XHUwOTI1XHUwOTNFIFx1MDkzOFx1MDkzRVx1MDkyRVx1MDkyRlx1MDkzRlx1MDkxNSBcdTA5MzVcdTA5M0ZcdTA5MzdcdTA5MkZcdTA5NEJcdTA5MDIgXHUwOTJBXHUwOTQ3IFx1MDkzOFx1MDkyRVx1MDk0MFx1MDkxNVx1MDk0RFx1MDkzN1x1MDkzRSBcdTA5MkFcdTA5NERcdTA5MzBcdTA5MzhcdTA5NERcdTA5MjRcdTA5NDFcdTA5MjQgXHUwOTE1XHUwOTMwXHUwOTI0XHUwOTQwIFx1MDkzMFx1MDkzOVx1MDk0MCBcdTA5MzlcdTA5NDggfCBcdTA5MDdcdTA5MjggXHUwOTM1XHUwOTMwXHUwOTREXHUwOTM3XHUwOTRCXHUwOTAyIFx1MDkyRVx1MDk0N1x1MDkwMiBcdTA5MTVcdTA5NDhcdTA5MkVcdTA5NERcdTA5MkFcdTA5MzggXHUwOTJFXHUwOTQ3XHUwOTAyIFx1MDkxNVx1MDkzRVx1MDkyQlx1MDk0MCBcdTA5MTVcdTA5NDFcdTA5MUIgXHUwOTJDXHUwOTI2XHUwOTMyXHUwOTNFIFx1MDkzOVx1MDk0OCBcdTA5MTRcdTA5MzAgXHUwOTMwXHUwOTNFXHUwOTFDXHUwOTJEXHUwOTNFXHUwOTM3XHUwOTNFIFx1MDkzOVx1MDkzRlx1MDkwMlx1MDkyNlx1MDk0MCBcdTA5MTVcdTA5NDcgXHUwOTJFXHUwOTNFXHUwOTI3XHUwOTREXHUwOTJGXHUwOTJFIFx1MDkzOFx1MDk0NyAnXHUwOTA2XHUwOTM1XHUwOTNFXHUwOTFDXHUwOTNDJyBcdTA5MDZcdTA5MkFcdTA5MzhcdTA5NDcgXHUwOTA1XHUwOTI4XHUwOTM1XHUwOTMwXHUwOTI0IFx1MDkxQ1x1MDk0MVx1MDkyMVx1MDkzQ1x1MDk0MCBcdTA5MzBcdTA5MzlcdTA5NDAgfFwiLFxuICAgIGJsb2NrOiAnVScsXG4gICAgbGlua3M6IHtcbiAgICAgIHdlYnNpdGU6ICdodHRwczovL2lzc3V1LmNvbS9hd2FheicsXG4gICAgICBmYjogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9hd2FhemlpdGtncC8nLFxuICAgICAgaW5zdGE6ICdodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2F3YWF6aWl0a2dwJyxcbiAgICAgIGxpbmtlZGluOiAnaHR0cHM6Ly9saW5rZWRpbi5jb20vY29tcGFueS9hd2Fhei1paXQta2hhcmFncHVyJyxcbiAgICAgIG1ldGF3aWtpOiAnaHR0cHM6Ly93aWtpLm1ldGFrZ3Aub3JnL3cvQXdhYXonXG4gICAgfVxuICB9LFxuICB7XG4gICAgc3ltYm9sOiAnQWcnLFxuICAgIG5hbWU6ICdBdXRvbm9tb3VzIEdyb3VuZCB2ZWhpY2xlIFJlc2VhcmNoIEdyb3VwJyxcbiAgICB5ZWFyOiAyMDA3LFxuICAgIHNpemU6ICdOQScsXG4gICAgdHNnX3JlY29nbml6ZWQ6IGZhbHNlLFxuICAgIGRlc2NyaXB0aW9uOiAnQUdWIGlzIGFuIGludGVyZGlzY2lwbGluYXJ5IHRlYW0gYXNwaXJpbmcgdG8gd2luIHRoZSBJbnRlbGxpZ2VudCBHcm91bmQgVmVoaWNsZSBDb21wZXRpdGlvbiBoZWxkIGF0IE9ha2xhbmQgVW5pdmVyc2l0eSBhbmQgYmUgaW52b2x2ZWQgaW4gdGhlIFJlc2VhcmNoIHdvcmsgcmVsYXRlZCB0byBhdXRvbm9tb3VzIGFuZCBtb2JpbGUgcm9ib3RzLicsXG4gICAgYmxvY2s6ICdUJyxcbiAgICBsaW5rczoge1xuICAgICAgZmI6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vYWd2a2dwLycsXG4gICAgICB3ZWJzaXRlOiAnaHR0cHM6Ly93d3cuYWd2LmlpdGtncC5hYy5pbi8nLFxuICAgICAgbGlua2VkaW46ICdodHRwczovL3d3dy5saW5rZWRpbi5jb20vY29tcGFueS9hdXRvbm9tb3VzLWdyb3VuZC12ZWhpY2xlLXJlc2VhcmNoLWdyb3VwJyxcbiAgICAgIG1ldGF3aWtpOiAnaHR0cHM6Ly93aWtpLm1ldGFrZ3Aub3JnL3cvQUdWJ1xuICAgIH1cbiAgfSxcbiAge1xuICAgIHN5bWJvbDogJ0d0JyxcbiAgICBuYW1lOiAnVGhlIEtHUGlhbiBHYW1lIFRoZW9yeSBTb2NpZXR5JyxcbiAgICB5ZWFyOiAyMDEwLFxuICAgIHNpemU6ICdNJyxcbiAgICB0c2dfcmVjb2duaXplZDogZmFsc2UsXG4gICAgZGVzY3JpcHRpb246ICdLR1RTIGlzIGRlZGljYXRlZCB0b3dhcmRzIHNwcmVhZGluZyBhd2FyZW5lc3MsIGtub3dsZWRnZSBhbmQgYXBwbGljYXRpb24gb2YgR2FtZSBUaGVvcnkuIFRoZXkgYXJlIGludm9sdmVkIGluIHB1Ymxpc2hpbmcgdGhlIGhhbGYteWVhcmx5IG5ld3NwYXBlciwgXCJUaGUgU3RyYXRlZ2lzdFwiLicsXG4gICAgYmxvY2s6ICdVJyxcbiAgICBsaW5rczoge1xuICAgICAgZmI6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vVGhlLktHVFMvJyxcbiAgICAgIGluc3RhOiAnaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9rZ3RzLmlpdGtncC8nLFxuICAgICAgd2Vic2l0ZTogJ2h0dHBzOi8vdGhla2d0cy53b3JkcHJlc3MuY29tLycsXG4gICAgICBtZXRhd2lraTogJ2h0dHBzOi8vd2lraS5tZXRha2dwLm9yZy93L1RoZV9LR1BpYW5fR2FtZV9UaGVvcnlfU29jaWV0eSdcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBzeW1ib2w6ICdRYycsXG4gICAgbmFtZTogJ1F1aXogQ2x1YicsXG4gICAgeWVhcjogMjAwMyxcbiAgICBzaXplOiAnTkEnLFxuICAgIHRzZ19yZWNvZ25pemVkOiB0cnVlLFxuICAgIGRlc2NyaXB0aW9uOiAnVGhlIFF1aXogQ2x1YiBjb25kdWN0cyBicmFuc3Rvcm1pbmcgc2Vzc2lvbnMgYW5kIG1vY2sgcXVpenplcyB0byBwcm9tb3RlIHRoZSBxdWl6emluZyBjdWx0dXJlIGluIHRoZSBjYW1wdXMuIFRoZSBjbHViIHVzdWFsbHkgbWVldHMgb25jZSBhIHdlZWsgYW5kIGNvbmR1Y3RzIHF1aXp6ZXMuJyxcbiAgICBibG9jazogJ0MnLFxuICAgIGxpbmtzOiB7XG4gICAgICBmYjogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9paXRrZ3AucXVpemNsdWIvJyxcbiAgICAgIGluc3RhOiAnaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9paXRrZ3AucWMvJ1xuICAgIH1cbiAgfSxcbiAge1xuICAgIHN5bWJvbDogJ1NwJyxcbiAgICBuYW1lOiAnU3BlY3RyYScsXG4gICAgeWVhcjogMjAwNyxcbiAgICBzaXplOiAnTScsXG4gICAgdHNnX3JlY29nbml6ZWQ6IHRydWUsXG4gICAgZGVzY3JpcHRpb246ICdTcGVjdHJhIGlzIHRoZSBGaW5lIEFydHMgR3JvdXAgb2YgdGhlIGNhbXB1cyB3aGljaCBhaW1zIHRvIGJyaW5nIHRvZ2V0aGVyIGxpa2UtbWluZGVkIHBlb3BsZSB3aG8gaGF2ZSB0aGUgc2hhcmVkIGxvdmUgZm9yIGFydC4nLFxuICAgIGJsb2NrOiAnQycsXG4gICAgbGlua3M6IHtcbiAgICAgIGZiOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL1NwZWN0cmEuSUlUS0dQLycsXG4gICAgICBpbnN0YTogJ2h0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vc3BlY3RyYS5paXRrZ3AvJyxcbiAgICAgIG1ldGF3aWtpOiAnaHR0cHM6Ly93aWtpLm1ldGFrZ3Aub3JnL3cvU3BlY3RyYSdcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBzeW1ib2w6ICdEcicsXG4gICAgbmFtZTogJ0JlbmdhbGkgVGVjaG5vbG9neSBEcmFtYXRpY3MgU29jaWV0eSAoRHJ1aGVlbiknLFxuICAgIHllYXI6IDE5NzAsXG4gICAgc2l6ZTogJ1hMJyxcbiAgICB0c2dfcmVjb2duaXplZDogdHJ1ZSxcbiAgICBkZXNjcmlwdGlvbjogJ1RlY2hub2xvZ3kgRHJhbWF0aWNzIFNvY2lldHkgRHJ1aGVlbiBpcyBvbmUgb2YgdGhlIG9sZGVzdCBzb2NpZXRpZXMgb2YgSUlUIEtoYXJhZ3B1ci4gSXQgaXMgYSBkZWRpY2F0ZWQgZ3JvdXAgZm9yIHRoZWF0cmljYWwgcGxheXMgaW4gQmVuZ2FsaS4nLFxuICAgIGJsb2NrOiAnQycsXG4gICAgbGlua3M6IHtcbiAgICAgIGZiOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3Rkc2RydWhlZW4vJyxcblxuICAgIH1cbiAgfSxcbiAge1xuICAgIHN5bWJvbDogJ1d0JyxcbiAgICBuYW1lOiAnV2VzdGVybiBUZWNobm9sb2d5IE11c2ljIFNvY2lldHknLFxuICAgIHllYXI6IDIwMDgsXG4gICAgc2l6ZTogJ1MnLFxuICAgIHRzZ19yZWNvZ25pemVkOiB0cnVlLFxuICAgIGRlc2NyaXB0aW9uOiAnV1RNUyBpcyBhIGdyb3VwIG9mIHNlbGYgbGVhcm5lZCBtdXNpY2lhbnMgd2hvIGV4cGxvcmUgZGlmZmVyZW50IGdlbnJlcyBvZiB3ZXN0ZXJuIG11c2ljLiBUaGV5IHBlcmZvcm0gYW4gaG91cmx5IGNvbmNlcnQgZXZlcnkgc2VtZXN0ZXIgYW5kIGtlZXAgdGhlIG11c2ljYWwgdmVpbnMgdGhyb2JiaW5nIGluIHRoZSBjYW1wdXMuJyxcbiAgICBibG9jazogJ0NDJyxcbiAgICBsaW5rczogeyBmYjogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS93dG1zaWl0a2dwLycgfVxuICB9LFxuICB7XG4gICAgc3ltYm9sOiAnTGcnLFxuICAgIG5hbWU6ICdLR1AgTGFuZ3VhZ2UgTGVhcm5lcnNcdTIwMTkgR3JvdXAnLFxuICAgIHllYXI6IDIwMTUsXG4gICAgc2l6ZTogJ1MnLFxuICAgIHRzZ19yZWNvZ25pemVkOiBmYWxzZSxcbiAgICBkZXNjcmlwdGlvbjogJ0FuIGludGVyZXN0IGRyaXZlbiBncm91cCBvZiBlbnRodXNpYXN0aWMgTGFuZ3VhZ2UgTGVhcm5lcnMgd2hvIHVzZSB0aGUgZ3JvdXAgYXMgYSBwbGF0Zm9ybSB0byByZWFjaCBvdGhlciBsZWFybmVycywgb3JnYW5pemUgbWVldHVwcyBhbmQgc2hhcmUgbGFuZ3VhZ2UgbGVhcm5pbmcgcmVzb3VyY2VzLicsXG4gICAgYmxvY2s6ICdVJyxcbiAgICBsaW5rczogeyBmYjogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9ncm91cHMvNzMyNDkyMzYzNTQ3Mzc0LycgfSxcbiAgICBpbmFjdGl2ZTogdHJ1ZVxuICB9LFxuICB7XG4gICAgc3ltYm9sOiAnQXUnLFxuICAgIG5hbWU6ICdBdXRvbm9tb3VzIFVuZGVyd2F0ZXIgVmVoaWNsZSBSZXNlYXJjaCBHcm91cCcsXG4gICAgeWVhcjogMjAxMCxcbiAgICBzaXplOiAnUycsXG4gICAgdHNnX3JlY29nbml6ZWQ6IGZhbHNlLFxuICAgIGRlc2NyaXB0aW9uOiAnVGhlIElJVCBLaGFyYWdwdXIgQVVWIFRlYW0gKG5pY2tuYW1lZCBpS2F0KSB3YXMgY29uY2VpdmVkIHRvIGRldmVsb3AgYW4gYXV0b25vbW91cyB1bmRlcmdyb3VuZCB2ZWhpY2xlIHRvIHBhcnRpY2lwYXRlIGluIHN0dWRlbnQgbGV2ZWwgY29tcGV0aXRpb25zIGFuZCBkZW1vbnN0cmF0ZSB0aGUgUm9ib3RpY3MgYW5kIEludGVsbGlnZW50IFN5c3RlbXMgTGFiIG9mIHRoZSBjYW1wdXMuJyxcbiAgICBibG9jazogJ1QnLFxuICAgIGxpbmtzOiB7IGZiOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2F1dmlpdGtncC8nIH0sXG4gICAgaW5hY3RpdmU6IHRydWVcbiAgfSxcbiAge1xuICAgIHN5bWJvbDogJ1N0JyxcbiAgICBuYW1lOiAnU3BhY2UgVGVjaG5vbG9neSBTdHVkZW50c1x1MjAxOSBTb2NpZXR5IChzcEF0cyknLFxuICAgIHllYXI6IDIwMDgsXG4gICAgc2l6ZTogJ00nLFxuICAgIHRzZ19yZWNvZ25pemVkOiBmYWxzZSxcbiAgICBkZXNjcmlwdGlvbjogJ3NwQXRzIGZ1bmN0aW9ucyBhcyB0aGUgc3R1ZGVudCBib2R5IG9mIEthbHBhbmEgQ2hhd2xhIFNwYWNlIFRlY2hub2xvZ3kgQ2VsbCwgdGhlIGNvbnRhY3QgcG9pbnQgb2YgSVNSTyBhdCBJSVQgS2hhcmFncHVyLlRoZXkgYXJlIGRlZGljYXRlZCB0byBleHBsb3JlIHNwYWNlIHRlY2hub2xvZ3kgYW5kIGFzdHJvbm9teSBieSBjb25kdWN0aW5nIGxlY3R1cmVzLCBldmVudHMgYW5kIHdvcmtzaG9wcy4nLFxuICAgIGJsb2NrOiAnVE8nLFxuICAgIGxpbmtzOiB7IGZiOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3NwQXRzLmlpdGtncCcsIGluc3RhOiAnaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9zcGF0cy5uc3NjLmlpdGtncC8nLCBsaW5rZWRpbjogJ2h0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9jb21wYW55L3NwYXRzLycsIHdlYnNpdGU6ICdodHRwczovL3NwYXRzLmNvLmluLycsIG1ldGF3aWtpOiAnaHR0cHM6Ly93aWtpLm1ldGFrZ3Aub3JnL3cvU3BhY2VfVGVjaG5vbG9neV9TdHVkZW50cyUyN19Tb2NpZXR5JyB9XG4gIH0sXG4gIHtcbiAgICBzeW1ib2w6ICdCYycsXG4gICAgbmFtZTogJ0J1c2luZXNzIENsdWInLFxuICAgIHllYXI6IDIwMDksXG4gICAgc2l6ZTogJ00nLFxuICAgIHRzZ19yZWNvZ25pemVkOiB0cnVlLFxuICAgIGRlc2NyaXB0aW9uOiAnQi1DbHViIGlzIHRoZSBjYW1wdXMgc29jaWV0eSBmb3IgYWxsIHRoaW5ncyBidXNpbmVzcy4gQSBzdHVkZW50IHJ1biBmb3J1bSwgQkNsdWIgaGFzIGJ1aWx0IGFuIGFuYWx5dGljYWwgZnJhbWV3b3JrIHdpdGggdGhlaXIgdGVjaG5pY2FsIGJhY2tncm91bmQgd2l0aCB3aGljaCB0aGV5IGFwcGx5IGluIGRvbWFpbnMgcmVsYXRlZCB0byBidXNpbmVzcy4nLFxuICAgIGJsb2NrOiAnTycsXG4gICAgbGlua3M6IHsgZmI6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vYmNsdWJrZ3AvJyB9XG4gIH0sXG4gIHtcbiAgICBzeW1ib2w6ICdMaScsXG4gICAgbmFtZTogJ1RlY2hub2xvZ3kgTGl0ZXJhcnkgU29jaWV0eScsXG4gICAgeWVhcjogMTk1MSxcbiAgICBzaXplOiAnTScsXG4gICAgdHNnX3JlY29nbml6ZWQ6IHRydWUsXG4gICAgZGVzY3JpcHRpb246IFwiVExTLCBvbmUgb2YgdGhlIG9sZGVzdCBzb2NpZXRpZXMgb2YgdGhlIGNhbXB1cywgaGFzIGJlZW4gYW4gb3V0bGV0IGZvciB0aGUgbGl0ZXJhcnkgc2tpbGxzIG9mIHRoZSBLZ3AgcG9wdWxhY2UuIFRoZWlyIG5vdGFibGUgd29ya3MgaW5jbHVkZSBIYW5nIE9uJ3MsIFB1bHNlIGFuZCBBbGFua2FyLiBUaGV5IGFsc28gaG9sZCB0aGUgZXZlbnRzICdLYXZ5YW5qYWxpJywgJ0thdnlhIFNhbmRoeWEnLCBhbmQgJ0ZhcnJhZ28uJ1wiLFxuICAgIGJsb2NrOiAnQycsXG4gICAgbGlua3M6IHsgZmI6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vdGxzaWl0a2dwLycsIGluc3RhOiAnaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS90bHMuaWl0a2dwJyB9XG4gIH0sXG4gIHtcbiAgICBzeW1ib2w6ICdQcicsXG4gICAgbmFtZTogJ1RlbHVndSB0ZWNobm9sb2d5IERyYW1hdGljcyBTb2NpZXR5IChQcmFzdGhhbmFtKScsXG4gICAgeWVhcjogMjAxMCxcbiAgICBzaXplOiAnWEwnLFxuICAgIHRzZ19yZWNvZ25pemVkOiB0cnVlLFxuICAgIGRlc2NyaXB0aW9uOiAnUHJhc3RoYW5hbSBpcyB0aGUgeW91bmdlc3Qgb2YgYWxsIGRyYW1hdGljcyBzb2NpZXRpZXMgZm9ybWVkIHRvIGFzc2ltaWxhdGUgYW5kIGludGVncmF0ZSB0aGUgcmljaCBjdWx0dXJlIGFuZCBkcmFtYXRpY3MgaGVyaXRhZ2Ugb2YgdGhlIFRlbHVndSBzcGVha2luZyBwZW9wbGUgaW50byB0aGUgbWFpbnN0cmVhbSBjdWx0dXJlIG9mIElJVCBLaGFyYWdwdXIuJyxcbiAgICBibG9jazogJ0MnLFxuICAgIGxpbmtzOiB7IGZiOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL1ByYXN0aGFuYW0uVERTLycgfVxuICB9LFxuICB7XG4gICAgc3ltYm9sOiAnRnAnLFxuICAgIG5hbWU6ICdUZWNobm9sb2d5IEZpbG1tYWtpbmcgYW5kIFBob3RvZ3JhcGh5IFNvY2lldHknLFxuICAgIHllYXI6IDIwMTEsXG4gICAgc2l6ZTogJ0wnLFxuICAgIHRzZ19yZWNvZ25pemVkOiB0cnVlLFxuICAgIGRlc2NyaXB0aW9uOiAnVEZQUyBpcyB0aGUgY2FtcHVzIGdyb3VwIGZvciBzdHVkZW50cyBpbnRlcmVzdGVkIGluIGZpbG1tYWtpbmcsIHBob3RvZ3JhcGh5IGFuZCBmaWxtLWFwcHJlY2lhdGlvbi4gVGhlIHNvY2lldHkgaGFzIGJlZW4gYSBsYXVuY2hwYWQgZm9yIHN0dWRlbnRzIGludGVyZXN0ZWQgaW4gcHVyc3VpbmcgY2FyZWVycyBpbiB0aGUgRW50ZXJ0YWlubWVudCBJbmR1c3RyeS4nLFxuICAgIGJsb2NrOiAnQ0MnLFxuICAgIGxpbmtzOiB7IGZiOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3RmcHMuaWl0a2dwLycgfVxuICB9LFxuICB7XG4gICAgc3ltYm9sOiAnRm0nLFxuICAgIG5hbWU6ICdGb29kL01lc3MgTW9uaXRvcmluZyBDb21taXR0ZWUnLFxuICAgIHllYXI6IDIwMTAsXG4gICAgc2l6ZTogJ1MnLFxuICAgIHRzZ19yZWNvZ25pemVkOiB0cnVlLFxuICAgIGRlc2NyaXB0aW9uOiAnSGVscHMgaW4gcXVhbGl0eSBjb250cm9sIG9mIHRoZSBmdW5jdGlvbmluZyBvZiB0aGUgbWVzcyBhY3Jvc3MgYWxsIGhhbGxzIGFuZCBmb29kIG91dGxldHMgaW4gdGhlIGNhbXB1cy4nLFxuICAgIGJsb2NrOiAnVScsXG4gICAgbGlua3M6IHsgZmI6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vZ3JvdXBzLzQwMjkyNDA0MzI0NjY4Mi8nIH0sXG4gICAgaW5hY3RpdmU6IHRydWVcbiAgfSxcbiAge1xuICAgIHN5bWJvbDogJ0R0JyxcbiAgICBuYW1lOiAnS2hhcmFncHVyIERhdGEgQW5hbHl0aWNzIEdyb3VwJyxcbiAgICB5ZWFyOiAyMDE0LFxuICAgIHNpemU6ICdTJyxcbiAgICB0c2dfcmVjb2duaXplZDogdHJ1ZSxcbiAgICBkZXNjcmlwdGlvbjogJ0tEQUcgaXMgYWltZWQgYXQgYnJpbmdpbmcgRGF0YSBBbmFseXRpY3MgYW5kIE1hY2hpbmUgTGVhcm5pbmcgZW50aHVzaWFzdHMgdG9nZXRoZXIgdW5kZXIgdGhlIHVtYnJlbGxhIG9mIGEgc2luZ2xlIHNvY2lldHkuIFRoZSBncm91cCBob2xkcyBzZWxlY3Rpb25zIGVhY2ggeWVhciBhbmQgY29uZHVjdHMgd29ya3Nob3BzIGFuZCBoZWxwcyBhc3NpbWlsYXRlIGFuYWx5dGljcyBza2lsbHMgaW4gdGhlIHN0dWRlbnRzLicsXG4gICAgYmxvY2s6ICdUJyxcbiAgICBsaW5rczogeyBmYjogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9rZ3BkYWcvJyB9XG4gIH0sXG4gIHtcbiAgICBzeW1ib2w6ICdSeCcsXG4gICAgbmFtZTogJ1RlY2hub2xvZ3kgUm9ib3RpeCBTb2NpZXR5JyxcbiAgICB5ZWFyOiAyMDAxLFxuICAgIHNpemU6ICdNJyxcbiAgICB0c2dfcmVjb2duaXplZDogdHJ1ZSxcbiAgICBkZXNjcmlwdGlvbjogJ1RlY2hub2xvZ3kgUm9ib3RpeCBTb2NpZXR5IGNvbmR1Y3RzIGFjdGl2aXRpZXMgYW5kIHByb2plY3RzIHJlbGF0ZWQgdG8gcm9ib3RpY3MgaW4gdGhlIGNhbXB1cy4gV2l0aCBpdHMgcmVhY2ggZXhwYW5kaW5nIHN0ZWFkaWx5IGVhY2ggeWVhciwgaXQgaGFzIGFsc28gY2VtZW50ZWQgaXRzIHBvc2l0aW9uIGFzIG9uZSBvZiB0aGUgbmVydmUgY2VudHJlcyBvZiBhbWF0ZXVyIHJvYm90aWNzIGluIEluZGlhLicsXG4gICAgYmxvY2s6ICdUTycsXG4gICAgbGlua3M6IHsgZmI6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vcm9ib3RpeGlpdGtncC8nLCBpbnN0YTogJ2h0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vcm9ib3RpeF9paXRrZ3AvJywgbGlua2VkaW46ICdodHRwczovL3d3dy5saW5rZWRpbi5jb20vY29tcGFueS90ZWNobm9sb2d5LXJvYm90aXgtc29jaWV0eS8nLCB3ZWJzaXRlOiAnaHR0cHM6Ly93d3cucm9ib3RpeC5pbi8nIH1cbiAgfSxcbiAge1xuICAgIHN5bWJvbDogJ09zJyxcbiAgICBuYW1lOiAnS2hhcmFncHVyIE9wZW4gU291cmNlIFNvY2lldHknLFxuICAgIHllYXI6IDIwMTMsXG4gICAgc2l6ZTogJ00nLFxuICAgIHRzZ19yZWNvZ25pemVkOiBmYWxzZSxcbiAgICBkZXNjcmlwdGlvbjogJ0EgYnVuY2ggb2Ygb3BlbiBzb3VyY2UgZW50aHVzaWFzdHMgYW5kIHByZXZpb3VzbHkgY2FsbGVkIHRoZSBcdTIwMThGaXJlZm94IGNsdWJcdTIwMTksIEtPU1MgaXMgYWltZWQgYXQgY3JlYXRpbmcgYXdhcmVuZXNzIGFib3V0IHdlYiBhbmQgdGhlIG9wZW4gc291cmNlIG1vdmVtZW50LicsXG4gICAgYmxvY2s6ICdUTycsXG4gICAgbGlua3M6IHsgaW5zdGE6ICdodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2tvc3NpaXRrZ3AvJywgd2Vic2l0ZTogJ2h0dHBzOi8va29zc2lpdGtncC5vcmcnLCBmYjogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9rb3NzaWl0a2dwLycgfVxuICB9LFxuICB7XG4gICAgc3ltYm9sOiAnQWMnLFxuICAgIG5hbWU6ICdBbHVtbmkgQ2VsbCcsXG4gICAgeWVhcjogMjAwOCxcbiAgICBzaXplOiAnTCcsXG4gICAgdHNnX3JlY29nbml6ZWQ6IGZhbHNlLFxuICAgIGRlc2NyaXB0aW9uOiAnQWx1bW5pIGNlbGwgaXMgYSBzdHVkZW50IGJvZHkgaW4gSUlUIEtoYXJhZ3B1ciB3aXRoIHRoZSBhaW0gdG8gZm9zdGVyIGFuZCBicmlkZ2UgdGhlIGludGVyYWN0aW9uIGJldHdlZW4gdGhlIGluc3RpdHV0ZSBhbmQgaXRzIEFsdW1uaS4gSUlUIEtoYXJhZ3B1ciBoYXMgYWx3YXlzIG1haW50YWluZWQgc3Ryb25nIEFsdW1uaSBcdTIwMTNJbnN0aXR1dGUgcmVsYXRpb24uJyxcbiAgICBibG9jazogJ08nLFxuICAgIGxpbmtzOiB7IGZiOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2lpdGtncC5hbHVtbmljZWxsLycgfVxuICB9LFxuICB7XG4gICAgc3ltYm9sOiAnU2YnLFxuICAgIG5hbWU6ICdTcHJpbmcgRmVzdCcsXG4gICAgeWVhcjogMTk2MCxcbiAgICBzaXplOiAnWEwnLFxuICAgIHRzZ19yZWNvZ25pemVkOiB0cnVlLFxuICAgIGRlc2NyaXB0aW9uOiAnU3ByaW5nIEZlc3QgaXMgdGhlIGFubnVhbCBTb2NpYWwgYW5kIEN1bHR1cmFsIGZlc3Qgb2YgSUlUIEtoYXJhZ3B1ciwgV2VzdCBCZW5nYWwgaGVsZCBpbiB0aGUgbW9udGggb2YgSmFudWFyeS4nLFxuICAgIGJsb2NrOiAnTycsXG4gICAgbGlua3M6IHsgZmI6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vc3ByaW5nZmVzdC5paXRrZ3AvJyB9XG4gIH0sXG4gIHtcbiAgICBzeW1ib2w6ICdCcicsXG4gICAgbmFtZTogJ0JyYW5kaW5nIGFuZCBSZWxhdGlvbnMgQ2VsbCcsXG4gICAgeWVhcjogMjAxNSxcbiAgICBzaXplOiAnUycsXG4gICAgdHNnX3JlY29nbml6ZWQ6IGZhbHNlLFxuICAgIGRlc2NyaXB0aW9uOiAnQkFSQyB3b3JrcyB0byBicmluZyBtZWRpYSBhdHRlbnRpb24gdG8gbm90YWJsZSBldmVudHMgaW4gdGhlIGNhbXB1cyBhbmQgcHJvbW90ZSBJSVQgS2hhcmFncHVyIGFzIGEgcmVwdXRhYmxlIGJyYW5kLicsXG4gICAgYmxvY2s6ICdPJyxcbiAgICBsaW5rczoge1xuICAgICAgZmI6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vQnJhbmRpbmctQW5kLVJlbGF0aW9ucy1DZWxsLUlJVC1LaGFyYWdwdXItMTIzOTMwMTM0NjI1NjExLydcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBzeW1ib2w6ICdBaScsXG4gICAgbmFtZTogJ0FJRVNFQyBJSVRLR1AnLFxuICAgIHllYXI6IDIwMTAsXG4gICAgc2l6ZTogJ0wnLFxuICAgIHRzZ19yZWNvZ25pemVkOiBmYWxzZSxcbiAgICBkZXNjcmlwdGlvbjogJ0FJRVNFQyBpcyBmb2N1c2VkIG9uIHByb3ZpZGluZyBhIHBsYXRmb3JtIGZvciB5b3V0aCBsZWFkZXJzaGlwIGRldmVsb3BtZW50IGJ5IHByb3ZpZGluZyBvcHBvcnR1bml0aWVzIHRvIHBhcnRpY2lwYXRlIGluIEludGVybmF0aW9uYWwgSW50ZXJuc2hpcHMsIEV4cGVyaWVudGlhbCBsZWFkZXJzaGlwIG9wcG9ydHVuaXRpZXMgYW5kIGEgZ2xvYmFsIGxlYXJuaW5nIGVudmlyb25tZW50LicsXG4gICAgYmxvY2s6ICdPJyxcbiAgICBsaW5rczogeyBmYjogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9haWVzZWNpaXRrZ3AvJyB9XG4gIH0sXG4gIHtcbiAgICBzeW1ib2w6ICdDcScsXG4gICAgbmFtZTogJ0NvbW11bmlxdVx1MDBFOScsXG4gICAgeWVhcjogMjAwNixcbiAgICBzaXplOiAnUycsXG4gICAgdHNnX3JlY29nbml6ZWQ6IHRydWUsXG4gICAgZGVzY3JpcHRpb246ICdDb21tdW5pcXVlIGFpbXMgdG8gYmUgYW4gaW50ZXJmYWNlIGJldHdlZW4gcHJvZmVzc2lvbmFsIGNvbW11bmljYXRpb24gZXhwZXJ0cyBhbmQgaW5kaXZpZHVhbCBzdHVkZW50cyBhbmQgd29yayB3aXRoIHRoZSBzdHVkZW50cyB0byBlbnN1cmUgdGhhdCB0aGVyZSBpcyBhIHBlcmNlcHRpYmxlIGNoYW5nZSBpbiB0aGUgbGV2ZWwgb2YgY29tbXVuaWNhdGlvbiBza2lsbHMgaW4gdGhlIGNhbXB1cy4nLFxuICAgIGJsb2NrOiAnTycsXG4gICAgbGlua3M6IHsgZmI6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vY29tbXVuaXF1ZS5paXRrZ3AvJyB9XG4gIH0sXG4gIHtcbiAgICBzeW1ib2w6ICdUYScsXG4gICAgbmFtZTogJ0lJVCBUZWNoIEFtYml0JyxcbiAgICB5ZWFyOiAyMDE4LFxuICAgIHNpemU6ICdMJyxcbiAgICB0c2dfcmVjb2duaXplZDogZmFsc2UsXG4gICAgZGVzY3JpcHRpb246ICdUaGUgSUlUIFRlY2ggQW1iaXQgY292ZXJzIHJlc2VhcmNoIGFuZCB0ZWNoIHN0b3JpZXMgZnJvbSB0aGUgUEFOIElJVCBlY29zeXN0ZW0uJyxcbiAgICBibG9jazogJ0MnLFxuICAgIGxpbmtzOiB7IGZiOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2lpdC50ZWNoLmFtYml0LycgfVxuICB9LFxuICB7XG4gICAgc3ltYm9sOiAnUGgnLFxuICAgIG5hbWU6ICdIaW5kaSBUZWNobm9sb2d5IERyYW1hdGljcyBTb2NpZXR5IChQcmF2YWFoKScsXG4gICAgeWVhcjogMTk2NyxcbiAgICBzaXplOiAnWEwnLFxuICAgIHRzZ19yZWNvZ25pemVkOiB0cnVlLFxuICAgIGRlc2NyaXB0aW9uOiAnUHJhdmFhaCBpcyB0aGUgSGluZGkgdGhlYXRlciBncm91cCBvZiBJSVQgS2hhcmFncHVyIHdoaWNoIGFpbXMgdG8gY3JlYXRlIGF3YXJlbmVzcyBhYm91dCB0aGVhdHJlIGFuZCBpdHMgdmFyaW91cyBhc3BlY3RzIGluIHRoZSBzdHVkZW50cyBieSBicmluZ2luZyB0b2dldGhlciBwZW9wbGUgd2hvIGFyZSBpbnRlcmVzdGVkIGluIHRoZSBwZXJmb3JtaW5nIGFydHMuJyxcbiAgICBibG9jazogJ0MnLFxuICAgIGxpbmtzOiB7IGZiOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL1ByYXZhYWgvJyB9XG4gIH0sXG4gIHtcbiAgICBzeW1ib2w6ICdCaycsXG4gICAgbmFtZTogJ1RlY2hub2xvZ3kgRGFuY2UgU29jaWV0eSAoQnJlYWtmcmVlKScsXG4gICAgeWVhcjogMjAxMixcbiAgICBzaXplOiAnTCcsXG4gICAgdHNnX3JlY29nbml6ZWQ6IHRydWUsXG4gICAgZGVzY3JpcHRpb246ICdCcmVha2ZyZWUgaXMgdGhlIGNhbXB1cyBkYW5jZSBzb2NpZXR5IHRoYXQgYWN0cyBhcyBhIGNvbW1vbiBwbGF0Zm9ybSBmb3Igc3R1ZGVudHMgaW50ZXJlc3RlZCBpbiBkYW5jaW5nIGFuZCBjaG9yZW9ncmFwaHksIGFuZCBleHBsb3JpbmcgdGhlIHZhcmlvdXMgZ2VucmVzIG9mIGRhbmNlLicsXG4gICAgYmxvY2s6ICdDQycsXG4gICAgbGlua3M6IHsgZmI6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vQnJlYWtmcmVlbm93b3JuZXZlci8nIH1cbiAgfSxcbiAge1xuICAgIHN5bWJvbDogJ0NoJyxcbiAgICBuYW1lOiAnQ2hlc3MgQ2x1YiwgSUlUIEtoYXJhZ3B1cicsXG4gICAgeWVhcjogMjAxNyxcbiAgICBzaXplOiAnTkEnLFxuICAgIHRzZ19yZWNvZ25pemVkOiB0cnVlLFxuICAgIGRlc2NyaXB0aW9uOiAnQ2hlc3MgQ2x1YiwgSUlUIEtoYXJhZ3B1ciBjcmVhdGVzIGEgbGl2ZWx5IGNoZXNzIGN1bHR1cmUgb24gY2FtcHVzIHdpdGggcmVndWxhciB0b3VybmFtZW50cyBhbmQgY2FzdWFsIHBsYXkgc2Vzc2lvbnMuIEl0IHByb3ZpZGVzIGEgd2VsY29taW5nIHNwYWNlIHdoZXJlIHBsYXllcnMgb2YgYWxsIHNraWxsIGxldmVscyBjYW4gbGVhcm4sIGNvbXBldGUsIGFuZCBlbmpveSB0aGUgZ2FtZSB0b2dldGhlci4nLFxuICAgIGJsb2NrOiAnVScsXG4gICAgbGlua3M6IHtcbiAgICAgIGluc3RhOiAnaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9jaGVzc2NsdWJfaWl0a2dwJyxcbiAgICAgIGZiOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL0NoZXNzQ2x1YklJVEtHUC8nXG4gICAgfVxuICB9LFxuICB7XG4gICAgc3ltYm9sOiAnVGsnLFxuICAgIG5hbWU6ICdUZWFtIEtBUlQnLFxuICAgIHllYXI6IDIwMDgsXG4gICAgc2l6ZTogJ00nLFxuICAgIHRzZ19yZWNvZ25pemVkOiBmYWxzZSxcbiAgICBkZXNjcmlwdGlvbjogJ1RlYW1LQVJUIGlzIHRoZSBvZmZpY2lhbCBGb3JtdWxhIFN0dWRlbnQgdGVhbSBvZiBJSVQgS2hhcmFncHVyLiBUaGV5IGFyZSBhIGdyb3VwIG9mIHN0dWRlbnRzIHdobyBkZXNpZ24sIG1hbnVmYWN0dXJlIGFuZCB0ZXN0IEZvcm11bGEgc3R5bGUgcmFjZWNhcnMgYW5kIHJlcHJlc2VudCBJSVQgS2hhcmFncHVyIGluIEZTQUUgY29tcGV0aXRpb25zLicsXG4gICAgYmxvY2s6ICdUTycsXG4gICAgbGlua3M6IHsgZmI6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vVGVhbUtBUlQvJyB9XG4gIH0sXG4gIHtcbiAgICBzeW1ib2w6ICdLcicsXG4gICAgbmFtZTogJ0toYXJhZ3B1ciBSb2Jvc29jY2VyIFN0dWRlbnRzXHUyMDE5IEdyb3VwJyxcbiAgICB5ZWFyOiAyMDA4LFxuICAgIHNpemU6ICdMJyxcbiAgICB0c2dfcmVjb2duaXplZDogdHJ1ZSxcbiAgICBkZXNjcmlwdGlvbjogXCJBIHN0dWRlbnRzJyBncm91cCBpbiBJSVQgS2hhcmFncHVyIHdoaWNoIHdvcmtzIG9uIGJ1aWxkaW5nIGF1dG9ub21vdXMgYm90cyBmb3IgcGxheWluZyBzb2NjZXIgYW5kIHBhcnRpY2lwYXRpbmcgaW4gaW50ZXJuYXRpb25hbCBldmVudHMgbGlrZSBGLkkuUi5BLiBXb3JsZCBDaGFtcGlvbnNoaXAgYW5kIFJvYm9DdXAgc29jY2VyLlwiLFxuICAgIGJsb2NrOiAnVCcsXG4gICAgbGlua3M6IHsgZmI6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20va3Jzc2cvJyB9XG4gIH0sXG4gIHtcbiAgICBzeW1ib2w6ICdDeScsXG4gICAgbmFtZTogJ0NoaWxkIFJpZ2h0cyBhbmQgWW91IEtHUCcsXG4gICAgeWVhcjogMjAxNCxcbiAgICBzaXplOiAnTkEnLFxuICAgIHRzZ19yZWNvZ25pemVkOiBmYWxzZSxcbiAgICBkZXNjcmlwdGlvbjogJ0NSWSBJSVRLR1AgYSBncm91cCBvZiB2b2x1bnRlZXJzIHdvcmtpbmcgdW5kZXIgdGhlIENoaWxkIFJpZ2h0cyBhbmQgWW91IChDUlkpIElJVCBLaGFyYWdwdXIgVm9sdW50ZWVyIENoYXB0ZXIuIENSWSBpcyBhbiBpbnRlcm5hdGlvbmFsbHkgcmVub3duZWQgTkdPIHdvcmtpbmcgb24gQ2hpbGQgUmlnaHRzIGluIEluZGlhICYgYWJyb2FkIGZvciBvdmVyIDMwIHllYXJzLicsXG4gICAgYmxvY2s6ICdXJyxcbiAgICBsaW5rczogeyBmYjogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9DUlkuSUlUS0dQLycgfVxuICB9LFxuICB7XG4gICAgc3ltYm9sOiAnR3cnLFxuICAgIG5hbWU6ICdHb3BhbGkgWW91dGggV2VsZmFyZSBTb2NpZXR5JyxcbiAgICB5ZWFyOiAyMDAyLFxuICAgIHNpemU6ICdOQScsXG4gICAgdHNnX3JlY29nbml6ZWQ6IGZhbHNlLFxuICAgIGRlc2NyaXB0aW9uOiAnR1lXUyBpcyBhIE5HTyBydW4gYnkgYSB0ZWFtIG9mIHN0dWRlbnRzIGFuZCBwcm9mZXNzb3JzIG9mIHRoZSBjYW1wdXMsIHdpdGggYXNzaXN0YW5jZSBmcm9tIGxvY2FsIHNvY2lhbCBlbnRodXNpYXN0cy4gR1lXUyBhaW1zIHRvIGltcHJvdmUgdGhlIGxpdmluZyBzdGFuZGFyZHMgb2YgdGhlIHBlb3BsZSBvZiBHb3BhbGkgKGEgdmlsbGFnZSBsb2NhdGVkIDUga20gZnJvbSB0aGUgSUlUIGNhbXB1cyknLFxuICAgIGJsb2NrOiAnVycsXG4gICAgbGlua3M6IHsgZmI6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vZ3l3cy5paXRrZ3AvJyB9XG4gIH0sXG4gIHtcbiAgICBzeW1ib2w6ICdBbScsXG4gICAgbmFtZTogJ0FtYmFyJyxcbiAgICB5ZWFyOiAyMDE1LFxuICAgIHNpemU6ICdNJyxcbiAgICB0c2dfcmVjb2duaXplZDogdHJ1ZSxcbiAgICBkZXNjcmlwdGlvbjogJ0FtYmFyIGlzIHRoZSBHZW5kZXIgYW5kIFNleHVhbCBkaXZlcnNpdHkgZ3JvdXAgb2YgdGhlIGNhbXB1cyBmb3IgdGhlIExHQlRRIGNvbW11bml0eSByZXNpZGluZyBpbiB0aGUgY2FtcHVzIGNvbXByaXNlZCBvZiBjdXJyZW50IHN0dWRlbnRzLCBhbHVtbmksIHN0YWZmIGFuZCBmYW1pbHkgb2Ygc3RhZmYuJyxcbiAgICBibG9jazogJ1cnLFxuICAgIGxpbmtzOiB7IGZiOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2FtYmFyLmlpdGtncC8nIH1cbiAgfSxcbiAge1xuICAgIHN5bWJvbDogJ01rJyxcbiAgICBuYW1lOiAnbWV0YUtHUCcsXG4gICAgeWVhcjogMjAxNSxcbiAgICBzaXplOiAnTkEnLFxuICAgIHRzZ19yZWNvZ25pemVkOiBmYWxzZSxcbiAgICBkZXNjcmlwdGlvbjogJ21ldGFLR1AgaXMgYSBjb2xsZWN0aXZlIGludGVyZXN0IGdyb3VwIG9mIGVuZ2luZWVycywgaGFja2VycywgYW5kIGFydGlzdHMgZnJvbSBJSVQgS2hhcmFncHVyLCB3aG8gY29sbGFib3JhdGUgb24gdmFyaW91cyB0ZWNobmljYWwgYW5kIG5vbi10ZWNobmljYWwgcHJvamVjdHMuJyxcbiAgICBibG9jazogJ1RPJyxcbiAgICBsaW5rczogeyBzbGFjazogJ2h0dHBzOi8vc2xhY2subWV0YWtncC5vcmcnLCBpbnN0YTogJ2h0dHBzOi8vaW5zdGFncmFtLmNvbS9tZXRha2dwXy8nLCBtZXRhd2lraTogJ2h0dHBzOi8vd2lraS5tZXRha2dwLm9yZy93L01ldGFrZ3A6QWJvdXQnLCB3ZWJzaXRlOiAnaHR0cHM6Ly9tZXRha2dwLmdpdGh1Yi5pbycgfVxuICB9LFxuICB7XG4gICAgc3ltYm9sOiAnTmknLFxuICAgIG5hbWU6ICdORVQgSW1wYWN0IElJVCBLaGFyYWdwdXInLFxuICAgIHllYXI6IDIwMTUsXG4gICAgc2l6ZTogJ1hMJyxcbiAgICB0c2dfcmVjb2duaXplZDogZmFsc2UsXG4gICAgZGVzY3JpcHRpb246ICdOZXQgSW1wYWN0IElJVCBLaGFyYWdwdXIgYWltcyBhdCBjcmVhdGluZyBhIHBvc2l0aXZlIGltcGFjdCBpbiB0aGUgY2FtcHVzLiBUaGUgc3R1ZGVudHMgY2FuIHVzZSB0aGVpciBwbGF0Zm9ybSB0byBkZXZlbG9wIHRoZW1zZWx2ZXMgZm9yIHRoZSB0eXBlIG9mIGNhcmVlciB0aGV5IGFyZSBsb29raW5nIGZvci4nLFxuICAgIGJsb2NrOiAnVycsXG4gICAgbGlua3M6IHsgZmI6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vbmV0aW1wYWN0aWl0a2hhcmFncHVyLycgfSxcbiAgICBpbmFjdGl2ZTogdHJ1ZVxuICB9LFxuICB7XG4gICAgc3ltYm9sOiAnRWMnLFxuICAgIG5hbWU6ICdFbnRyZXByZW5ldXJzaGlwIENlbGwnLFxuICAgIHllYXI6IDIwMDYsXG4gICAgc2l6ZTogJ0wnLFxuICAgIHRzZ19yZWNvZ25pemVkOiBmYWxzZSxcbiAgICBkZXNjcmlwdGlvbjogJ0UtQ2VsbCBhaW1zIHRvIGZvc3RlciB0aGUgc3Bpcml0IG9mIGVudHJlcHJlbmV1cnNoaXAgYW1vbmcgY29sbGVnZSBzdHVkZW50cyBpbiBJbmRpYSBhbmQgbnVydHVyZSB5b3VuZyBwZW9wbGUgd2l0aCBicmlnaHQgaWRlYXMuIEl0IGlzIHJhbmtlZCBhcyBvbmUgb2YgdGhlIG1vc3QgYWN0aXZlIGVudHJlcHJlbmV1cnNoaXAgcHJvbW90aW5nIGJvZGllcyBieSBzZXZlcmFsIHJhdGluZyBhZ2VuY2llcy4nLFxuICAgIGJsb2NrOiAnTycsXG4gICAgbGlua3M6IHsgZmI6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vZWNlbGwuaWl0a2dwLycgfVxuICB9LFxuICB7XG4gICAgc3ltYm9sOiAnS2onLFxuICAgIG5hbWU6ICdLc2hpdGlqJyxcbiAgICB5ZWFyOiAyMDA0LFxuICAgIHNpemU6ICdYTCcsXG4gICAgdHNnX3JlY29nbml6ZWQ6IHRydWUsXG4gICAgZGVzY3JpcHRpb246ICdLVEogaXMgdGhlIGFubnVhbCB0ZWNobm8tbWFuYWdlbWVudCBmZXN0IG9mIHRoZSBjYW1wdXMuIEl0IGFpbXMgdG8gcHJvbW90ZSB0aGUgdGVjaG5pY2FsIGFuZCBtYW5hZ2VyaWFsIG91dHB1dCBvZiB0aGUgbmF0aW9uIGJ5IHByb3ZpZGluZyBhIHBsYXRmb3JtIGZvciB0aGUgeW91dGggdG8gZGlzcGxheSB0aGVpciBpbnB1dHMgYW5kIHNraWxscy4nLFxuICAgIGJsb2NrOiAnTycsXG4gICAgbGlua3M6IHsgZmI6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20va3RqLmlpdGtncC8nIH1cbiAgfSxcbiAge1xuICAgIHN5bWJvbDogJ0lyJyxcbiAgICBuYW1lOiAnSW50ZXJuYXRpb25hbCBSZWxhdGlvbnMgQ2VsbCcsXG4gICAgeWVhcjogMjAxNSxcbiAgICBzaXplOiAnUycsXG4gICAgdHNnX3JlY29nbml6ZWQ6IGZhbHNlLFxuICAgIGRlc2NyaXB0aW9uOiAnSVJDIGlzIGZvcm1lZCB1bmRlciBEZWFuIEFsdW1uaSBBZmZhaXJzIGFuZCBJbnRlcm5hdGlvbmFsIFJlbGF0aW9ucywgd2l0aCB0aGUgYWltIHRvIGRldmVsb3AgYW5kIG1hbmFnZSBwYXJ0bmVyc2hpcHMsIGxpbmthZ2VzIGFuZCBuZXR3b3JrcyB3aXRoIGluc3RpdHV0aW9ucyBvZiBhY2FkZW1pYyBleGNlbGxlbmNlIGFuZCByZXB1dGUgYWxsIG92ZXIgdGhlIHdvcmxkLicsXG4gICAgYmxvY2s6ICdXJyxcbiAgICBsaW5rczogeyBmYjogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9JUkNJSVRLR1AvJyB9XG4gIH0sXG4gIHtcbiAgICBzeW1ib2w6ICdGYycsXG4gICAgbmFtZTogJ0ZpbmFuY2UgQ2x1YiwgSUlUIEtoYXJhZ3B1cicsXG4gICAgeWVhcjogMjAxOSxcbiAgICBzaXplOiAnTkEnLFxuICAgIHRzZ19yZWNvZ25pemVkOiBmYWxzZSxcbiAgICBkZXNjcmlwdGlvbjogJ0ZpbmFuY2UgQ2x1YiBjb25kdWN0cyBldmVudHMsIGluaXRpYXRlcyBwcm9ncmFtcyBhbmQgYWN0cyBhcyBhbiBpbnRlcm1lZGlhcnkgdG8gZW5zdXJlIG1heGltdW0gYmVuZWZpdCB0byBzdHVkZW50cyBpbmNsdWRpbmcsIGJ1dCBub3QgbGltaXRlZCB0byB0aG9zZSBpbiB0aGUgRmluYW5jaWFsIEVuZ2luZWVyaW5nIHByb2dyYW0uJyxcbiAgICBibG9jazogJ08nLFxuICAgIGxpbmtzOiB7IGZiOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2ZpbmFuY2VjbHViaWl0a2dwLycgfVxuICB9LFxuICB7XG4gICAgc3ltYm9sOiAnRHMnLFxuICAgIG5hbWU6ICdEZWJhdGluZyBTb2NpZXR5JyxcbiAgICB5ZWFyOiAyMDA5LFxuICAgIHNpemU6ICdNJyxcbiAgICB0c2dfcmVjb2duaXplZDogdHJ1ZSxcbiAgICBkZXNjcmlwdGlvbjogXCJUaGUgRGViYXRpbmcgU29jaWV0eSwgSUlUIEtoYXJhZ3B1ciwgaXMgYSBmdWxsLWZsZWRnZWQgc29jaWV0eSB1bmRlciB0aGUgVGVjaG5vbG9neSBTdHVkZW50cycgR3lta2hhbmEsIElJVCBLaGFyYWdwdXIsIHdoaWNoIGFpbXMgdG8gcHJvbW90ZSB0aGUgY3VsdHVyZSBvZiBkZWJhdGluZyBvbiB0aGUgY2FtcHVzIGFuZCBwcm92aWRlcyBhIHBsYXRmb3JtIHRvIGJyaW5nIGFsbCB0aGUgZGViYXRlcnMgdG9nZXRoZXIuXCIsXG4gICAgYmxvY2s6ICdDJyxcbiAgICBsaW5rczogeyBcbiAgICAgIGZiOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2tncGRlYnNvYy8nLFxuICAgICAgaW5zdGE6ICdodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2RlYnNvYy5paXRrZ3AnXG4gICAgfVxuICB9LFxuICB7XG4gICAgc3ltYm9sOiAnU2EnLFxuICAgIG5hbWU6ICdUaGUgU2Nob2xhcnNcdTIwMTkgQXZlbnVlJyxcbiAgICB5ZWFyOiAyMDA1LFxuICAgIHNpemU6ICdNJyxcbiAgICB0c2dfcmVjb2duaXplZDogZmFsc2UsXG4gICAgZGVzY3JpcHRpb246ICdUaGUgU2Nob2xhcnNcdTIwMTkgQXZlbnVlIChUU0EpIGlzIHRoZSBpbmRlcGVuZGVudCBzdHVkZW50IHJ1biBFbmdsaXNoIG5ld3Nib2R5IG9mIHRoZSBjYW1wdXMuIFRTQSByZXBvcnRzIGNhbXB1cyBldmVudHMgYW5kIGZ1bmN0aW9ucyBhcyBhIHB1YmxpYyBpbnRlcmZhY2UgYmV0d2VlbiBzdHVkZW50cyBhbmQgdGhlIGFkbWluaXN0cmF0aW9uLiBPZnRlbiwgdGhleSBtYWtlIGNvb2wgc3R1ZmYgbGlrZSB0aGUgdGFibGUgeW91IGFyZSByZWFkaW5nIHJpZ2h0IG5vdy4nLFxuICAgIGJsb2NrOiAnQycsXG4gICAgbGlua3M6IHsgaW5zdGE6ICdodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3NjaG9sYXJzYXZlbnVlJywgZmI6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vc2Nob2xhcnNhdmVudWUvJywgZW1haWw6ICdtYWlsdG86dGhlc2Nob2xhcnNhdmVudWVAZ21haWwuY29tJyB9XG4gIH0sXG4gIHtcbiAgICBzeW1ib2w6ICdFbicsXG4gICAgbmFtZTogJ0VuZ2xpc2ggVGVjaG5vbG9neSBEcmFtYXRpY3MgU29jaWV0eSAoRW5jb3JlKScsXG4gICAgeWVhcjogMTk4MCxcbiAgICBzaXplOiAnWEwnLFxuICAgIHRzZ19yZWNvZ25pemVkOiB0cnVlLFxuICAgIGRlc2NyaXB0aW9uOiAnRW5jb3JlIGlzIHRoZSBFbmdsaXNoIGRyYW1hdGljcyBzb2NpZXR5IG9mIHRoZSBjYW1wdXMuIFRoZWlyIGdvYWwgaXMgdG8gZW5qb3kgdGhlIG1vbWVudHMgb24gc3RhZ2UgYW5kIGdpdmUgdGhlaXIgYXVkaWVuY2UgYSB3b3J0aHdoaWxlIGV4cGVyaWVuY2UuIFRoZXkgZ28gYnkgdGhlaXIgdGFnbGluZSBcIlN0YWdlIGh1bWFyZSBiYWFwIGthIGhhaVwiLicsXG4gICAgYmxvY2s6ICdDJyxcbiAgICBsaW5rczogeyBmYjogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9URFNFbmNvcmUvJywgaW5zdGE6ICdodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2lpdGtncGVuY29yZScgfVxuICB9LFxuICB7XG4gICAgc3ltYm9sOiAnRXQnLFxuICAgIG5hbWU6ICdFYXN0ZXJuIFRlY2hub2xvZ3kgTXVzaWMgU29jaWV0eScsXG4gICAgeWVhcjogMjAwOCxcbiAgICBzaXplOiAnUycsXG4gICAgdHNnX3JlY29nbml6ZWQ6IHRydWUsXG4gICAgZGVzY3JpcHRpb246ICdFVE1TIGlzIGEgZ3JvdXAgb2Ygc2VsZi1sZWFybmVkIG11c2ljaWFucyB3aG8gZmluZCBhIGNvbW1vbiBpbnRlcmVzdCBpbiB0aGUgd2lkZSBzZWEgb2YgbXVzaWMuIFRoZXkgcGVyZm9ybSB0d2ljZSBhbm51YWxseSBjb3ZlcmluZyBhIHNwZWN0cnVtIG9mIGdlbnJlcyByYW5naW5nIGZyb20gY2xhc3NpY2FsIHRvIGZ1c2lvbiB0byBwb3B1bGFyIGJvbGx5d29vZCBoaXRzLicsXG4gICAgYmxvY2s6ICdDQycsXG4gICAgbGlua3M6IHsgZmI6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vRVRNU0lJVEtHUC8nIH1cbiAgfSxcbiAge1xuICAgIHN5bWJvbDogJ0NjJyxcbiAgICBuYW1lOiAnVGVjaG5vbG9neSBDb21lZHkgQ2x1YicsXG4gICAgeWVhcjogMjAxOSxcbiAgICBzaXplOiAnTScsXG4gICAgdHNnX3JlY29nbml6ZWQ6IHRydWUsXG4gICAgZGVzY3JpcHRpb246ICdDb21lZHkgQ2x1YiBpcyBhIHNvY2lldHkgZm9yIHN0YW5kLXVwIGFuZCBjb21lZHkgZW50aHVzaWFzdHMuJyxcbiAgICBibG9jazogJ1UnLFxuICAgIGxpbmtzOiB7XG4gICAgICBpbnN0YTogJ2h0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vY29tZWR5X2NsdWJfaWl0X2toYXJhZ3B1cicsXG4gICAgICBmYjogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9jb21lZHljbHViaWl0a2dwLydcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBzeW1ib2w6ICdFdicsXG4gICAgbmFtZTogJ0VsZWN0cmljIEdyb3VuZCBWZWhpY2xlJyxcbiAgICB5ZWFyOiAyMDE2LFxuICAgIHNpemU6ICdNJyxcbiAgICB0c2dfcmVjb2duaXplZDogZmFsc2UsXG4gICAgZGVzY3JpcHRpb246ICdFVkcgaXMgaW52b2x2ZWQgaW4gYnVpbGRpbmcgRWxlY3RyaWMgVmVoaWNsZXMgdGhhdCBhcmUgZmFzdCwgYWZmb3JkYWJsZSBhbmQgZW5lcmd5LWVmZmljaWVudC4nLFxuICAgIGJsb2NrOiAnVCcsXG4gICAgbGlua3M6IHsgZmI6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vRVZHLklJVEtHUC8nIH0sXG4gICAgaW5hY3RpdmU6IHRydWVcbiAgfSxcbiAge1xuICAgIHN5bWJvbDogJ1N3JyxcbiAgICBuYW1lOiAnU3dhcm0gUm9ib3RpY3MnLFxuICAgIHllYXI6IDIwMTYsXG4gICAgc2l6ZTogJ00nLFxuICAgIHRzZ19yZWNvZ25pemVkOiBmYWxzZSxcbiAgICBkZXNjcmlwdGlvbjogJ1N3YXJtIGV4cGxvcmVzIHRoZSBjb250ZW1wb3JhcnkgZmllbGQgb2YgZGlzdHJpYnV0ZWQgYWxnb3JpdGhtcyBmb3Igcm9ib3Qgc3dhcm1zIGFuZCB0aGVpciBpbXBsZW1lbnRhdGlvbi4nLFxuICAgIGJsb2NrOiAnVE8nLFxuICAgIGxpbmtzOiB7IGZiOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3N3YXJtcm9ib3RpY3NrZ3AnIH0sXG4gICAgaW5hY3RpdmU6IHRydWVcbiAgfSxcbiAge1xuICAgIHN5bWJvbDogJ01hJyxcbiAgICBuYW1lOiAnTWFuZ2EgYW5kIEFuaW1lIFNvY2lldHkgS2hhcmFncHVyJyxcbiAgICB5ZWFyOiAyMDE5LFxuICAgIHNpemU6ICdTJyxcbiAgICB0c2dfcmVjb2duaXplZDogZmFsc2UsXG4gICAgZGVzY3JpcHRpb246ICdNQVNLIGlzIGEgZ3JvdXAgb2Ygb3Rha3VzIGVuZ2FnaW5nIGluIGFydCwgQU1WIG1ha2luZywgbWFuZ2EgY3JlYXRpb24gYW5kIHF1aXp6aW5nLicsXG4gICAgYmxvY2s6ICdDJyxcbiAgICBsaW5rczogeyB3ZWJzaXRlOiAnaHR0cHM6Ly9rZ3BtYXNrLmNsdWIvJywgaW5zdGE6ICdodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL21hc2tpaXRrZ3AvJywgZmI6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vbWFza2lpdGtncCcgfVxuICB9LFxuICB7XG4gICAgc3ltYm9sOiAnUGQnLFxuICAgIG5hbWU6ICdQcm9EZXgnLFxuICAgIHllYXI6IDIwMTIsXG4gICAgc2l6ZTogJ00nLFxuICAgIHRzZ19yZWNvZ25pemVkOiB0cnVlLFxuICAgIGRlc2NyaXB0aW9uOiAnUHJvRGV4IGlzIGEgdGVjaG5pY2FsIHNvY2lldHkgZm9jdXNlZCBvbiBwcm9tb3RpbmcgSGFyZHdhcmUgbW9kZWxsaW5nLCBEZXNpZ24gYW5kIElubm92YXRpb24gYW1vbmcgdGhlIHN0dWRlbnRzIG9mIElJVCBLaGFyYWdwdXIuJyxcbiAgICBibG9jazogJ1QnLFxuICAgIGxpbmtzOiB7IGluc3RhOiAnaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9wcm9kZXguaWl0a2dwLycsIGZiOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3Byb2RleC5paXRrZ3AvJywgbGlua2VkaW46ICdodHRwczovL3d3dy5saW5rZWRpbi5jb20vY29tcGFueS9wcm9kZXgtaWl0LWtoYXJhZ3B1ci8nLCB3ZWJzaXRlOiAnaHR0cHM6Ly9wcm9kZXgtaWl0a2dwLm5ldGxpZnkuYXBwLycsIGVtYWlsOiAnbWFpbHRvOnByb2RleC5paXRrZ3BAZ21haWwuY29tJyB9XG4gIH0sXG4gIHtcbiAgICBzeW1ib2w6ICdBcycsXG4gICAgbmFtZTogJ1RlY2hub2xvZ3kgQWR2ZW50dXJlIFNvY2lldHknLFxuICAgIHllYXI6IDIwMDgsXG4gICAgc2l6ZTogJ0wnLFxuICAgIHRzZ19yZWNvZ25pemVkOiB0cnVlLFxuICAgIGRlc2NyaXB0aW9uOiAnVEFkUyBpcyB0aGUgYWR2ZW50dXJlIHNvY2lldHkgb2YgdGhlIGNhbXB1cyB0aGF0IGJyaW5ncyBleHRyZW1lIHNwb3J0cyBjbG9zZXIgdG8gdGhlIHN0dWRlbnRzLiBUaGV5IGV4cGxvcmUgTW91bnRhaW5lZXJpbmcsIFJvY2sgQ2xpbWJpbmcsIE1vdW50YWluIEJpa2luZywgSGFuZyBHbGlkaW5nLCBCdW5nZWUganVtcGluZywgYW5kIG9yZ2FuaXplIGFkdmVudHVyZSB0cmlwcyBpbiB0aGUgY291bnRyeSBmb3Igc3R1ZGVudHMuJyxcbiAgICBibG9jazogJ08nLFxuICAgIGxpbmtzOiB7XG4gICAgICB3ZWJzaXRlOiAnaHR0cHM6Ly93d3cudGFkc2lpdGtncC5pbi8nLFxuICAgICAgaW5zdGE6ICdodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3RhZHNfaWl0a2dwLycsXG4gICAgICBmYjogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9UQWRTLklJVC8nXG4gICAgfVxuICB9LFxuICB7XG4gICAgc3ltYm9sOiAnUm0nLFxuICAgIG5hbWU6ICdJSVQgS2hhcmFncHVyIFJlY3JlYXRpb25hbCBNYXRoZW1hdGljcyBDbHViJyxcbiAgICB5ZWFyOiAyMDE4LFxuICAgIHNpemU6ICdYTCcsXG4gICAgdHNnX3JlY29nbml6ZWQ6IGZhbHNlLFxuICAgIGRlc2NyaXB0aW9uOiAnVGhlIHJlY3JlYXRpb25hbCBtYXRoIGNsdWIgaG9zdHMgd2Vla2x5IHNlc3Npb25zIGFuZCByZWFkaW5nIGdyb3VwcyBmb3IgbWF0aCBsb3ZlcnMuJyxcbiAgICBibG9jazogJ0MnLFxuICAgIGxpbmtzOiB7IGZiOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2dyb3Vwcy8zMDA1NjQ1NDM4NDQwNzInIH1cbiAgfSxcbiAge1xuICAgIHN5bWJvbDogJ0RjJyxcbiAgICBuYW1lOiAnMTgwIERlZ3JlZSBDb25zdWx0aW5nLCBJSVQgS2hhcmFncHVyJyxcbiAgICB5ZWFyOiAyMDE5LFxuICAgIHNpemU6ICdNJyxcbiAgICB0c2dfcmVjb2duaXplZDogdHJ1ZSxcbiAgICBkZXNjcmlwdGlvbjogJzE4MCBEZWdyZWUgQ29uc3VsdGluZyBwcm92aWRlcyBzb2NpYWxseSBjb25zY2lvdXMgb3JnYW5pemF0aW9ucyBhcm91bmQgdGhlIHdvcmxkIHdpdGggaGlnaCBxdWFsaXR5IGFuZCBhZmZvcmRhYmxlIGNvbnN1bHRpbmcgc2VydmljZXMuJyxcbiAgICBibG9jazogJ08nLFxuICAgIGxpbmtzOiB7XG4gICAgICBmYjogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS8xODBkY2tncC8nLFxuICAgICAgaW5zdGE6ICdodHRwczovL3d3dy5pbnN0YWdyYW0uY29tLzE4MGRjLmlpdGtncCcsXG4gICAgICBsaW5rZWRpbjogJ2h0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9jb21wYW55LzE4MC1kZWdyZWVzLWNvbnN1bHRpbmctaWl0LWtoYXJhZ3B1cicsXG4gICAgICB3ZWJzaXRlOiAnaHR0cHM6Ly93d3cuMTgwZGNpaXRrZ3AuaW4nXG4gICAgfVxuICB9LFxuICB7XG4gICAgc3ltYm9sOiAnVGcnLFxuICAgIG5hbWU6ICdUZWNobm9sb2d5IFRyYW5zZmVyIEdyb3VwJyxcbiAgICB5ZWFyOiAyMDA3LFxuICAgIHNpemU6ICdMJyxcbiAgICB0c2dfcmVjb2duaXplZDogZmFsc2UsXG4gICAgZGVzY3JpcHRpb246IFwiVGVjaG5vbG9neSBUcmFuc2ZlciBHcm91cCAoVFRHKSBpcyBhIHN0dWRlbnRzJyBpbml0aWF0aXZlIHVuZGVyIHRoZSBhZWdpcyBvZiBTcG9uc29yZWQgUmVzZWFyY2ggJiBJbmR1c3RyaWFsIENvbnN1bHRhbmN5IChTUklDKSwgSUlUIEtoYXJhZ3B1ciwgd2hpY2ggYmVsaWV2ZXMgaW4gdGhlIHBvdGVudGlhbCBvZiB0aGUgSW5zdGl0dXRlIGFzIGEgcHJlbWllciBSZXNlYXJjaCAmIERldmVsb3BtZW50IGNlbnRlci5cIixcbiAgICBibG9jazogJ08nLFxuICAgIGxpbmtzOiB7IGZiOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL1RURy5TUklDLycgfVxuICB9LFxuICB7XG4gICAgc3ltYm9sOiAnU2cnLFxuICAgIG5hbWU6ICdTdHVkZW50IFdlbGZhcmUgR3JvdXAnLFxuICAgIHllYXI6IDIwMTEsXG4gICAgc2l6ZTogJ00nLFxuICAgIHRzZ19yZWNvZ25pemVkOiB0cnVlLFxuICAgIGRlc2NyaXB0aW9uOiAnU1dHIGhlbHBzIHN0dWRlbnRzIGluIGltcHJvdmluZyB0aGVpciBza2lsbHMsIGF0dGl0dWRlIGFuZCByZXNvdXJjZXMgbmVjZXNzYXJ5IHRvIGJvdGggc3VjY2VlZCBpbiB0aGUgY29sbGVnZSBlbnZpcm9ubWVudCBhcyB3ZWxsIGFzIHRvIHB1cnN1ZSBwcm9kdWN0aXZlIGFuZCBzYXRpc2Z5aW5nIGxpdmVzIGJ5IG9yZ2FuaXppbmcgZGlmZmVyZW50IGFjdGl2aXRpZXMgb24gdGhlIGNhbXB1cy4nLFxuICAgIGJsb2NrOiAnVycsXG4gICAgbGlua3M6IHsgZmI6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vU1dHSUlUS0dQLycgfVxuICB9LFxuICB7XG4gICAgc3ltYm9sOiAnSWcnLFxuICAgIG5hbWU6ICdJbnN0aXR1dGUgV2VsbG5lc3MgR3JvdXAnLFxuICAgIHllYXI6IDIwMTcsXG4gICAgc2l6ZTogJ00nLFxuICAgIHRzZ19yZWNvZ25pemVkOiB0cnVlLFxuICAgIGRlc2NyaXB0aW9uOiBcIlVuZGVyIHRoZSBTdHVkZW50cycgV2VsZmFyZSBwb3J0Zm9saW8gb2YgdGhlIFRlY2hub2xvZ3kgU3R1ZGVudHMnIEd5bWtoYW5hLCBJV0cgY29uc2lzdHMgb2YgdHJhaW5lZCBzdHVkZW50cyB3aG8gY29uZHVjdCB3ZWxmYXJlIGFjdGl2aXRpZXMgYW1vbmcgdGhlIHN0dWRlbnQgY29tbXVuaXR5IGFuZCBhY3QgYXMgcHJpbWFyeSBub2RlcyBmb3IgbWF0dXJlIHN0dWRlbnQgY291bnNlbGxpbmcuXCIsXG4gICAgYmxvY2s6ICdXJyxcbiAgICBsaW5rczogeyBmYjogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9pd2cuaWl0a2dwLycgfVxuICB9LFxuICB7XG4gICAgc3ltYm9sOiAnVGMnLFxuICAgIG5hbWU6ICdBcm9tYTogVGVjaG5vbG9neSBDdWxpbmFyeSBBcnRzIFNvY2lldHknLFxuICAgIHllYXI6IDIwMTksXG4gICAgc2l6ZTogJ0wnLFxuICAgIHRzZ19yZWNvZ25pemVkOiB0cnVlLFxuICAgIGRlc2NyaXB0aW9uOiAnVGhlIEN1bGluYXJ5IEFydHMgU29jaWV0eSBlbmNvdXJhZ2VzIGFuZCBmYWNpbGl0YXRlcyBzdHVkZW50cyB0byBsZWFybiBhbmQgZGV2ZWxvcCBhIGRpdmVyc2Ugc2V0IG9mIGN1bGluYXJ5IGFydHMgYW5kIHNwZWNpZmljIGNvb2tpbmcgdGVjaG5pcXVlcy4nLFxuICAgIGJsb2NrOiAnQycsXG4gICAgbGlua3M6IHsgZmI6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vYXJvbWEuaWl0a2dwLycgfVxuICB9LFxuICB7XG4gICAgc3ltYm9sOiAnQ2snLFxuICAgIG5hbWU6ICdDbGljayBLR1AnLFxuICAgIHllYXI6IDIwMTEsXG4gICAgc2l6ZTogJ00nLFxuICAgIHRzZ19yZWNvZ25pemVkOiBmYWxzZSxcbiAgICBkZXNjcmlwdGlvbjogJ0NsaWNrIEtHUCBpcyBhIGdyb3VwIG9mIHBob3RvLWVudGh1c2lhc3RzIHdpdGggdGhlIHNvbGUgYWltIG9mIGNhcHR1cmluZyB0aGUgY2FtcHVzLCBwZW9wbGUgYW5kIGN1bHR1cmUgb2YgSUlUIEtoYXJhZ3B1ci4nLFxuICAgIGJsb2NrOiAnQycsXG4gICAgbGlua3M6IHsgZmI6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vY2xpY2trZ3AvJyB9XG4gIH0sXG4gIHtcbiAgICBzeW1ib2w6ICdMbycsXG4gICAgbmFtZTogJ0xhIE9ic2N1cmEnLFxuICAgIHllYXI6IDIwMTgsXG4gICAgc2l6ZTogJ00nLFxuICAgIHRzZ19yZWNvZ25pemVkOiBmYWxzZSxcbiAgICBkZXNjcmlwdGlvbjogJ0xhIE9ic2N1cmEgaXMgYSBncm91cCB0aGF0IGZlYXR1cmVzIHBob3RvZ3JhcGhzIGZyb20gS0dQIGFuZCBhbGwgb3ZlciBJbmRpYSBhcyB3ZWxsLicsXG4gICAgYmxvY2s6ICdDJyxcbiAgICBsaW5rczoge1xuICAgICAgZmI6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vTGFPYnNjdXJhUGhvdG9ncmFwaHlhbmRWaXN1YWxBcnQvJ1xuICAgIH0sXG4gICAgaW5hY3RpdmU6IHRydWVcbiAgfSxcbiAge1xuICAgIHN5bWJvbDogJ0NnJyxcbiAgICBuYW1lOiAnQ29tcHV0ZXIgR3JhcGhpY3MgU29jaWV0eScsXG4gICAgeWVhcjogMjAxNSxcbiAgICBzaXplOiAnTkEnLFxuICAgIHRzZ19yZWNvZ25pemVkOiB0cnVlLFxuICAgIGRlc2NyaXB0aW9uOiBcIklJVCBLR1AncyBmaXJzdCBvZiBpdHMga2luZCBncmFwaGljcyBkZXZlbG9wbWVudCBncm91cCBmb2N1c2VkIG9uIGdhbWUgZGV2ZWxvcG1lbnQsIEFSL1ZSIGFuZCBncmFwaGljcyByZXNlYXJjaC5cIixcbiAgICBibG9jazogJ0NDJyxcbiAgICBsaW5rczogeyBmYjogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9jZ3NpaXRrZ3AvJyB9XG4gIH0sXG4gIHtcbiAgICBzeW1ib2w6ICdTYycsXG4gICAgbmFtZTogJ0tHUCBTcGVlZGN1YmVycycsXG4gICAgeWVhcjogMjAxNSxcbiAgICBzaXplOiAnTkEnLFxuICAgIHRzZ19yZWNvZ25pemVkOiBmYWxzZSxcbiAgICBkZXNjcmlwdGlvbjogJ1RoZSBLR1AgU3BlZWRjdWJlcnMgaXMgYSBob2JieSBncm91cCBmb3Igc3BlZWRjdWJlcnMgaW4gSUlUIEtoYXJhZ3B1ciB0aGF0IG9yZ2FuaXplcyB3b3Jrc2hvcHMgYW5kIGNvbXBldGl0aW9ucyBvbiBjYW1wdXMuJyxcbiAgICBibG9jazogJ1UnLFxuICAgIGxpbmtzOiB7IGZiOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2tncHNwZWVkY3ViZXJzLycgfSxcbiAgICBpbmFjdGl2ZTogdHJ1ZVxuICB9LFxuICB7XG4gICAgc3ltYm9sOiAnVHInLFxuICAgIG5hbWU6ICdUZWFtIFRSQUsnLFxuICAgIHllYXI6IDIwMjQsXG4gICAgc2l6ZTogJ00nLFxuICAgIHRzZ19yZWNvZ25pemVkOiBmYWxzZSxcbiAgICBkZXNjcmlwdGlvbjogXCJSYWlsd2F5IFJlc2VhcmNoIFN0dWRlbnRzJyBHcm91cCBvZiBJSVQgS2hhcmFncHVyXCIsXG4gICAgYmxvY2s6ICdUJyxcbiAgICBsaW5rczogeyBmYjogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS90ZWFtLnRyYWtncCcsIGluc3RhOiAnaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS90ZWFtX3RyYWtncCcgfVxuICB9LFxuICB7XG4gICAgc3ltYm9sOiAnR2MnLFxuICAgIG5hbWU6ICdHcmltb2lyZSBvZiBDb2RlJyxcbiAgICB5ZWFyOiAyMDE5LFxuICAgIHNpemU6ICdNJyxcbiAgICB0c2dfcmVjb2duaXplZDogdHJ1ZSxcbiAgICBkZXNjcmlwdGlvbjogXCJHcmltb2lyZSBvZiBDb2RlLCBhYmJyZXZpYXRlZCBhcyBHb0MsIGlzIElJVCBLaGFyYWdwdXIncyBjb21wZXRpdGl2ZSBwcm9ncmFtbWluZyBjbHViIGludm9sdmluZyBhIGdyb3VwIG9mIHBhc3Npb25hdGUgY29tcGV0aXRpdmUgcHJvZ3JhbW1lcnMuIFRoZSBjbHViIGNvbmR1Y3RzIGdsb2JhbCBhbmQgaW50cmEtY2FtcHVzIGNvbXBldGl0aXZlIHByb2dyYW1taW5nIGNvbnRlc3RzLCBhbmQgd29ya3Nob3BzIGZvciBzdHVkZW50cyBvbiBjYW1wdXMsIGZvc3RlcmluZyB0aGUgY29tcGV0aXRpdmUgcHJvZ3JhbW1pbmcgY3VsdHVyZSB3aXRoaW4gSUlUIEtoYXJhZ3B1ci5cIixcbiAgICBibG9jazogJ1RPJyxcbiAgICBsaW5rczogeyBpbnN0YTogJ2h0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vZ3JpbW9pcmVvZmNvZGUnLCBmYjogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9nb2MuaWl0a2dwJyB9XG4gIH0sXG4gIHtcbiAgICBzeW1ib2w6ICdLcScsXG4gICAgbmFtZTogJ0toYXJhZ3B1ciBRdWFudHVtIEluZm9ybWF0aW9uIGFuZCBDb21wdXRpbmcgQ2x1YicsXG4gICAgeWVhcjogMjAyNCxcbiAgICBzaXplOiAnUycsXG4gICAgdHNnX3JlY29nbml6ZWQ6IGZhbHNlLFxuICAgIGRlc2NyaXB0aW9uOiBcIktRSUNDIGlzIGEgc29jaWV0eSBkZWRpY2F0ZWQgdG8gY29uZHVjdGluZyByZXNlYXJjaCBhbmQgc3ByZWFkaW5nIGF3YXJlbmVzcyBhYm91dCBRdWFudHVtIEluZm9ybWF0aW9uIGFuZCBDb21wdXRpbmcgaW4gSUlUIEtoYXJhZ3B1ci4gVGhleSBjb25kdWN0IHZhcmlvdXMgZXZlbnRzIGluY2x1ZGluZyB3b3Jrc2hvcHMgYW5kIGhhY2thdGhvbnMgZm9yIGV2ZXJ5b25lIG9uIHRoZSBjYW1wdXMuXCIsXG4gICAgYmxvY2s6ICdUTycsXG4gICAgbGlua3M6IHtcbiAgICAgIGluc3RhOiAnaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9xaWNja2dwLycsXG4gICAgICBsaW5rZWRpbjogJ2h0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9jb21wYW55L3F1YW50dW0taW5mb3JtYXRpb24tYW5kLWNvbXB1dGluZy1jbHViLydcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBzeW1ib2w6ICdFcycsXG4gICAgbmFtZTogJ1RlY2hub2xvZ3kgRW52aXJvbm1lbnQgU29jaWV0eScsXG4gICAgeWVhcjogMjAxOCxcbiAgICBzaXplOiAnUycsXG4gICAgdHNnX3JlY29nbml6ZWQ6IHRydWUsXG4gICAgZGVzY3JpcHRpb246IFwiVEVTIGlzIGRlZGljYXRlZCB0byB0aGUgY29uc2VydmF0aW9uIGFuZCBwcmVzZXJ2YXRpb24gb2YgdGhlIGVudmlyb25tZW50LCBhbmQgdG8gcHJvbW90aW5nIHN1c3RhaW5hYmlsaXR5IGluIHNvY2lldHkuIFRocm91Z2ggYSByYW5nZSBvZiBpbml0aWF0aXZlcyBhbmQgYWN0aXZpdGllcywgVEVTIHN0cml2ZXMgdG93YXJkcyBtb3JlIHN1c3RhaW5hYmxlIGZ1dHVyZSBieSBmaW5kaW5nIHNvbHV0aW9ucyB0byBlbnZpcm9ubWVudGFsIGNoYWxsZW5nZXMgYW5kIHByb21vdGluZyBjb25zZXJ2YXRpb24gZWZmb3J0cyB3aXRoaW4gdGhlIGNhbXB1cyBhbmQgdGhlIHdpZGVyIGNvbW11bml0eS5cIixcbiAgICBibG9jazogJ1RPJyxcbiAgICBsaW5rczoge1xuICAgICAgbWV0YXdpa2k6ICdodHRwczovL3dpa2kubWV0YWtncC5vcmcvdy9UZWNobm9sb2d5X0Vudmlyb25tZW50X1NvY2lldHknLFxuICAgICAgaW5zdGE6ICdodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3Rlc2lpdGtncC8nLFxuICAgICAgZmI6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vVEVTSUlUS0dQLycsXG4gICAgICBlbWFpbDogJ21haWx0bzp0ZXNpaXRrZ3BAZ21haWwuY29tJ1xuICAgIH1cbiAgfSxcbiAge1xuICAgIHN5bWJvbDogJ0R2JyxcbiAgICBuYW1lOiBcIkRldmVsb3BlcnMnIFNvY2lldHlcIixcbiAgICB5ZWFyOiAyMDIyLFxuICAgIHNpemU6ICdNJyxcbiAgICB0c2dfcmVjb2duaXplZDogdHJ1ZSxcbiAgICBkZXNjcmlwdGlvbjogXCJEZXZlbG9wZXJzJyBTb2NpZXR5IGlzIGFuIGluaXRpYXRpdmUgdG8gZm9zdGVyIGFuZCBlbmNvdXJhZ2UgdGhlIGRldmVsb3BtZW50IGN1bHR1cmUgb2YgSUlUIEtoYXJhZ3B1ci5cIixcbiAgICBibG9jazogJ1QnLFxuICAgIGxpbmtzOiB7XG4gICAgICBsaW5rZWRpbjogJ2h0dHBzOi8vbGlua2VkaW4uY29tL2NvbXBhbnkvZGV2c29jLWlpdGtncCcsXG4gICAgICBpbnN0YTogJ2h0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vZGV2c29jLmlpdGtncCcsXG4gICAgICBmYjogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9kZXZzb2MuaWl0a2dwJyxcbiAgICAgIGVtYWlsOiAnbWFpbHRvOmRldnNvYy5paXRrZ3BAZ21haWwuY29tJ1xuICAgIH1cbiAgfSxcbiAge1xuICAgIHN5bWJvbDogJ1FmJyxcbiAgICBuYW1lOiBcIlF1YW50IENsdWJcIixcbiAgICB5ZWFyOiAyMDE5LFxuICAgIHNpemU6ICdNJyxcbiAgICB0c2dfcmVjb2duaXplZDogZmFsc2UsXG4gICAgZGVzY3JpcHRpb246IFwiUXVhbnQgQ2x1YiwgSUlUIEtHUCBpcyBhIHN0dWRlbnQgYm9keSB0aGF0IGFpbXMgYXQgaW5jcmVhc2luZyB0aGUgYXdhcmVuZXNzIG9mIFF1YW50aXRhdGl2ZSBGaW5hbmNlLlwiLFxuICAgIGJsb2NrOiAnVE8nLFxuICAgIGxpbmtzOiB7XG4gICAgICBmYjogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9xdWFudGNsdWJpaXRrZ3AvJyxcbiAgICAgIGluc3RhOiAnaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9xdWFudGNsdWJfaWl0a2dwJyxcbiAgICAgIGxpbmtlZGluOiAnaHR0cHM6Ly9pbi5saW5rZWRpbi5jb20vY29tcGFueS9xY2lpdGtncCdcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBzeW1ib2w6ICdLcycsXG4gICAgbmFtZTogXCJLaGFyYWdwdXIgU3BlZWRjdWJlcnNcIixcbiAgICB5ZWFyOiAyMDI0LFxuICAgIHNpemU6ICdTJyxcbiAgICB0c2dfcmVjb2duaXplZDogZmFsc2UsXG4gICAgZGVzY3JpcHRpb246IFwiS2hhcmFncHVyIFNwZWVkY3ViZXJzIGlzIGEgZ3JvdXAgb2Ygc3BlZWRjdWJlcnMgaW4gSUlUIEtoYXJhZ3B1ciB0aGF0IG9yZ2FuaXplcyB3b3Jrc2hvcHMgYW5kIGNvbXBldGl0aW9ucyBvbiBjYW1wdXMuXCIsXG4gICAgYmxvY2s6ICdVJyxcbiAgICBsaW5rczoge1xuICAgICAgZmI6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20va2dwc3BlZWRjdWJlcnMvJyxcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBzeW1ib2w6ICdTaycsXG4gICAgbmFtZTogXCJTcGFyazRBSVwiLFxuICAgIHllYXI6IDIwMjMsXG4gICAgc2l6ZTogJ0wnLFxuICAgIHRzZ19yZWNvZ25pemVkOiBmYWxzZSxcbiAgICBkZXNjcmlwdGlvbjogXCJTUEFSSzRBSSBpcyBhIHZpYnJhbnQgY29tbXVuaXR5IG9mIEFJIGVudGh1c2lhc3RzIHVuaXRlZCBieSBhIGNvbW1vbiBwYXNzaW9uIGZvciBoYXJuZXNzaW5nIHRoZSB0cmFuc2Zvcm1hdGl2ZSBwb3dlciBvZiBBcnRpZmljaWFsIEludGVsbGlnZW5jZS5cIixcbiAgICBibG9jazogJ1RPJyxcbiAgICBsaW5rczoge1xuICAgICAgaW5zdGE6ICdodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3NwYXJrNGFpLmlpdGtncC8nLFxuICAgICAgbGlua2VkaW46ICdodHRwczovL3d3dy5saW5rZWRpbi5jb20vY29tcGFueS9zcGFyazRhaS8nXG4gICAgfVxuICB9LFxuICB7XG4gICAgc3ltYm9sOiAnUGcnLFxuICAgIG5hbWU6IFwiUHVibGljIFBvbGljeSBhbmQgR292ZXJuYW5jZSBTb2NpZXR5XCIsXG4gICAgeWVhcjogMjAyMyxcbiAgICBzaXplOiAnTCcsXG4gICAgdHNnX3JlY29nbml6ZWQ6IGZhbHNlLFxuICAgIGRlc2NyaXB0aW9uOiBcIlB1YmxpYyBQb2xpY3kgYW5kIEdvdmVybmFuY2UgU29jaWV0eSwgSUlUIEtoYXJhZ3B1ciBpcyBhIHBsYXRmb3JtIGZvciBzdHVkZW50cyBhbmQgY2l2aWwgc2VydmljZSBlbnRodXNpYXN0cyB0byBleGFtaW5lIGFuZCBhY3RpdmVseSBlbmdhZ2Ugd2l0aCBjdXJyZW50IHB1YmxpYyBQb2xpY3kgYW5kIGdvdmVybmFuY2UgaXNzdWVzIHRob3J1Z2ggbWVudG9yc2hpcCBwcm9ncmFtbWVzIGFuZCBvcmdhbmlzaW5nIHB1YmxpYyBldmVudHMuXCIsXG4gICAgYmxvY2s6ICdPJyxcbiAgICBsaW5rczoge1xuICAgICAgZmI6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vcHBncy5paXRrZ3AnLFxuICAgICAgaW5zdGE6ICdodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3BwZ3MuaWl0a2dwLycsXG4gICAgICBsaW5rZWRpbjogJ2h0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9jb21wYW55L2NpdmlsLXNlcnZpY2VzLWNsdWItaWl0a2dwLydcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBzeW1ib2w6ICdLYicsXG4gICAgbmFtZTogJ0toYXJhZ3B1ciBCbG9ja2NoYWluIFNvY2lldHknLFxuICAgIHllYXI6IDIwMjMsXG4gICAgc2l6ZTogJ00nLFxuICAgIHRzZ19yZWNvZ25pemVkOiBmYWxzZSxcbiAgICBkZXNjcmlwdGlvbjogXCJLQlMgaXMgYSBkeW5hbWljIGNvbW11bml0eSBvZiBwYXNzaW9uYXRlIHN0dWRlbnRzIGRlZGljYXRlZCB0byBleHBsb3JpbmcsIHVuZGVyc3RhbmRpbmcsIGFuZCBzaGFwaW5nIHRoZSBmdXR1cmUgb2YgRGVjZW50cmFsaXplZCB0ZWNobm9sb2dpZXMuIE91ciBtaXNzaW9uIGlzIHRvIGJyaWRnZSB0aGUgZ2FwIGJldHdlZW4gY3VyaW9zaXR5IGFuZCBtYXN0ZXJ5IGluIHRoZSB3b3JsZCBvZiBCbG9ja2NoYWluLlwiLFxuICAgIGJsb2NrOiAnVE8nLFxuICAgIGxpbmtzOiB7XG4gICAgICB3ZWJzaXRlOiAnaHR0cHM6Ly93d3cua2dwY2hhaW4ub3JnLycsXG4gICAgICBmYjogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9ibG9ja2NoYWlua2dwJyxcbiAgICAgIGluc3RhOiAnaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9ibG9ja2NoYWlua2dwLycsXG4gICAgICBsaW5rZWRpbjogJ2h0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9jb21wYW55L2Jsb2NrY2hhaW5rZ3AnLFxuICAgIH1cbiAgfSxcbiAge1xuICAgIHN5bWJvbDogJ0F0JyxcbiAgICBuYW1lOiAnQXRlbGllciAtIERlc2lnbiBDbHViJyxcbiAgICB5ZWFyOiAyMDI0LFxuICAgIHNpemU6ICdTJyxcbiAgICB0c2dfcmVjb2duaXplZDogZmFsc2UsXG4gICAgZGVzY3JpcHRpb246IFwiQXRlbGllciBpcyB0aGUgZGVzaWduIHNvY2lldHkgZGVkaWNhdGVkIHRvIGV4cGxvcmluZyBldmVyeSBmYWNldCBvZiBkZXNpZ24gYW5kIHByb3ZpZGluZyBoYW5kcy1vbiBhbmQgaW5kdXN0cnktbGV2ZWwgZXhwZXJpZW5jZSB0byBpdHMgbWVtYmVyc1wiLFxuICAgIGJsb2NrOiAnQycsXG4gICAgbGlua3M6IHtcbiAgICAgIHdlYnNpdGU6ICdodHRwczovL2xpbmt0ci5lZS9hdGVsaWVyLmlpdGtncCcsXG4gICAgICBpbnN0YTogJ2h0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vYXRlbGllci5paXRrZ3AvJyxcbiAgICAgIGxpbmtlZGluOiAnaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2NvbXBhbnkvYXRlbGllci1kZXNpZ24tY2x1Yi1paXQta2hhcmFncHVyLycsXG4gICAgICB5b3V0dWJlOiAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vQGF0ZWxpZXIuaWl0a2dwJ1xuICAgIH1cbiAgfSxcbiAge1xuICAgIHN5bWJvbDogJ1JzJyxcbiAgICBuYW1lOiAndGhlIFJBUCBzb2NpZXR5ICh0UkFQcyknLFxuICAgIHllYXI6IDIwMjMsXG4gICAgc2l6ZTogJ00nLFxuICAgIHRzZ19yZWNvZ25pemVkOiBmYWxzZSxcbiAgICBkZXNjcmlwdGlvbjogJ3RSQVBzIGlzIGEgc29jaWV0eSB0aGF0IGNvbmR1Y3RzIHJhcCBiYXR0bGVzLCBjeXBoZXJzIGFuZCBqYW1taW5nIHNlc3Npb25zIGZvciBoaXAtaG9wIGVudGh1c2lhc3RzLicsXG4gICAgYmxvY2s6ICdVJyxcbiAgICBsaW5rczoge1xuICAgICAgaW5zdGE6ICdodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3RyYXBzLmlpdGtncC8nLFxuICAgICAgZW1haWw6ICdtYWlsdG86dHJhcHMuaWl0a2dwQGdtYWlsLmNvbSdcbiAgICB9LFxuICB9LFxuICB7XG4gICAgc3ltYm9sOiAnVHgnLFxuICAgIG5hbWU6ICdUZWRYIElJVCBLaGFyYWdwdXInLFxuICAgIHllYXI6IDIwMTksXG4gICAgc2l6ZTogJ1MnLFxuICAgIHRzZ19yZWNvZ25pemVkOiB0cnVlLFxuICAgIGRlc2NyaXB0aW9uOiAnVEVEeElJVEtoYXJhZ3B1ciBpcyBhbiBpbmRlcGVuZGVudGx5IG9yZ2FuaXplZCBURUQgZXZlbnQgYXQgSUlUIEtHUCcsXG4gICAgYmxvY2s6ICdPJyxcbiAgICBsaW5rczoge1xuICAgICAgaW5zdGE6ICdodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3RlZHhpaXRraGFyYWdwdXIvJ1xuICAgIH1cbiAgfSxcbiAge1xuICAgIHN5bWJvbDogJ0ZuJyxcbiAgICBuYW1lOiAnRmluZXNzZScsXG4gICAgeWVhcjogMjAyMyxcbiAgICBzaXplOiAnTScsXG4gICAgdHNnX3JlY29nbml6ZWQ6IHRydWUsXG4gICAgZGVzY3JpcHRpb246ICdUaGUgRmFzaGlvbiBzb2NpZXR5IG9mIElJVCBLR1AnLFxuICAgIGJsb2NrOiAnQycsXG4gICAgbGlua3M6IHtcbiAgICAgIGluc3RhOiAnaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9maW5lc3NlX2lpdGtncCdcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBzeW1ib2w6ICdGbicsXG4gICAgbmFtZTogJ0ZpbmVzc2UnLFxuICAgIHllYXI6IDIwMjMsXG4gICAgc2l6ZTogJ00nLFxuICAgIHRzZ19yZWNvZ25pemVkOiB0cnVlLFxuICAgIGRlc2NyaXB0aW9uOiAnVGhlIEZhc2hpb24gc29jaWV0eSBvZiBJSVQgS0dQJyxcbiAgICBibG9jazogJ0MnLFxuICAgIGxpbmtzOiB7XG4gICAgICBpbnN0YTogJ2h0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vZmluZXNzZV9paXRrZ3AnXG4gICAgfVxuICB9LFxuXVxuXG5leHBvcnQgY29uc3QgY2hlY2tGb3JTb2NFcnJvcnMgPSAoc29jaWV0aWVzOiBJU29jaWV0eVtdKSA9PiB7XG4gIC8vIENoZWNrIGZvciBkdXBsaWNhdGUgc3ltYm9scyBhbmQgZW1wdHkgc3ltYm9sc1xuICBjb25zdCBzeW1ib2xfbWFwOiB7IFtzb2M6IHN0cmluZ106IG51bWJlciB9ID0ge307XG4gIGZvciAoY29uc3QgaSBpbiBzb2NpZXRpZXMpIHtcbiAgICBjb25zdCBzb2MgPSBzb2NpZXRpZXNbaV07XG5cbiAgICBpZiAoc29jLnN5bWJvbCA9PT0gJycpIHtcbiAgICAgIHRocm93IGBFcnJvcjogU29jaWV0eSBcXGAke3NvYy5uYW1lfVxcYCBoYXMgYW4gZW1wdHkgc3ltYm9sLmA7XG4gICAgfVxuXG4gICAgaWYgKHNvYy5zeW1ib2wgaW4gc3ltYm9sX21hcCkge1xuICAgICAgdGhyb3cgYEVycm9yOiBTb2NpZXRpZXMgXFxgJHtzb2MubmFtZX1cXGAgYW5kIFxcYCR7c29jaWV0aWVzW3N5bWJvbF9tYXBbc29jLnN5bWJvbF1dLm5hbWV9XFxgIGhhdmUgdGhlIHNhbWUgc3ltYm9sLmA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN5bWJvbF9tYXBbc29jLnN5bWJvbF0gPSBwYXJzZUludChpKTtcbiAgICB9XG5cbiAgICAvLyBTb2NpZXRpZXMgbXVzdCBoYXZlIGF0IGxlYXN0IG9uZSBsaW5rXG4gICAgaWYgKE9iamVjdC5rZXlzKHNvYy5saW5rcykubGVuZ3RoID09PSAwICYmICFzb2MuaW5hY3RpdmUpIHtcbiAgICAgIHRocm93IGBFcnJvcjogU29jaWV0eSBcXGAke3NvYy5uYW1lfVxcYCBoYXMgbm8gbGlua3MuYDtcbiAgICB9XG4gIH1cblxufVxuXG5leHBvcnQgY29uc3QgU09DSUVUSUVTOiBJU29jaWV0eVtdID0gU09DSUVUSUVTX0FMTC5maWx0ZXIoKHNvYykgPT4gISgnaW5hY3RpdmUnIGluIHNvYykgfHwgIXNvYy5pbmFjdGl2ZSkuc29ydCgoYSwgYikgPT4gYS55ZWFyIC0gYi55ZWFyKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBeVEsU0FBUyxvQkFBb0I7QUFDdFMsT0FBTyxXQUFXOzs7QUNtRFgsSUFBTSxnQkFBNEI7QUFBQSxFQUN2QztBQUFBLElBQ0UsUUFBUTtBQUFBLElBQ1IsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sZ0JBQWdCO0FBQUEsSUFDaEIsYUFBYTtBQUFBLElBQ2IsT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsU0FBUztBQUFBLE1BQ1QsSUFBSTtBQUFBLE1BQ0osT0FBTztBQUFBLE1BQ1AsVUFBVTtBQUFBLElBQ1o7QUFBQSxFQUNGO0FBQUEsRUFDQTtBQUFBLElBQ0UsUUFBUTtBQUFBLElBQ1IsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sZ0JBQWdCO0FBQUEsSUFDaEIsYUFBYTtBQUFBLElBQ2IsT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsU0FBUztBQUFBLE1BQ1QsSUFBSTtBQUFBLE1BQ0osT0FBTztBQUFBLE1BQ1AsVUFBVTtBQUFBLE1BQ1YsVUFBVTtBQUFBLElBQ1o7QUFBQSxFQUNGO0FBQUEsRUFDQTtBQUFBLElBQ0UsUUFBUTtBQUFBLElBQ1IsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sZ0JBQWdCO0FBQUEsSUFDaEIsYUFBYTtBQUFBLElBQ2IsT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsSUFBSTtBQUFBLE1BQ0osU0FBUztBQUFBLE1BQ1QsVUFBVTtBQUFBLE1BQ1YsVUFBVTtBQUFBLElBQ1o7QUFBQSxFQUNGO0FBQUEsRUFDQTtBQUFBLElBQ0UsUUFBUTtBQUFBLElBQ1IsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sZ0JBQWdCO0FBQUEsSUFDaEIsYUFBYTtBQUFBLElBQ2IsT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsSUFBSTtBQUFBLE1BQ0osT0FBTztBQUFBLE1BQ1AsU0FBUztBQUFBLE1BQ1QsVUFBVTtBQUFBLElBQ1o7QUFBQSxFQUNGO0FBQUEsRUFDQTtBQUFBLElBQ0UsUUFBUTtBQUFBLElBQ1IsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sZ0JBQWdCO0FBQUEsSUFDaEIsYUFBYTtBQUFBLElBQ2IsT0FBTztBQUFBLElBQ1AsT0FBTztB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QUNSLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLGdCQUFnQjtBQUFBLElBQ2hCLGFBQWE7QUFBQSxJQUNiLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLFVBQVU7QUFBQSxNQUNWLE9BQU87QUFBQSxNQUNQLElBQUk7QUFBQSxNQUNKLE9BQU87QUFBQSxJQUNUO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLFFBQVE7QUFBQSxJQUNSLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLGdCQUFnQjtBQUFBLElBQ2hCLGFBQWE7QUFBQSxJQUNiLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLFVBQVU7QUFBQSxNQUNWLE9BQU87QUFBQSxNQUNQLElBQUk7QUFBQSxNQUNKLE9BQU87QUFBQSxJQUNUO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLFFBQVE7QUFBQSxJQUNSLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLGdCQUFnQjtBQUFBLElBQ2hCLGFBQWE7QUFBQSxJQUNiLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLElBQUk7QUFBQSxNQUNKLE9BQU87QUFBQSxNQUNQLFVBQVU7QUFBQSxJQUNaO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLFFBQVE7QUFBQSxJQUNSLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLGdCQUFnQjtBQUFBLElBQ2hCLGFBQWE7QUFBQSxJQUNiLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLElBQUk7QUFBQSxJQUNOO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLFFBQVE7QUFBQSxJQUNSLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLGdCQUFnQjtBQUFBLElBQ2hCLGFBQWE7QUFBQSxJQUNiLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLE9BQU87QUFBQSxNQUNQLFVBQVU7QUFBQSxJQUNaO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLFFBQVE7QUFBQSxJQUNSLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLGdCQUFnQjtBQUFBLElBQ2hCLGFBQWE7QUFBQSxJQUNiLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLElBQUk7QUFBQSxNQUNKLE9BQU87QUFBQSxNQUNQLFVBQVU7QUFBQSxJQUNaO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLFFBQVE7QUFBQSxJQUNSLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLGdCQUFnQjtBQUFBLElBQ2hCLGFBQWE7QUFBQSxJQUNiLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLFNBQVM7QUFBQSxNQUNULElBQUk7QUFBQSxNQUNKLE9BQU87QUFBQSxNQUNQLFVBQVU7QUFBQSxJQUNaO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLFFBQVE7QUFBQSxJQUNSLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLGdCQUFnQjtBQUFBLElBQ2hCLGFBQWE7QUFBQSxJQUNiLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLFNBQVM7QUFBQSxNQUNULE9BQU87QUFBQSxNQUNQLFVBQVU7QUFBQSxNQUNWLFNBQVM7QUFBQSxJQUNYO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLFFBQVE7QUFBQSxJQUNSLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLGdCQUFnQjtBQUFBLElBQ2hCLGFBQWE7QUFBQSxJQUNiLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxJQUNUO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLFFBQVE7QUFBQSxJQUNSLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLGdCQUFnQjtBQUFBLElBQ2hCLGFBQWE7QUFBQSxJQUNiLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLE9BQU87QUFBQSxJQUNUO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLFFBQVE7QUFBQSxJQUNSLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLGdCQUFnQjtBQUFBLElBQ2hCLGFBQWE7QUFBQSxJQUNiLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLE9BQU87QUFBQSxJQUNUO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLFFBQVE7QUFBQSxJQUNSLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLGdCQUFnQjtBQUFBLElBQ2hCLGFBQWE7QUFBQSxJQUNiLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLE9BQU87QUFBQSxJQUNUO0FBQUEsRUFDRjtBQUNGO0FBRU8sSUFBTSxvQkFBb0IsQ0FBQyxjQUEwQjtBQUUxRCxRQUFNLGFBQXdDLENBQUM7QUFDL0MsYUFBVyxLQUFLLFdBQVc7QUFDekIsVUFBTSxNQUFNLFVBQVUsQ0FBQztBQUV2QixRQUFJLElBQUksV0FBVyxJQUFJO0FBQ3JCLFlBQU0sb0JBQW9CLElBQUksSUFBSTtBQUFBLElBQ3BDO0FBRUEsUUFBSSxJQUFJLFVBQVUsWUFBWTtBQUM1QixZQUFNLHNCQUFzQixJQUFJLElBQUksWUFBWSxVQUFVLFdBQVcsSUFBSSxNQUFNLENBQUMsRUFBRSxJQUFJO0FBQUEsSUFDeEYsT0FBTztBQUNMLGlCQUFXLElBQUksTUFBTSxJQUFJLFNBQVMsQ0FBQztBQUFBLElBQ3JDO0FBR0EsUUFBSSxPQUFPLEtBQUssSUFBSSxLQUFLLEVBQUUsV0FBVyxLQUFLLENBQUMsSUFBSSxVQUFVO0FBQ3hELFlBQU0sb0JBQW9CLElBQUksSUFBSTtBQUFBLElBQ3BDO0FBQUEsRUFDRjtBQUVGO0FBRU8sSUFBTSxZQUF3QixjQUFjLE9BQU8sQ0FBQyxRQUFRLEVBQUUsY0FBYyxRQUFRLENBQUMsSUFBSSxRQUFRLEVBQUUsS0FBSyxDQUFDLEdBQUcsTUFBTSxFQUFFLE9BQU8sRUFBRSxJQUFJOzs7QUR2NUJ4SSxJQUFJO0FBQ0Ysb0JBQWtCLFNBQVM7QUFDN0IsU0FBUyxHQUFHO0FBQ1YsVUFBUSxJQUFJLHVCQUF1QjtBQUNuQyxVQUFRLE1BQU0sQ0FBQztBQUNmLFVBQVEsS0FBSyxDQUFDO0FBQ2hCO0FBR0EsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUNuQixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
