// lib/queries.js
export const allProductsQuery = `*[_type == "product"]{
    _id,
    name,
    price,
    description,
    "img": image.asset->url,
    category
  }`;
  