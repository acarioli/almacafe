"use client";
import { useEffect, useState } from "react";
import axios from "axios";

const ContactRequests = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [requests, setRequests] = useState<any[]>([]);
  const [filter, setFilter] = useState<String>("all");

  useEffect(() => {
    setIsLoading(true);
    axios.get(`/api/users`).then((res) => {
      setRequests(res.data as unknown as any[]);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div className="flex flex-row justify-between">
          <div>
            <h2 className="text-2xl font-semibold leading-tight">
              Solicitudes
            </h2>
          </div>
          <div className="relative">
            <select
              onChange={(e) => setFilter(e.target.value)}
              className="appearance-none h-full border-t border-r border-b border-l border-t block w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500"
            >
              <option value={"all"}>Todas las solicitudes</option>
              <option value={"contact"}>Contactos</option>
              <option value={"franchise"}>Franquicias</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="my-2 flex sm:flex-row flex-col">
          <div className="flex flex-row mb-1 sm:mb-0"></div>
        </div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  {filter === "all" && (
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Motivo
                    </th>
                  )}
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Nombre
                  </th>
                  {filter === "franchise" && (
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Zona
                    </th>
                  )}
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Mensaje
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Fecha
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody>
                {requests
                  .filter((request) => {
                    return filter === "all" || request.contactType === filter;
                  })
                  .map((request, i) => (
                    <tr key={i}>
                      {filter === "all" && (
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap capitalize">
                            {!request.contactType
                              ? "Undefined"
                              : request.contactType === "contact"
                              ? "Contacto"
                              : "Franquicia"}
                          </p>
                        </td>
                      )}
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {request.fullName ?? "Undefined"}
                        </p>
                      </td>
                      {filter === "franchise" && (
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {request.zone ?? "Undefined"}
                          </p>
                        </td>
                      )}
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {request.message ?? "Undefined"}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {request.createdAt
                            ? new Date(request.createdAt).toLocaleString(
                                "dd/MM/YYYY"
                              )
                            : "Undefined"}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <a
                          href={`mailto:${request.email} `}
                          className="relative inline-block px-3 py-1 font-semibold rounded-lg bg-orange-200 text-orange-900 leading-tight"
                        >
                          Responder
                        </a>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactRequests;
