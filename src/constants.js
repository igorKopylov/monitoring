import Temperature from './assets/Temperature.svg';
import Drop from './assets/Drop.svg';
import Noise from './assets/Noise.svg';
import Smoke from './assets/Smoke.svg';
import People from './assets/People.svg';
import lightGear from './assets/lightGear.svg';
import Logout from './assets/Logout.svg';

export const getLefBarItems = (isAdmin) => {
    const leftBarItems = [
        {
            id: 0,
            title: 'Температура',
            value: 'temperature',
            pageUrl: '/'
        },
        {
            id: 1,
            title: 'Влажности',
            value: 'humidity',
            pageUrl: '/'
        },
        {
            id: 2,
            title: 'Шум',
            value: 'noise',
            pageUrl: '/'
        },
        {
            id: 3,
            title: 'Задымленность',
            value: 'smoke',
            pageUrl: '/'
        },
        {
            id: 4,
            title: 'Настройки',
            pageUrl: '/settings',
        },
        {
            id: 5,
            title: 'Выйти',
            value: 'logout',
        }
    ]

    if (isAdmin) {
        leftBarItems.splice(-2, 0, {
            id: leftBarItems[leftBarItems.length - 1] + 1,
            title: 'Пользователи',
            value: 'users',
            pageUrl: '/users'
        })
    }

    return leftBarItems
}