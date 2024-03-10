import Link from "next/link";
const PUBLIC_WEBSITE_LINK = "https://almacafe.vercel.app/";

const Header = () => {
  return (
    <header className="text-gray-600 body-font ">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a
          className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
          href={PUBLIC_WEBSITE_LINK}
        >
          <img
            src="/logo.png"
            className="w-10 h-10 text-white p-1.5 rounded-full"
          />
          <span className="ml-1 text-xl">Alma Café</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href={PUBLIC_WEBSITE_LINK} className="mr-5 hover:text-gray-900">
            Home
          </Link>
          <Link href="/requests" className="mr-5 hover:text-gray-900">
            Solicitudes
          </Link>
        </nav>
      </div>
    </header>
  );
};
export default Header;
