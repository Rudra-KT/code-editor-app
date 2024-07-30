/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
a{
  text-decoration: none;
}
ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

.socials {
  gap: 20px;
}

.socials a {
  font-size: 24px;
}

.links {
  gap: 10px;
}

.legal {
  color: #fff;
  font-size: 1rem;
  margin: 0;
  font-family: "Montserrat", sans-serif;
}

svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: scaleY(3) scaleX(2.25);
  transform-origin: bottom;
  box-sizing: border-box;
  display: block;
  pointer-events: none;
}

footer {
  position: relative;
  display: flex;
  width: 100%;
  height: 370px;
  margin-top: 8.25rem;
  overflow: hidden;
}

footer>section {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 30px;
  padding-bottom: 80px;
  padding-left: 60px;
  width: 100%;
}
.socials li {
  display: inline-block;
  margin: 0 10px;
}

.socials a {
  color: #fff;
  transition: color 0.2s ease-in-out;
}

.socials a:hover {
  cursor: pointer;
  color: #007bff; /* change to your desired hover color */
}

.socials i {
  font-size: 24px;
  transition: transform 0.2s ease-in-out;
}

.socials a:hover i {
  transform: scale(1.2);
}

.socials a:hover i.fa-linkedin {
  color: #057ee8; /* LinkedIn blue */
}

.socials a:hover i.fa-github {
  color: #fff; /* github white */
}

.socials a:hover i.fa-twitter {
  color: #1da1f2; /* Twitter blue */
}

.socials a:hover i.fa-location-dot {
  color: #ff69b4; /* pink */
}

.socials a:hover i.fa-instagram {
  color: #ed467e; /* Instagram pink */
}

.links a {
 font-family: "Montserrat", sans-serif;
  color:#e5e6f0;
  font-weight:semi-bold;
  transition: color 0.2s ease-in-out, font-size 0.2s ease-in-out;
}

.links a:hover {
  cursor:pointer;
  color: #fff;
  font-size: 1.5rem;
}

.links a::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #007bff;
  transform: scaleX(0);
  transition: transform 0.2s ease-in-out;
}

.links a:hover::before {
  transform: scaleX(1);
}
@media (width > 420px) {
  section {
    align-items: center;
    padding-left: 0;
    gap: 20px;
  }

  .links {
    gap: 20px;
  }
}
@media (max-width: 420px) {
    footer > section {
      padding-left: 0;
      align-items: center;
      text-align: center;
    }
      
    .socials {
      gap: 10px;
    }

    .links {
      gap: 10px;
    }
  }



`;

const Footer = () => (
  <FooterWrapper>
    <footer>
      <div className="background">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="100%"
        height="100%"
        viewBox="0 0 1600 900"
      >
        <defs>
          <linearGradient id="bg" x2="0%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: 'rgba(53, 127, 242, 0.6)' }}
            ></stop>
            <stop
              offset="100%"
              style={{ stopColor: 'rgba(38, 89, 190, 0.06)' }}
            ></stop>
          </linearGradient>
          <path
            id="wave"
            fill="url(#bg)"
            d="M-363.852,502.589c0,0,236.988-41.997,505.475,0 s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z"
          />
        </defs>
        <g>
          <use xlinkHref="#wave" opacity=".3">
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              dur="8s"
              calcMode="spline"
              values="270 230; -334 180; 270 230"
              keyTimes="0; .5; 1"
              keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
              repeatCount="indefinite"
            />
          </use>
          <use xlinkHref="#wave" opacity=".6">
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              dur="6s"
              calcMode="spline"
              values="-270 230;243 220;-270 230"
              keyTimes="0; .6; 1"
              keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
              repeatCount="indefinite"
            />
          </use>
          <use xlinkHref="#wave" opacity=".9">
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              dur="4s"
              calcMode="spline"
              values="0 230;-140 200;0 230"
              keyTimes="0; .4; 1"
              keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
              repeatCount="indefinite"
            />
          </use>
        </g>
      </svg>
    </div>
    <section>
      <ul className="socials">
        <li><a href="https://www.linkedin.com/in/rudrakant-tiwari-23b459197"><i className="fa-brands fa-linkedin"></i></a></li>
        <li><a href="https://github.com/Rudra-KT"><i class="fa-brands fa-github"></i></a></li>
        <li><a href="https://twitter.com/RudraKantTiwar4"><i className="fa-brands fa-twitter"></i></a></li>
        <li><a href="https://www.google.com/maps/@35.7040744,139.5577317,3a,80.9y,292.44h,75.21t/data=!3m7!1e1!3m5!1sgT28ssf0BB2LxZ63JNcL1w!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DgT28ssf0BB2LxZ63JNcL1w%26cb_client%3Dmaps_sv.share%26w%3D900%26h%3D600%26yaw%3D292.44%26pitch%3D14.790000000000006%26thumbfov%3D90!7i13312!8i6656?coh=205410&entry=ttu"><i className="fa-solid fa-location-dot"></i></a></li>
        <li><a href="https://www.instagram.com/rkt_2k2/"><i className="fa-brands fa-instagram"></i></a></li>
      </ul>
      <ul className="links">
        <li><a href="https://rudra-kt.github.io/About_Me/">About</a></li>
        <li><a href="mailto:rudrakanttiwari2002@gmail.com">Contact</a></li>
      </ul>
      <p className="legal">Made with ❤️ by rudra</p>
    </section>
    </footer>
    
  </FooterWrapper>
);

export default Footer;
