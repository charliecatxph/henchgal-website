import productsJSON from "@/utils/Products";
import { useEffect, useState } from "react";
import Head from "next/head";

const prods = productsJSON();

export default function Products() {
  const [openNav, setOpenNav] = useState(false);
  return (
    <><Head>
    <title>HENCHGAL Construction | Products</title>
    <meta
      name="description"
      content="Standardbility at the foundation of every build."
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
      <main>
      <nav
          className="mobile-nav-ext"
          style={
            openNav
              ? { transform: "translateX(0%)" }
              : { transform: "translate(-100%)" }
          }
        >
          <ul>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
                onClick={() => setOpenNav(false)}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>

        <nav className="main-nav">
          <div className="top-x">
            <div className="container">
              <div className="wrapper">
                <h5>Standardbility at the foundation of every build.</h5>
                <div>
                  <h5>
                    <a href="/contact">Contact Us{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="size-6"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                        clip-rule="evenodd"
                      />
                    </svg></a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="main-x">
            <div className="container">
              <div className="wrapper">
                <a href="/"><div className="svg-cont" >
                  <svg
                    width="40"
                    height="26"
                    viewBox="0 0 40 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_6_18)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M32.353 0.147215C31.3802 0.288392 30.0786 0.990126 29.5132 1.67823C28.33 3.11784 28.351 4.77212 29.5698 6.13188C30.3996 7.0576 31.0926 7.32484 32.6654 7.3253C34.3032 7.32574 35.152 7.00916 36.0972 6.04552C36.89 5.23728 37.1704 4.58028 37.1638 3.54494C37.1504 1.34788 34.9224 -0.225502 32.353 0.147215ZM37.4292 0.0525546C37.4292 0.080701 37.6034 0.29728 37.8166 0.534006C38.279 1.0476 38.9414 2.26516 38.9414 2.60144C38.9414 3.00542 39.3162 2.74602 39.369 2.30546C39.4694 1.46832 38.9598 0.62363 38.0818 0.171658C37.7634 0.00781652 37.4292 -0.0532168 37.4292 0.0525546ZM25.2552 0.695182C20.1944 2.05496 16.4011 5.40556 14.8876 9.85284C14.5807 10.755 14.5358 11.1692 14.5429 13.0378C14.5505 15.0484 14.58 15.2624 15.004 16.3828C15.4834 17.6497 16.578 19.4211 17.3698 20.2116C18.0821 20.9228 19.5198 22.0744 19.6953 22.0744C19.7801 22.0744 19.93 22.1692 20.0282 22.2852C20.4692 22.8056 23.7596 24.0578 25.104 24.2168C25.2704 24.2366 25.7082 24.3038 26.077 24.3662L26.7476 24.4798L26.1816 23.7586C24.7264 21.9036 23.5104 19.8293 23.0038 18.3375C21.7002 14.4985 21.6792 11.0274 22.9376 7.33448C23.7758 4.87478 24.8238 2.99444 26.3364 1.23722C26.6984 0.816804 26.9944 0.43342 26.9944 0.385422C26.9944 0.251654 26.7316 0.298466 25.2552 0.695182ZM4.83932 0.881392C3.8412 0.927168 2.93504 1.02124 2.82556 1.09042C2.71606 1.15975 2.12038 1.21634 1.50185 1.21634C0.818904 1.21634 0.333914 1.28329 0.26707 1.3867C0.0656332 1.69838 0.031002 3.54582 0.0154254 14.8155L0 26L1.38752 25.9802C3.38328 25.9518 4.66616 25.455 5.89928 24.2336C7.27138 22.8746 7.33626 22.6056 7.33534 18.2685C7.33474 15.5636 7.38102 14.6555 7.52362 14.565C7.62768 14.4991 8.6654 14.4222 9.82986 14.394C10.9943 14.3659 12.0322 14.2743 12.1361 14.1907C12.3949 13.9824 12.3949 12.1566 12.1361 12.1286C12.0322 12.1173 10.9263 12.1007 9.67864 12.0915L7.4102 12.0749L7.37058 6.52726C7.33066 0.946278 7.30526 0.68733 6.8053 0.772658C6.72212 0.786732 5.83742 0.835766 4.83932 0.881392ZM34.329 10.0334C33.0328 10.2109 31.7826 10.8617 30.9002 11.8186C29.6868 13.1341 29.5752 13.7258 29.5792 18.8153C29.581 21.0558 29.6304 23.153 29.689 23.4752C29.7862 24.0122 29.8458 24.0722 30.3984 24.1892C30.9982 24.3162 32.0522 24.1726 33.1948 23.808C33.8688 23.5928 34.7978 22.9828 35.4176 22.3476C36.3002 21.4436 36.3706 21.09 36.3706 17.5534C36.3706 14.071 36.429 13.7781 37.2382 13.2137C37.518 13.0184 38.0444 12.8863 38.8282 12.8143C39.4726 12.7552 40 12.6408 40 12.5602C40 12.4798 39.789 12.1529 39.531 11.8338C38.3574 10.3823 36.4934 9.73714 34.329 10.0334Z"
                        fill="#201D1E"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_6_18">
                        <rect width="40" height="26" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="109"
                    height="29"
                    viewBox="0 0 109 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.65625 14V3.81818H3.42045V7.79545H7.07955V3.81818H9.84375V14H7.07955V10.0227H3.42045V14H0.65625ZM10.4563 14V3.81818H17.7943V6.04545H13.2205V7.79545H17.4165V10.0227H13.2205V11.7727H17.7744V14H10.4563ZM27.2749 3.81818V14H24.9681L21.2891 8.65057H21.2294V14H18.4652V3.81818H20.8118L24.4311 9.14773H24.5107V3.81818H27.2749ZM37.3881 7.63636H34.5841C34.5642 7.40436 34.5112 7.19389 34.425 7.00497C34.3422 6.81605 34.2262 6.65365 34.077 6.51776C33.9312 6.37855 33.7539 6.27249 33.5451 6.19957C33.3363 6.12334 33.0993 6.08523 32.8341 6.08523C32.3701 6.08523 31.9774 6.19792 31.6559 6.4233C31.3377 6.64867 31.0957 6.97183 30.93 7.39276C30.7676 7.81368 30.6864 8.31913 30.6864 8.90909C30.6864 9.5322 30.7693 10.0542 30.935 10.4751C31.104 10.8928 31.3476 11.2076 31.6658 11.4197C31.984 11.6286 32.3668 11.733 32.8142 11.733C33.0694 11.733 33.2981 11.7015 33.5003 11.6385C33.7025 11.5722 33.8782 11.4777 34.0273 11.3551C34.1765 11.2325 34.2974 11.085 34.3902 10.9126C34.4864 10.737 34.551 10.5398 34.5841 10.321L37.3881 10.3409C37.355 10.7718 37.234 11.2109 37.0252 11.6584C36.8164 12.1025 36.5197 12.5135 36.1353 12.8913C35.7541 13.2659 35.2818 13.5675 34.7184 13.7962C34.1549 14.0249 33.5003 14.1392 32.7546 14.1392C31.8199 14.1392 30.9814 13.9387 30.239 13.5376C29.4998 13.1366 28.9149 12.5466 28.484 11.7678C28.0564 10.9889 27.8426 10.036 27.8426 8.90909C27.8426 7.77557 28.0614 6.82102 28.4989 6.04545C28.9364 5.26657 29.5264 4.67827 30.2688 4.28054C31.0112 3.8795 31.8398 3.67898 32.7546 3.67898C33.3976 3.67898 33.9892 3.76681 34.5294 3.94247C35.0697 4.11813 35.5436 4.375 35.9513 4.71307C36.359 5.04782 36.6871 5.46046 36.9357 5.95099C37.1843 6.44152 37.3351 7.00331 37.3881 7.63636ZM37.9422 14V3.81818H40.7064V7.79545H44.3655V3.81818H47.1297V14H44.3655V10.0227H40.7064V14H37.9422ZM54.3544 7.17898C54.3113 7.00331 54.2434 6.84919 54.1506 6.71662C54.0578 6.58073 53.9418 6.46638 53.8026 6.37358C53.6667 6.27746 53.5076 6.2062 53.3253 6.1598C53.1463 6.11008 52.9491 6.08523 52.7337 6.08523C52.2696 6.08523 51.8736 6.19626 51.5455 6.41832C51.2206 6.64039 50.9721 6.96023 50.7997 7.37784C50.6307 7.79545 50.5462 8.29924 50.5462 8.8892C50.5462 9.4858 50.6274 9.99621 50.7898 10.4205C50.9522 10.8447 51.1941 11.1695 51.5156 11.3949C51.8371 11.6203 52.2365 11.733 52.7138 11.733C53.1347 11.733 53.4844 11.6716 53.7628 11.549C54.0445 11.4264 54.255 11.2524 54.3942 11.027C54.5334 10.8016 54.603 10.5365 54.603 10.2315L55.0803 10.2812H52.7536V8.3125H57.2678V9.72443C57.2678 10.6525 57.0705 11.4463 56.6761 12.1058C56.285 12.7621 55.7448 13.2659 55.0554 13.6172C54.3693 13.9652 53.5821 14.1392 52.6939 14.1392C51.7029 14.1392 50.8329 13.9287 50.0838 13.5078C49.3348 13.0869 48.7498 12.487 48.3288 11.7081C47.9112 10.9292 47.7024 10.0028 47.7024 8.92898C47.7024 8.08712 47.83 7.34138 48.0852 6.69176C48.3438 6.04214 48.7017 5.49361 49.1591 5.04616C49.6165 4.59541 50.1451 4.25568 50.745 4.02699C51.3449 3.79498 51.9879 3.67898 52.674 3.67898C53.2772 3.67898 53.8374 3.76515 54.3544 3.9375C54.8748 4.10653 55.3338 4.34848 55.7315 4.66335C56.1326 4.9749 56.4557 5.34446 56.701 5.77202C56.9463 6.19957 57.0954 6.66856 57.1484 7.17898H54.3544ZM60.1871 14H57.2041L60.5649 3.81818H64.3433L67.7041 14H64.7212L62.4939 6.62216H62.4143L60.1871 14ZM59.6303 9.98295H65.2382V12.0511H59.6303V9.98295ZM67.9848 14V3.81818H70.749V11.7727H74.8654V14H67.9848Z"
                      fill="black"
                    />
                    <path
                      d="M10.1619 19.6364H7.35795C7.33807 19.4044 7.28504 19.1939 7.19886 19.005C7.116 18.8161 7 18.6536 6.85085 18.5178C6.70502 18.3786 6.5277 18.2725 6.31889 18.1996C6.11009 18.1233 5.87311 18.0852 5.60795 18.0852C5.14394 18.0852 4.75118 18.1979 4.42969 18.4233C4.11151 18.6487 3.86955 18.9718 3.70384 19.3928C3.54143 19.8137 3.46023 20.3191 3.46023 20.9091C3.46023 21.5322 3.54309 22.0542 3.70881 22.4751C3.87784 22.8928 4.12145 23.2076 4.43963 23.4197C4.75781 23.6286 5.14063 23.733 5.58807 23.733C5.84328 23.733 6.07197 23.7015 6.27415 23.6385C6.47633 23.5722 6.65199 23.4777 6.80114 23.3551C6.95028 23.2325 7.07126 23.085 7.16406 22.9126C7.26018 22.737 7.32481 22.5398 7.35795 22.321L10.1619 22.3409C10.1288 22.7718 10.0078 23.2109 9.79901 23.6584C9.5902 24.1025 9.29356 24.5135 8.90909 24.8913C8.52794 25.2659 8.05563 25.5675 7.49219 25.7962C6.92874 26.0249 6.27415 26.1392 5.52841 26.1392C4.59375 26.1392 3.75521 25.9387 3.01278 25.5376C2.27367 25.1366 1.68868 24.5466 1.25781 23.7678C0.830256 22.9889 0.616477 22.036 0.616477 20.9091C0.616477 19.7756 0.835227 18.821 1.27273 18.0455C1.71023 17.2666 2.30019 16.6783 3.04261 16.2805C3.78504 15.8795 4.61364 15.679 5.52841 15.679C6.1714 15.679 6.76302 15.7668 7.30327 15.9425C7.84351 16.1181 8.31747 16.375 8.72514 16.7131C9.13281 17.0478 9.46094 17.4605 9.70952 17.951C9.9581 18.4415 10.1089 19.0033 10.1619 19.6364ZM20.5797 20.9091C20.5797 22.0426 20.3592 22.9988 19.9184 23.7777C19.4776 24.5533 18.8827 25.1416 18.1336 25.5426C17.3846 25.9403 16.5493 26.1392 15.6279 26.1392C14.6999 26.1392 13.8614 25.9387 13.1123 25.5376C12.3666 25.1333 11.7733 24.5433 11.3325 23.7678C10.895 22.9889 10.6762 22.036 10.6762 20.9091C10.6762 19.7756 10.895 18.821 11.3325 18.0455C11.7733 17.2666 12.3666 16.6783 13.1123 16.2805C13.8614 15.8795 14.6999 15.679 15.6279 15.679C16.5493 15.679 17.3846 15.8795 18.1336 16.2805C18.8827 16.6783 19.4776 17.2666 19.9184 18.0455C20.3592 18.821 20.5797 19.7756 20.5797 20.9091ZM17.7359 20.9091C17.7359 20.2992 17.6547 19.7855 17.4923 19.3679C17.3332 18.947 17.0962 18.6288 16.7814 18.4134C16.4698 18.1946 16.0853 18.0852 15.6279 18.0852C15.1706 18.0852 14.7844 18.1946 14.4696 18.4134C14.158 18.6288 13.921 18.947 13.7586 19.3679C13.5995 19.7855 13.52 20.2992 13.52 20.9091C13.52 21.5189 13.5995 22.0343 13.7586 22.4553C13.921 22.8729 14.158 23.1911 14.4696 23.4098C14.7844 23.6252 15.1706 23.733 15.6279 23.733C16.0853 23.733 16.4698 23.6252 16.7814 23.4098C17.0962 23.1911 17.3332 22.8729 17.4923 22.4553C17.6547 22.0343 17.7359 21.5189 17.7359 20.9091ZM29.9683 15.8182V26H27.6614L23.9825 20.6506H23.9228V26H21.1586V15.8182H23.5052L27.1245 21.1477H27.204V15.8182H29.9683ZM36.0644 19C36.0379 18.6686 35.9136 18.41 35.6915 18.2244C35.4728 18.0388 35.1397 17.946 34.6923 17.946C34.4072 17.946 34.1736 17.9808 33.9913 18.0504C33.8123 18.1167 33.6797 18.2079 33.5935 18.3239C33.5074 18.4399 33.4626 18.5724 33.4593 18.7216C33.4527 18.8442 33.4742 18.9553 33.5239 19.0547C33.577 19.1508 33.6598 19.2386 33.7725 19.3182C33.8852 19.3944 34.0294 19.464 34.205 19.527C34.3807 19.59 34.5895 19.6463 34.8315 19.696L35.6667 19.875C36.2301 19.9943 36.7124 20.1518 37.1134 20.3473C37.5145 20.5429 37.8426 20.7732 38.0978 21.0384C38.353 21.3002 38.5403 21.5952 38.6596 21.9233C38.7822 22.2514 38.8452 22.6094 38.8485 22.9972C38.8452 23.6667 38.6778 24.2334 38.3464 24.6974C38.0149 25.1615 37.541 25.5144 36.9245 25.7564C36.3113 25.9983 35.5739 26.1193 34.7121 26.1193C33.8272 26.1193 33.0549 25.9884 32.3954 25.7266C31.7391 25.4647 31.2287 25.062 30.8641 24.5185C30.5029 23.9716 30.3206 23.2723 30.3173 22.4205H32.9423C32.9588 22.732 33.0367 22.9938 33.1759 23.206C33.3151 23.4181 33.5107 23.5788 33.7626 23.6882C34.0178 23.7976 34.321 23.8523 34.6724 23.8523C34.9674 23.8523 35.2143 23.8158 35.4131 23.7429C35.612 23.67 35.7628 23.5689 35.8656 23.4396C35.9683 23.3104 36.0213 23.1629 36.0246 22.9972C36.0213 22.8414 35.97 22.7055 35.8705 22.5895C35.7744 22.4702 35.6153 22.3641 35.3933 22.2713C35.1712 22.1752 34.8712 22.0857 34.4934 22.0028L33.4792 21.7841C32.5777 21.5885 31.8667 21.2621 31.3464 20.8047C30.8293 20.344 30.5725 19.7159 30.5758 18.9205C30.5725 18.2741 30.7448 17.709 31.0928 17.2251C31.4442 16.7379 31.9297 16.3584 32.5495 16.0866C33.1726 15.8149 33.8869 15.679 34.6923 15.679C35.5142 15.679 36.2252 15.8165 36.8251 16.0916C37.425 16.3667 37.8873 16.7545 38.2121 17.255C38.5403 17.7521 38.706 18.3338 38.7093 19H36.0644ZM38.9216 18.0455V15.8182H47.771V18.0455H44.7085V26H41.9841V18.0455H38.9216ZM48.1113 26V15.8182H52.5062C53.2619 15.8182 53.9231 15.9557 54.4899 16.2308C55.0566 16.5059 55.4975 16.902 55.8123 17.419C56.1272 17.9361 56.2846 18.5559 56.2846 19.2784C56.2846 20.0076 56.1222 20.6224 55.7974 21.1229C55.4759 21.6233 55.0235 22.0012 54.4402 22.2564C53.8601 22.5116 53.1824 22.6392 52.4068 22.6392H49.7818V20.4915H51.85C52.1748 20.4915 52.4515 20.4517 52.6802 20.3722C52.9122 20.2893 53.0895 20.1584 53.2122 19.9794C53.3381 19.8004 53.4011 19.5668 53.4011 19.2784C53.4011 18.9867 53.3381 18.7498 53.2122 18.5675C53.0895 18.3819 52.9122 18.246 52.6802 18.1598C52.4515 18.0703 52.1748 18.0256 51.85 18.0256H50.8755V26H48.1113ZM54.0772 21.3267L56.6227 26H53.6199L51.1341 21.3267H54.0772ZM62.7885 15.8182H65.5527V22.3409C65.5527 23.1165 65.3671 23.7876 64.9958 24.3544C64.6279 24.9179 64.1142 25.3537 63.4547 25.6619C62.7951 25.9669 62.0295 26.1193 61.1578 26.1193C60.2795 26.1193 59.5105 25.9669 58.851 25.6619C58.1914 25.3537 57.6777 24.9179 57.3098 24.3544C56.9452 23.7876 56.7629 23.1165 56.7629 22.3409V15.8182H59.5271V22.1023C59.5271 22.4171 59.5967 22.6989 59.7359 22.9474C59.8751 23.1927 60.0673 23.3849 60.3126 23.5241C60.5612 23.6634 60.8429 23.733 61.1578 23.733C61.476 23.733 61.7577 23.6634 62.0029 23.5241C62.2482 23.3849 62.4404 23.1927 62.5797 22.9474C62.7189 22.6989 62.7885 22.4171 62.7885 22.1023V15.8182ZM75.6721 19.6364H72.8681C72.8482 19.4044 72.7952 19.1939 72.709 19.005C72.6262 18.8161 72.5102 18.6536 72.361 18.5178C72.2152 18.3786 72.0379 18.2725 71.829 18.1996C71.6202 18.1233 71.3833 18.0852 71.1181 18.0852C70.6541 18.0852 70.2613 18.1979 69.9398 18.4233C69.6217 18.6487 69.3797 18.9718 69.214 19.3928C69.0516 19.8137 68.9704 20.3191 68.9704 20.9091C68.9704 21.5322 69.0532 22.0542 69.219 22.4751C69.388 22.8928 69.6316 23.2076 69.9498 23.4197C70.268 23.6286 70.6508 23.733 71.0982 23.733C71.3534 23.733 71.5821 23.7015 71.7843 23.6385C71.9865 23.5722 72.1621 23.4777 72.3113 23.3551C72.4604 23.2325 72.5814 23.085 72.6742 22.9126C72.7703 22.737 72.835 22.5398 72.8681 22.321L75.6721 22.3409C75.6389 22.7718 75.518 23.2109 75.3092 23.6584C75.1004 24.1025 74.8037 24.5135 74.4192 24.8913C74.0381 25.2659 73.5658 25.5675 73.0023 25.7962C72.4389 26.0249 71.7843 26.1392 71.0386 26.1392C70.1039 26.1392 69.2654 25.9387 68.5229 25.5376C67.7838 25.1366 67.1988 24.5466 66.768 23.7678C66.3404 22.9889 66.1266 22.036 66.1266 20.9091C66.1266 19.7756 66.3454 18.821 66.7829 18.0455C67.2204 17.2666 67.8103 16.6783 68.5528 16.2805C69.2952 15.8795 70.1238 15.679 71.0386 15.679C71.6816 15.679 72.2732 15.7668 72.8134 15.9425C73.3537 16.1181 73.8276 16.375 74.2353 16.7131C74.643 17.0478 74.9711 17.4605 75.2197 17.951C75.4683 18.4415 75.6191 19.0033 75.6721 19.6364ZM75.9478 18.0455V15.8182H84.7972V18.0455H81.7347V26H79.0103V18.0455H75.9478ZM87.9017 15.8182V26H85.1375V15.8182H87.9017ZM98.3754 20.9091C98.3754 22.0426 98.1549 22.9988 97.7141 23.7777C97.2733 24.5533 96.6784 25.1416 95.9293 25.5426C95.1803 25.9403 94.3451 26.1392 93.4237 26.1392C92.4956 26.1392 91.6571 25.9387 90.908 25.5376C90.1623 25.1333 89.569 24.5433 89.1282 23.7678C88.6907 22.9889 88.4719 22.036 88.4719 20.9091C88.4719 19.7756 88.6907 18.821 89.1282 18.0455C89.569 17.2666 90.1623 16.6783 90.908 16.2805C91.6571 15.8795 92.4956 15.679 93.4237 15.679C94.3451 15.679 95.1803 15.8795 95.9293 16.2805C96.6784 16.6783 97.2733 17.2666 97.7141 18.0455C98.1549 18.821 98.3754 19.7756 98.3754 20.9091ZM95.5316 20.9091C95.5316 20.2992 95.4504 19.7855 95.288 19.3679C95.1289 18.947 94.8919 18.6288 94.5771 18.4134C94.2655 18.1946 93.881 18.0852 93.4237 18.0852C92.9663 18.0852 92.5801 18.1946 92.2653 18.4134C91.9537 18.6288 91.7167 18.947 91.5543 19.3679C91.3952 19.7855 91.3157 20.2992 91.3157 20.9091C91.3157 21.5189 91.3952 22.0343 91.5543 22.4553C91.7167 22.8729 91.9537 23.1911 92.2653 23.4098C92.5801 23.6252 92.9663 23.733 93.4237 23.733C93.881 23.733 94.2655 23.6252 94.5771 23.4098C94.8919 23.1911 95.1289 22.8729 95.288 22.4553C95.4504 22.0343 95.5316 21.5189 95.5316 20.9091ZM107.764 15.8182V26H105.457L101.778 20.6506H101.719V26H98.9543V15.8182H101.301L104.92 21.1477H105V15.8182H107.764Z"
                      fill="black"
                    />
                  </svg>
                </div></a>
                <ul className="btns">
                  <li>
                    <a href="/products">PRODUCTS</a>
                  </li>
                  <li>
                    <a href="/projects">PROJECTS</a>
                  </li>
                </ul>
                <div className="mobile-nv-btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="size-6"
                    onClick={() => {
                      setOpenNav(true);
                    }}
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 9a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9Zm0 6.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <section className="proj-main-pg">
        <div className="container">
          <div className="wrapper">
            <h1>

 Products {`(${prods.length})`}</h1>
            <div className="prod-main">
           
                {prods.map((d, i) => {
                  return <a href={`/view-product/${d.uid}`} key={i}>
                    <div className="product">
                    <div className="bg">
                      <img src={`/images/prods/${d.pics[0]}`} alt="" />
                    </div>
                    <div className="proj-txt">
                      <h3>{d.title}</h3>
                    </div>
                  </div>
                  </a>
                  })}
              </div>
          </div>
        </div>
       </section>

        <section className="contact-us">
          <div className="container">
            <div className="wrapper">
              <h1>
                Let's build something <span>bright</span>.
              </h1>
              <a href="/contact">
                <button>
                  Contact Us{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </section>

        <footer>
          <div className="container">
            <div className="wrapper">
              <h1>
                <span>Standardbility</span> at the foundation of every build.
              </h1>
              <div className="footerx">
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/products">Products</a></li>
                  <li><a href="/projects">Projects</a></li>

                  <li><a href="/contact">Contact</a></li>
                </ul>
                <p>© 2024 HENCHGAL Construction. All rights reserved.</p>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
