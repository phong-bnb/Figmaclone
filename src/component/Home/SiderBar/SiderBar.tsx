function SiderBar() {
  return (
    <div className="md:flex justify-between md:pr-[50px] gap-10">
      <div className="md:flex md:h-[90px]  justify-between items-center relative">
        <input
          type="text"
          name="price"
          id="price"
          className="relative block w-full rounded-md border-0 py-1.5 pl-7 pr-20
     text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
     focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Search"
        />
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clipPath="url(#clip0_244_878)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.9579 7.40978C17.2465 9.80627 17.159 13.6042 14.7625 15.8928C12.366 18.1814 8.56804 18.0939 6.27947 15.6974C3.99091 13.3009 4.07839 9.50295 6.47488 7.21438C8.87136 4.92582 12.6693 5.0133 14.9579 7.40978ZM16.8242 16.6038C19.3384 13.5225 19.2218 8.9789 16.4043 6.02851C13.3529 2.8332 8.28892 2.71655 5.09361 5.76797C1.89829 8.8194 1.78165 13.8834 4.83307 17.0787C7.6506 20.0291 12.184 20.3547 15.3778 17.9851L17.4925 20.1995C17.8739 20.5989 18.5069 20.6135 18.9063 20.232C19.3057 19.8506 19.3203 19.2176 18.9389 18.8182L16.8242 16.6038Z"
                fill="#B2B2B2"
              />
            </g>
            <defs>
              <clipPath id="clip0_244_878">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      <div className="flex w-[311px] md:h-[90px] gap-6 md:pl-12 items-center">
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.5015 22C13.8066 22 14.8745 21.0769 14.8745 19.9487H10.1284C10.1284 20.4928 10.3784 21.0145 10.8235 21.3992C11.2685 21.7839 11.8721 22 12.5015 22ZM19.6205 15.8462V10.7179C19.6205 7.56923 17.6747 4.93333 14.2812 4.2359V3.53846C14.2812 2.68718 13.4863 2 12.5015 2C11.5167 2 10.7217 2.68718 10.7217 3.53846V4.2359C7.3164 4.93333 5.38238 7.55897 5.38238 10.7179V15.8462L3.85177 17.1692C3.10427 17.8154 3.62634 18.9231 4.68233 18.9231H20.3087C21.3647 18.9231 21.8987 17.8154 21.1512 17.1692L19.6205 15.8462Z"
            fill="#B2B2B2"
          />
          <circle cx="17.5" cy="7" r="4.5" fill="#FF5151" stroke="white" />
        </svg>
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.5 5.35403C3.5 4.72971 3.73705 4.13095 4.15901 3.68948C4.58097 3.24801 5.15326 3 5.75 3H19.25C19.8467 3 20.419 3.24801 20.841 3.68948C21.2629 4.13095 21.5 4.72971 21.5 5.35403V14.7702C21.5 15.3945 21.2629 15.9933 20.841 16.4347C20.419 16.8762 19.8467 17.1242 19.25 17.1242H8.46575C8.16741 17.1243 7.8813 17.2483 7.67037 17.4691L4.46075 20.8271C4.38215 20.9095 4.28193 20.9657 4.17279 20.9886C4.06365 21.0114 3.95049 20.9999 3.84762 20.9554C3.74476 20.9109 3.65683 20.8355 3.59495 20.7387C3.53307 20.6419 3.50002 20.5281 3.5 20.4116V5.35403ZM9.125 10.0621C9.125 9.74994 9.00647 9.45056 8.7955 9.22983C8.58452 9.00909 8.29837 8.88509 8 8.88509C7.70163 8.88509 7.41548 9.00909 7.2045 9.22983C6.99353 9.45056 6.875 9.74994 6.875 10.0621C6.875 10.3743 6.99353 10.6736 7.2045 10.8944C7.41548 11.1151 7.70163 11.2391 8 11.2391C8.29837 11.2391 8.58452 11.1151 8.7955 10.8944C9.00647 10.6736 9.125 10.3743 9.125 10.0621ZM13.625 10.0621C13.625 9.74994 13.5065 9.45056 13.2955 9.22983C13.0845 9.00909 12.7984 8.88509 12.5 8.88509C12.2016 8.88509 11.9155 9.00909 11.7045 9.22983C11.4935 9.45056 11.375 9.74994 11.375 10.0621C11.375 10.3743 11.4935 10.6736 11.7045 10.8944C11.9155 11.1151 12.2016 11.2391 12.5 11.2391C12.7984 11.2391 13.0845 11.1151 13.2955 10.8944C13.5065 10.6736 13.625 10.3743 13.625 10.0621ZM17 11.2391C17.2984 11.2391 17.5845 11.1151 17.7955 10.8944C18.0065 10.6736 18.125 10.3743 18.125 10.0621C18.125 9.74994 18.0065 9.45056 17.7955 9.22983C17.5845 9.00909 17.2984 8.88509 17 8.88509C16.7016 8.88509 16.4155 9.00909 16.2045 9.22983C15.9935 9.45056 15.875 9.74994 15.875 10.0621C15.875 10.3743 15.9935 10.6736 16.2045 10.8944C16.4155 11.1151 16.7016 11.2391 17 11.2391Z"
            fill="#B2B2B2"
          />
        </svg>
        <div className="flex">
          <div className="bg-current w-[25px] rounded-full"></div>
          <svg
            width="140"
            height="24"
            viewBox="0 0 140 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_244_894)">
              <path
                d="M8.404 15.728H3.748L2.948 18H1.044L5.028 6.864H7.14L11.124 18H9.204L8.404 15.728ZM7.892 14.24L6.084 9.072L4.26 14.24H7.892ZM12.2483 13.552C12.2483 12.6667 12.4296 11.8827 12.7923 11.2C13.1656 10.5173 13.6669 9.98933 14.2963 9.616C14.9363 9.232 15.6456 9.04 16.4243 9.04C17.0003 9.04 17.5656 9.168 18.1203 9.424C18.6856 9.66933 19.1336 10 19.4643 10.416V6.16H21.3043V18H19.4643V16.672C19.1656 17.0987 18.7496 17.4507 18.2163 17.728C17.6936 18.0053 17.0909 18.144 16.4083 18.144C15.6403 18.144 14.9363 17.952 14.2963 17.568C13.6669 17.1733 13.1656 16.6293 12.7923 15.936C12.4296 15.232 12.2483 14.4373 12.2483 13.552ZM19.4643 13.584C19.4643 12.976 19.3363 12.448 19.0803 12C18.8349 11.552 18.5096 11.2107 18.1043 10.976C17.6989 10.7413 17.2616 10.624 16.7923 10.624C16.3229 10.624 15.8856 10.7413 15.4803 10.976C15.0749 11.2 14.7443 11.536 14.4883 11.984C14.2429 12.4213 14.1203 12.944 14.1203 13.552C14.1203 14.16 14.2429 14.6933 14.4883 15.152C14.7443 15.6107 15.0749 15.9627 15.4803 16.208C15.8963 16.4427 16.3336 16.56 16.7923 16.56C17.2616 16.56 17.6989 16.4427 18.1043 16.208C18.5096 15.9733 18.8349 15.632 19.0803 15.184C19.3363 14.7253 19.4643 14.192 19.4643 13.584ZM34.372 9.04C35.0653 9.04 35.684 9.184 36.228 9.472C36.7827 9.76 37.2147 10.1867 37.524 10.752C37.844 11.3173 38.004 12 38.004 12.8V18H36.196V13.072C36.196 12.2827 35.9987 11.68 35.604 11.264C35.2093 10.8373 34.6707 10.624 33.988 10.624C33.3053 10.624 32.7613 10.8373 32.356 11.264C31.9613 11.68 31.764 12.2827 31.764 13.072V18H29.956V13.072C29.956 12.2827 29.7587 11.68 29.364 11.264C28.9693 10.8373 28.4307 10.624 27.748 10.624C27.0653 10.624 26.5213 10.8373 26.116 11.264C25.7213 11.68 25.524 12.2827 25.524 13.072V18H23.7V9.184H25.524V10.192C25.8227 9.82933 26.2013 9.54667 26.66 9.344C27.1187 9.14133 27.6093 9.04 28.132 9.04C28.836 9.04 29.4653 9.18933 30.02 9.488C30.5747 9.78667 31.0013 10.2187 31.3 10.784C31.5667 10.2507 31.9827 9.82933 32.548 9.52C33.1133 9.2 33.7213 9.04 34.372 9.04ZM41.253 8.016C40.9223 8.016 40.645 7.904 40.421 7.68C40.197 7.456 40.085 7.17867 40.085 6.848C40.085 6.51733 40.197 6.24 40.421 6.016C40.645 5.792 40.9223 5.68 41.253 5.68C41.573 5.68 41.845 5.792 42.069 6.016C42.293 6.24 42.405 6.51733 42.405 6.848C42.405 7.17867 42.293 7.456 42.069 7.68C41.845 7.904 41.573 8.016 41.253 8.016ZM42.149 9.184V18H40.325V9.184H42.149ZM46.3678 10.464C46.6344 10.016 46.9864 9.66933 47.4238 9.424C47.8718 9.168 48.3998 9.04 49.0078 9.04V10.928H48.5438C47.8291 10.928 47.2851 11.1093 46.9118 11.472C46.5491 11.8347 46.3678 12.464 46.3678 13.36V18H44.5438V9.184H46.3678V10.464ZM52.5084 10.464C52.775 10.016 53.127 9.66933 53.5644 9.424C54.0124 9.168 54.5404 9.04 55.1484 9.04V10.928H54.6844C53.9697 10.928 53.4257 11.1093 53.0524 11.472C52.6897 11.8347 52.5084 12.464 52.5084 13.36V18H50.6844V9.184H52.5084V10.464ZM56.217 13.552C56.217 12.6667 56.3983 11.8827 56.761 11.2C57.1343 10.5173 57.6357 9.98933 58.265 9.616C58.905 9.232 59.609 9.04 60.377 9.04C61.0703 9.04 61.673 9.17867 62.185 9.456C62.7077 9.72267 63.1237 10.0587 63.433 10.464V9.184H65.273V18H63.433V16.688C63.1237 17.104 62.7023 17.4507 62.169 17.728C61.6357 18.0053 61.0277 18.144 60.345 18.144C59.5877 18.144 58.8943 17.952 58.265 17.568C57.6357 17.1733 57.1343 16.6293 56.761 15.936C56.3983 15.232 56.217 14.4373 56.217 13.552ZM63.433 13.584C63.433 12.976 63.305 12.448 63.049 12C62.8037 11.552 62.4783 11.2107 62.073 10.976C61.6677 10.7413 61.2303 10.624 60.761 10.624C60.2917 10.624 59.8543 10.7413 59.449 10.976C59.0437 11.2 58.713 11.536 58.457 11.984C58.2117 12.4213 58.089 12.944 58.089 13.552C58.089 14.16 58.2117 14.6933 58.457 15.152C58.713 15.6107 59.0437 15.9627 59.449 16.208C59.865 16.4427 60.3023 16.56 60.761 16.56C61.2303 16.56 61.6677 16.4427 62.073 16.208C62.4783 15.9733 62.8037 15.632 63.049 15.184C63.305 14.7253 63.433 14.192 63.433 13.584ZM77.889 6.88V14.896C77.889 15.888 77.585 16.672 76.977 17.248C76.3797 17.824 75.5903 18.112 74.609 18.112C73.6277 18.112 72.833 17.824 72.225 17.248C71.6277 16.672 71.329 15.888 71.329 14.896H73.169C73.1797 15.3867 73.3023 15.776 73.537 16.064C73.7823 16.352 74.1397 16.496 74.609 16.496C75.0783 16.496 75.4357 16.352 75.681 16.064C75.9263 15.7653 76.049 15.376 76.049 14.896V6.88H77.889ZM84.6803 18.144C83.8483 18.144 83.0963 17.9573 82.4243 17.584C81.7523 17.2 81.2243 16.6667 80.8403 15.984C80.4563 15.2907 80.2643 14.4907 80.2643 13.584C80.2643 12.688 80.4616 11.8933 80.8563 11.2C81.2509 10.5067 81.7896 9.97333 82.4723 9.6C83.1549 9.22667 83.9176 9.04 84.7603 9.04C85.6029 9.04 86.3656 9.22667 87.0483 9.6C87.7309 9.97333 88.2696 10.5067 88.6643 11.2C89.0589 11.8933 89.2563 12.688 89.2563 13.584C89.2563 14.48 89.0536 15.2747 88.6483 15.968C88.2429 16.6613 87.6883 17.2 86.9843 17.584C86.2909 17.9573 85.5229 18.144 84.6803 18.144ZM84.6803 16.56C85.1496 16.56 85.5869 16.448 85.9923 16.224C86.4083 16 86.7443 15.664 87.0003 15.216C87.2563 14.768 87.3843 14.224 87.3843 13.584C87.3843 12.944 87.2616 12.4053 87.0163 11.968C86.7709 11.52 86.4456 11.184 86.0403 10.96C85.6349 10.736 85.1976 10.624 84.7283 10.624C84.2589 10.624 83.8216 10.736 83.4163 10.96C83.0216 11.184 82.7069 11.52 82.4723 11.968C82.2376 12.4053 82.1203 12.944 82.1203 13.584C82.1203 14.5333 82.3603 15.2693 82.8403 15.792C83.3309 16.304 83.9443 16.56 84.6803 16.56ZM95.6194 9.04C96.2914 9.04 96.8887 9.184 97.4114 9.472C97.9447 9.76 98.3607 10.1867 98.6594 10.752C98.9687 11.3173 99.1234 12 99.1234 12.8V18H97.3154V13.072C97.3154 12.2827 97.118 11.68 96.7234 11.264C96.3287 10.8373 95.79 10.624 95.1074 10.624C94.4247 10.624 93.8807 10.8373 93.4754 11.264C93.0807 11.68 92.8834 12.2827 92.8834 13.072V18H91.0594V6.16H92.8834V10.208C93.1927 9.83467 93.582 9.54667 94.0514 9.344C94.5314 9.14133 95.054 9.04 95.6194 9.04ZM105.898 9.04C106.591 9.04 107.21 9.184 107.754 9.472C108.309 9.76 108.741 10.1867 109.05 10.752C109.359 11.3173 109.514 12 109.514 12.8V18H107.706V13.072C107.706 12.2827 107.509 11.68 107.114 11.264C106.719 10.8373 106.181 10.624 105.498 10.624C104.815 10.624 104.271 10.8373 103.866 11.264C103.471 11.68 103.274 12.2827 103.274 13.072V18H101.45V9.184H103.274V10.192C103.573 9.82933 103.951 9.54667 104.41 9.344C104.879 9.14133 105.375 9.04 105.898 9.04Z"
                fill="#161E54"
              />
              <path
                d="M8.404 15.728H3.748L2.948 18H1.044L5.028 6.864H7.14L11.124 18H9.204L8.404 15.728ZM7.892 14.24L6.084 9.072L4.26 14.24H7.892ZM12.2483 13.552C12.2483 12.6667 12.4296 11.8827 12.7923 11.2C13.1656 10.5173 13.6669 9.98933 14.2963 9.616C14.9363 9.232 15.6456 9.04 16.4243 9.04C17.0003 9.04 17.5656 9.168 18.1203 9.424C18.6856 9.66933 19.1336 10 19.4643 10.416V6.16H21.3043V18H19.4643V16.672C19.1656 17.0987 18.7496 17.4507 18.2163 17.728C17.6936 18.0053 17.0909 18.144 16.4083 18.144C15.6403 18.144 14.9363 17.952 14.2963 17.568C13.6669 17.1733 13.1656 16.6293 12.7923 15.936C12.4296 15.232 12.2483 14.4373 12.2483 13.552ZM19.4643 13.584C19.4643 12.976 19.3363 12.448 19.0803 12C18.8349 11.552 18.5096 11.2107 18.1043 10.976C17.6989 10.7413 17.2616 10.624 16.7923 10.624C16.3229 10.624 15.8856 10.7413 15.4803 10.976C15.0749 11.2 14.7443 11.536 14.4883 11.984C14.2429 12.4213 14.1203 12.944 14.1203 13.552C14.1203 14.16 14.2429 14.6933 14.4883 15.152C14.7443 15.6107 15.0749 15.9627 15.4803 16.208C15.8963 16.4427 16.3336 16.56 16.7923 16.56C17.2616 16.56 17.6989 16.4427 18.1043 16.208C18.5096 15.9733 18.8349 15.632 19.0803 15.184C19.3363 14.7253 19.4643 14.192 19.4643 13.584ZM34.372 9.04C35.0653 9.04 35.684 9.184 36.228 9.472C36.7827 9.76 37.2147 10.1867 37.524 10.752C37.844 11.3173 38.004 12 38.004 12.8V18H36.196V13.072C36.196 12.2827 35.9987 11.68 35.604 11.264C35.2093 10.8373 34.6707 10.624 33.988 10.624C33.3053 10.624 32.7613 10.8373 32.356 11.264C31.9613 11.68 31.764 12.2827 31.764 13.072V18H29.956V13.072C29.956 12.2827 29.7587 11.68 29.364 11.264C28.9693 10.8373 28.4307 10.624 27.748 10.624C27.0653 10.624 26.5213 10.8373 26.116 11.264C25.7213 11.68 25.524 12.2827 25.524 13.072V18H23.7V9.184H25.524V10.192C25.8227 9.82933 26.2013 9.54667 26.66 9.344C27.1187 9.14133 27.6093 9.04 28.132 9.04C28.836 9.04 29.4653 9.18933 30.02 9.488C30.5747 9.78667 31.0013 10.2187 31.3 10.784C31.5667 10.2507 31.9827 9.82933 32.548 9.52C33.1133 9.2 33.7213 9.04 34.372 9.04ZM41.253 8.016C40.9223 8.016 40.645 7.904 40.421 7.68C40.197 7.456 40.085 7.17867 40.085 6.848C40.085 6.51733 40.197 6.24 40.421 6.016C40.645 5.792 40.9223 5.68 41.253 5.68C41.573 5.68 41.845 5.792 42.069 6.016C42.293 6.24 42.405 6.51733 42.405 6.848C42.405 7.17867 42.293 7.456 42.069 7.68C41.845 7.904 41.573 8.016 41.253 8.016ZM42.149 9.184V18H40.325V9.184H42.149ZM46.3678 10.464C46.6344 10.016 46.9864 9.66933 47.4238 9.424C47.8718 9.168 48.3998 9.04 49.0078 9.04V10.928H48.5438C47.8291 10.928 47.2851 11.1093 46.9118 11.472C46.5491 11.8347 46.3678 12.464 46.3678 13.36V18H44.5438V9.184H46.3678V10.464ZM52.5084 10.464C52.775 10.016 53.127 9.66933 53.5644 9.424C54.0124 9.168 54.5404 9.04 55.1484 9.04V10.928H54.6844C53.9697 10.928 53.4257 11.1093 53.0524 11.472C52.6897 11.8347 52.5084 12.464 52.5084 13.36V18H50.6844V9.184H52.5084V10.464ZM56.217 13.552C56.217 12.6667 56.3983 11.8827 56.761 11.2C57.1343 10.5173 57.6357 9.98933 58.265 9.616C58.905 9.232 59.609 9.04 60.377 9.04C61.0703 9.04 61.673 9.17867 62.185 9.456C62.7077 9.72267 63.1237 10.0587 63.433 10.464V9.184H65.273V18H63.433V16.688C63.1237 17.104 62.7023 17.4507 62.169 17.728C61.6357 18.0053 61.0277 18.144 60.345 18.144C59.5877 18.144 58.8943 17.952 58.265 17.568C57.6357 17.1733 57.1343 16.6293 56.761 15.936C56.3983 15.232 56.217 14.4373 56.217 13.552ZM63.433 13.584C63.433 12.976 63.305 12.448 63.049 12C62.8037 11.552 62.4783 11.2107 62.073 10.976C61.6677 10.7413 61.2303 10.624 60.761 10.624C60.2917 10.624 59.8543 10.7413 59.449 10.976C59.0437 11.2 58.713 11.536 58.457 11.984C58.2117 12.4213 58.089 12.944 58.089 13.552C58.089 14.16 58.2117 14.6933 58.457 15.152C58.713 15.6107 59.0437 15.9627 59.449 16.208C59.865 16.4427 60.3023 16.56 60.761 16.56C61.2303 16.56 61.6677 16.4427 62.073 16.208C62.4783 15.9733 62.8037 15.632 63.049 15.184C63.305 14.7253 63.433 14.192 63.433 13.584ZM77.889 6.88V14.896C77.889 15.888 77.585 16.672 76.977 17.248C76.3797 17.824 75.5903 18.112 74.609 18.112C73.6277 18.112 72.833 17.824 72.225 17.248C71.6277 16.672 71.329 15.888 71.329 14.896H73.169C73.1797 15.3867 73.3023 15.776 73.537 16.064C73.7823 16.352 74.1397 16.496 74.609 16.496C75.0783 16.496 75.4357 16.352 75.681 16.064C75.9263 15.7653 76.049 15.376 76.049 14.896V6.88H77.889ZM84.6803 18.144C83.8483 18.144 83.0963 17.9573 82.4243 17.584C81.7523 17.2 81.2243 16.6667 80.8403 15.984C80.4563 15.2907 80.2643 14.4907 80.2643 13.584C80.2643 12.688 80.4616 11.8933 80.8563 11.2C81.2509 10.5067 81.7896 9.97333 82.4723 9.6C83.1549 9.22667 83.9176 9.04 84.7603 9.04C85.6029 9.04 86.3656 9.22667 87.0483 9.6C87.7309 9.97333 88.2696 10.5067 88.6643 11.2C89.0589 11.8933 89.2563 12.688 89.2563 13.584C89.2563 14.48 89.0536 15.2747 88.6483 15.968C88.2429 16.6613 87.6883 17.2 86.9843 17.584C86.2909 17.9573 85.5229 18.144 84.6803 18.144ZM84.6803 16.56C85.1496 16.56 85.5869 16.448 85.9923 16.224C86.4083 16 86.7443 15.664 87.0003 15.216C87.2563 14.768 87.3843 14.224 87.3843 13.584C87.3843 12.944 87.2616 12.4053 87.0163 11.968C86.7709 11.52 86.4456 11.184 86.0403 10.96C85.6349 10.736 85.1976 10.624 84.7283 10.624C84.2589 10.624 83.8216 10.736 83.4163 10.96C83.0216 11.184 82.7069 11.52 82.4723 11.968C82.2376 12.4053 82.1203 12.944 82.1203 13.584C82.1203 14.5333 82.3603 15.2693 82.8403 15.792C83.3309 16.304 83.9443 16.56 84.6803 16.56ZM95.6194 9.04C96.2914 9.04 96.8887 9.184 97.4114 9.472C97.9447 9.76 98.3607 10.1867 98.6594 10.752C98.9687 11.3173 99.1234 12 99.1234 12.8V18H97.3154V13.072C97.3154 12.2827 97.118 11.68 96.7234 11.264C96.3287 10.8373 95.79 10.624 95.1074 10.624C94.4247 10.624 93.8807 10.8373 93.4754 11.264C93.0807 11.68 92.8834 12.2827 92.8834 13.072V18H91.0594V6.16H92.8834V10.208C93.1927 9.83467 93.582 9.54667 94.0514 9.344C94.5314 9.14133 95.054 9.04 95.6194 9.04ZM105.898 9.04C106.591 9.04 107.21 9.184 107.754 9.472C108.309 9.76 108.741 10.1867 109.05 10.752C109.359 11.3173 109.514 12 109.514 12.8V18H107.706V13.072C107.706 12.2827 107.509 11.68 107.114 11.264C106.719 10.8373 106.181 10.624 105.498 10.624C104.815 10.624 104.271 10.8373 103.866 11.264C103.471 11.68 103.274 12.2827 103.274 13.072V18H101.45V9.184H103.274V10.192C103.573 9.82933 103.951 9.54667 104.41 9.344C104.879 9.14133 105.375 9.04 105.898 9.04Z"
                fill="black"
                fill-opacity="0.2"
              />
              <path
                d="M121.5 10L127.5 15L133.5 10"
                stroke="#737898"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_244_894">
                <rect
                  width="139"
                  height="24"
                  fill="white"
                  transform="translate(0.5)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}
export default SiderBar;
