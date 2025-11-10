import styles from './product-card.module.css';

interface ProductCardProps {
  title: string;
  excerpt: string;
  price: number;
  imageUrl: string;
  isAvailable?: boolean;
  children: React.ReactNode;
}

export default function ProductCard({
  title,
  excerpt,
  price,
  imageUrl,
  isAvailable,
  children,
}: ProductCardProps) {
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={title} width={600} />
      <h3>{title}</h3>
      <p>{excerpt}</p>
      <p>$ {price}</p>
      {/* <button disabled={!isAvailable}>Buy</button> */}

      {/* {isAvailable ? <button>Buy</button> : <p>Not available</p>} */}

      {isAvailable && <button>Buy</button>}

      <br />
      <br />

      <div>
        <h4>Ads</h4>
        {children}
      </div>
    </div>
  );
}
