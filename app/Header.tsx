import Link from "next/link";

const Header = ()=>{
    return <header className="text-gray-600 body-font ">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
  <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900" href="/">
      <img src="/logo.png" className="w-10 h-10 text-white p-1.5 rounded-full" />
      <span className="ml-1 text-xl" >Alma Café</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link href="/" className="mr-5 hover:text-gray-900">Home</Link>
      <Link href="/menu" className="mr-5 hover:text-gray-900">Nuestro Menú</Link>
      <Link href="/locales" className="mr-5 hover:text-gray-900">Locales</Link>
      <Link href="/franquicias" className="mr-5 hover:text-gray-900">Franquicias</Link>
      <Link href="/contacto" className="mr-5 hover:text-gray-900">Contacto</Link>
    </nav>
  </div>
</header>
}
export default Header;