import React, { useState, useEffect } from 'react';

import './App.css';




function App() {
  
  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const [mainImage, setMainImage] = useState("");
  const [zoomData, setZoomData] = useState({ x: 0, y: 0, visible: false });
  const [cart, setCart] = useState([]);

  
  const handleAddToCart = () => {
    setCart((prevCart) => {
      console.log("Previous cart:", prevCart);
  
      // Check if the product already exists in the cart
      const existingItemIndex = prevCart.findIndex(
        (item) => item.name === product.name
      );
  
      if (existingItemIndex !== -1) {
        // If the product exists, increase its quantity
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += 1;
        console.log("After increment:", updatedCart);
        return updatedCart;
      } else {
        // If the product does not exist, add it with quantity 1
        const newCart = [
          ...prevCart, // Preserve previous cart items
          {
            name: product.name,
            price: product.price,
            image: mainImage,
            quantity: 1,
          },
        ];
        console.log("After adding new item:", newCart);
        return newCart;
      }
    });
  };

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  
  useEffect(() => {
   
    const fetchData = async () => {
      setLoading(true);
      const mockData = {
        name: "Apple iPhone 15 - Blue",
        storeLink: "https://www.apple.com/in/",
        price: "₹1,00,000",
        description: "The latest iPhone with A16 Bionic chip, ProMotion display, and Dynamic Island.",
        variants: [{color:"#d1e7ff"},
                    {color : "#ffc9ec"},
                    
                  {color:"#b6ffe2"},
                {color:"#faf5c1"},
                {color : "Black"}],
        reviews: [
          { user: "Alice", comment: "Amazing phone!", rating: 5 },
          { user: "Bob", comment: "Worth the price!", rating: 4 },
         
        ],
        images: [
          "https://th.bing.com/th/id/OIP.IzmiqpMjQZluu3HpDJ9SeAHaEK?w=271&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
          "https://th.bing.com/th/id/OIP.DZyImbVe3yJcflRLIc0E4AHaHa?w=174&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
          "https://th.bing.com/th/id/OIP.phmBWjqmsYkzM93nFyfnIAHaEK?w=310&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
          "https://th.bing.com/th/id/OIP.z00HG9gkCj7IsUFAWn99_gHaHa?w=163&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
          "https://th.bing.com/th/id/OIP._p2lSXEpPU7DSrnG8mtRtwHaHa?w=144&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
          "https://th.bing.com/th/id/OIP.ZdfUG4giiMuccki-ub0bJQHaD4?w=281&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
          "https://th.bing.com/th/id/OIP.-QsV5d-sjTDHcXs-EFueGgHaEK?w=268&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
      
        ],
      };

      setTimeout(() => {
        setProduct(mockData);
        setMainImage(mockData.images[0]); 
        setLoading(false);
      }, 1000); 
    };

    fetchData();

    console.log("App component mounted");
  }, []);

  const handleMouseEnter = () => {
    setZoomData((prev) => ({ ...prev, visible: true }));
  };

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomData({ x, y, visible: true });
  };

  const handleMouseLeave = () => {
    setZoomData((prev) => ({ ...prev, visible: false }));
  };
  
 

  if (loading) {
    return <div className="loading-spinner">Loading...</div>;
  }
  
  
  
 
  
  return (
    <div className="Page">
      <nav className="navbar">
        <div className="navdiv">
          <img src="https://th.bing.com/th/id/OIP.IPeWPesm_9YEryn6nol8LAAAAA?w=173&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="brand icon"/>
          <ul>
            <li>Home</li>
            <li>iPhone</li>
            <li>iPad</li>
            <li>Mac</li>
            <li>Air Pods</li>
            <li>Accessories</li>
          </ul>
          <input type="text" id="input" placeholder="Search for products,brands and more.."></input>
          
          <div id="search">
          <img src="https://th.bing.com/th/id/OIP.vzBrG65VrNFHz7CpxDLZxAHaHw?w=190&h=199&c=7&r=0&o=5&dpr=1.5&pid=1.7" id="searchicon"/>
          </div>
          <section className="right-corner">
            <div className="right-side">
              <img src="https://th.bing.com/th/id/OIP.Os3dloCTc-JUqOagtZOXVAHaHr?w=201&h=208&c=7&r=0&o=5&dpr=1.5&pid=1.7"/>
              <p>Profile</p>
            </div>
            <div className="wishlist">
              <img src="https://th.bing.com/th/id/OIP.fUXneOMoXxnsN3zDckqB6QHaHa?w=197&h=197&c=7&r=0&o=5&dpr=1.5&pid=1.7"/>
              <p>Wishlist</p>
            </div>
            <div className="bag">
              <img src="https://th.bing.com/th/id/OIP.Xv0xnYMcE9384WTpuIcR-wAAAA?w=171&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"/> 
              <p>Bag <span style={{  color:'red'}}>({totalQuantity})</span></p>
              
             
            </div>
          </section>
        </div>
      </nav>
    

    <div className="Product">
      <div id="gallery">
      {product.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Product ${index + 1}`}
              onClick={() => setMainImage(img)}
            />
          ))}
        </div>
      <div className="left">
      <img
            src={mainImage}
            alt="Main Product"
            className="main-image"
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          />
          {zoomData.visible && (
            <div
              className="zoom-overlay"
              style={{
                backgroundImage: `url(${mainImage})`,
                backgroundPosition: `${zoomData.x}% ${zoomData.y}%`,
                backgroundSize: "200%",
              }}
            ></div>
          )}
        </div>
      <div className="right">
         <h2>Apple iPhone 15-Blue</h2>
         <a href="https://www.apple.com/in/" target="_blank">Visit the Apple Store</a>
          
        

        
          
          <p>{product.description}</p>
          <p><strong>Price:</strong> {product.price}</p>

         
          
          <div className="variant-buttons">
                {product.variants.map((variant, index) => (
            <button
            key={index}
                className="variant-button"
               style={{ backgroundColor: variant.color }}
                
              />
              ))}
             </div>

         
          <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
    
     
          
          <div className="reviews">
            <h3>Reviews</h3>
            {product.reviews.map((review, index) => (
              <div key={index} className="review">
                <p><strong>{review.user}:</strong> {review.comment}</p>
                <p>Rating: {review.rating} ⭐</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="cartSection">
          <h3>Shopping Cart</h3>
          <div className="cart">
          {cart.map((item, index) => (
           <div key={index} className="cart-item">
           <img src={item.image} alt={item.name} />
           <p>{item.name}</p>
           <p>{item.price}</p>
           <p className="quantity">Qty: {item.quantity}</p>
          </div>
          
             ))}
             </div>
        </div>
    
        </div>
        
        <div className="break">
        <hr></hr>
        <h3  style={{marginLeft:'80px'}}>Related Products</h3></div>
      <div className="related-products">
        
        <div className="ipad">
         <img src="https://www.aixxess.de/wp-content/uploads/2022/04/ipad-air-4th-gen-colors.png"/>
         <a href="https://www.apple.com/in/ipad/">Apple iPad</a>
        </div>
        <div className="macbook">
          <img src="https://cdn3.vox-cdn.com/thumbor/f5WT8pw5ZjOzeDgY6JGEd7CwcFw=/cdn0.vox-cdn.com/uploads/chorus_asset/file/6357753/newmacbookcolors.0.jpg"/>
          <a href="https://www.apple.com/in/mac/">Apple Mac</a>
        </div>
        <div className="Airpods">
          <img src="https://th.bing.com/th/id/OIP.ExbVbydk2W6RO72_onFcyQHaHa?rs=1&pid=ImgDetMain"/>
          <a href="https://www.apple.com/in/airpods/">Apple Airpods</a>
        </div>
        <div className="apple-tv">
          <img src="https://th.bing.com/th?id=OIF.%2fw%2bhriPbWvd6gMblUrZK8w&w=320&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"/>
          <a href="https://www.apple.com/in/tv-home/">Apple TV</a>
        </div>
      </div>
      </div>  
     

  
    
            
    
  );
}  


export default App;
