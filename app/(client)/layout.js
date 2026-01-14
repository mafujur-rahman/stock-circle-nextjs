

import Footer from './_components/Shared/Footer/Footer'
import Header from './_components/Shared/Header/Header'

export default function PublicLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
