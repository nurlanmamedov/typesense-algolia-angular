import { Component } from '@angular/core';
import algoliasearch from 'algoliasearch/lite';
import TypesenseInstantsearchAdapter from 'typesense-instantsearch-adapter';


const typesenseInstantsearchAdapter = new TypesenseInstantsearchAdapter({
  server: {
    apiKey: "xyz", // Be sure to use the search-only-api-key
    nodes: [
      {
        host: "localhost",
        port: "8108",
        protocol: "http"
      }
    ]
  },
  // The following parameters are directly passed to Typesense's search API endpoint.
  //  So you can pass any parameters supported by the search endpoint below.
  //  queryBy is required.
  additionalSearchParameters: {
    queryBy: "title,author",
  },
  
});
const searchClient:any = typesenseInstantsearchAdapter.searchClient;

// const searchClient = algoliasearch(
//   'latency',
//   '6be0576ff61c053d5f9a3225e2a90f76'
// );

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  

  ngOnInit(){
  }

  config = {
    indexName: 'books3',
    searchClient
  };
}
