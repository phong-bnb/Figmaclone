function Dashbroard() {
  return (
    <>
      <div className="flex flex-col lg:flex-row   px-[20px] gap-4 md:w-full xs:w-full lg:gap-4 md:grid md:grid-cols-3 md:px-0">
        <div className=" flex flex-col justify-content gap-4 align-items w-full bg-bg1 pl-[20px] pt-[12px] pb-[12px] pr-[12px] rounded-lg">
          <p className="font-medium text-[#161E54]">Avaiable Position</p>
          <p className="font-medium text-4xl text-[#161E54]">24</p>
          <p className="text-[#FF5151]">4 Urgently needed</p>
        </div>
        <div className="flex flex-col justify-content gap-4 align-items w-full bg-bg2  pl-[20px] pt-[12px] pb-[12px] pr-[12px] rounded-lg">
          <p className="font-medium  text-[#161E54]">Job Open</p>
          <p className="font-medium text-4xl text-[#161E54]">10</p>
          <p className="text-[##3786F1]">4 Urgently needed</p>
        </div>
        <div className="flex flex-col justify-content gap-4 align-items w-full bg-bg3  pl-[20px] pt-[12px] pb-[12px] pr-[12px] rounded-lg">
          <p className="font-medium  text-[#161E54]">Avaiable Position</p>
          <p className="font-medium text-4xl text-[#161E54]">24</p>
          <p className="text-[##EE61CF]">4 Urgently needed</p>
        </div>
      </div>
      <div className="flex xs:flex-col md:flex-row  gap-[23px]  w-full  px-[20px] md:px-0  lg:gap-4 justify-between ">
        <div className="flex gap-[40px] p-[20px]  border-[1px] rounded-lg">
          <div className="flex flex-col gap-[15px] px-[20px] ">
            <p className="font-medium ">Total Employees</p>
            <p className="font-medium text-4xl">216</p>
            <div className="flex flex-col gap-1">
              <p className="text-xs text-graytext">120 Men</p>
              <p className="text-xs text-graytext">96 Women</p>
            </div>
          </div>
          <div>
            <svg
              width="117"
              height="123"
              viewBox="0 0 117 123"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 51.5C1 51.5 16.2821 33.2086 30 30.5C40.431 28.4403 46.4876 35.5924 57 34C73.2778 31.5342 76.3958 13.9209 92.5 10.5C101.477 8.59307 115.5 10.5 115.5 10.5"
                stroke="#FF5151"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M30.5 30.3475C16.7821 33.0562 1.5 51.3475 1.5 51.3475V78.5H116V10.3475C116 10.3475 101.977 8.4406 93 10.3475C76.8958 13.7685 73.7778 31.3817 57.5 33.8475C46.9875 35.4399 40.931 28.2878 30.5 30.3475Z"
                fill="url(#paint0_linear_452_275)"
              />
              <path
                d="M46.28 9.17C46.2133 9.17 46.1567 9.14667 46.11 9.1C46.0633 9.05333 46.04 8.99667 46.04 8.93V6.98H44.12C44.0533 6.98 43.9967 6.95667 43.95 6.91C43.9033 6.86333 43.88 6.80333 43.88 6.73V6.21C43.88 6.13667 43.9033 6.08 43.95 6.04C43.9967 5.99333 44.0533 5.97 44.12 5.97H46.04V4.07C46.04 3.99667 46.0633 3.94 46.11 3.9C46.1567 3.85333 46.2133 3.83 46.28 3.83H46.86C46.9333 3.83 46.99 3.85333 47.03 3.9C47.0767 3.94 47.1 3.99667 47.1 4.07V5.97H49.02C49.0933 5.97 49.15 5.99333 49.19 6.04C49.2367 6.08 49.26 6.13667 49.26 6.21V6.73C49.26 6.80333 49.2367 6.86333 49.19 6.91C49.1433 6.95667 49.0867 6.98 49.02 6.98H47.1V8.93C47.1 8.99667 47.0767 9.05333 47.03 9.1C46.99 9.14667 46.9333 9.17 46.86 9.17H46.28ZM50.108 9.5C50.0413 9.5 49.9846 9.47667 49.938 9.43C49.8913 9.38333 49.868 9.32667 49.868 9.26V8.75C49.868 8.57 49.9513 8.41333 50.118 8.28L51.698 6.71C52.3846 6.17 52.8613 5.75 53.128 5.45C53.4013 5.14333 53.538 4.84333 53.538 4.55C53.538 4.23667 53.4513 3.99 53.278 3.81C53.1113 3.63 52.858 3.54 52.518 3.54C52.1846 3.54 51.9213 3.64 51.728 3.84C51.5346 4.03333 51.4146 4.28667 51.368 4.6C51.348 4.68 51.3113 4.74 51.258 4.78C51.2046 4.81333 51.1446 4.83 51.078 4.83H50.188C50.128 4.83 50.078 4.81 50.038 4.77C49.998 4.73 49.978 4.68333 49.978 4.63C49.9913 4.23667 50.098 3.87 50.298 3.53C50.498 3.18333 50.788 2.90667 51.168 2.7C51.548 2.48667 51.9946 2.38 52.508 2.38C53.0413 2.38 53.4913 2.47333 53.858 2.66C54.2313 2.84 54.5113 3.09 54.698 3.41C54.8846 3.73 54.978 4.09333 54.978 4.5C54.978 4.94667 54.8513 5.35 54.598 5.71C54.3513 6.07 53.9713 6.45667 53.458 6.87L52.038 8.31H54.888C54.9613 8.31 55.018 8.33333 55.058 8.38C55.1046 8.42 55.128 8.47667 55.128 8.55V9.26C55.128 9.32667 55.1046 9.38333 55.058 9.43C55.018 9.47667 54.9613 9.5 54.888 9.5H50.108ZM57.5294 6.02C57.0894 6.02 56.736 5.90333 56.4694 5.67C56.2094 5.43667 56.066 5.12 56.0394 4.72C56.0327 4.60667 56.0294 4.45667 56.0294 4.27C56.0294 4.07 56.0327 3.91 56.0394 3.79C56.066 3.37667 56.206 3.05 56.4594 2.81C56.7127 2.57 57.0694 2.45 57.5294 2.45C57.9894 2.45 58.346 2.57 58.5994 2.81C58.8594 3.05 58.9994 3.37667 59.0194 3.79C59.0327 4.05667 59.0394 4.23 59.0394 4.31C59.0394 4.38333 59.0327 4.52 59.0194 4.72C58.9994 5.12 58.856 5.43667 58.5894 5.67C58.3294 5.90333 57.976 6.02 57.5294 6.02ZM56.7094 9.5C56.6494 9.5 56.5994 9.48333 56.5594 9.45C56.5194 9.41 56.4994 9.36 56.4994 9.3C56.4994 9.26 56.5127 9.22333 56.5394 9.19L61.4694 2.69C61.5227 2.62333 61.5727 2.57667 61.6194 2.55C61.666 2.51667 61.7294 2.5 61.8094 2.5H62.3394C62.406 2.5 62.456 2.52 62.4894 2.56C62.5294 2.59333 62.5494 2.64 62.5494 2.7C62.5494 2.74 62.536 2.77667 62.5094 2.81L57.5794 9.31C57.526 9.37667 57.476 9.42667 57.4294 9.46C57.3827 9.48667 57.3194 9.5 57.2394 9.5H56.7094ZM57.5294 5.28C57.7227 5.28 57.866 5.22333 57.9594 5.11C58.0527 4.99 58.106 4.84333 58.1194 4.67C58.1327 4.44333 58.1394 4.30333 58.1394 4.25C58.1394 4.17667 58.1327 4.04 58.1194 3.84C58.1127 3.66667 58.0594 3.52333 57.9594 3.41C57.866 3.29 57.7227 3.23 57.5294 3.23C57.336 3.23 57.1927 3.29 57.0994 3.41C57.006 3.52333 56.956 3.66667 56.9494 3.84C56.9427 3.94 56.9394 4.07667 56.9394 4.25C56.9394 4.41667 56.9427 4.55667 56.9494 4.67C56.9627 4.84333 57.0127 4.99 57.0994 5.11C57.1927 5.22333 57.336 5.28 57.5294 5.28ZM61.5194 9.56C61.0794 9.56 60.726 9.44 60.4594 9.2C60.1994 8.95333 60.056 8.62667 60.0294 8.22C60.0227 8.10667 60.0194 7.95667 60.0194 7.77C60.0194 7.57667 60.0227 7.42 60.0294 7.3C60.056 6.88667 60.196 6.56 60.4494 6.32C60.7027 6.08 61.0594 5.96 61.5194 5.96C61.9794 5.96 62.336 6.08 62.5894 6.32C62.8494 6.56 62.9894 6.88667 63.0094 7.3C63.0227 7.56667 63.0294 7.73667 63.0294 7.81C63.0294 7.88333 63.0227 8.02 63.0094 8.22C62.9827 8.62667 62.836 8.95333 62.5694 9.2C62.3094 9.44 61.9594 9.56 61.5194 9.56ZM61.5194 8.78C61.7194 8.78 61.8627 8.72333 61.9494 8.61C62.0427 8.49 62.096 8.34667 62.1094 8.18C62.1227 7.95333 62.1294 7.81333 62.1294 7.76C62.1294 7.68667 62.1227 7.55 62.1094 7.35C62.1027 7.17667 62.0494 7.03 61.9494 6.91C61.856 6.79 61.7127 6.73 61.5194 6.73C61.326 6.73 61.1827 6.79 61.0894 6.91C60.996 7.02333 60.9427 7.17 60.9294 7.35C60.9227 7.45 60.9194 7.58667 60.9194 7.76C60.9194 7.92667 60.9227 8.06667 60.9294 8.18C60.9494 8.35333 61.0027 8.49667 61.0894 8.61C61.1827 8.72333 61.326 8.78 61.5194 8.78Z"
                fill="#FF5151"
              />
              <path
                d="M52.5 17.5L54.5 15.5M54.5 15.5L56.5 17.5M54.5 15.5V22.5"
                stroke="#FF5151"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <rect
                x="9"
                y="98.5"
                width="107"
                height="24"
                rx="4"
                fill="#FFEFE7"
              />
              <path
                d="M22.9258 109.924H25.3047V110.949H22.9258V113.645H21.8359V110.949H19.457V109.924H21.8359V107.434H22.9258V109.924ZM32.1074 114.5H26.5176V113.721L29.4707 110.439C29.9082 109.943 30.209 109.541 30.373 109.232C30.541 108.92 30.625 108.598 30.625 108.266C30.625 107.82 30.4902 107.455 30.2207 107.17C29.9512 106.885 29.5918 106.742 29.1426 106.742C28.6035 106.742 28.1836 106.896 27.8828 107.205C27.5859 107.51 27.4375 107.936 27.4375 108.482H26.3535C26.3535 107.697 26.6055 107.062 27.1094 106.578C27.6172 106.094 28.2949 105.852 29.1426 105.852C29.9355 105.852 30.5625 106.061 31.0234 106.479C31.4844 106.893 31.7148 107.445 31.7148 108.137C31.7148 108.977 31.1797 109.977 30.1094 111.137L27.8242 113.615H32.1074V114.5ZM33.1621 107.609C33.1621 107.098 33.3242 106.676 33.6484 106.344C33.9766 106.012 34.3965 105.846 34.9082 105.846C35.4277 105.846 35.8477 106.014 36.168 106.35C36.4922 106.682 36.6543 107.113 36.6543 107.645V108.061C36.6543 108.576 36.4902 108.998 36.1621 109.326C35.8379 109.65 35.4238 109.812 34.9199 109.812C34.4121 109.812 33.9922 109.65 33.6602 109.326C33.3281 108.998 33.1621 108.562 33.1621 108.02V107.609ZM33.9707 108.061C33.9707 108.365 34.0566 108.617 34.2285 108.816C34.4004 109.012 34.6309 109.109 34.9199 109.109C35.1973 109.109 35.4199 109.014 35.5879 108.822C35.7598 108.631 35.8457 108.369 35.8457 108.037V107.609C35.8457 107.305 35.7617 107.053 35.5938 106.854C35.4258 106.654 35.1973 106.555 34.9082 106.555C34.6191 106.555 34.3906 106.654 34.2227 106.854C34.0547 107.053 33.9707 107.312 33.9707 107.633V108.061ZM37.3164 112.408C37.3164 111.896 37.4785 111.477 37.8027 111.148C38.1309 110.816 38.5508 110.65 39.0625 110.65C39.5742 110.65 39.9941 110.814 40.3223 111.143C40.6504 111.471 40.8145 111.906 40.8145 112.449V112.865C40.8145 113.377 40.6504 113.799 40.3223 114.131C39.998 114.459 39.582 114.623 39.0742 114.623C38.5664 114.623 38.1465 114.461 37.8145 114.137C37.4824 113.809 37.3164 113.373 37.3164 112.83V112.408ZM38.125 112.865C38.125 113.174 38.2109 113.428 38.3828 113.627C38.5547 113.822 38.7852 113.92 39.0742 113.92C39.3555 113.92 39.5801 113.824 39.748 113.633C39.916 113.438 40 113.174 40 112.842V112.408C40 112.1 39.9141 111.848 39.7422 111.652C39.5742 111.457 39.3477 111.359 39.0625 111.359C38.7852 111.359 38.5586 111.457 38.3828 111.652C38.2109 111.844 38.125 112.104 38.125 112.432V112.865ZM35.166 113.855L34.5508 113.469L38.7168 106.801L39.332 107.188L35.166 113.855ZM46.4277 111.16V114.5H45.3027V105.969H48.4492C49.3828 105.969 50.1133 106.207 50.6406 106.684C51.1719 107.16 51.4375 107.791 51.4375 108.576C51.4375 109.404 51.1777 110.043 50.6582 110.492C50.1426 110.938 49.4023 111.16 48.4375 111.16H46.4277ZM46.4277 110.24H48.4492C49.0508 110.24 49.5117 110.1 49.832 109.818C50.1523 109.533 50.3125 109.123 50.3125 108.588C50.3125 108.08 50.1523 107.674 49.832 107.369C49.5117 107.064 49.0723 106.906 48.5137 106.895H46.4277V110.24ZM56.5469 114.5C56.4844 114.375 56.4336 114.152 56.3945 113.832C55.8906 114.355 55.2891 114.617 54.5898 114.617C53.9648 114.617 53.4512 114.441 53.0488 114.09C52.6504 113.734 52.4512 113.285 52.4512 112.742C52.4512 112.082 52.7012 111.57 53.2012 111.207C53.7051 110.84 54.4121 110.656 55.3223 110.656H56.377V110.158C56.377 109.779 56.2637 109.479 56.0371 109.256C55.8105 109.029 55.4766 108.916 55.0352 108.916C54.6484 108.916 54.3242 109.014 54.0625 109.209C53.8008 109.404 53.6699 109.641 53.6699 109.918H52.5801C52.5801 109.602 52.6914 109.297 52.9141 109.004C53.1406 108.707 53.4453 108.473 53.8281 108.301C54.2148 108.129 54.6387 108.043 55.0996 108.043C55.8301 108.043 56.4023 108.227 56.8164 108.594C57.2305 108.957 57.4453 109.459 57.4609 110.1V113.018C57.4609 113.6 57.5352 114.062 57.6836 114.406V114.5H56.5469ZM54.748 113.674C55.0879 113.674 55.4102 113.586 55.7148 113.41C56.0195 113.234 56.2402 113.006 56.377 112.725V111.424H55.5273C54.1992 111.424 53.5352 111.812 53.5352 112.59C53.5352 112.93 53.6484 113.195 53.875 113.387C54.1016 113.578 54.3926 113.674 54.748 113.674ZM62.8516 112.818C62.8516 112.525 62.7402 112.299 62.5176 112.139C62.2988 111.975 61.9141 111.834 61.3633 111.717C60.8164 111.6 60.3809 111.459 60.0566 111.295C59.7363 111.131 59.498 110.936 59.3418 110.709C59.1895 110.482 59.1133 110.213 59.1133 109.9C59.1133 109.381 59.332 108.941 59.7695 108.582C60.2109 108.223 60.7734 108.043 61.457 108.043C62.1758 108.043 62.7578 108.229 63.2031 108.6C63.6523 108.971 63.877 109.445 63.877 110.023H62.7871C62.7871 109.727 62.6602 109.471 62.4062 109.256C62.1562 109.041 61.8398 108.934 61.457 108.934C61.0625 108.934 60.7539 109.02 60.5312 109.191C60.3086 109.363 60.1973 109.588 60.1973 109.865C60.1973 110.127 60.3008 110.324 60.5078 110.457C60.7148 110.59 61.0879 110.717 61.627 110.838C62.1699 110.959 62.6094 111.104 62.9453 111.271C63.2812 111.439 63.5293 111.643 63.6895 111.881C63.8535 112.115 63.9355 112.402 63.9355 112.742C63.9355 113.309 63.709 113.764 63.2559 114.107C62.8027 114.447 62.2148 114.617 61.4922 114.617C60.9844 114.617 60.5352 114.527 60.1445 114.348C59.7539 114.168 59.4473 113.918 59.2246 113.598C59.0059 113.273 58.8965 112.924 58.8965 112.549H59.9805C60 112.912 60.1445 113.201 60.4141 113.416C60.6875 113.627 61.0469 113.732 61.4922 113.732C61.9023 113.732 62.2305 113.65 62.4766 113.486C62.7266 113.318 62.8516 113.096 62.8516 112.818ZM66.8184 106.625V108.16H68.002V108.998H66.8184V112.93C66.8184 113.184 66.8711 113.375 66.9766 113.504C67.082 113.629 67.2617 113.691 67.5156 113.691C67.6406 113.691 67.8125 113.668 68.0312 113.621V114.5C67.7461 114.578 67.4688 114.617 67.1992 114.617C66.7148 114.617 66.3496 114.471 66.1035 114.178C65.8574 113.885 65.7344 113.469 65.7344 112.93V108.998H64.5801V108.16H65.7344V106.625H66.8184ZM73.2695 108.16L73.2988 108.863C73.7637 108.316 74.3906 108.043 75.1797 108.043C76.0664 108.043 76.6699 108.383 76.9902 109.062C77.2012 108.758 77.4746 108.512 77.8105 108.324C78.1504 108.137 78.5508 108.043 79.0117 108.043C80.4023 108.043 81.1094 108.779 81.1328 110.252V114.5H80.0488V110.316C80.0488 109.863 79.9453 109.525 79.7383 109.303C79.5312 109.076 79.1836 108.963 78.6953 108.963C78.293 108.963 77.959 109.084 77.6934 109.326C77.4277 109.564 77.2734 109.887 77.2305 110.293V114.5H76.1406V110.346C76.1406 109.424 75.6895 108.963 74.7871 108.963C74.0762 108.963 73.5898 109.266 73.3281 109.871V114.5H72.2441V108.16H73.2695ZM82.4863 111.271C82.4863 110.65 82.6074 110.092 82.8496 109.596C83.0957 109.1 83.4355 108.717 83.8691 108.447C84.3066 108.178 84.8047 108.043 85.3633 108.043C86.2266 108.043 86.9238 108.342 87.4551 108.939C87.9902 109.537 88.2578 110.332 88.2578 111.324V111.4C88.2578 112.018 88.1387 112.572 87.9004 113.064C87.666 113.553 87.3281 113.934 86.8867 114.207C86.4492 114.48 85.9453 114.617 85.375 114.617C84.5156 114.617 83.8184 114.318 83.2832 113.721C82.752 113.123 82.4863 112.332 82.4863 111.348V111.271ZM83.5762 111.4C83.5762 112.104 83.7383 112.668 84.0625 113.094C84.3906 113.52 84.8281 113.732 85.375 113.732C85.9258 113.732 86.3633 113.518 86.6875 113.088C87.0117 112.654 87.1738 112.049 87.1738 111.271C87.1738 110.576 87.0078 110.014 86.6758 109.584C86.3477 109.15 85.9102 108.934 85.3633 108.934C84.8281 108.934 84.3965 109.146 84.0684 109.572C83.7402 109.998 83.5762 110.607 83.5762 111.4ZM90.6426 108.16L90.6777 108.957C91.1621 108.348 91.7949 108.043 92.5762 108.043C93.916 108.043 94.5918 108.799 94.6035 110.311V114.5H93.5195V110.305C93.5156 109.848 93.4102 109.51 93.2031 109.291C93 109.072 92.6816 108.963 92.248 108.963C91.8965 108.963 91.5879 109.057 91.3223 109.244C91.0566 109.432 90.8496 109.678 90.7012 109.982V114.5H89.6172V108.16H90.6426ZM97.709 106.625V108.16H98.8926V108.998H97.709V112.93C97.709 113.184 97.7617 113.375 97.8672 113.504C97.9727 113.629 98.1523 113.691 98.4062 113.691C98.5312 113.691 98.7031 113.668 98.9219 113.621V114.5C98.6367 114.578 98.3594 114.617 98.0898 114.617C97.6055 114.617 97.2402 114.471 96.9941 114.178C96.748 113.885 96.625 113.469 96.625 112.93V108.998H95.4707V108.16H96.625V106.625H97.709ZM101.248 108.928C101.729 108.338 102.354 108.043 103.123 108.043C104.463 108.043 105.139 108.799 105.15 110.311V114.5H104.066V110.305C104.062 109.848 103.957 109.51 103.75 109.291C103.547 109.072 103.229 108.963 102.795 108.963C102.443 108.963 102.135 109.057 101.869 109.244C101.604 109.432 101.396 109.678 101.248 109.982V114.5H100.164V105.5H101.248V108.928Z"
                fill="#303030"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_452_275"
                  x1="37"
                  y1="-10.5"
                  x2="61.5"
                  y2="52"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FF5151" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        <div className="flex gap-[40px] p-[20px]   border-[1px] rounded-lg">
          <div className="flex flex-col gap-[15px] px-[20px]  ">
            <p className="font-medium">Talent Request</p>
            <p className="font-medium text-4xl">216</p>
            <div className="flex flex-col gap-1">
              <p className="text-xs text-graytext">120 Men</p>
              <p className="text-xs text-graytext">96 Women</p>
            </div>
          </div>
          <div className="">
            <svg
              width="117"
              height="123"
              viewBox="0 0 117 123"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 51.5C1 51.5 16.2821 33.2086 30 30.5C40.431 28.4403 46.4876 35.5924 57 34C73.2778 31.5342 76.3958 13.9209 92.5 10.5C101.477 8.59307 115.5 10.5 115.5 10.5"
                stroke="#FF5151"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M30.5 30.3475C16.7821 33.0562 1.5 51.3475 1.5 51.3475V78.5H116V10.3475C116 10.3475 101.977 8.4406 93 10.3475C76.8958 13.7685 73.7778 31.3817 57.5 33.8475C46.9875 35.4399 40.931 28.2878 30.5 30.3475Z"
                fill="url(#paint0_linear_452_275)"
              />
              <path
                d="M46.28 9.17C46.2133 9.17 46.1567 9.14667 46.11 9.1C46.0633 9.05333 46.04 8.99667 46.04 8.93V6.98H44.12C44.0533 6.98 43.9967 6.95667 43.95 6.91C43.9033 6.86333 43.88 6.80333 43.88 6.73V6.21C43.88 6.13667 43.9033 6.08 43.95 6.04C43.9967 5.99333 44.0533 5.97 44.12 5.97H46.04V4.07C46.04 3.99667 46.0633 3.94 46.11 3.9C46.1567 3.85333 46.2133 3.83 46.28 3.83H46.86C46.9333 3.83 46.99 3.85333 47.03 3.9C47.0767 3.94 47.1 3.99667 47.1 4.07V5.97H49.02C49.0933 5.97 49.15 5.99333 49.19 6.04C49.2367 6.08 49.26 6.13667 49.26 6.21V6.73C49.26 6.80333 49.2367 6.86333 49.19 6.91C49.1433 6.95667 49.0867 6.98 49.02 6.98H47.1V8.93C47.1 8.99667 47.0767 9.05333 47.03 9.1C46.99 9.14667 46.9333 9.17 46.86 9.17H46.28ZM50.108 9.5C50.0413 9.5 49.9846 9.47667 49.938 9.43C49.8913 9.38333 49.868 9.32667 49.868 9.26V8.75C49.868 8.57 49.9513 8.41333 50.118 8.28L51.698 6.71C52.3846 6.17 52.8613 5.75 53.128 5.45C53.4013 5.14333 53.538 4.84333 53.538 4.55C53.538 4.23667 53.4513 3.99 53.278 3.81C53.1113 3.63 52.858 3.54 52.518 3.54C52.1846 3.54 51.9213 3.64 51.728 3.84C51.5346 4.03333 51.4146 4.28667 51.368 4.6C51.348 4.68 51.3113 4.74 51.258 4.78C51.2046 4.81333 51.1446 4.83 51.078 4.83H50.188C50.128 4.83 50.078 4.81 50.038 4.77C49.998 4.73 49.978 4.68333 49.978 4.63C49.9913 4.23667 50.098 3.87 50.298 3.53C50.498 3.18333 50.788 2.90667 51.168 2.7C51.548 2.48667 51.9946 2.38 52.508 2.38C53.0413 2.38 53.4913 2.47333 53.858 2.66C54.2313 2.84 54.5113 3.09 54.698 3.41C54.8846 3.73 54.978 4.09333 54.978 4.5C54.978 4.94667 54.8513 5.35 54.598 5.71C54.3513 6.07 53.9713 6.45667 53.458 6.87L52.038 8.31H54.888C54.9613 8.31 55.018 8.33333 55.058 8.38C55.1046 8.42 55.128 8.47667 55.128 8.55V9.26C55.128 9.32667 55.1046 9.38333 55.058 9.43C55.018 9.47667 54.9613 9.5 54.888 9.5H50.108ZM57.5294 6.02C57.0894 6.02 56.736 5.90333 56.4694 5.67C56.2094 5.43667 56.066 5.12 56.0394 4.72C56.0327 4.60667 56.0294 4.45667 56.0294 4.27C56.0294 4.07 56.0327 3.91 56.0394 3.79C56.066 3.37667 56.206 3.05 56.4594 2.81C56.7127 2.57 57.0694 2.45 57.5294 2.45C57.9894 2.45 58.346 2.57 58.5994 2.81C58.8594 3.05 58.9994 3.37667 59.0194 3.79C59.0327 4.05667 59.0394 4.23 59.0394 4.31C59.0394 4.38333 59.0327 4.52 59.0194 4.72C58.9994 5.12 58.856 5.43667 58.5894 5.67C58.3294 5.90333 57.976 6.02 57.5294 6.02ZM56.7094 9.5C56.6494 9.5 56.5994 9.48333 56.5594 9.45C56.5194 9.41 56.4994 9.36 56.4994 9.3C56.4994 9.26 56.5127 9.22333 56.5394 9.19L61.4694 2.69C61.5227 2.62333 61.5727 2.57667 61.6194 2.55C61.666 2.51667 61.7294 2.5 61.8094 2.5H62.3394C62.406 2.5 62.456 2.52 62.4894 2.56C62.5294 2.59333 62.5494 2.64 62.5494 2.7C62.5494 2.74 62.536 2.77667 62.5094 2.81L57.5794 9.31C57.526 9.37667 57.476 9.42667 57.4294 9.46C57.3827 9.48667 57.3194 9.5 57.2394 9.5H56.7094ZM57.5294 5.28C57.7227 5.28 57.866 5.22333 57.9594 5.11C58.0527 4.99 58.106 4.84333 58.1194 4.67C58.1327 4.44333 58.1394 4.30333 58.1394 4.25C58.1394 4.17667 58.1327 4.04 58.1194 3.84C58.1127 3.66667 58.0594 3.52333 57.9594 3.41C57.866 3.29 57.7227 3.23 57.5294 3.23C57.336 3.23 57.1927 3.29 57.0994 3.41C57.006 3.52333 56.956 3.66667 56.9494 3.84C56.9427 3.94 56.9394 4.07667 56.9394 4.25C56.9394 4.41667 56.9427 4.55667 56.9494 4.67C56.9627 4.84333 57.0127 4.99 57.0994 5.11C57.1927 5.22333 57.336 5.28 57.5294 5.28ZM61.5194 9.56C61.0794 9.56 60.726 9.44 60.4594 9.2C60.1994 8.95333 60.056 8.62667 60.0294 8.22C60.0227 8.10667 60.0194 7.95667 60.0194 7.77C60.0194 7.57667 60.0227 7.42 60.0294 7.3C60.056 6.88667 60.196 6.56 60.4494 6.32C60.7027 6.08 61.0594 5.96 61.5194 5.96C61.9794 5.96 62.336 6.08 62.5894 6.32C62.8494 6.56 62.9894 6.88667 63.0094 7.3C63.0227 7.56667 63.0294 7.73667 63.0294 7.81C63.0294 7.88333 63.0227 8.02 63.0094 8.22C62.9827 8.62667 62.836 8.95333 62.5694 9.2C62.3094 9.44 61.9594 9.56 61.5194 9.56ZM61.5194 8.78C61.7194 8.78 61.8627 8.72333 61.9494 8.61C62.0427 8.49 62.096 8.34667 62.1094 8.18C62.1227 7.95333 62.1294 7.81333 62.1294 7.76C62.1294 7.68667 62.1227 7.55 62.1094 7.35C62.1027 7.17667 62.0494 7.03 61.9494 6.91C61.856 6.79 61.7127 6.73 61.5194 6.73C61.326 6.73 61.1827 6.79 61.0894 6.91C60.996 7.02333 60.9427 7.17 60.9294 7.35C60.9227 7.45 60.9194 7.58667 60.9194 7.76C60.9194 7.92667 60.9227 8.06667 60.9294 8.18C60.9494 8.35333 61.0027 8.49667 61.0894 8.61C61.1827 8.72333 61.326 8.78 61.5194 8.78Z"
                fill="#FF5151"
              />
              <path
                d="M52.5 17.5L54.5 15.5M54.5 15.5L56.5 17.5M54.5 15.5V22.5"
                stroke="#FF5151"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <rect
                x="9"
                y="98.5"
                width="107"
                height="24"
                rx="4"
                fill="#FFEFE7"
              />
              <path
                d="M22.9258 109.924H25.3047V110.949H22.9258V113.645H21.8359V110.949H19.457V109.924H21.8359V107.434H22.9258V109.924ZM32.1074 114.5H26.5176V113.721L29.4707 110.439C29.9082 109.943 30.209 109.541 30.373 109.232C30.541 108.92 30.625 108.598 30.625 108.266C30.625 107.82 30.4902 107.455 30.2207 107.17C29.9512 106.885 29.5918 106.742 29.1426 106.742C28.6035 106.742 28.1836 106.896 27.8828 107.205C27.5859 107.51 27.4375 107.936 27.4375 108.482H26.3535C26.3535 107.697 26.6055 107.062 27.1094 106.578C27.6172 106.094 28.2949 105.852 29.1426 105.852C29.9355 105.852 30.5625 106.061 31.0234 106.479C31.4844 106.893 31.7148 107.445 31.7148 108.137C31.7148 108.977 31.1797 109.977 30.1094 111.137L27.8242 113.615H32.1074V114.5ZM33.1621 107.609C33.1621 107.098 33.3242 106.676 33.6484 106.344C33.9766 106.012 34.3965 105.846 34.9082 105.846C35.4277 105.846 35.8477 106.014 36.168 106.35C36.4922 106.682 36.6543 107.113 36.6543 107.645V108.061C36.6543 108.576 36.4902 108.998 36.1621 109.326C35.8379 109.65 35.4238 109.812 34.9199 109.812C34.4121 109.812 33.9922 109.65 33.6602 109.326C33.3281 108.998 33.1621 108.562 33.1621 108.02V107.609ZM33.9707 108.061C33.9707 108.365 34.0566 108.617 34.2285 108.816C34.4004 109.012 34.6309 109.109 34.9199 109.109C35.1973 109.109 35.4199 109.014 35.5879 108.822C35.7598 108.631 35.8457 108.369 35.8457 108.037V107.609C35.8457 107.305 35.7617 107.053 35.5938 106.854C35.4258 106.654 35.1973 106.555 34.9082 106.555C34.6191 106.555 34.3906 106.654 34.2227 106.854C34.0547 107.053 33.9707 107.312 33.9707 107.633V108.061ZM37.3164 112.408C37.3164 111.896 37.4785 111.477 37.8027 111.148C38.1309 110.816 38.5508 110.65 39.0625 110.65C39.5742 110.65 39.9941 110.814 40.3223 111.143C40.6504 111.471 40.8145 111.906 40.8145 112.449V112.865C40.8145 113.377 40.6504 113.799 40.3223 114.131C39.998 114.459 39.582 114.623 39.0742 114.623C38.5664 114.623 38.1465 114.461 37.8145 114.137C37.4824 113.809 37.3164 113.373 37.3164 112.83V112.408ZM38.125 112.865C38.125 113.174 38.2109 113.428 38.3828 113.627C38.5547 113.822 38.7852 113.92 39.0742 113.92C39.3555 113.92 39.5801 113.824 39.748 113.633C39.916 113.438 40 113.174 40 112.842V112.408C40 112.1 39.9141 111.848 39.7422 111.652C39.5742 111.457 39.3477 111.359 39.0625 111.359C38.7852 111.359 38.5586 111.457 38.3828 111.652C38.2109 111.844 38.125 112.104 38.125 112.432V112.865ZM35.166 113.855L34.5508 113.469L38.7168 106.801L39.332 107.188L35.166 113.855ZM46.4277 111.16V114.5H45.3027V105.969H48.4492C49.3828 105.969 50.1133 106.207 50.6406 106.684C51.1719 107.16 51.4375 107.791 51.4375 108.576C51.4375 109.404 51.1777 110.043 50.6582 110.492C50.1426 110.938 49.4023 111.16 48.4375 111.16H46.4277ZM46.4277 110.24H48.4492C49.0508 110.24 49.5117 110.1 49.832 109.818C50.1523 109.533 50.3125 109.123 50.3125 108.588C50.3125 108.08 50.1523 107.674 49.832 107.369C49.5117 107.064 49.0723 106.906 48.5137 106.895H46.4277V110.24ZM56.5469 114.5C56.4844 114.375 56.4336 114.152 56.3945 113.832C55.8906 114.355 55.2891 114.617 54.5898 114.617C53.9648 114.617 53.4512 114.441 53.0488 114.09C52.6504 113.734 52.4512 113.285 52.4512 112.742C52.4512 112.082 52.7012 111.57 53.2012 111.207C53.7051 110.84 54.4121 110.656 55.3223 110.656H56.377V110.158C56.377 109.779 56.2637 109.479 56.0371 109.256C55.8105 109.029 55.4766 108.916 55.0352 108.916C54.6484 108.916 54.3242 109.014 54.0625 109.209C53.8008 109.404 53.6699 109.641 53.6699 109.918H52.5801C52.5801 109.602 52.6914 109.297 52.9141 109.004C53.1406 108.707 53.4453 108.473 53.8281 108.301C54.2148 108.129 54.6387 108.043 55.0996 108.043C55.8301 108.043 56.4023 108.227 56.8164 108.594C57.2305 108.957 57.4453 109.459 57.4609 110.1V113.018C57.4609 113.6 57.5352 114.062 57.6836 114.406V114.5H56.5469ZM54.748 113.674C55.0879 113.674 55.4102 113.586 55.7148 113.41C56.0195 113.234 56.2402 113.006 56.377 112.725V111.424H55.5273C54.1992 111.424 53.5352 111.812 53.5352 112.59C53.5352 112.93 53.6484 113.195 53.875 113.387C54.1016 113.578 54.3926 113.674 54.748 113.674ZM62.8516 112.818C62.8516 112.525 62.7402 112.299 62.5176 112.139C62.2988 111.975 61.9141 111.834 61.3633 111.717C60.8164 111.6 60.3809 111.459 60.0566 111.295C59.7363 111.131 59.498 110.936 59.3418 110.709C59.1895 110.482 59.1133 110.213 59.1133 109.9C59.1133 109.381 59.332 108.941 59.7695 108.582C60.2109 108.223 60.7734 108.043 61.457 108.043C62.1758 108.043 62.7578 108.229 63.2031 108.6C63.6523 108.971 63.877 109.445 63.877 110.023H62.7871C62.7871 109.727 62.6602 109.471 62.4062 109.256C62.1562 109.041 61.8398 108.934 61.457 108.934C61.0625 108.934 60.7539 109.02 60.5312 109.191C60.3086 109.363 60.1973 109.588 60.1973 109.865C60.1973 110.127 60.3008 110.324 60.5078 110.457C60.7148 110.59 61.0879 110.717 61.627 110.838C62.1699 110.959 62.6094 111.104 62.9453 111.271C63.2812 111.439 63.5293 111.643 63.6895 111.881C63.8535 112.115 63.9355 112.402 63.9355 112.742C63.9355 113.309 63.709 113.764 63.2559 114.107C62.8027 114.447 62.2148 114.617 61.4922 114.617C60.9844 114.617 60.5352 114.527 60.1445 114.348C59.7539 114.168 59.4473 113.918 59.2246 113.598C59.0059 113.273 58.8965 112.924 58.8965 112.549H59.9805C60 112.912 60.1445 113.201 60.4141 113.416C60.6875 113.627 61.0469 113.732 61.4922 113.732C61.9023 113.732 62.2305 113.65 62.4766 113.486C62.7266 113.318 62.8516 113.096 62.8516 112.818ZM66.8184 106.625V108.16H68.002V108.998H66.8184V112.93C66.8184 113.184 66.8711 113.375 66.9766 113.504C67.082 113.629 67.2617 113.691 67.5156 113.691C67.6406 113.691 67.8125 113.668 68.0312 113.621V114.5C67.7461 114.578 67.4688 114.617 67.1992 114.617C66.7148 114.617 66.3496 114.471 66.1035 114.178C65.8574 113.885 65.7344 113.469 65.7344 112.93V108.998H64.5801V108.16H65.7344V106.625H66.8184ZM73.2695 108.16L73.2988 108.863C73.7637 108.316 74.3906 108.043 75.1797 108.043C76.0664 108.043 76.6699 108.383 76.9902 109.062C77.2012 108.758 77.4746 108.512 77.8105 108.324C78.1504 108.137 78.5508 108.043 79.0117 108.043C80.4023 108.043 81.1094 108.779 81.1328 110.252V114.5H80.0488V110.316C80.0488 109.863 79.9453 109.525 79.7383 109.303C79.5312 109.076 79.1836 108.963 78.6953 108.963C78.293 108.963 77.959 109.084 77.6934 109.326C77.4277 109.564 77.2734 109.887 77.2305 110.293V114.5H76.1406V110.346C76.1406 109.424 75.6895 108.963 74.7871 108.963C74.0762 108.963 73.5898 109.266 73.3281 109.871V114.5H72.2441V108.16H73.2695ZM82.4863 111.271C82.4863 110.65 82.6074 110.092 82.8496 109.596C83.0957 109.1 83.4355 108.717 83.8691 108.447C84.3066 108.178 84.8047 108.043 85.3633 108.043C86.2266 108.043 86.9238 108.342 87.4551 108.939C87.9902 109.537 88.2578 110.332 88.2578 111.324V111.4C88.2578 112.018 88.1387 112.572 87.9004 113.064C87.666 113.553 87.3281 113.934 86.8867 114.207C86.4492 114.48 85.9453 114.617 85.375 114.617C84.5156 114.617 83.8184 114.318 83.2832 113.721C82.752 113.123 82.4863 112.332 82.4863 111.348V111.271ZM83.5762 111.4C83.5762 112.104 83.7383 112.668 84.0625 113.094C84.3906 113.52 84.8281 113.732 85.375 113.732C85.9258 113.732 86.3633 113.518 86.6875 113.088C87.0117 112.654 87.1738 112.049 87.1738 111.271C87.1738 110.576 87.0078 110.014 86.6758 109.584C86.3477 109.15 85.9102 108.934 85.3633 108.934C84.8281 108.934 84.3965 109.146 84.0684 109.572C83.7402 109.998 83.5762 110.607 83.5762 111.4ZM90.6426 108.16L90.6777 108.957C91.1621 108.348 91.7949 108.043 92.5762 108.043C93.916 108.043 94.5918 108.799 94.6035 110.311V114.5H93.5195V110.305C93.5156 109.848 93.4102 109.51 93.2031 109.291C93 109.072 92.6816 108.963 92.248 108.963C91.8965 108.963 91.5879 109.057 91.3223 109.244C91.0566 109.432 90.8496 109.678 90.7012 109.982V114.5H89.6172V108.16H90.6426ZM97.709 106.625V108.16H98.8926V108.998H97.709V112.93C97.709 113.184 97.7617 113.375 97.8672 113.504C97.9727 113.629 98.1523 113.691 98.4062 113.691C98.5312 113.691 98.7031 113.668 98.9219 113.621V114.5C98.6367 114.578 98.3594 114.617 98.0898 114.617C97.6055 114.617 97.2402 114.471 96.9941 114.178C96.748 113.885 96.625 113.469 96.625 112.93V108.998H95.4707V108.16H96.625V106.625H97.709ZM101.248 108.928C101.729 108.338 102.354 108.043 103.123 108.043C104.463 108.043 105.139 108.799 105.15 110.311V114.5H104.066V110.305C104.062 109.848 103.957 109.51 103.75 109.291C103.547 109.072 103.229 108.963 102.795 108.963C102.443 108.963 102.135 109.057 101.869 109.244C101.604 109.432 101.396 109.678 101.248 109.982V114.5H100.164V105.5H101.248V108.928Z"
                fill="#303030"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_452_275"
                  x1="37"
                  y1="-10.5"
                  x2="61.5"
                  y2="52"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FF5151" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
export default Dashbroard;
