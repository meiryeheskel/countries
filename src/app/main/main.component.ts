import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../shared/services/countries-services';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  localCountries: any[];
  constructor(private mycountriesService: CountriesService) {
    this.localCountries = this.mycountriesService.countries;
  }

  ngOnInit() {
  }

}
