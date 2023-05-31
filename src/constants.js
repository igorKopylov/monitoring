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
            title: 'Температура',
            svg: Temperature,
            value: 'temperature',
            pageUrl: '/'
        },
        {
            title: 'Влажности',
            svg: Drop,
            value: 'humidity',
            pageUrl: '/'
        },
        {
            title: 'Шум',
            svg: Noise,
            value: 'noise',
            pageUrl: '/'
        },
        {
            title: 'Задымленность',
            svg: Smoke,
            value: 'smoke',
            pageUrl: '/'
        },
        {
            title: 'Настройки',
            svg: lightGear,
            pageUrl: '/settings',
        },
        {
            title: 'Выйти',
            value: 'logout',
            svg: Logout
        }
    ]

    if (isAdmin) {
        leftBarItems.splice(-2, 0, {
            title: 'Пользователи',
            svg: People,
            value: 'users',
            pageUrl: '/users'
        })
    }

    return leftBarItems
}