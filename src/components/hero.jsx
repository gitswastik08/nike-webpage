import "../assets/app.css";
function Hero() {
  return (
    <main className="hero">
      <div className="text_section">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="shop_cat">
          <button id="b1">shop now</button>
          <button className="b2">category</button>
        </div>
        <div className="avbl">
          <p>Also available on</p>
          <div className="avbl_logo">
            <img src="/images/flipkart.png" alt="" />
            <img src="/images/amazon.png" alt="" />

          </div>
          
        </div>
      </div>
      <div id="shoe_section">
        <img src="/images/shoe_image.png" alt="" />
      </div>
    </main>
  );
}
export default Hero;
