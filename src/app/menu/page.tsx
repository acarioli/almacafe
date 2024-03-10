const Menu = ()=>{
    return <section className="text-gray-600 body-font">
    <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
      <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded " alt="hero" src="images/menu.jpg"/>
      <div className="text-center lg:w-2/3 w-full">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Descubrí nuestro menú único</h1>
        <p className="mb-8 leading-relaxed">Conocé las diferentes propuestas preparadas con ingredientes frescos y de alta calidad. Desde opciones clásicas hasta creaciones innovadoras.</p>
        <div className="flex justify-center">
        
        <a href="https://drive.google.com/file/d/1ybQyHuw9kZToTrpFGMEjbFmK_nL4novQ/view?usp=sharing" target="blank">
        <button className="inline-flex text-white bg-orange-700 border-0 py-2 px-6 focus:outline-none hover:bg-orange-400 rounded text-lg">Ver Online</button>
          </a>
            <a href="/MenuAlmaCafe.pdf" download>
          <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Descargar</button>
          </a>
        </div>
      </div>
    </div>
  </section>
}

export default Menu;