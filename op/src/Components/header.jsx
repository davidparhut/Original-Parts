import React from "react";
import "../styles/styles.css";
import Catalog from "./catalog";
import { Link } from "react-router-dom";
/* SVG‑іконки */
import telegramIcon from "../assets/telegram-svgrepo-com.svg";
import whatsappIcon from "../assets/whatsapp-svgrepo-com.svg";
import viberIcon from "../assets/viber-svgrepo-com-2.svg";
import favoriteIcon from "../assets/favorite-svgrepo-com.svg";
import basketIcon from "../assets/basket-loaded-svgrepo-com.svg";
import searchIcon from "../assets/search-svgrepo-com.svg";
import phoneIcon from "../assets/phone-calling-svgrepo-com.svg";
import logo from "../assets/logo.svg";

const Header = () => {
    return (
        <header className="header-root">
            {/* ----- верхня панель ----- */}
            <div className="header-top">
                <nav className="header-nav">
                    <a href="/about">Про магазин</a>
                    <a href="/opt">Запчастини оптом</a>
                    <a href="/returning">Обмін та повернення</a>
                    <a href="/payment">Оплата</a>
                    <a href="/delivery">Доставка</a>
                </nav>

                <div className="header-logo">
                    <Link to="/">
                    <img src={logo} alt="Apple Original Parts" style={{ height: 85 }} />
                    </Link>
                </div>

                <div className="header-account">
                    <span>Особистий кабінет</span>
                    <a href="/registration" className="header-register">Реєстрація</a>
                </div>
            </div>

            {/* ----- нижня панель ----- */}
            <div className="header-bottom">
                {/* ▼ заміна звичайної кнопки на випадайку */}
                <Catalog />

                <div className="search-bar">
                    <img src={searchIcon} alt="Пошук" className="search-icon"
                         style={{ height: 18, marginRight: 5 }} />
                    <input type="text" placeholder="Введіть назву товару..." />
                </div>

                <div className="contacts">
          <span className="phone">
            <img src={phoneIcon} alt="phone"
                 style={{ height: 16, marginRight: 3, verticalAlign: "middle" }} />
            +38 (066) 666 6666
          </span>
                    <a href="https://t.me/appleoriginalparts" className="messenger telegram" title="Telegram">
                        <img src={telegramIcon} alt="Telegram" style={{ height: 24 }} />
                    </a>
                    <a href="#" className="messenger whatsapp" title="WhatsApp">
                        <img src={whatsappIcon} alt="WhatsApp" style={{ height: 24 }} />
                    </a>
                    <a href="#" className="messenger viber" title="Viber">
                        <img src={viberIcon} alt="Viber" style={{ height: 24 }} />
                    </a>
                </div>

                <div className="header-actions">
                    <a href="/favorites" className="action-icon" title="Обране">
                        <img src={favoriteIcon} alt="Обране" style={{ height: 22 }} />
                    </a>
                    <a href="/cart" className="action-icon" title="Кошик">
                        <img src={basketIcon} alt="Кошик" style={{ height: 22 }} />
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
