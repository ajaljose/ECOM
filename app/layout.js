export const metadata = {
  title: 'ECOM',
  description: 'Created for educational purposes',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>
          ECOMMERCE
        </title>
      </head>
      <body >{children}</body>
    </html>
  )
}
