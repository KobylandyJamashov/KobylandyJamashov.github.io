const text_about = [
    '>>C:\\User\\Web-developer: npm run portfolio <br>',
    '>>Привет мир! <br>', 
    '>>На связи я - Кобыланды Д. <br>', 
    '>>Закончил курс Web-Developer от beonmax, и <br> >>курс Python от Алгоритмики <br>',
    '>>ФИО: Джамашов Кобыланды Сыпатайулы <br>',
    '>>Год рождения: 2003 <br>',
    '>>Опыт работы: 3 месяца <br>',
    '>>Email: kobetrikru@gmail.com <br>',
    '>>Город Алматы, Бостандыкский район <br>',
    '>>На данный момент изучаю BackEnd разработку, и в будущем <br>',
    '>>собираюсь стать FullStack Веб-Разработчиком. <br>',
    '>>C:\\User\\Web-developer:'
];

const typeText = () => {
    let line = 0;
    let count = 0;
    let out = '';
    let htmlOut = document.getElementById("out");

    const typeLine = () => {

		const getRandomInt = (max) => {
			return Math.floor(Math.random() * Math.floor(max));
		}

        let interval = setTimeout(() => {
            out += text_about[line][count];
            htmlOut.innerHTML = out + '|';
            count++;
            if (count >= text_about[line].length) {
                count = 0;
                line++;
                if(line == text_about.length) {
                    clearTimeout(interval);
                    htmlOut.innerHTML = out
                    return true;
                }
            }
            typeLine();

        }, getRandomInt(getRandomInt(100 * 1.5)));
    }
	typeLine();

}

const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

export const handleScroll = () => {
    const textContainer = document.getElementById('out');
    if (isElementInViewport(textContainer)) {
        typeText();
        window.removeEventListener('scroll', handleScroll);
    }
};