export const metadata = {
  title: 'Connie Ramirez',
  description: 'Visual Artist on the Full Stack Journey',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
