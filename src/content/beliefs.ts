/** From oahuseminary.org/creeds-and-confessions */
export const creeds = [
  "The Apostles' Creed",
  "The Nicene-Constantinopolitan Creed",
  "The Athanasian Creed",
  "The Chalcedonian Definition",
];

export const confessions = [
  "The Belgic Confession of Faith",
  "The Westminster Confession of Faith",
  "The Thirty-Nine Articles of Religion",
  "The Second London Baptist Confession",
];

/**
 * From oahuseminary.org/on-gender-and-sexuality (retrieved Nov 2026).
 * All employees, board members, and those serving in any capacity at OTS
 * must agree to this statement. Non-teaching contract work is exempt.
 */
export const marriageStatement: string[] = [
  "We believe that God wonderfully and immutably creates each person in his image as male or female. These two distinct, complementary genders together reflect the image and nature of God (Gen. 1:26–27). Rejection of one's biological sex is a rejection of the image of God within that person.",
  "We believe that the term "marriage" has only one meaning: the uniting of one man and one woman in a single, exclusive covenantal union in order to point to the covenantal union between Christ and the church (Gen. 2:18–25; Eph. 5:31–33). We believe that God intends sexual intimacy to occur only between a man and a woman who are married to each other (1 Cor. 6:18; 7:2–5; Heb. 13:4). We believe that God has commanded that no intimate sexual activity be engaged in outside of a marriage between a man and a woman.",
  "We believe that any form of sexual immorality (including adultery, fornication, homosexual behavior, transgender behavior, polyamorous behavior, bisexual conduct, sexual abuse, bestiality, incest, and use of pornography) is sinful and offensive to God (Matt 15:18–20; 1 Cor 6:9–10).",
  "We believe that in order to preserve the function and integrity of Oahu Theological Seminary (OTS) as a servant to faithful Christian churches on Oahu and to provide a biblical role model to students of the seminary and the community, it is imperative that all persons employed by OTS in any capacity, including the board of directors, or who serve in any capacity at the seminary, paid or unpaid, agree to and abide by this Statement on Marriage, Gender, and Sexuality (Matt. 5:16; Phil. 2:14–16; 1 Thess. 5:22). Non-teaching contract work is exempt from being required to affirm this statement.",
  "We believe that God offers redemption and restoration to all who confess and forsake their sin, seeking His mercy and forgiveness through Jesus Christ (Acts 3:19–21; Rom. 10:9-10; 1 Cor. 6:9–11). We believe that every person must be afforded compassion, love, kindness, respect, and dignity (Mark 12:28–31; Luke 6:31). Hateful and harassing behavior or attitudes directed toward any individual are to be repudiated and are not in accord with Scripture and the culture of OTS.",
];
export const marriageStatementLegacyUrl = "https://oahuseminary.org/on-gender-and-sexuality";

/**
 * From oahuseminary.org/letter-from-the-president (retrieved Nov 2026).
 */
export const letterFromPresident: string[] = [
  "Oahu Theological Seminary exists to glorify God by immersing in the Holy Scriptures as understood by the historical orthodox creeds and reformational confessions in order to faithfully serve the church in Hawaii, the Pacific Rim, and across the world. We begin and end with God and his glory, and we believe that God's glory is on display in the Holy Scriptures as they teach us about Jesus Christ and the gospel. We truly want all students who are a part of our school to be deeply immersed in the Scriptures as they take classes in Greek, Hebrew, and various theological topics in such a way that their instincts and intuition is shaped by the story of Scripture and their place in it.",
  "However, we do not believe that any of us can or should interpret the Scripture on our own. Through the centuries, the Lord has gifted his Church with faithful pastors and teachers who help us understand what is central in the Holy Scripture. We stand without apology on the ecumenical creeds from the earliest centuries of the church as well as the reformational confessions from the sixteenth and seventeenth centuries because we recognize that we stand on the shoulders of those who have come before us. Theology, after all, is best practiced in communion with the saints, both past and present.",
  "Finally, we recognize that the seminary only exists as a servant of the church. We are very intentionally linked to the local churches on Oahu and have designed most of our courses to have projects that can only be completed in the context of the local church. Students are also involved in church-based service and ministry during every semester. In short, we aim for every part of our seminary to submit to and serve local church leadership. As we seek to serve churches on Oahu, our hope is that other Hawaiian Islands, other Pacific Islands, and the Pacific Rim will be better equipped to know and proclaim the glory of God in the face of Jesus Christ.",
  "We pray that you will consider joining us as we seek to advance the cause of Christ for the life of the world in Hawaii and across the world.",
];
export const letterFromPresidentAuthor = "Chris Bruno";
export const letterFromPresidentTitle = "OTS President";

/**
 * Board of directors from oahuseminary.org/board-of-directors (retrieved Nov 2026).
 */
export type BoardMember = { name: string; church: string };
export const boardMembers: BoardMember[] = [
  { name: "Garrett Bonner", church: "The Refuge Church Ko'olauloa" },
  { name: "Mark Brians", church: "All Saints Anglican Church" },
  { name: "Benjamin Moore", church: "Saint Benedict Hall" },
  { name: "JR Cuevas", church: "Kaimuki Christian Church" },
  { name: "Mark Lupton", church: "Kingsfield Anglican Church" },
  { name: "Landon Miller", church: "Aiea Heights Church" },
  { name: "Chris Bruno", church: "President of OTS" },
  { name: "James Shiroma", church: "Grace Point Church, Mililani" },
  { name: "Christian Siania", church: "Harbor Church Waipahu" },
  { name: "Randy Young", church: "Honolulu Christian Church" },
];

/**
 * Certificate program from oahuseminary.org/certificate-in-theology (retrieved Nov 2026).
 */
export const certificate = {
  name: "Certificate in Ecclesial Theology",
  slug: "certificate-in-theology",
  description:
    "The Certificate in Theology and Ecclesiology is a non-formal program that consists of 27 credit hours and can be completed over the course of two years. The certificate is intended to equip lay leaders and teachers in the church for theological study in the life of the local church. No college degree is required to earn a certificate. All adults are welcomed to apply.",
  credits: 27,
  duration: "Two years",
};
