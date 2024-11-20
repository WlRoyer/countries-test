export class CountryMany {
  countryCode: string;
  name: string;
}

export class CountrySingle {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders?: CountrySingle[];
  countryFlag?: string;
  countryPop?: CountryPop;
}

export class CountryPop {
  year: number;
  value: number;
}
