"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { LoadingPage } from "../ui/LoadingPage";

interface CountryMany {
  countryCode: string;
  name: string;
}

export function CountriesTable() {
  const [countries, setCountries] = useState<CountryMany[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/countries`
        );
        setCountries(response.data);
      } catch (err) {
        setError("Failed to fetch countries: " + err);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  if (loading) return <LoadingPage />;
  if (!countries) return <p>{error}</p>;

  return (
    <div className="flex overflow-x-auto shadow-md bg-gradient-to-t from-slate-700 to-slate-500">
      <table className="m-auto my-6 w-full max-w-[30rem] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 sm:rounded-lg">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 text-white">
              Country
            </th>
            <th scope="col" className="px-6 py-3">
              Code
            </th>
          </tr>
        </thead>
        <tbody>
          {countries.map((country) => (
            <tr
              key={country.countryCode}
              className="border-b odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 dark:border-gray-700"
            >
              <th className="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap dark:text-gray-300">
                <Link
                  href={{
                    pathname: `/countries/${country.countryCode}`,
                    query: {
                      code: country.countryCode,
                    },
                  }}
                >
                  {country.name}
                </Link>
              </th>
              <td className="px-6 py-3">{country.countryCode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
