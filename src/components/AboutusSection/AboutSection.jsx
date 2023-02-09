import s from './AboutSection.module.css'
import img from './../../assets/images/team-clap.jpg'
import React from 'react';
import authImg from './../../assets/images/auth.png'
import hands from './../../assets/images/hands.png'

export const AboutSection = () => {
    const [activeTab, setActiveTab] = React.useState("tab1");

  const handleTabClick = tab => {
    setActiveTab(tab);
  };

    return (
        <section className='container'>
            <div className={s.section__block}>
                <div className={s.title__block}>
                    <img src={img} alt="Team" />
                    <h1 className={s.title}>Создайте идеальную команду для современного рынка труда</h1>
                    <p>Создание команды еще никогда не было таким простым! Создайте идеальную, команду которая произведет впечатление на менеджеров по найму и работодателей. Минимум времени, максимум профессионального качества.</p>
                    <button className={s.team__button}>Создать команду</button>
                </div>
            </div>
            <div className={s.tabs__block}>
                <div className={s.tabs}>
                    <button
                    className={`${s.tab} ${activeTab === "tab1" ? s.active : ""}`}
                    onClick={() => handleTabClick("tab1")}>1. Зарегестрируйтесь</button>

                    <button
                    className={`${s.tab} ${activeTab === "tab2" ? s.active : ""}`}
                    onClick={() => handleTabClick("tab2")}>2. Создайте команду</button>

                    <button
                    className={`${s.tab} ${activeTab === "tab3" ? s.active : ""}`}
                    onClick={() => handleTabClick("tab3")}>3. Поделитесь</button>
                </div>
                <div className={s.tab__content}>
                    {activeTab === "tab1" && 
                    <>
                        <div>
                            <h1>Ваши первые шаги</h1>
                            <p>Присоединяйтесь к нашему сообществу и ощутите все преимущества нашего веб-сайта. Зарегистрируйтесь сейчас и получите доступ к эксклюзивному контенту, персональным рекомендациям и многому другому. Не упустите эту возможность, зарегистрируйтесь сегодня!</p>
                        </div>
                        <img src={authImg} alt="Auth" />
                    </>
                    }
                    {activeTab === "tab2" &&
                    <>
                        <div>
                            <h1>Создайте команду</h1>
                            <p>Соберите вместе своих друзей, семью или коллег и создайте команду на нашей платформе. Работайте вместе для достижения своих целей, отслеживайте свои успехи и получайте удовольствие на этом пути. Создать команду легко и бесплатно, зачем ждать?</p>
                        </div>
                        <img src={hands} alt="Team" />
                    </>
                    }
                    {activeTab === "tab3" && 
                   <>
                    <div>
                        <h1>Поделитесь командой</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi deleniti officia perferendis nobis? Aliquid enim repellendus ad nam veniam nesciunt modi id sapiente minima vel, accusamus soluta dolores eaque eveniet exercitationem iusto incidunt voluptates ea corrupti quaerat aspernatur quas cupiditate.</p>
                    </div>
                    <img src='' alt="Пока нету картинки" />
                    </>
                    }
                </div>
            </div>
        </section>
    )
}