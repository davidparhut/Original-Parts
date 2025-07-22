import React from "react";
import Header from "../Components/header";
import Footer from "../Components/footer";

function HomePage() {
    return (
        <div className="home-page">


            <main className="main-content" style={{ padding: "40px 20px" }}>
                <h1>Ласкаво просимо до нашого магазину</h1>
                <p>
                    У нас ви знайдете найкращі запчастини для вашого смартфона. Ми пропонуємо широкий асортимент товарів за доступними цінами.
                </p>
                <p>
                    Перевірені постачальники, швидка доставка, зручна оплата — все для вашого комфорту.
                </p>
                <p>
                    Перейдіть до каталогу, щоб почати покупки!
                </p>
            </main>

       
        </div>
    );
}

export default HomePage;
