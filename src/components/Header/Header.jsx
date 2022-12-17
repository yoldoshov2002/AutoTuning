import React from "react";
import './Header.css'
import arrow from '../../assets/icons/arrow.svg'
import search from '../../assets/icons/search.svg'
import logOut from '../../assets/icons/log_out.svg'
import heart from '../../assets/icons/heart.svg'
import setting from '../../assets/icons/settings.svg'
import Korzinka from '../../assets/icons/korzinka.svg'
import Logo from "../../assets/img/logo.svg";

const Header = () => {
    return(
        <div className="header">
            <div className="container">
            <div className="head">
                <div className="head-text">
                Ташкент 
                <img src={arrow} alt="" className="ml-10"/>
                </div>
                <div className="head-text ml-a">
                Доставка
                </div>
                <div className="head-text">
                Отзывы
                </div>
                <div className="head-text border">
                Покупателям 
                </div>
                <label>
                    <input className="head-input" type="text" placeholder="Поиск по сайту"/>
                    <img src={search} alt="" className="ml-a"/>
                </label>
                <img src={logOut} alt="" />
                <div className="head-text">
                Войти
                </div>
            </div>
            </div>
            <hr />
            <div className="container">
                <div className="body">
                    <img src={Logo} alt="" />
                    <div className="ml-a">
                        <div className="body-time-text">
                        Режим работы:
                        </div>
                        <div className="body-time">
                        Пн-Вс: с 09:00-20:00
                        </div>
                    </div>
                    <div className="ml-40">
                        <div className="body-phone">
                            <a href="tel:998712000000">998 (71) 200-00-00</a>
                        </div>
                        <div className="body-phone-text">
                            Заказать звонок
                        </div>
                    </div>

                    <img src={heart} alt="" className="ml-80" />
                    <img src={setting} alt="" className="ml-20" />


                    <span className="body-cart">
                        <img src={Korzinka} alt="" />
                    </span>
                    <div className="ml-20">
                        <div className="body-buy-text">
                            Корзина
                        </div>
                        <div className="body-buy">
                             9 товаров
                        </div>
                    </div>
                </div>
            </div>
            <div className="foot">
                <div className="container">
                    <div className="foot-line">
                        <div className="foot-line-text">
                            ШИНЫ
                        </div>
                        <div className="foot-line-text">
                        Тюнинг
                        </div>
                        <div className="foot-line-text">
                        Запчасти
                        </div>
                        <div className="foot-line-text">
                        ДИСКИ
                        </div>
                        <div className="foot-line-text">
                        ПУНКТЫ ВЫДАЧИ
                        </div>
                        <div className="foot-line-text">
                        АКЦИИ
                        </div>
                        <div className="foot-line-text">
                        КОНТАКТЫ
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Header