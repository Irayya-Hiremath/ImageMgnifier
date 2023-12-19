import { useEffect, useState } from "react";
import { getProductsList } from "../api/getProductsList";
import ZoomSlider from "@/components/ZoomSlider";
import ImageNavBar from "@/components/ImageNavBar";

function Home() {
  const [products, setProducts] = useState([]);
  const [selectedImage, setSelectedImage] = useState();
  const [zoom, setZoom] = useState(50);

  const handleZoomChange = (e) => {
    setZoom(parseInt(e.target.value, 10));
  };
  const getProducts = async () => {
    try {
      const result = await getProductsList();
      console.log(result);
      const imageArray = result?.map((elm) => {
        return elm.image;
      });
      console.log(result);
      setProducts(imageArray);
      setSelectedImage(imageArray[0]);
    } catch (error) {
      console.log('error',error)
    }
   
  };

  const imageHandler = (image) => {
    setSelectedImage(image);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (




 <div className="text-gray-600 body-font  h-screen flex justify-center  ">
  {products?.length>0?

  <div className="lg:w-1/2 xl :w-1/2  md:w-1/2 sm:w-[100%] mx-auto   min-h-[70%] max-h-[70%] my-auto ">
    <div className="flex w-[100%] mx-auto  min-h-[100%] max-h-[100%] border">
      <ImageNavBar products={products} onChange={imageHandler} />
      <div
        className="w-full h-[400px] flex justify-center items-center  overflow-hidden  "
        style={{ minHeight: '400px', maxHeight: '400px' }}
      >
        <img
          alt="product"
          className=" h-full w-full "
          style={{ transform: `scale(${zoom / 100})`, transition: 'transform 0.2s ease-in-out' }}
          src={selectedImage}
        />
      </div>
    </div>
    <ZoomSlider value={zoom} onChange={handleZoomChange} />
  </div>:  <h1 className="my-auto ">Loading ....</h1>}
</div> 


  );
}
export default Home;
