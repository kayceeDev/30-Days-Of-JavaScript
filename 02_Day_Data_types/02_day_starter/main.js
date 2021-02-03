// this is your main.js script

let challenge = "30 Days Of Javascript";
console.log(challenge);
console.log(challenge.length);
let challengeUpper = challenge.toUpperCase();
let challengeLower = challenge.toLowerCase();

let challengeSub = challenge.substring(0, 2);
let challengeSub2 = challenge.substring(3);
let challengeIncl = challenge.includes("Script");
let challengeSplit = challenge.split();
let challengeSplit2 = challenge.split(" ");
let challengePython = challenge.replace("Javacript", "Python");

let charIndex15 = challenge.charAt(15);
let charCodeAt = challenge.charCodeAt("J");

let indexOf = challenge.indexOf("a");
let lastIndexOf = challenge.lastIndexOf("a");
let word =
  "You cannot end a sentence with because because because is a conjunction";

let wordToTrim = " 30 Days Of Javascript ";
let challengeTrim = wordToTrim.trim(" ");
let startWith = challenge.startsWith("30");
let endWith = challenge.endsWith("Javascript");
let matchWord = challenge.match("a");

let word1 = "30 Days Of";
let word2 = "JavaScript";
wordConcat = word1.concat(word2);
console.log(wordConcat);

repeatedWord = challenge.repeat(2);

// Level 2
console.log(
  "The quote 'there is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);

console.log(
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
);

console.log(typeof "10");

console.log("python".includes("on"));
console.log("jargon".includes("on"));
console.log(Math.floor(Math.random() * 100 + 1));
console.log(Math.floor(Math.random() * (100 - 50 + 1)) + 50);
console.log(Math.floor(Math.random() * 255 + 1));
console.log(word2[Math.floor(Math.random() * 9 + 1)]);

console.log("1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125")

console.log(word.substr(31,24))

// Level 3
let string = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'

console.log(string.match(/love/gi))
console.log(word.match(/because/gi))
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

let cleanedSentence= sentence.replace(/@|%|&|#|;|\$/gi,'')
console.log(cleanedSentence)

let earning = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

let earningFigures = earning.match(/\d+/gi)
console.log(earningFigures.map((a)=>{
  return parseInt(a)
}).reduce((a,b)=>{
  return a+b
}))
