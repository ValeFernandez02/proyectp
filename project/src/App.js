import React, { useState, useEffect } from 'react';
import defaultProducts from './mock/products';
import defaultUsers from './mock/users';
import defaultSales from './mock/sales';
import SportHeader from './components/SportHeader';
import SportCategoryFilter from './components/SportCategoryFilter';
import SportProductGrid from './components/SportProductGrid';
import SportTrendingSection from './components/SportTrendingSection';
import SportAboutSection from './components/SportAboutSection';
import SportAuthGate from './components/SportAuthGate';
import SportCart from './components/SportCart';
import { getProducts, saveProducts, getUsers, saveUsers, getSales, saveSale } from './utils/storage';
import { formatPriceCOP } from './utils/formatUtils';

const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [currentPage, setCurrentPage] = useState('home'); // Estado para controlar la página actual
  const [selectedCategory, setSelectedCategory] = useState('todos'); // Estado para la categoría seleccionada
  const categories = [...new Set(products.map(product => product.category))];

  useEffect(() => {
    // Inicializar datos
    const storedProducts = getProducts();
    if (storedProducts.length === 0) {
      saveProducts(defaultProducts);
      setProducts(defaultProducts);
      setFilteredProducts(defaultProducts);
    } else {
      setProducts(storedProducts);
      setFilteredProducts(storedProducts);
    }

    const storedUsers = getUsers();
    if (!storedUsers || storedUsers.length === 0) {
      saveUsers(defaultUsers);
    }

    const storedSales = getSales();
    if (!storedSales || storedSales.length === 0) {
      localStorage.setItem('sportSales', JSON.stringify(defaultSales));
    }
  }, []);

  useEffect(() => {
    // Filtrar productos cuando cambie la categoría seleccionada o la lista de productos
    if (selectedCategory === 'todos') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === selectedCategory));
    }
  }, [selectedCategory, products]);

  const handleFilterChange = (category) => {
    setSelectedCategory(category);
  };

  const handleAuthSuccess = (user) => {
    setCurrentUser(user);
    setCurrentPage('home'); // Redirigir a la página principal después de autenticar
  };

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.productId === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.productId === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, {
        productId: product.id,
        name: product.name,
        price: product.price,
        quantity: 1
      }];
    });
    setShowCart(true);
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.productId !== productId));
  };

  const handleCheckout = (cartItems, total, paymentMethod) => {
    const newSale = {
      id: Date.now(),
      userId: currentUser.id,
      products: cartItems.map(item => ({
        productId: item.productId,
        quantity: item.quantity
      })),
      date: new Date().toISOString(),
      total: total,
      paymentMethod: paymentMethod,
      status: "completada"
    };

    saveSale(newSale);
    setCart([]);
    setShowCart(false);
    alert(`Compra exitosa por ${formatPriceCOP(total)} (${paymentMethod}). ¡Gracias por tu compra!`);
  };

  if (!currentUser) {
    return <SportAuthGate onAuthSuccess={handleAuthSuccess} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <SportHeader 
        cartItems={cart.reduce((sum, item) => sum + item.quantity, 0)} 
        onCartClick={() => setShowCart(!showCart)} 
      />
      
      <div className="max-w-6xl mx-auto flex p-4">
        <div className={`${showCart ? 'hidden md:block md:w-2/3' : 'w-full'} pr-6`}>
          <div className="py-4 px-2">
            <span className="text-sm text-gray-600">Bienvenido, {currentUser.name}</span>
          </div>
          
          {/* Contenido de la página principal */}
          {currentPage === 'home' && (
            <>
              <SportAboutSection />
              <SportTrendingSection products={products} onAddToCart={addToCart} />
              <SportCategoryFilter categories={categories} onFilterChange={handleFilterChange} />
              {/* Mostrar productos filtrados solo si se ha seleccionado una categoría o "todos" */}
              {selectedCategory && (
                 <SportProductGrid products={filteredProducts} onAddToCart={addToCart} />
              )}
            </>
          )}

          {/* Aquí podrías añadir lógica para mostrar otras páginas si las tuvieras */}
        </div>
        
        {showCart && (
          <div className="md:w-1/3">
            <SportCart 
              cart={cart}
              onCheckout={handleCheckout}
              onRemoveItem={removeFromCart}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;

// DONE