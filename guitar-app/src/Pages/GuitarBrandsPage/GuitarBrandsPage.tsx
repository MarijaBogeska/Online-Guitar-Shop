import { useQuery } from "@apollo/client";
import Heading from "../../Components/Heading/Heading";
import "./GuitarBrands.css";
import brandQueries from "../../Graphql/Queries/brands";
import BrandSection from "../../Components/BrandSection/BrandSection";
import { Spinner } from "../../Components/Spinner/Spinner";
import mobile1 from "../../images/mobileApp/mobile1.png";
import mobile2 from "../../images/mobileApp/mobile2.png";
export default function GuitarBrandsPage() {
  const { loading, error, data } = useQuery(brandQueries.GET_ALL_BRANDS);

  if (loading) return <Spinner />;
  if (error) return <p>Error fetching brands.</p>;
  // console.log(data);
  const brands = data.findAllBrands;

  return (
    <div className="GuitarBrandsPage">
      <Heading
      logo="../../images/logo.png"
        photo="../src/images/cover.jpg"
        beforeSpan="Browse top quality"
        divStyle={{ width: "672px", height: "586px" }}
        span=" Guitars"
        afterSpan=" online"
        paragraph="Explore 50k+ latest collections of branded guitars online with VibeStrings."
      />
      <div className="brands">
        <section>
          <div className="headingText">
            Featuring the <span className="headingSpan">Best Brands</span>
          </div>
          <p className="paragraph">
            Select your preferred brand and explore our exquisite collection.
          </p>
        </section>
        <BrandSection brands={brands} />
      </div>
      <section className="services">
        <div className="serviceH headingText">
          Why try <span className="headingSpan">VibeStrings?</span>
        </div>
        <div className="servicesIcons">
          <div className="cart">
            <div className="iconBg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clipPath="url(#clip0_4418_9941)">
                  <path
                    d="M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z"
                    stroke="#A4A4A4"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z"
                    stroke="#A4A4A4"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10Z"
                    stroke="#A4A4A4"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18 22C20.2091 22 22 20.2091 22 18C22 15.7909 20.2091 14 18 14C15.7909 14 14 15.7909 14 18C14 20.2091 15.7909 22 18 22Z"
                    stroke="#A4A4A4"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4418_9941">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="serviceText">
              <p>SMOOTH BROWSING</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="cart">
            <div className="iconBg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clipPath="url(#clip0_4418_9501)">
                  <path
                    d="M12 14H13C14.1 14 15 13.1 15 12V2H6C4.5 2 3.19001 2.82999 2.51001 4.04999"
                    stroke="#A4A4A4"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17C2 18.66 3.34 20 5 20H6C6 18.9 6.9 18 8 18C9.1 18 10 18.9 10 20H14C14 18.9 14.9 18 16 18C17.1 18 18 18.9 18 20H19C20.66 20 22 18.66 22 17V14H19C18.45 14 18 13.55 18 13V10C18 9.45 18.45 9 19 9H20.29L18.58 6.01001C18.22 5.39001 17.56 5 16.84 5H15V12C15 13.1 14.1 14 13 14H12"
                    stroke="#A4A4A4"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 22C9.10457 22 10 21.1046 10 20C10 18.8954 9.10457 18 8 18C6.89543 18 6 18.8954 6 20C6 21.1046 6.89543 22 8 22Z"
                    stroke="#A4A4A4"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 22C17.1046 22 18 21.1046 18 20C18 18.8954 17.1046 18 16 18C14.8954 18 14 18.8954 14 20C14 21.1046 14.8954 22 16 22Z"
                    stroke="#A4A4A4"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 12V14H19C18.45 14 18 13.55 18 13V10C18 9.45 18.45 9 19 9H20.29L22 12Z"
                    stroke="#A4A4A4"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 8H8"
                    stroke="#A4A4A4"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 11H6"
                    stroke="#A4A4A4"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 14H4"
                    stroke="#A4A4A4"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4418_9501">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="serviceText">
              <p>EASY DELIVERY</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="cart">
            <div className="iconBg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clipPath="url(#clip0_4418_169788)">
                  <path
                    d="M9 19C9 19.75 8.79 20.46 8.42 21.06C7.73 22.22 6.46 23 5 23C3.54 23 2.27 22.22 1.58 21.06C1.21 20.46 1 19.75 1 19C1 16.79 2.79 15 5 15C7.21 15 9 16.79 9 19Z"
                    stroke="#A4A4A4"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.44141 18.9995L4.43141 19.9895L6.56141 18.0195"
                    stroke="#A4A4A4"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.7514 7.04997C17.5114 7.00997 17.2614 6.99998 17.0014 6.99998H7.00141C6.72141 6.99998 6.45141 7.01998 6.19141 7.05998C6.33141 6.77998 6.53141 6.52001 6.77141 6.28001L10.0214 3.02C11.3914 1.66 13.6114 1.66 14.9814 3.02L16.7314 4.78996C17.3714 5.41996 17.7114 6.21997 17.7514 7.04997Z"
                    stroke="#A4A4A4"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 12V17C22 20 20 22 17 22H7.63C7.94 21.74 8.21 21.42 8.42 21.06C8.79 20.46 9 19.75 9 19C9 16.79 7.21 15 5 15C3.8 15 2.73 15.53 2 16.36V12C2 9.28 3.64 7.38 6.19 7.06C6.45 7.02 6.72 7 7 7H17C17.26 7 17.51 7.00999 17.75 7.04999C20.33 7.34999 22 9.26 22 12Z"
                    stroke="#A4A4A4"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 12.5H19C17.9 12.5 17 13.4 17 14.5C17 15.6 17.9 16.5 19 16.5H22"
                    stroke="#A4A4A4"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4418_169788">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="serviceText">
              <p>SWIFT PAYMENTS</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="mobileApp">
        <div className="first">
          <Heading
          logo="../../images/logo.png"
            beforeSpan="Browse and buy your "
            span="favorite guitars "
            afterSpan="with VibeStrings."
            paragraph={
              <div className="stores">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/180px-Google_Play_Store_badge_EN.svg.png?20220907104002"
                  alt="Play Store Badge"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/135px-Download_on_the_App_Store_Badge.svg.png?20170219160111"
                  alt="App Store Badge"
                />
              </div>
            }
            hStyle={{ fontSize: "48px", fontWeight: "400" }}
          />
        </div>
        <div className="second">
          <div className="circle"></div>
          <div className="appImgs">
            <img src={mobile1} alt="Mobile App" />
            <img src={mobile2} alt="Mobile App" />
          </div>
        </div>
      </section>
    </div>
  );
}
