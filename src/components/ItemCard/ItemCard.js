import React from 'react';

const getImg = (item) => {
  if (!item.img_thumb) {
    return <img className="img-thumbnail" src={item.img} alt="cover" />;
  } else {
    let newSrc = 'https:' + item.img_thumb;
    return <img className="img-thumbnail" src={newSrc} alt="cover" />;
  }
}

const ItemCard = (item) => {
  return (
    <div className="col mb-4 d-flex justify-content-center">
      <div className="card w-75">
        <div className="d-flex justify-content-center">
          {getImg(item)}
        </div>
        <div className="card-body">
          <div className="card-title">
            <h4>{item.title}</h4>
          </div>
          <div>{item.price} ₽</div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;