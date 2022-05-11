import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "../infrastructure/media-queries/device";

export const LogoButton = () => {
  return (
    <Link to='/'>
      <LogoContainer>
        <svg
          width='100%'
          height='100%'
          viewBox='0 0 144 50'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M0 7C0 3.13401 3.13401 0 7 0H137C140.866 0 144 3.13401 144 7V43C144 46.866 140.866 50 137 50H7C3.13401 50 0 46.866 0 43V7Z'
            fill='#E1DBFF'
          />
          <path
            d='M24.0283 22.5146L27.9434 33.165C28.2897 34.0804 29.0319 34.5381 30.1699 34.5381H36.1816C37.9258 34.5381 38.7979 35.1504 38.7979 36.375C38.7979 37.2161 38.4886 37.8717 37.8701 38.3418C37.2516 38.8242 36.3919 39.0654 35.291 39.0654H29.1309C27.498 39.0654 26.3477 38.8366 25.6797 38.3789C25.0117 37.9336 24.4056 36.9935 23.8613 35.5586L18.9443 22.2734L15.1035 31.7178C14.3613 33.5732 13.3037 34.501 11.9307 34.501C11.3617 34.501 10.873 34.3154 10.4648 33.9443C10.0566 33.5732 9.85254 33.1341 9.85254 32.627C9.85254 32.2188 9.95768 31.7487 10.168 31.2168L10.3906 30.6787L15.2148 18.8037C15.9447 16.9977 16.3096 15.7484 16.3096 15.0557C16.3096 14.4495 16.0436 13.93 15.5117 13.4971C14.9922 13.0518 14.3799 12.8291 13.6748 12.8291C12.4131 12.8291 11.2751 13.361 10.2607 14.4248C9.25879 15.4762 8.75781 16.6576 8.75781 17.9688C8.75781 19.4036 9.53092 20.3994 11.0771 20.9561C12.0173 21.29 12.4873 21.8714 12.4873 22.7002C12.4873 23.3929 12.2152 23.9681 11.6709 24.4258C11.139 24.8711 10.471 25.0938 9.66699 25.0938C8.12077 25.0938 6.7972 24.4382 5.69629 23.127C4.59538 21.8158 4.04492 20.251 4.04492 18.4326C4.04492 15.7236 5.05306 13.361 7.06934 11.3447C9.09798 9.31608 11.473 8.30176 14.1943 8.30176C16.223 8.30176 17.9176 8.89551 19.2783 10.083C20.639 11.2705 21.3193 12.7549 21.3193 14.5361C21.3193 15.7979 20.9977 17.2204 20.3545 18.8037L19.7051 20.3809L29.4463 10.1943C30.4977 9.09342 31.4564 8.54297 32.3223 8.54297C32.916 8.54297 33.4108 8.74089 33.8066 9.13672C34.2025 9.52018 34.4004 10.0088 34.4004 10.6025C34.4004 11.3324 33.8994 12.223 32.8975 13.2744L24.0283 22.5146ZM44.7354 29.9551H46.8877C47.7412 29.9551 48.3473 30.085 48.7061 30.3447C49.0648 30.5921 49.2441 31.0065 49.2441 31.5879C49.2441 32.3424 48.9658 32.9362 48.4092 33.3691C47.8649 33.7897 47.098 34 46.1084 34H42.7871C41.748 34 41.0553 33.598 40.709 32.7939C40.0286 33.598 39.1751 34 38.1484 34H35.4395C34.3509 34 33.4479 33.6598 32.7305 32.9795C32.013 32.2992 31.6543 31.4395 31.6543 30.4004C31.6543 29.8066 31.8151 29.1139 32.1367 28.3223L34.6602 22.125C35.3652 20.4056 36.3301 19.5459 37.5547 19.5459C38.0866 19.5459 38.5381 19.7191 38.9092 20.0654C39.2803 20.3994 39.4658 20.8138 39.4658 21.3086C39.4658 21.6797 39.3669 22.1064 39.1689 22.5889L38.9648 23.0898L37.0166 27.8584L36.8125 28.415C36.7012 28.7367 36.6393 28.9779 36.627 29.1387C36.6022 29.6953 36.9609 29.9736 37.7031 29.9736C39.237 29.9736 40.2575 29.3551 40.7646 28.1182L43.084 22.4033C43.7767 20.6715 44.7539 19.8057 46.0156 19.8057C46.5352 19.8057 46.9805 19.9788 47.3516 20.3252C47.7227 20.6715 47.9082 21.0859 47.9082 21.5684C47.9082 21.9518 47.7474 22.5456 47.4258 23.3496L44.7354 29.9551ZM63.6982 29.9551H65.9248C67.4958 29.9551 68.2812 30.5055 68.2812 31.6064C68.2812 32.361 68.0029 32.9486 67.4463 33.3691C66.8896 33.7897 66.1227 34 65.1455 34H61.2676C60.513 34 59.876 33.7712 59.3564 33.3135C58.8493 32.8558 58.5957 32.2806 58.5957 31.5879C58.5957 31.1673 58.7689 30.5365 59.1152 29.6953L60.748 25.6504C60.9212 25.2298 61.014 24.8896 61.0264 24.6299C61.0387 24.333 60.915 24.0794 60.6553 23.8691C60.4079 23.6589 60.0863 23.5537 59.6904 23.5537C58.4163 23.5537 57.3896 24.5124 56.6104 26.4297L54.4209 31.8105C53.7653 33.4434 52.7881 34.2598 51.4893 34.2598C50.9574 34.2598 50.5059 34.099 50.1348 33.7773C49.7637 33.4557 49.5781 33.0599 49.5781 32.5898C49.5781 32.2435 49.6771 31.8291 49.875 31.3467L50.0791 30.8457L53.8271 21.6055C54.3096 20.4056 55.1322 19.8057 56.2949 19.8057C57.2474 19.8057 57.9277 20.2262 58.3359 21.0674C59.6595 20.0531 60.9212 19.5459 62.1211 19.5459C63.2839 19.5459 64.2425 19.8799 64.9971 20.5479C65.7516 21.2158 66.1289 22.0632 66.1289 23.0898C66.1289 23.6589 65.9928 24.2835 65.7207 24.9639L63.6982 29.9551ZM78.2637 19.8057H78.8389C80.4098 19.8057 81.1953 20.3561 81.1953 21.457C81.1953 22.2116 80.917 22.7992 80.3604 23.2197C79.8037 23.6403 79.0368 23.8506 78.0596 23.8506H76.7051L74.2188 29.9551H76.2969C77.8678 29.9551 78.6533 30.5055 78.6533 31.6064C78.6533 32.361 78.375 32.9486 77.8184 33.3691C77.2741 33.7897 76.5072 34 75.5176 34H72.1963C71.2562 34 70.5078 33.7835 69.9512 33.3506C69.4069 32.9176 69.1348 32.3301 69.1348 31.5879C69.1348 31.1302 69.2461 30.623 69.4688 30.0664L69.8213 29.25L72.0107 23.8506H71.7324C70.347 23.8506 69.6543 23.3125 69.6543 22.2363C69.6543 21.4694 69.9264 20.8757 70.4707 20.4551C71.0273 20.0221 71.8005 19.8057 72.79 19.8057H73.6436L74.627 17.375L74.8311 16.874C75.4124 15.501 76.3278 14.8145 77.5771 14.8145C78.0843 14.8145 78.5173 14.9876 78.876 15.334C79.2471 15.668 79.4326 16.0762 79.4326 16.5586C79.4326 17.0286 79.2718 17.6224 78.9502 18.3398L78.2637 19.8057ZM89.0068 19.5459C90.8005 19.5459 92.2725 20.1149 93.4229 21.2529C94.5856 22.391 95.167 23.8382 95.167 25.5947C95.167 26.9183 94.8639 28.2357 94.2578 29.5469C93.6517 30.8457 92.8662 31.8848 91.9014 32.6641C91.2581 33.1712 90.5902 33.5238 89.8975 33.7217C89.2171 33.9072 88.2585 34 87.0215 34C85.0052 34 83.6445 33.7588 82.9395 33.2764C81.2819 32.1383 80.4531 30.4561 80.4531 28.2295C80.4531 25.8792 81.3005 23.8444 82.9951 22.125C84.6898 20.4056 86.6937 19.5459 89.0068 19.5459ZM88.5615 23.498C87.6462 23.498 86.8112 23.9495 86.0566 24.8525C85.3021 25.7555 84.9248 26.7513 84.9248 27.8398C84.9248 29.2747 85.7288 29.9922 87.3369 29.9922C88.277 29.9922 89.0007 29.7015 89.5078 29.1201C90.349 28.1676 90.7695 27.0791 90.7695 25.8545C90.7695 25.1494 90.5654 24.5804 90.1572 24.1475C89.749 23.7145 89.2171 23.498 88.5615 23.498ZM118.472 29.9551H120.68C122.238 29.9551 123.018 30.5055 123.018 31.6064C123.018 32.361 122.739 32.9486 122.183 33.3691C121.638 33.7897 120.878 34 119.9 34H116.134C115.317 34 114.656 33.7835 114.148 33.3506C113.641 32.9176 113.388 32.3486 113.388 31.6436C113.388 31.1611 113.555 30.5055 113.889 29.6768L115.633 25.4277C115.732 25.1803 115.781 24.9515 115.781 24.7412C115.781 23.9372 115.373 23.5352 114.557 23.5352C113.926 23.5352 113.301 23.8197 112.683 24.3887C112.064 24.9577 111.569 25.7122 111.198 26.6523L109.12 31.7734C108.44 33.431 107.45 34.2598 106.151 34.2598C105.644 34.2598 105.211 34.0928 104.853 33.7588C104.494 33.4248 104.314 33.029 104.314 32.5713C104.314 32.2126 104.407 31.792 104.593 31.3096L104.797 30.8086L106.894 25.6318C107.079 25.1742 107.172 24.8154 107.172 24.5557C107.172 24.2835 107.048 24.0485 106.801 23.8506C106.553 23.6403 106.263 23.5352 105.929 23.5352C104.593 23.5352 103.535 24.5 102.756 26.4297L100.585 31.7549C99.9046 33.4248 98.9212 34.2598 97.6348 34.2598C97.1276 34.2598 96.6885 34.099 96.3174 33.7773C95.9587 33.4434 95.7793 33.0413 95.7793 32.5713C95.7793 32.2002 95.8721 31.7796 96.0576 31.3096L96.2617 30.8086L99.9541 21.7168C100.474 20.4427 101.253 19.8057 102.292 19.8057C103.368 19.8057 104.036 20.3128 104.296 21.3271C105.137 20.6097 105.817 20.1335 106.337 19.8984C106.869 19.6634 107.518 19.5459 108.285 19.5459C109.943 19.5459 111.186 20.2695 112.015 21.7168C113.4 20.2695 114.959 19.5459 116.69 19.5459C117.878 19.5459 118.868 19.8923 119.659 20.585C120.463 21.2653 120.865 22.1064 120.865 23.1084C120.865 23.7393 120.729 24.3887 120.457 25.0566L118.472 29.9551ZM132.313 19.5459C134.107 19.5459 135.579 20.1149 136.729 21.2529C137.892 22.391 138.474 23.8382 138.474 25.5947C138.474 26.9183 138.171 28.2357 137.564 29.5469C136.958 30.8457 136.173 31.8848 135.208 32.6641C134.565 33.1712 133.897 33.5238 133.204 33.7217C132.524 33.9072 131.565 34 130.328 34C128.312 34 126.951 33.7588 126.246 33.2764C124.589 32.1383 123.76 30.4561 123.76 28.2295C123.76 25.8792 124.607 23.8444 126.302 22.125C127.996 20.4056 130 19.5459 132.313 19.5459ZM131.868 23.498C130.953 23.498 130.118 23.9495 129.363 24.8525C128.609 25.7555 128.231 26.7513 128.231 27.8398C128.231 29.2747 129.035 29.9922 130.644 29.9922C131.584 29.9922 132.307 29.7015 132.814 29.1201C133.656 28.1676 134.076 27.0791 134.076 25.8545C134.076 25.1494 133.872 24.5804 133.464 24.1475C133.056 23.7145 132.524 23.498 131.868 23.498Z'
            fill='#8A6FFF'
          />
        </svg>
      </LogoContainer>
    </Link>
  );
};
const LogoContainer = styled.div`
  width: 100px;
  height: 50px;

  @media ${device.tablet} {
    width: 144px;
  }
`;
