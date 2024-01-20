export const metadata = {
  title: 'ECOM',
  description: 'Created for educational purposes',
}

import logo from './images/logo-white.png';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>
          URBAN KING
        </title>
        <link rel="icon" type="image/x-icon" href={logo.src}></link>
      </head>
      <body >{children}</body>
    </html>
  )
}
