
import './globals.css'

export const metadata = {
  title: 'PENSA UCC PORTAL',
  description: 'Pentecoast Students Association membership portal - University of Cape Coast',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-gray-200'>
        {children}
      </body>
    </html>
  )
}
