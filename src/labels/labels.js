import * as EnglishLabels from './EnglishLabels'
import * as RussianLabels from './RussianLabels'
import * as HebrewLabels from './HebrewLabels'

const getLabel = (lang, label) => {
    const noString = 'label: "' + label + '" not found in ' + lang;
    let string = '';
    switch (lang) {
        case 'eng':
            string = EnglishLabels[label] || noString;

            break;
        case 'heb':
            string = HebrewLabels[label] || noString;

            break;
        case 'rus':
            string = RussianLabels[label] || noString;

            break;
        default : {
            string = '!!!NO "' + lang + '" FOUND!!!'
        }
    }
    return string;
};
export {getLabel};


