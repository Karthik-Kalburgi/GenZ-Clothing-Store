export type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  category: "men" | "women";
};

export const products: Product[] = [
  {
    id: "m-tee-1",
    title: "Men's Classic Cotton Tee",
    description: "Soft, breathable cotton tee with a modern fit.",
    price: 19.99,
    image: "/images/men/men-tee-crewneck.jpg",
    category: "men",
  },
  {
    id: "m-hoodie-1",
    title: "Men's Premium Fleece Hoodie",
    description: "Cozy fleece hoodie with kangaroo pocket and ribbed cuffs.",
    price: 49.99,
    image: "/images/men/men-hoodie-fleece.jpg",
    category: "men",
  },
  {
    id: "m-jeans-1",
    title: "Men's Slim Fit Jeans",
    description: "Stretch denim for everyday comfort and style.",
    price: 59.99,
    image: "/images/men/men-slim-jeans.jpg",
    category: "men",
  },
  {
    id: "m-tee-2",
    title: "Men's Relaxed Tee",
    description: "Relaxed fit tee for daily wear.",
    price: 22.5,
    image: "/images/men/men-tee-relaxed.jpg",
    category: "men",
  },
  {
    id: "m-shirt-1",
    title: "Men's Formal Shirt",
    description: "Crisp button-down for office and occasions.",
    price: 34.99,
    image: "/images/men/men-formal-shirt.jpg",
    category: "men",
  },
  {
    id: "m-kurta-1",
    title: "Men's Traditional Kurta",
    description: "Classic kurta in breathable fabric.",
    price: 29.99,
    image: "/images/men/men-kurta-traditional.jpg",
    category: "men",
  },
  {
    id: "m-jacket-1",
    title: "Men's Bomber Jacket",
    description: "Lightweight bomber for versatile layering.",
    price: 69.99,
    image: "/images/men/men-jacket-bomber.jpg",
    category: "men",
  },
  {
    id: "m-jeans-2",
    title: "Men's Regular Denim Jeans",
    description: "Classic denim with straight fit.",
    price: 54.99,
    image: "/images/men/men-denim-jeans.jpg",
    category: "men",
  },
  {
    id: "w-dress-1",
    title: "Women's Floral Summer Dress",
    description: "Lightweight dress with a flattering A-line silhouette.",
    price: 44.99,
    image: "/images/women/women-floral-dress.jpg",
    category: "women",
  },
  {
    id: "w-blouse-1",
    title: "Women's Satin Blouse",
    description: "Elegant satin blouse perfect for work or evenings out.",
    price: 39.99,
    image: "/images/women/women-office-blouse.jpg",
    category: "women",
  },
  {
    id: "w-jeans-1",
    title: "Women's High-Rise Jeans",
    description: "Figure-hugging fit with added stretch for comfort.",
    price: 59.99,
    image: "/images/women/women-highrise-jeans.jpg",
    category: "women",
  },
  {
    id: "w-top-1",
    title: "Women's Casual Top",
    description: "Everyday top with a comfy fit.",
    price: 24.99,
    image: "/images/women/women-casual-top.jpg",
    category: "women",
  },
  {
    id: "w-dress-2",
    title: "Women's Summer Dress",
    description: "Breezy dress ideal for warm days.",
    price: 42.0,
    image: "/images/women/women-summer-dress.jpg",
    category: "women",
  },
  {
    id: "w-dress-3",
    title: "Women's Party Dress",
    description: "Statement dress for special occasions.",
    price: 69.0,
    image: "/images/women/women-party-dress.jpg",
    category: "women",
  },
  {
    id: "w-suit-1",
    title: "Women's Office Suit",
    description: "Tailored suit for a sharp office look.",
    price: 119.0,
    image: "/images/women/women-office-suit.jpg",
    category: "women",
  },
  {
    id: "w-coat-1",
    title: "Women's Long Coat",
    description: "Warm long coat for winter layering.",
    price: 129.0,
    image: "/images/women/women-jacket-longcoat.jpg",
    category: "women",
  },
  {
    id: "w-casual-1",
    title: "Women's Street Casual",
    description: "Street style look for everyday comfort.",
    price: 35.0,
    image: "/images/women/women-street-casual.jpg",
    category: "women",
  },
  {
    id: "w-saree-1",
    title: "Women's Saree Traditional",
    description: "Traditional saree with elegant drape.",
    price: 89.0,
    image: "/images/women/women-saree-traditional.jpg",
    category: "women",
  },
];

export const menProducts = products.filter((p) => p.category === "men");
export const womenProducts = products.filter((p) => p.category === "women");


