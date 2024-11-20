import Image from "next/image";
import React from "react";
import { CountrySingle } from "../../countries/[countryCode]/page";
import Link from "next/link";
import PopulationChart from "../ui/PopulationChart";

interface CountryCardProps {
  country: CountrySingle;
}

export function CountryCard({ country }: CountryCardProps) {
  console.log(country.countryPop);
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-slate-700 to-slate-500">
      <div className="w-full max-w-4xl p-4 my-5 space-y-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col gap-6">
          {/* main country div */}
          <div className="flex flex-col items-center text-center md:col-span-2">
            <Image
              src={country?.countryFlag}
              alt="Country Flag"
              width={600}
              height={400}
              priority={true}
              className="rounded"
            />
            <div className="mt-4 space-y-2">
              <p className="text-xl font-bold text-gray-800 dark:text-gray-200">
                {country?.officialName}
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                {country?.region}
              </p>
            </div>
          </div>

          {/* population graph */}
          <div className="p-4 rounded shadow bg-gray-50 dark:bg-gray-700">
            <p className="text-lg font-bold text-gray-800 dark:text-gray-200">
              Population Graph
            </p>
            <div className="w-full">
              <PopulationChart populationData={country.countryPop} />
            </div>
          </div>

          {/* widget for borders */}
          <div>
            <p className="text-lg font-bold text-gray-800 dark:text-gray-200">
              Borders:
            </p>
            <div className="grid gap-4 mt-4 md:grid-cols-3">
              {country.borders?.map((entry, index) => (
                <div
                  key={index}
                  className="p-4 rounded shadow bg-gray-50 dark:bg-gray-700"
                >
                  <Link
                    href={{
                      pathname: `/countries/${entry.countryCode}`,
                      query: {
                        code: entry.countryCode,
                      },
                    }}
                    className="font-semibold text-gray-800 text-md dark:text-gray-200"
                  >
                    {entry.officialName}
                  </Link>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {entry.countryCode}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
