import Link from "next/link";
const Footer = ()=>{
    return <footer className="text-gray-600 body-font">
  <div className="container px-8 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <p className="text-sm text-gray-500 sm:ml-2 sm:pl-2 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2020 Alma Café
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start ">
      <Link href="https://www.facebook.com/almabuendiacafe" className="text-gray-500" target="blank">
        <svg fill="currentColor" strokeWidth-linecap="round" strokeWidth-linejoin="round" stroke="2" className="w-4 h-5" viewBox="3 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </Link>
      <Link href="https://api.whatsapp.com/send?phone=5491136460155" className="ml-2 text-gray-500" target="blank">
        <svg fill="currentColor" strokeWidth-linecap="round" strokeWidth-linejoin="round" stroke="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="m18.403 5.633c-1.695-1.697-3.949-2.632-6.35-2.633-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488l-1.273 4.651 4.759-1.249c1.312.715 2.788 1.092 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977 0-2.398-.932-4.653-2.627-6.35m-6.35 13.812h-.003c-1.339-.001-2.652-.36-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282c-.747-1.188-1.141-2.561-1.141-3.971.002-4.114 3.349-7.461 7.465-7.461 1.993.001 3.866.778 5.275 2.188 1.408 1.411 2.184 3.285 2.183 5.279-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393s.149-.224.224-.374.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383-.13-.006-.28-.008-.429-.008-.15 0-.393.056-.599.28-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321 1.582 2.415 3.832 3.387c.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066s.187-.973.131-1.067-.207-.151-.43-.263"></path>
        </svg>
      </Link>
      <Link href ="https://www.instagram.com/almabuendiacafe/?hl=en" className="ml-3 text-gray-500" target="blank">
        <svg fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" className="w-4 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </Link>
    </span>
  </div>
</footer>
}
export default Footer;