import Image from "next/image";
import PropTypes from "prop-types";

const ProductCardWebsite = ({ title, price, description, image }) => {
  return (
    <div className="w-full max-w-sm mx-auto rounded-xl shadow-xl bg-white p-4 flex flex-col items-center justify-between text-[#2B2B2B]">
      <Image
        className="w-full h-64 object-cover rounded-md"
        width={394}
        height={353}
        alt={title}
        src={image}
      />

      <div className="text-center mt-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm  mt-1">{price}</p>
      </div>

      <p className="text-sm text-gray-600 text-center mt-4">{description}</p>

      <button className="mt-6 bg-transparent text-[#8044AF] border border-[#8044AF] px-6 py-2 rounded-md hover:bg-purple-50 transition">
        Book Now
      </button>
    </div>
  );
};

ProductCardWebsite.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ProductCardWebsite;
