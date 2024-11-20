import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { CountriesService } from './countries.service';
import { CountryMany, CountrySingle } from 'src/dtos/country';

@Controller('api/countries')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}
  @Get()
  getManyCountries(): Promise<CountryMany[]> {
    try {
      return this.countriesService.getAllCountries();
    } catch (e) {
      throw new Error('Error: ' + e);
    }
  }

  @Get('/:countryCode')
  async getCountryInfo(@Param() params): Promise<CountrySingle> {
    return this.countriesService.getCountryInfo(params).catch((err) => {
      throw new HttpException(
        `Failed to fetch country info for code: ${err}`,
        HttpStatus.NOT_FOUND,
      );
    });
  }
}
