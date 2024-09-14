const messages = {
    'en': 'Happy Birthday',
    'es': 'Feliz Cumpleaños',
    'fr': 'Joyeux Anniversaire',
    'de': 'Alles Gute zum Geburtstag',
    'it': 'Buon Compleanno',
    'pt': 'Feliz Aniversário',
    'ru': 'С Днем Рождения',
    'zh': '生日快乐',
    'ja': 'お誕生日おめでとう',
    'ko': '생일 축하합니다',
    'ar': 'عيد ميلاد سعيد',
    'hi': 'जन्मदिन की शुभकामनाएँ',
    'bn': 'শুভ জন্মদিন',
    'pa': 'ਜਨਮਦਿਨ ਦੀਆਂ ਸ਼ੁਭਕਾਮਨਾਵਾਂ',
    'vi': 'Chúc Mừng Sinh Nhật',
    'tr': 'Doğum Günün Kutlu Olsun',
    'th': 'สุขสันต์วันเกิด',
    'sv': 'Grattis på födelsedagen',
    'nl': 'Gefeliciteerd met je verjaardag',
    'pl': 'Wszystkiego najlepszego z okazji urodzin',
    'he': 'יום הולדת שמח'
};

function showMessage(languageCode) {
    const message = messages[languageCode] || 'Happy Birthday';
    document.getElementById('message').textContent = message;
}
