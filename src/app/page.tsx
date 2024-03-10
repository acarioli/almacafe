'use client';
import Image from 'next/image';
import styles from './ui/home.module.css';
import Contacto from './contacto/page';


export default function Page() {
  return (<section className="body-font text-gray-600">
      <div className="container mx-auto px-2 py-1">
        {/* home */}
        <div className="bg-white ">
          <div className="relative isolate px-2 pt-1 pb-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-35 sm:py-35 lg:py-45">
              <div className="hidden sm:mb-36 sm:flex sm:justify-center">
              </div>
 
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                ¡Conocé Alma Cafe!
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                Vení a disfrutar de nuestras delicias en los diferentes locales de Buenos Aires.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    href="/locales"
                    target='blank'
                    className="rounded-md bg-orange-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Locales
                  </a>
                  <a
                    href="/menu"
                    target='blank'
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Nuestro menú <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
 
          </div>
        </div>

        {/* boxes */}
        <div className="mb-20 flex w-full flex-col text-center"></div>
        <div className="-m-1 p-3 flex flex-wrap">
          <div className="p-4 sm:w-1/2 lg:w-1/3">
            <img
              alt="gallery"
              className="h-full w-full object-cover  hover:border-4 hover:border-gray-200 hover:opacity-80"
              src="/images/box1.jpg"
            />
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/3">
            <img
              alt="gallery"
              className="h-full w-full object-cover hover:border-4 hover:border-gray-200 hover:opacity-80"
              src="/images/box2.jpg"
            />
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/3">
            <img
              alt="gallery"
              className="h-full w-full object-cover hover:border-4 hover:border-gray-200 hover:opacity-80"
              src="/images/box3.jpg"
            />
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/3">
            <img
              alt="gallery"
              className="h-full w-full object-cover  hover:border-4 hover:border-gray-200 hover:opacity-80"
              src="/images/box4.jpg"
            />
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/3">
            <img
              alt="gallery"
              className="h-full w-full object-cover hover:border-4 hover:border-gray-200 hover:opacity-80"
              src="/images/box5.jpg"
            />
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/3">
            <img
              alt="gallery"
              className="h-full w-full object-cover hover:border-4 hover:border-gray-200 hover:opacity-80"
              src="/images/box6.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
