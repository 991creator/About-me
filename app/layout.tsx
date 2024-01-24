import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Mickey_Mouse.png" type="image/x-icon" />
      </head>
      <body>{children}</body>
    </html>
  )
}
