import './App.scss'
import {useState} from "react";

function App() {
    const ProductListLayout = document.querySelector('#productList')

    const [count, setCount] = useState(0);
    const [value, setValue] = useState("");
    const [productList, setProductList] = useState("");

    const onClickCounter = () => {
        setCount(val => val + 1);
    };

    const onClickAddProduct = (event) => {
        event.preventDefault();
        const productData = new FormData();
        fetch('http://localhost:3000/productList', {
            method: 'POST',
            body: productData
        })
            .then();
    }

    const onChange = (event) => {
        setValue(event.target.value);
    };

    function getProductList() {
        fetch('http://localhost:3000/productList')
            .then(response => response.json())
            .then(json => {
                json.forEach((product) => {
                    const { title, price } = product;
                    console.log(`<li>Product title: ${title} | Price: ${price}</li>`);
                    setProductList(list => {
                        return list + `<li>Product title: ${title} | Price: ${price}</li>`;
                    });
                });
            });
    }

  return (
    <>
        <div>
            <button onClick={onClickCounter}>Count is {count}</button>
            <br />
            <textarea spellCheck={false}
                      value={value}
                      onChange={onChange}
                      style={{
                          resize: "none",
                          margin: "10px 0"
                      }} />
        </div>
        <form id="addProduct">
            <p>
                <label htmlFor="title">Title:</label>
                <input type="text" name="title"/>
            </p>
            <p>
                <label htmlFor="price">Price:</label>
                <input type="number" name="price"/>
            </p>
            <button type="submit" onClick={onClickAddProduct}>Add product</button>
        </form>
        <button id="getProductList" onClick={getProductList}>Get products</button>
        <ul id="productList">{productList}</ul>
    </>
  )
}

export default App
