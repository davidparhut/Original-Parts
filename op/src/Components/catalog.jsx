import React, { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom";
import "/Users/apple/Desktop/original_parts/op/src/styles/styles.css";


const CatalogDropdown = () => {
    const [open, setOpen] = useState(false);
    const wrapperRef = useRef(null);

    /* ---------- закрити при кліку поза меню ---------- */
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        const handleEsc = (e) => e.key === "Escape" && setOpen(false);

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEsc);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEsc);
        };
    }, []);

    /* ---------- обробники ---------- */
    const openMenu = () => setOpen(true);          // hover / focus
    const closeMenu = () => setOpen(false);        // mouse leave
    const toggleMenu = () => setOpen((o) => !o);   // click

    return (
        <div
            className="dropdown"
            ref={wrapperRef}
            onMouseEnter={openMenu}
            onMouseLeave={closeMenu}
        >
            {/* Кнопка-«якір» */}
            <button
                className="dropdown-btn"
                onClick={toggleMenu}
                aria-expanded={open}
            >
                Каталог товарів ▾
            </button>

            {/* Сам список опцій */}
            {open && (
                <div className="dropdown-menu" role="menu">
                    <Link to="/category/iphone-16-pro">Запчастини iPhone 16 Pro</Link>
                    <Link to="/category/iphone-16">Запчастини iPhone 16/16 Plus</Link>
                    <Link to="/category/iphone-16e">Запчастини iPhone 16E</Link>
                    <Link to="/category/iphone-15-pro-max">Запчастини iPhone 15 Pro Max</Link>
                    <Link to="/category/iphone-15-pro">Запчастини iPhone 15 Pro</Link>
                    <Link to="/category/iphone-15">Запчастини iPhone 15/15 Plus</Link>
                    <a href="/category/phones">Запчастини iPhone 14 Pro Max</a>
                    <a href="/category/phones">Запчастини iPhone 14 Pro</a>
                    <a href="/category/phones">Запчастини iPhone 14/14 Plus</a>
                    <a href="/category/phones">Запчастини iPhone 13 Pro Max</a>
                    <a href="/category/phones">Запчастини iPhone 13 Pro</a>
                    <a href="/category/phones">Запчастини iPhone 13/13 Mini</a>
                    <a href="/category/phones">Запчастини iPhone 12 Pro Max</a>
                    <a href="/category/phones">Запчастини iPhone 12 Pro </a>
                    <a href="/category/phones">Запчастини iPhone 12/12 Mini</a>

                </div>
            )}
        </div>
    );
};

export default CatalogDropdown;
