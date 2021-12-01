import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  { id: 1, price: 2.5, title: 'Product 1', description: "That's the first item" },
  { id: 2, price: 5, title: 'Product 2', description: "That's the second item" },
  { id: 3, price: 10, title: 'Product 3', description: "That's the third item" }
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
