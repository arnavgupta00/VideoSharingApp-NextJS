import './globals.css'
import Dropdown from '../components/dropdown/dropdown';
import "./page.css";
import Link from 'next/link';
export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}
export default function RootLayout({
  children
}: {
  children: React.ReactNode,
}) {



  return (
    <div style={{ background: "transparent" }}>
      <nav style={{ height: '1px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          {/* Logo */}
        </div>
        <div className='dropdown' style={{ marginTop: "90px" }}>
          <Dropdown userName="Arnav" />
        </div>
      </nav>
      {children}
    </div>
  )
}
