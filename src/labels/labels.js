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
        login_checkbox_text: 'Checkbox',
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
        save_changes: 'save changes',
        submit_login: 'login'
    };
};

const russianLabels = () => {
    return {
        sadik: "садик",
        Login: "вход",
        Children: "дети",
        Child: "ребенок",
        HomePage: "домашняя страница",
        id: 'теудат зеут',
        password: 'пароль',
        name: 'имя',
        agenda2: 'Распорядок дня',
        login_checkbox_text: 'rus checkbox',
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
        general_server_error:'oshibka v servere, poprobuite pozhe',
        save_changes: 'сохранить изменения',
        submit_login: 'войти'
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
        login_checkbox_text: 'צק בוקס',
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
        save_changes: 'לשמור שינויים',
        submit_login: 'הכנס'
    };
};

const getLabel = (lang, label) => {
    // console.log('getLabel lang: ', lang, ' label: ', label);
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


