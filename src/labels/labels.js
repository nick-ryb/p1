const englishLabels = () => {
    return {
        sadik: "Kinder Garden",
        Login: "Login",
        Children: "Children",
        Child: "Child",
        HomePage: "Home Page",
        id: 'id',
        password: 'password',
        name: 'name',
        agenda2: 'agenda',
        checkbox: 'Checkbox',
        kkk: 'kkk',
            day: 'day',
            days: 'days',
            month: 'month',
            months: 'months',
            year: 'year',
            years: 'years',
    };
};

const russianLabels = () => {
    return {
        sadik: "Sadik",
        Login: "Vxod",
        Children: "Deti",
        Child: "Rebionok",
        HomePage: "Domashniaya stranica",
        id: 'teudat zehut',
        password: 'parol',
        name: 'imya',
        agenda2: 'Распорядок дня',
        checkbox: 'rus checkbox',
        kkk: 'rus kkk',
            day: 'den',
            days: 'dni',
            month: 'mesyac',
            months: 'mesyacov',
            year: 'god',
            years: 'goda',
    };
};

const hebrewLabels = () => {
    return {
        sadik: "גן",
        Login: "כניסה",
        Children: "ילדים",
        Child: "ילד",
        HomePage: "דף הבית",
        id: 'ת"ז',
        password: 'סיסמה',
        name: 'שם',
        agenda2: 'סדר יום',
        checkbox: 'צק בוקס',
        kkk: 'קקק',
            day: 'יום',
            days: 'ימים',
            month: 'חודש',
            months: 'חודשים',
            year: 'שנה',
            years: 'שנים',
    };
};

const getLabel = (lang, label) => {
    console.log('getLabel lang: ', lang, ' label: ', label);
    const noString = 'label: "' + label + '" not found in ' + lang;
    let string = '';
    switch (lang) {
        case 'eng':
            string = englishLabels()[label] || noString;

            break;
        case 'heb':
            string = hebrewLabels()[label] || noString;

            break;
        case 'rus':
            string = russianLabels()[label] || noString;
            break;
        default : {
            string = 'NO "' + lang + '" FOUND'
        }
    }
    return string;
};
export default getLabel;


