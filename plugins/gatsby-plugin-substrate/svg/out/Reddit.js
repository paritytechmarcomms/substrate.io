import * as React from 'react';

function SvgReddit(props) {
  return (
    <svg width={30} height={30} fill="none" viewBox="0 0 30 30" {...props}>
      <path
        fill="#FF4500"
        d="M30.0011 15.0004C30.0009 17.967 29.1211 20.8669 27.4729 23.3334C25.8246 25.8 23.482 27.7224 20.7412 28.8575C18.0005 29.9927 14.9846 30.2897 12.0751 29.7109C9.1655 29.1321 6.49291 27.7036 4.39523 25.6059C2.29756 23.5082 0.869003 20.8356 0.290214 17.9261C-0.288575 15.0165 0.00839487 12.0007 1.14357 9.25988C2.27875 6.5191 4.20115 4.17648 6.66769 2.52824C9.13423 0.879999 12.0341 0.00016822 15.0007 2.4111e-08C16.9706 -0.000111665 18.9212 0.38781 20.7412 1.14161C22.5612 1.89541 24.2149 3.00033 25.6078 4.39327C27.0008 5.78621 28.1057 7.43989 28.8595 9.25988C29.6133 11.0799 30.0012 13.0305 30.0011 15.0004Z"
      />
      <path
        fill="#fff"
        d="M24.9962 15.0005C24.9959 14.5715 24.8694 14.1521 24.6324 13.7946C24.3954 13.4371 24.0584 13.1572 23.6635 12.9898C23.2685 12.8225 22.8331 12.775 22.4113 12.8534C21.9896 12.9318 21.6003 13.1325 21.2918 13.4306C19.796 12.3514 17.7363 11.6541 15.4419 11.5741L16.4385 6.88241L19.6939 7.57465C19.7117 7.95511 19.8676 8.31604 20.1324 8.58977C20.3972 8.86351 20.7528 9.03126 21.1324 9.06157C21.5121 9.09188 21.8898 8.98267 22.1947 8.75442C22.4996 8.52617 22.7108 8.19455 22.7887 7.82173C22.8666 7.4489 22.8058 7.06047 22.6177 6.72925C22.4297 6.39803 22.1273 6.14676 21.7673 6.02256C21.4072 5.89835 21.0142 5.90973 20.662 6.05456C20.3097 6.19939 20.0224 6.46773 19.8538 6.80928L16.2183 6.0371C16.1682 6.02616 16.1165 6.02534 16.0661 6.03469C16.0157 6.04403 15.9677 6.06336 15.9249 6.09153C15.8817 6.11945 15.8445 6.1556 15.8153 6.19791C15.7861 6.24023 15.7656 6.28788 15.7548 6.33815L14.6425 11.569C12.314 11.6337 10.2203 12.3344 8.70659 13.4221C8.47674 13.2008 8.20126 13.0326 7.89948 12.9291C7.5977 12.8256 7.27693 12.7894 6.95968 12.8231C6.64243 12.8567 6.33639 12.9594 6.06303 13.1239C5.78968 13.2884 5.55563 13.5107 5.37731 13.7753C5.199 14.0398 5.08074 14.3402 5.03083 14.6553C4.98092 14.9704 5.00057 15.2926 5.08841 15.5993C5.17624 15.906 5.33013 16.1897 5.53927 16.4306C5.74842 16.6715 6.00775 16.8638 6.29907 16.9938C6.26452 17.2127 6.24689 17.4339 6.24634 17.6554C6.24634 21.0205 10.1642 23.7495 14.9962 23.7495C19.8283 23.7495 23.7461 21.0205 23.7461 17.6554C23.7459 17.4353 23.7288 17.2156 23.6951 16.9981C24.0821 16.8266 24.411 16.5465 24.642 16.1918C24.8729 15.837 24.996 15.4229 24.9962 14.9996V15.0005ZM9.99922 16.5627C9.99922 16.2537 10.0908 15.9517 10.2624 15.6948C10.4341 15.4379 10.678 15.2377 10.9634 15.1194C11.2488 15.0012 11.5629 14.9702 11.8659 15.0304C12.1689 15.0906 12.4473 15.2393 12.6658 15.4577C12.8843 15.6761 13.0331 15.9544 13.0935 16.2574C13.1539 16.5603 13.1231 16.8744 13.005 17.1599C12.8868 17.4454 12.6867 17.6894 12.43 17.8612C12.1732 18.0329 11.8712 18.1247 11.5623 18.1249C11.148 18.1244 10.7508 17.9597 10.4578 17.6669C10.1648 17.374 9.99989 16.9769 9.99922 16.5627ZM18.7117 20.6914C17.6453 21.7561 15.6017 21.8386 15.0013 21.8386C14.401 21.8386 12.3566 21.7536 11.291 20.6906C11.2534 20.6529 11.2236 20.6083 11.2033 20.5591C11.183 20.51 11.1725 20.4573 11.1726 20.4041C11.1726 20.3509 11.1831 20.2983 11.2035 20.2491C11.2239 20.2 11.2538 20.1554 11.2914 20.1178C11.3291 20.0802 11.3737 20.0504 11.4229 20.0301C11.472 20.0098 11.5247 19.9994 11.5779 19.9994C11.6311 19.9994 11.6837 20.01 11.7328 20.0303C11.782 20.0507 11.8266 20.0806 11.8642 20.1182C12.536 20.7909 13.974 21.029 15.0013 21.029C16.0286 21.029 17.4675 20.7909 18.1402 20.1182C18.1775 20.0793 18.2223 20.0483 18.2718 20.0269C18.3212 20.0055 18.3745 19.9942 18.4284 19.9937C18.4823 19.9932 18.5358 20.0035 18.5857 20.0239C18.6356 20.0443 18.6809 20.0745 18.719 20.1127C18.757 20.1509 18.7871 20.1963 18.8074 20.2462C18.8276 20.2962 18.8377 20.3497 18.8371 20.4036C18.8364 20.4575 18.8249 20.5107 18.8034 20.5601C18.7819 20.6096 18.7507 20.6542 18.7117 20.6914ZM18.437 18.1249C18.128 18.1249 17.826 18.0332 17.5691 17.8616C17.3122 17.6899 17.112 17.4459 16.9937 17.1605C16.8755 16.875 16.8445 16.5609 16.9048 16.2579C16.9651 15.9548 17.1139 15.6765 17.3324 15.458C17.5508 15.2395 17.8292 15.0907 18.1322 15.0305C18.4353 14.9702 18.7494 15.0011 19.0348 15.1194C19.3203 15.2376 19.5643 15.4378 19.7359 15.6947C19.9076 15.9516 19.9992 16.2537 19.9992 16.5627C19.9988 16.9768 19.834 17.3739 19.5412 17.6668C19.2483 17.9597 18.8512 18.1244 18.437 18.1249Z"
      />
    </svg>
  );
}

export default SvgReddit;