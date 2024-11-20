import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { CountryMany, CountryPop, CountrySingle } from 'src/dtos/country';

@Injectable()
export class CountriesService {
  constructor(private readonly httpService: HttpService) {}

  private readonly nagerBaseUrl = 'https://date.nager.at/api/v3';
  private readonly countriesNowBaseUrl = 'https://countriesnow.space/api/v0.1';

  async getAllCountries(): Promise<CountryMany[]> {
    const response = await this.httpService.axiosRef.get(
      `${this.nagerBaseUrl}/AvailableCountries`,
    );
    return response.data;
  }

  async getCountryInfo(countryCode: {
    countryCode: string;
  }): Promise<CountrySingle> {
    const code = countryCode.countryCode;

    try {
      const countryInfo = await this.fetchCountryInfo(code);
      const { iso3, flag } = await this.fetchCountryFlag(code);
      const population = await this.fetchCountryPopulation(iso3);

      return {
        ...countryInfo,
        countryFlag: flag,
        countryPop: population,
      };
    } catch (error) {
      throw error;
    }
  }

  private async fetchCountryInfo(code: string) {
    console.log(code);
    const response = await this.httpService.axiosRef.get(
      `${this.nagerBaseUrl}/CountryInfo/${code}`,
    );
    return response.data;
  }

  private async fetchCountryFlag(iso2: string) {
    const response = await this.httpService.axiosRef.post(
      `${this.countriesNowBaseUrl}/countries/flag/images`,
      { iso2 },
    );
    return { iso3: response.data.data.iso3, flag: response.data.data.flag };
  }

  private async fetchCountryPopulation(iso3: string) {
    const popReturn: CountryPop[] = [];

    const response = await this.httpService.axiosRef.post(
      `${this.countriesNowBaseUrl}/countries/population`,
      {
        iso3: iso3,
      },
    );

    response.data.data.populationCounts
      .filter((entry: any) => entry.year % 10 === 0)
      .forEach((entry: any) => {
        popReturn.push({
          year: entry.year,
          value: entry.value,
        });
      });

    return popReturn;
  }
}
