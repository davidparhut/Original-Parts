import { useParams } from "react-router-dom";
import { useState } from "react";
import products from "../files/products";

// Назви категорій
const categoryTitles = {
    "iphone-16-pro": "Запчастини iPhone 16 Pro",
    "iphone-16": "Запчастини iPhone 16/16 Plus",
    "iphone-16e": "Запчастини iPhone 16E",
    "iphone-15-pro-max": "Запчастини iPhone 15 Pro Max",
    "iphone-15-pro": "Запчастини iPhone 15 Pro",
    "iphone-15": "Запчастини iPhone 15/15 Plus",
};

function CategoryPage() {
    const { slug } = useParams();
    const title = categoryTitles[slug] || "Категорія не знайдена";

    const [filter, setFilter] = useState({
        availability: false,
        type: "",
        priceMin: "",
        priceMax: "",
    });

    const categoryProducts = products.filter(p => p.category === slug);

    const filteredProducts = categoryProducts.filter(product => {
        const byAvailability = !filter.availability || product.inStock;
        const byType = !filter.type || product.type === filter.type;
        const byPriceMin = !filter.priceMin || product.price >= Number(filter.priceMin);
        const byPriceMax = !filter.priceMax || product.price <= Number(filter.priceMax);
        return byAvailability && byType && byPriceMin && byPriceMax;
    });

    return (
        <div className="category-page">
            {/* Ліва колонка – фільтри */}
            <aside className="filters">
                <label>
                    <input
                        type="checkbox"
                        checked={filter.availability}
                        onChange={e => setFilter({ ...filter, availability: e.target.checked })}
                    />
                    Лише в наявності
                </label>

                <label>
                    Тип:
                    <select
                        value={filter.type}
                        onChange={e => setFilter({ ...filter, type: e.target.value })}
                    >
                        <option value="">Усі</option>
                        <option value="Дисплей">Дисплей</option>
                        <option value="Акумулятор">Акумулятор</option>
                        <option value="Камера">Камера</option>
                    </select>
                </label>

                <label>
                    Ціна від:
                    <input
                        type="number"
                        value={filter.priceMin}
                        onChange={e => setFilter({ ...filter, priceMin: e.target.value })}
                        placeholder="0"
                    />
                </label>

                <label>
                    до:
                    <input
                        type="number"
                        value={filter.priceMax}
                        onChange={e => setFilter({ ...filter, priceMax: e.target.value })}
                        placeholder="∞"
                    />
                </label>
            </aside>

            {/* Права колонка – заголовок + товари */}
            <section className="content">
                <h1 className="category-title">{title}</h1>
                <div className="product-list">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map(product => (
                            <div key={product.id} className="product-card">
                                <div className="product-image">
                                    <img src={product.frontImg} alt={product.title} />
                                </div>
                                <div className="product-rating">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className="star">&#9734;</span>
                                    ))}
                                    {product.inStock && (
                                        <span className="availability">В наявності</span>
                                    )}
                                </div>
                                <div className="product-title">{product.title}</div>
                                <div className="product-footer">
                                    <span className="price">₴ {product.price.toLocaleString()}</span>
                                    <div className="actions">
                                        <button className="icon-button">&#9825;</button>
                                        <button className="icon-button">&#128722;</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Немає товарів за заданими фільтрами.</p>
                    )}
                </div>
            </section>
        </div>
    );
}

export default CategoryPage;
