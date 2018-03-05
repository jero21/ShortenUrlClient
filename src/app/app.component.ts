import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title:string = 'Shorten your link here!';
  // variables
  url:string = '';
  found:boolean;

  // Constructor with httClient for API REST
  constructor(private httpClient:HttpClient){ }
  
  // Event Input
  onNameKeyUp(event:any) {
    this.url = event.target.value; // Value of input (url)
    this.found = false;
  }

  // function that calls API endpoint api/url/create
  shorterUrl() {
    // host and endpoint that saves a url in postgresql and returns the short url
    this.httpClient.post(`http://localhost:3000/api/url/create`,
    {
      longUrl: this.url
    })
    .subscribe(
      (data:any) => {
        // Response on data
        this.url = data.data.shortUrl;
        this.found = true;
      }
     )
  }
}
