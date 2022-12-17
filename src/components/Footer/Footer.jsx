import React from "react";
import './Footer.css'


import phone from '../../assets/icons/phone.svg'
import email from '../../assets/icons/email.svg'
import instagram from '../../assets/icons/instagram.svg'
const Footer = () =>{
    return(
        <div className="footer">
            <div className="footer-head">
                <div className="container">
                   <div className="row">
                   <div className="footer-menu">
                        <div className="footer-menu-title">
                        Каталог
                        </div>
                        <div className="footer-menu-text">
                        Шины
                        </div>
                        <div className="footer-menu-text">
                        Диски
                        </div>
                        <div className="footer-menu-text">
                        Запчасти
                        </div>
                    </div>
                   <div className="footer-menu">
                        <div className="footer-menu-title">
                        О магазине
                        </div>
                        <div className="footer-menu-text">
                        Оплата и доставка
                        </div>
                        <div className="footer-menu-text">
                        Гарантия
                        </div>
                        <div className="footer-menu-text">
                        Акции
                        </div>
                        <div className="footer-menu-text">
                        Блог
                        </div>
                    </div>
                   <div className="footer-menu">
                        <div className="footer-menu-title">
                        Контакты
                        </div>
                        <div className="footer-menu-text">
                        <img src={phone} alt="" />
                        998 (71) 200-44-44
                        </div>
                        <div className="footer-menu-text">
                        <img src={email} alt="" />
                        info@tuning.uz
                        </div>
                        <div className="footer-menu-text">
                        <img src={instagram} alt="" />
                        Мы в инстаграм
                        </div>
                    </div>
                   <div className="footer-menu">
                        <div className="footer-menu-text">
                        Политика конфидециальности
                        </div>
                        <div className="footer-menu-text">
                        Договор оферты
                        </div>
                        <div className="footer-menu-text">
                        Карта сайта
                        </div>
                        <div className="footer-menu-text">
                        DATSKY - создание и продвижение сайтов
                        </div>
                    </div>
                   </div>
                </div>
                <hr />
                <div className="container">
                    <div className="footer-menu-text bottom">
                    Обращаем ваше внимание на то, что данный сайт носит исключительно информационный характер и ни при каких условиях не является публичной офертой, определяемой положениями Статьи 437 (2) Гражданского кодекса Российской Федерации. Наличие товара и его стоимость может отличаться от заявленной на данном сайте. Указанное выше наличие в нашем интернет-магазине является ориентировочным и не учитывает бронирование товара при оплате по безналичному расчету, а также продажи, которые произошли с момента последнего обновления данных. Вы можете оставить заявку на резерв товара оформив заказ на сайте. Бронирование товара осуществляется после подтверждения заказа менеджером.

                    </div>
                </div>
                <div className="footer-foot">
                    <div className="container">
                        <div className="d-flex">
                        <div className="footer-foot-text">
                        2022 © "AutoTuning"
                        </div>
                        <div className="footer-foot-text ml-a">
                        2022 © "AutoTuning"
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer