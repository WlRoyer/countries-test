import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { CountriesService } from './countries.service';
import { CountriesController } from './countries.controller';

@Module({
  controllers: [CountriesController],
  imports: [HttpModule],
  providers: [CountriesService],
  exports: [CountriesService],
})
export class CountriesModule {}
