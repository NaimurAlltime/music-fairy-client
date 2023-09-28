import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#3586ff] text-white">
      <div className="footer pt-10 px-14 pb-7">
        <div>
          <Link
            to="/"
            className="btn btn-ghost normal-case text-2xl font-semibold"
          >
            <img className="w-[35px]" src="/logo.png" alt="" />
          </Link>
          <p className="text-xl">Music Fairy</p>
          <div className="flex gap-4 text-xl">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
        <div>
          <span className="footer-title">QUICK LINKS</span>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Instructors</a>
          <a className="link link-hover">Classes</a>
          <a className="link link-hover">Contact Us</a>
        </div>
        <div>
          <span className="footer-title">POPULAR CLASSES</span>
          <a className="link link-hover">Guitar</a>
          <a className="link link-hover">Piano</a>
          <a className="link link-hover">Percussion</a>
          <a className="link link-hover">Violin</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </div>
      <div className="text-center pb-5 border-t-2 border-gray-300 lg:mx-16">
        <p className="mt-3">
          Copyright © {new Date().getFullYear()} - All right reserved by Music
          Fairy
        </p>
      </div>
    </footer>
  );
};

export default Footer;
