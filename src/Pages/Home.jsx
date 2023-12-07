import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';
import { getItems } from '../service/api';

function Home() {
  const dispatch = useDispatch();
  const [searchKey, setSearchKey] = useState('');
  const [allItems, setAllItems] = useState([]);

  const getAllItems = async () => {
    // make api call
    if (searchKey) {
      const data = await getItems();
      const results = data.data.filter((item) =>
        item.name.toLowerCase().includes(searchKey.toLowerCase())
      );
      setAllItems(results);
    } else {
      const data = await getItems();
      setAllItems(data.data);
    }
  };

  useEffect(() => {
    getAllItems();
  }, [searchKey]);

  return (
    <>
      <Row className='mx-2 mt-5' >
      <div className='w-100 mt-5 mb-3  d-flex justify-content-center'>
  <div className='border w-75 rounded d-flex align-items-center'>
    <input
      type='text'
      className='form-control border-0'
      placeholder='Search Product'
      onChange={(e) => setSearchKey(e.target.value)}
    />
    <i className="fa-solid fa-magnifying-glass fa-rotate-90 mx-2"></i>
  </div>
</div>

        {allItems?.length > 0 ? (
          allItems?.map((product, index) => (
            <Col key={index} className='mb-3' xs={12} sm={6} md={4} lg={3}>
              <Card className='shadow rounded'>
                <Card.Img height={'250px'} variant='top' src={product?.image} />
                <Card.Body>
                  <Card.Title>{product?.name}</Card.Title>
                  <Card.Text>
                    <div>
                      <span>Size:</span>
                      <span>{product?.size.length > 0 ? product.size?.map((s) => <span key={s}> |{s}| </span>) : null}</span>
                    </div>
                    <span>Color:</span>{' '}
                    <span>{product?.color.length > 0 ? product.color?.map((s) => <span key={s}> {s} </span>) : null}</span>
                    <p>{product?.description.slice(0, 55)}...</p>
                    <h5>${product.price}</h5>
                  </Card.Text>
                  <div className='d-flex justify-content-between'>
                    <Button onClick={() => dispatch(addToWishlist(product))} className='btn btn-light'>
                      <i className='fa-solid fa-heart text-danger fa-2x'></i>
                    </Button>
                    <Button onClick={() => dispatch(addToCart(product))} className='btn btn-light'>
                      <i className='fa-solid fa-cart-plus text-success fa-2x'></i>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p className='text-danger fw-bold fs-4'>Nothing to display</p>
        )}
      </Row>
    </>
  );
}

export default Home;
