import React from 'react';

interface SwitchLanguage {
    lang: string;
}

const SwitchLanguage: React.FC<SwitchLanguage> = props => {

    const { lang } = props;
    const text = lang === 'EN' ? 'Переключиться на русский' : 'Switch to English';

    return (
        <div>
            {text}
        </div>
    )
};

export default SwitchLanguage;