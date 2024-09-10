import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';
import playstore from '../../Assets/androidios.png';
import play from '../../Assets/play.png';


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Shop Non-Stop on Meesho</h3>
            <p className="mb-4">Trusted by more than 1 Crore Indians</p>
            <p className="mb-4">Cash on Delivery | Free Delivery</p>
            <div className="flex items-center space-x-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="text-white hover:text-gray-300 transition-colors duration-300"
              >
                <img  src={playstore} alt="Google Play" className="h-8 fotplaystore" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="text-white hover:text-gray-300 transition-colors duration-300"
              > 
                <img src={play} alt="App Store" className="h-8 fotplaystore2" />
              </motion.a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Careers</h3>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="block mb-2 text-white hover:text-gray-300 transition-colors duration-300"
            >
              Become a supplier
            </motion.a>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Legal and Policies</h3>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="block mb-2 text-white hover:text-gray-300 transition-colors duration-300"
            >
              Meesho Tech Blog
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="block mb-2 text-white hover:text-gray-300 transition-colors duration-300"
            >
              Notices and Returns
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="block mb-2 text-white hover:text-gray-300 transition-colors duration-300"
            >
              Hall of Fame
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="block mb-2 text-white hover:text-gray-300 transition-colors duration-300"
            >
              Sitemap
            </motion.a>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Reach out to us</h3>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="text-white hover:text-gray-300 transition-colors duration-300"
              >
                <FaFacebookF />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="text-white hover:text-gray-300 transition-colors duration-300"
              >
                <FaInstagram />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="text-white hover:text-gray-300 transition-colors duration-300"
              >
                <FaYoutube />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="text-white hover:text-gray-300 transition-colors duration-300"
              >
                <FaLinkedinIn />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="text-white hover:text-gray-300 transition-colors duration-300"
              >
                <FaTwitter />
              </motion.a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <br />
          <br />
          <p>
            Fashneear Technologies Private Limited, CIN: U74900KA2015PTC082263, 3rd Floor, Wing-E, Helios Business Park,Kadubessanahalli Village, Varthur Hobli, Outer Ring Road Bellandur, Bangalore, Bangalore South, Karnataka, India, 560103
          </p>
          <p>E-mail address: query@meesho.com</p>
          <p>&copy; 2015-2024 Meesho.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;