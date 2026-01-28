

import Footer from './_components/Shared/Footer/Footer'
import Header from './_components/Shared/Header/Header'
import Navbar from './_components/utilities/Navbar'


export default function PublicLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
