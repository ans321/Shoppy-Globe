import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error('Failed to fetch product:', err);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <div className="container">Loading...</div>;

  return (
    <div className="container">
      <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
        <img
          src={product.thumbnail}
          alt={product.title}
          style={{ width: '300px', borderRadius: '8px', objectFit: 'cover' }}
        />
        <div>
          <h2>{product.title}</h2>
          <p style={{ marginTop: '8px', color: '#666' }}>{product.description}</p>
          <h3 style={{ marginTop: '16px' }}>₹{product.price}</h3>
          <button
            style={{
              marginTop: '16px',
              padding: '8px 16px',
              backgroundColor: '#28a745',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
            onClick={() => dispatch(addToCart(product))}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
