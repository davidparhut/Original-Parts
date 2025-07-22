import React from "react";
import Header from "../Components/header";
import Footer from "../Components/footer";

import "/Users/apple/Desktop/original_parts/op/src/styles/styles.css";

const PaymentPage = () => {
    return (
        <>

            <main className="payment-container">
                <h1 className="title">Інформація про оплату</h1>

                <section className="section">
                    <h2 className="subtitle">Способи оплати</h2>
                    <ul className="list">
                        <li>Готівкою при самовивозі</li>
                        <li>Оплата на карту</li>
                        <li>Післяплата через Нову Пошту</li>
                        <li>При оплаті через сайт (комісія +5%)</li>
                        <li>Замовлення вартістю до 100 грн відправляються лише за 100% передоплатою</li>
                    </ul>
                </section>

                <section className="section">
                    <h2 className="subtitle">Графік роботи магазину</h2>
                    <p className="text">
                        У Вас є можливість забрати Ваше замовлення самостійно з наших магазинів по Києву:
                    </p>
                    <ul className="list">
                        <li>м. Львів, пр. Свободи, 37 </li>

                    </ul>
                    <p className="text">
                        <strong>Пн.-пт.:</strong> з 10:00 до 20:00<br />
                        <strong>Сб.-Нд:</strong> з 10:00 до 19:00
                    </p>
                </section>

                <section className="section">
                    <h2 className="subtitle">Контакти</h2>
                    <p className="text">
                        Наш менеджер проконсультує за номером{" "}
                        <a href="tel:+380666666666" className="link">+38 (066) 666 6666</a>{" "}
                        або за e-mail:{" "}
                        <a href="mailto:info@.in.ua" className="link">info@.in.ua</a>
                    </p>
                </section>
            </main>

        </>
    );
};

export default PaymentPage;
