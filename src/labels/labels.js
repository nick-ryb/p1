
const englishLabels = () => {
    return {
        loading : 'loading',
        please_wait : 'please wait',
        sadik: "Kinder Garden",
        ok: "ok",
        cancel: "cancel",
        Login: "Login",
        Children: "Children",
        Child: "Child",
        HomePage: "Home Page",
        id: 'id',
        password: 'password',
        name: 'name',
        agenda2: 'agenda',
        checkbox: 'Checkbox',
        day: 'day',
        days: 'days',
        month: 'month',
        months: 'months',
        year: 'year',
        years: 'years',
        came: 'came',
        missing: 'missing',
        food:'food',
        sleep:'sleep',
        poop:'poop',
        attention:'attention',
        from:'from',
        till:'till',
        child_history: 'Statistics',
        general_server_error:'error in information server',
    };
};

const russianLabels = () => {
    return {
        loading : 'загружаеться',
        please_wait : 'пожайлуста подождите',
        sadik: "садик",
        ok: "ок",
        cancel: "отменить",
        Login: "вход",
        Children: "дети",
        Child: "ребенок",
        HomePage: "домашния страница",
        id: 'теудат зеут',
        password: 'пароль',
        name: 'имя',
        agenda2: 'Распорядок дня',
        checkbox: 'rus checkbox',
        day: 'день',
        days: 'дни',
        month: 'месяц',
        months: 'месяцов',
        year: 'год',
        years: 'года',
        came: 'пришел',
        missing: 'отсутствует',
        food:'еда',
        sleep:'сон',
        poop:'стул',
        attention:'внимание',
        from:'с',
        till:'до',
        child_history:'статистика',
        general_server_error:'ошибка в сервере, попробуйте позже',
    };
};

const hebrewLabels = () => {
    return {
        loading : 'טעינה',
        please_wait : 'בבקשה להמתין',
        sadik: "גן",
        ok: "אישור",
        cancel: "ביטול",
        Login: "כניסה",
        Children: "ילדים",
        Child: "ילד",
        HomePage: "דף הבית",
        id: 'ת"ז',
        password: 'סיסמה',
        name: 'שם',
        agenda2: 'סדר יום',
        checkbox: 'צק בוקס',
        day: 'יום',
        days: 'ימים',
        month: 'חודש',
        months: 'חודשים',
        year: 'שנה',
        years: 'שנים',
        came: 'הגיע',
        missing: 'נעדר',
        food:'אוכל',
        sleep:'שינה',
        poop:'שירותים',
        attention:'תשומת לב',
        from:'מ',
        till:'עד',
        child_history: 'היסטוריה',
        general_server_error:'אופס, יש שגיאה בשרותים, אנא נסו מאוחר יותר',
    };
};

const getLabel = (lang, label) => {
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
            string = '!!!NO "' + lang + '" FOUND!!!'
        }
    }
    return string;
};
export default getLabel;


