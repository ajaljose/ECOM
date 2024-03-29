import logo from './images/logo-white.png';
import { AppWrapper } from '@/context';
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>
          URBAN KING
        </title>
        <link rel="icon" type="image/x-icon" href={logo.src}></link>
      </head>
      <body >
        <AppWrapper>
        {children}
        </AppWrapper>
       </body>
    </html>
  )
}
