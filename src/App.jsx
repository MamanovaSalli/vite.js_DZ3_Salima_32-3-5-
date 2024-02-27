import {Routes, Route, NavLink} from "react-router-dom";
import './App.css'



import {Product} from "./page/Product.jsx";
import Layout from "./page/Layout.jsx";
import NewPage from "./page/NewPage.jsx";
import Price from "./page/Price.jsx";

function App() {
const isActive = ({isActive}) =>(isActive ? "active-item" : "");


    return (
        <>
             <nav>
            <ul>
                <li>
                    <NavLink className={isActive} to="products">Home</NavLink>
                </li>
                <li>
                    <NavLink className={isActive} to="product">Our products</NavLink>
                </li>
                <li>
                    <NavLink className={isActive} to="price">Filter price</NavLink>
                </li>
            </ul>

        </nav>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="product" element={<Product/>}/>
                    <Route path="price" element={<Price/>}/>
                    <Route path="product/:postId" element={<NewPage/>}/>
                    <Route path="*" element={<div>Страница не найдена</div>}/>
                </Route>
            </Routes>
        </>
    )
}

export default App
