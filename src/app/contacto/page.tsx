'use client';
import { dbConnect } from '../../lib/mongodb';
import User from '../../model/user';
import { useForm, SubmitHandler } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import axios from "axios"
import { } from "next/router"

type Inputs = {
  firstname: string;
  lastname: string;
  email: string;
  phoneNumber: string;
  message: string;
};

const Contacto = () => { 
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
    reset,
    getValues
  } = useForm<Inputs>();
  const [sent, setSent] = useState(false);
  
  
  const onSubmit: SubmitHandler<Inputs> = async() => {
    const { firstname, lastname, ...data } = {
      ...getValues(),
      fullName: `${getValues("firstname")} ${getValues("lastname")}` ,contactType: "contact"
    }
    await axios.post(`/api/users`, data)
    setSent(true);
    reset();
  };

  return (
    <section className="body-font relative text-gray-600">
      <div className="isolate bg-white px-6 py-5 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Contactanos
          </h2>
          <p className="text-m mt-2 leading-8 text-gray-600">
            Ante cualquier consulta no dudes en comunicarte. <br /> Completá el
            formulario a continuación y nos contactaremos a la brevedad.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto mt-16 max-w-xl sm:mt-20"
          onClick={() => clearErrors()}
        >
          
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Nombre
              </label>
              <div className="mt-2.5">
                <input
                  defaultValue=""
                  {...register('firstname', {
                    required: 'El nombre es requerido',
                    validate: (fieldValue) => {
                      console.log(' fieldValue es', fieldValue);
                      return (
                        fieldValue.length < 20 ||
                        'El nombre no puede exceder los 20 caracteres'
                      );
                    },
                  })}
                  type="text"
                  name="firstname"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                />
                <p className="mt-2 text-left text-xs text-red-600">
                  {errors.firstname?.message}
                </p>
              </div>
            </div>
            <div>
              <label
                htmlFor="lastname"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Apellido
              </label>
              <div className="mt-2.5">
                <input
                  defaultValue=""
                  {...register('lastname', {
                    required: 'El apellido es requerido',
                    validate: (fieldValue) => {
                      console.log(' fieldValue es', fieldValue);
                      return (
                        fieldValue.length < 20 ||
                        'El apellido no puede exceder los 20 caracteres'
                      );
                    },
                  })}
                  type="text"
                  name="lastname"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                />
                <p className="mt-2 text-left text-xs text-red-600">
                  {errors.lastname?.message}
                </p>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2.5">
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
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                />
                <p className="mt-2 text-left text-xs text-red-600">
                  {errors.email?.message}
                </p>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
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
                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <p className="mt-2 text-left text-xs text-red-600">
                {errors.phoneNumber?.message}
              </p>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Mensaje
              </label>
              <div className="mt-2.5">
                <textarea
                  {...register('message', {
                    required: 'El mensaje es requerido',
                    maxLength: {
                      value: 300,
                      message: 'El mensaje no puede exceder los 300 caracteres',
                    },
                  })}
                  id="message"
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <p className="mt-2 text-left text-xs text-red-600">
                  {errors.message?.message}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5">
            
          <div className='text-green-600 text-sm mb-4' >{sent && <p>¡Gracias por tu mensaje!</p>}</div>
            
            <button
              type="submit"
              className="block w-full rounded-md bg-orange-800 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Enviar
            </button>
            
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contacto;
