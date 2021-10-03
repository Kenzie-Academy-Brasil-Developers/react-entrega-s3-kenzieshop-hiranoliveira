const defaultState = [
  { id: 1, name: "Caneta preta", price: 2.0, image: "link-da-imagem" },
  {
    id: 2,
    name: "Caneta marca texto verde",
    price: 4.0,
    image: "link-da-imagem",
  },
  { id: 3, name: "Borracha simples", price: 2.5, image: "link-da-imagem" },
  { id: 4, name: "Lapiseira .07", price: 15.0, image: "link-da-imagem" },
  { id: 5, name: "Lápis 2B", price: 2.0, image: "link-da-imagem" },
  { id: 6, name: "Caderno genérico", price: 10.0, image: "link-da-imagem" },
];

const productsReducer = (state = defaultState, action) => {
  return state;
};

export default productsReducer;
