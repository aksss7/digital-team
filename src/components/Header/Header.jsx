import s from './Header.module.css'

export const Header = () => {
    return (
        <header className='container'>
            <div className={s.header__block}>
                <div className={s.header__logo}>
                    <h1>Digital Team</h1>
                </div>
                <nav className={s.header__nav}>
                    <ul>
                        <a href='#'>Создать команду</a>
                        <a href='#'>Присоединиться к команде</a>
                        <a href='#'>Компании</a>
                        <a href='#'>Вакансии</a>
                        <a href='#'>О нас</a>
                    </ul>
                </nav>
                <div className={s.header__button}>
                    <button className={s.login__button}>log in</button>
                    <button className={s.signin__button}>Sign in</button>
                </div>
            </div>
        </header>
    )
}