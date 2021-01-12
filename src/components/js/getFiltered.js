export default function getFiltered(
  items,
  title,
  priceOne,
  priceTwo
  ) {
  if (!title && !priceOne && !priceTwo) return;

  if (title && !priceOne && !priceTwo) {
    return items.filter(item => item
      .title
      .toLowerCase()
      .indexOf(title.toLowerCase()) >= 0);
  }

  if (title && priceOne && !priceTwo) {
    const searchTitle = items.filter(item => item
      .title
      .toLowerCase()
      .indexOf(title.toLowerCase()) >= 0);

    return searchTitle.filter(item => item.price >= priceOne);
  }

  if (title && priceOne && priceTwo) {
    const searchTitle = items.filter(item => item
      .title
      .toLowerCase()
      .indexOf(title.toLowerCase()) >= 0);
    const filterPO = searchTitle.filter(item => item.price >= priceOne);

    return filterPO.filter(item => item.price <= priceTwo);
  }

  if (!title && priceOne && priceTwo) {
    const filterPO = items.filter(item => item.price >= priceOne);

    return filterPO.filter(item => item.price <= priceTwo);
  }

  if (!title && priceOne && !priceTwo) {
    return items.filter(item => item.price >= priceOne);
  }

  if (!title && !priceOne && priceTwo) {
    return items.filter(item => item.price <= priceTwo);
  }
}
