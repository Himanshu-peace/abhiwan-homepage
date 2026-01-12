// app/fonts.ts
import localFont from 'next/font/local';

export const futuraPT = localFont({
  src: [
    {
      path: '../../public/fonts/FuturaPT-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/FuturaPT-Book.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/FuturaPT-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    // Add other weights/styles as needed
  ],
  variable: '--font-futura-pt', // Define a CSS variable name
});
