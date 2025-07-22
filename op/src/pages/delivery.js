import React from "react";
import Header from "../Components/header";
import Footer from "../Components/footer";
import "/Users/apple/Desktop/original_parts/op/src/styles/styles.css";


const DeliveryPage = () => {
    return (
        <>


            <main className="delivery-container">
                <h1 className="title">Інформація про доставку</h1>

                {/* Самовивіз */}
                <section className="section">
                    <h2 className="subtitle">Самовивіз</h2>
                    <p className="text">
                        Ви можете отримати своє замовлення в одному з наших пунктів видачі в
                       Львові:
                    </p>
                    <ul className="list">
                        <li>м. Львів, пр. Свободи, 37</li>

                    </ul>
                    <p className="text">
                        <strong>Графік роботи:</strong>
                        <br />
                        Пн‑Пт: 10:00‑20:00
                        <br />
                        Сб‑Нд: 10:00‑20:00
                    </p>
                </section>

                {/* Доставка кур’єром */}
                <section className="section">
                    <h2 className="subtitle">Доставка&nbsp;кур’єром</h2>
                    <p className="text">
                        Заявки на кур'єрську доставку в той же день приймаються&nbsp;до
                        14:00.
                    </p>
                    <p className="text">
                        Доставка здійснюється по Києву з 11:00 до 19:00 згідно графіку
                        відділу логістики. При необхідності можна скористатися послугами
                        таксі‑перевізника за їх тарифами
                        (відповідальність&nbsp;за&nbsp;цілісність замовлення під час доставки&nbsp;таксі&nbsp;бере
                        на&nbsp;себе&nbsp;клієнт).
                    </p>

                </section>

                {/* Нова Пошта */}
                <section className="section">
                    <h2 className="subtitle">Доставка &quot;Нова&nbsp;Пошта&quot;</h2>
                    <p className="text">
                        Доставляємо товари по Україні «Новою Поштою» протягом 1‑3 днів.
                        Доставка здійснюється за рахунок покупця з понеділка по суботу.
                    </p>
                    <p className="text">
                        Відправимо замовлення в той&nbsp;же день:
                    </p>
                    <ul className="list">
                        <li>при оплаті на розрахунковий рахунок до 16:00;</li>
                        <li>накладеним платежем до 17:00.</li>
                    </ul>
                    <p className="text">
                        Замовлення вартістю до 200 грн відправляємо лише по повній
                        передплаті.
                    </p>
                </section>


            </main>


        </>
    );
};

export default DeliveryPage;
