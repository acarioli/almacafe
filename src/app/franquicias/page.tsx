'use client';
import { useForm, SubmitHandler } from 'react-hook-form';
import React, { useState } from 'react';
import axios from "axios";

type Inputs = {
  fullName: string;
  email: string;
  phoneNumber: string;
  zone: string;
  message: string;
};

const Franquicias = () => {
  const {
    register,
    handleSubmit,
    clearErrors,
    formState,
    reset,
    getValues,
    setValue
  } = useForm<Inputs>();
  const [sent, setSent] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = async () => {    
    await axios.post(`/api/users`, {...getValues(), contactType: "franchise" })
    setSent(true);
    reset();
  };

  return (
    <section className="body-font relative text-gray-600">
      <div className="bg-gray absolute inset-0 opacity-60 ">
        <iframe
          className="hover: hover:opacity-80"
          width="100%"
          height="100%"
          loading="lazy"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124947.11685080129!2d-58.5068767218377!3d-34.62029229833824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires!5e0!3m2!1sen!2sar!4v1709923528901!5m2!1sen!2sar"
        ></iframe>
      </div>

      
      <div className="container mx-auto flex px-5 py-24">

        <div className="relative z-10 mt-10 flex w-full m-4 flex-col rounded-lg bg-white p-8 shadow-md md:ml-auto md:mt-0 md:w-1/2 lg:w-1/3">
          <h2 className="title-font font-small mb-1 text-lg font-bold text-gray-900">
            Convertite en Franquiciado
          </h2>
          <p className="mb-5 mt-1 text-sm leading-relaxed text-gray-600">
            Querés ser parte de nuestro equipo? Dejanos tus datos para recibir
            mas información, y nos pondremos en contacto para contarte todas las
            posibilidades de tu próxima franquicia Alma Café!
          </p>

          <form
          onSubmit={handleSubmit(onSubmit)}
          className=" mx-auto mt-2 max-w-xl sm:mt-2"
          onClick={() => clearErrors()}
        >
          <div className="relative mb-4">
            <label htmlFor="fullName" className="text-sm leading-7 text-gray-600">
              Nombre completo
            </label>
            <input
              defaultValue=""
              {...register('fullName', {
                required: 'El nombre completo es requerido',
                validate: (fieldValue) => {
                  console.log(' fieldValue es', fieldValue);
                  return (
                    fieldValue.length < 50 ||
                    'El nombre completo no puede exceder los 50 caracteres'
                  );
                },
              })}
              type="text"
              name="fullName"
              className="w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />
            <p className="mt-2 text-left text-xs text-red-600">
              {formState.errors.fullName?.message}
            </p>
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="text-sm leading-7 text-gray-600">
              Email
            </label>
            <input
              defaultValue=""
              {...register('email', {
                required: 'El email es requerido',
                validate: (fieldValue) => {
                  if (!fieldValue.includes('@')) {
                    return 'El email debe contener @';
                  }
                  return true;
                },
              })}
              type="text"
              name="email"
              className="w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="phoneNumber" className="text-sm leading-7 text-gray-600">
              Número de teléfono
            </label>
            <input
              defaultValue=""
              {...register('phoneNumber', {
                required: 'El número de teléfono es requerido',
                validate: (fieldValue) => {
                  if (!fieldValue) {
                    return 'El número de teléfono es requerido';
                  }
                  if (!/[a-zA-Z]/.test(fieldValue)) {
                    return true; // La validación pasó
                  } else {
                    return 'El número de teléfono no puede contener letras';
                  }
                },
              })}
              type="tel"
              name="phoneNumber"
              className="w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />
            <p className="mt-2 text-left text-xs text-red-600">
              {formState.errors.phoneNumber?.message}
            </p>
          </div>
          <div className="relative mb-4">
            <label htmlFor="zone" className="text-sm leading-7 text-gray-600">
              Zona
            </label>
            <select
              name="zone"
              onChange={(e)=>{setValue("zone",e.target.value)}}
              className="w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            >
              <option value="Capital Federal">Capital Federal</option>
              <option value="Zona Norte">Zona Norte</option>
              <option value="Zona Oeste">Zona Oeste</option>
              <option value="Zona Sur">Zona Sur</option>
            </select>
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="text-sm leading-7 text-gray-600"
            >
              Mensaje
            </label>
            <textarea
              {...register('message', {
                required: 'El mensaje es requerido',
                maxLength: {
                  value: 300,
                  message: 'El mensaje no puede exceder los 300 caracteres',
                },
              })}
              id="message"
              name="message"
              maxLength={300}
              className="h-32 w-full resize-none rounded border border-gray-300 bg-white px-3 py-1 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />
            <p className="mt-2 text-left text-xs text-red-600">
              {formState.errors.message?.message}
            </p>
          </div>
          <div className='text-green-600 text-sm mb-4' >{sent && <p>¡Gracias por tu mensaje!</p>}</div>
          <button className="rounded border-0 bg-orange-800 px-6 py-2 text-lg text-white hover:bg-orange-600 focus:outline-none">
            {formState.isSubmitting?"Enviando...": "Enviar"}
          </button>
      </form>
        </div>
      </div>
    </section>
  );
};

export default Franquicias;
