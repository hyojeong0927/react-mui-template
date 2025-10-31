import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './product.scss';

export default function ProductList() {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState('grid');

  const [products] = useState([
    { id: 1, name: '상품 A', price: 99000 },
    { id: 2, name: '상품 B', price: 129000 },
    { id: 3, name: '상품 C', price: 59000 },
    { id: 4, name: '상품 D', price: 149000 },
    { id: 5, name: '상품 E', price: 89000 },
    { id: 6, name: '상품 F', price: 109000 },
  ]);

  const goToDetail = id => {
    navigate(`/guide-product/${id}`);
  };

  const viewModes = [
    { key: 'grid', label: '그리드 보기' },
    { key: 'listImage', label: '리스트 보기 (이미지 포함)' },
    { key: 'listNoImage', label: '리스트 보기 (이미지 없음)' },
  ];

  return (
    <>
      <div className="guide-page__title">
        <h2>Product List</h2>
      </div>
      <div className="product-list-page">
        {/* 보기 모드 버튼 */}
        <div className="view-mode-buttons">
          {viewModes.map(({ key, label }) => (
            <button
              key={key}
              className={`mode-btn ${viewMode === key ? 'active' : ''}`}
              onClick={() => setViewMode(key)}
            >
              {label}
            </button>
          ))}
        </div>

        {/* 상품 리스트 */}
        {viewMode === 'grid' && (
          <div className="product-grid">
            {products.map(product => (
              <div
                key={product.id}
                className="product-card"
                onClick={() => goToDetail(product.id)}
              >
                <div className="image-area">이미지</div>
                <div className="name">{product.name}</div>
                <div className="price">{product.price.toLocaleString()}원</div>
              </div>
            ))}
          </div>
        )}

        {viewMode === 'listImage' && (
          <div className="product-list with-image">
            {products.map(product => (
              <div
                key={product.id}
                className="product-item"
                onClick={() => goToDetail(product.id)}
              >
                <div className="image-area">이미지</div>
                <div className="info">
                  <div className="name">{product.name}</div>
                  <div className="price">
                    {product.price.toLocaleString()}원
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {viewMode === 'listNoImage' && (
          <div className="product-list no-image">
            {products.map(product => (
              <div
                key={product.id}
                className="product-item"
                onClick={() => goToDetail(product.id)}
              >
                <div className="name">{product.name}</div>
                <div className="price">{product.price.toLocaleString()}원</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
