import React, { useState } from 'react';
import styles from './Users.module.scss';
import TextField from './../../components/TextField/TextField';
import Button from '../../components/Button/Button';
import Edit from '../../assets/Edit.svg';
import Cross from '../../assets/Cross.svg';

const Users = () => {
    const [email, setEmail] = useState('');
    const [users, setUsers] = useState([])

    const onSubmit = e => {
        e.preventDefault()
    }

    return (
        <div className={styles['users-page']}>
            <form onSubmit={onSubmit} className={styles['user-page__form']}>
                <TextField
                    value={email}
                    onChange={setEmail}
                    label='Почта'
                />
                <Button type='submit'>
                    ДОБАВИТЬ
                </Button>
            </form>
            <div className={styles['users-page__users']}>
                <h2>Пользователи</h2>
                <table>
                    {users.map((user) => {
                        return (
                            <tr key={user.id}>
                                <td>user</td>
                                <td>ivanov.i.i@mail.ru</td>
                                <td>
                                    <button>
                                        <img src={Edit} alt="" />
                                    </button>
                                    <button>
                                        <img src={Cross} alt="" />
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        </div>
    )
}

export default Users