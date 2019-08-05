// https://www.codewars.com/kata/577ff15ad648a14b780000e7

const db = {
  english: 'Welcome',
  czech: 'Vitejte',
  danish: 'Velkomst',
  dutch: 'Welkom',
  estonian: 'Tere tulemast',
  finnish: 'Tervetuloa',
  flemish: 'Welgekomen',
  french: 'Bienvenue',
  german: 'Willkommen',
  irish: 'Failte',
  italian: 'Benvenuto',
  latvian: 'Gaidits',
  lithuanian: 'Laukiamas',
  polish: 'Witamy',
  spanish: 'Bienvenido',
  swedish: 'Valkommen',
  welsh: 'Croeso'
}
  
const welcome = language => {
  return db.hasOwnProperty(language) ? db[language] : db.english; 
};

function greet(lang) {
  return db[lang] || db['english'];
}

console.log(welcome('french'));