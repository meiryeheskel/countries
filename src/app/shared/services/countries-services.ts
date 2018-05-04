import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable()
export class CountriesService {

    constructor(private myHttpClient: HttpClient) {
        this.initCountries();
    }

    countries:any[];

    initCountries(): void {
        let apiUrl:string=`https://restcountries.eu/rest/v2/all`;
        
        this.myHttpClient.get(apiUrl)
            .subscribe((x:any) => { this.countries = x; });
    }

}