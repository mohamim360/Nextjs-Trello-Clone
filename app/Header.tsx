import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className="p-5 bg-blue-500">
      <Link href="/" className="px-4 py-3 text-blue-500 rounded-lg bg-white">Home</Link>
    </div>

  )
}

export default Header