import ProductCard from './product-card';
import styles from './app.module.css';

interface ProductItemData {
  title: string;
  excerpt: string;
  price: number;
  imageUrl: string;
  isAvailable?: boolean;
  children: React.ReactNode;
}

const data: ProductItemData[] = [
  {
    title: 'Tomatoes',
    excerpt: 'Fresh tomatoes',
    price: 1.99,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3DRPxLp5XH4U1fUPLQwkWQn7fUd368gb2lUCx9qEKuUb5LhktbVpEcMTg_3EP_rx99pWkU_cdJ_ZETZlfswgCjwu5DhipxhHqNXYkPJ0&s=10',
    isAvailable: true,
    children: <p>Very cool add 1</p>,
  },
  {
    title: 'French Fries',
    excerpt: 'Just from the grill',
    price: 10.99,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7CBR0z-GYgz1GtsV7rA1NTq_rLVrauALjus7FQ9BLIvz3iKg1ObYxFcUgoqadv4wR0WrXIUn90RJdwsOGO6SRbuDoYXiDnmsovBxHGA&s=10',
    children: <span>Very cool add 2</span>,
  },
  {
    title: 'Burger',
    excerpt: 'Just as at home',
    price: 1000.99,
    imageUrl:
      'https://www.foodandwine.com/thmb/XE8ubzwObCIgMw7qJ9CsqUZocNM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MSG-Smash-Burger-FT-RECIPE0124-d9682401f3554ef683e24311abdf342b.jpg',
    children: <h5>Very cool add 3</h5>,
  },
];

export default function App() {
  return (
    <div className={styles.card}>
      {data.map((item, i) => (
        <ProductCard
          key={i}
          excerpt={item.excerpt}
          imageUrl={item.imageUrl}
          price={item.price}
          title={item.title}
          isAvailable={item.isAvailable}
        >
          {item.children}
        </ProductCard>
      ))}
    </div>
  );
}
