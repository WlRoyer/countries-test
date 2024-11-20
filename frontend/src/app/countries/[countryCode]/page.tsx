"use client";

import { CountryCard } from "@/app/components/countries/CountryCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { LoadingPage } from "@/app/components/ui/LoadingPage";
import { ErrorPage } from "@/app/components/ui/ErrorPage";

export interface CountryPop {
  year: number;
  value: number;
}

export interface CountrySingle {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders?: CountrySingle[];
  countryFlag: string;
  countryPop: CountryPop[];
}

export default function CountryPage() {
  const [country, setCountry] = useState<CountrySingle>();
  const [isError, setError] = useState<string>();
  const [isLoading, setLoading] = useState<boolean>();

  const searchParams = useSearchParams();
  const countryCode = searchParams.get("code");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/countries/${countryCode}`
        );
        setCountry(response.data);
        setError(undefined);

        // eslint-disable-next-line
      } catch (error: any) {
        console.error(error);
        setError(
          error.response?.data?.message || "Failed to fetch country data."
        );
      } finally {
        setLoading(false);
      }
    };

    if (countryCode) {
      fetchCountries();
    }
  }, [countryCode]);

  if (!country && !isLoading) return <ErrorPage error="Country not found" />;
  if (isLoading) return <LoadingPage />;
  if (isError) return <ErrorPage error={isError} />;

  return country ? <CountryCard country={country} /> : null;
}
