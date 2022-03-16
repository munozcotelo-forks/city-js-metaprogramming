import { Component } from './component';
import { MoviesService } from './services/services';

// @ts-ignore
@Component({
  template: `
  <div style="text-align:center">
    <h1>
        Welcome to {{title}}!
    </h1>
    <img alt="CityJS Logo" src="{{imgeUrl}}" width="300">
    <h2>{{subTitle}}</h2>
    <h3><a target="_blank" href="https://angular.io/tutorial">@danduh81</a></h3>
</div>
`,
  selector: 'app-hero-component',
  styleUrls: ['./hero.component.scss'],
  provide: [MoviesService],
})
export class HeroComponent {
  public imgeUrl =
    'https://github.com/danduh/city-js-metaprogramming/raw/cdecd879b9c130f61ee8c10f784cb3c5ef5557fe/logo.png';
  public title = 'Welcome to CityJS 2022';
  public subTitle = 'MetaProgramming in TypeScript from 0 to 100';

  constructor(service: MoviesService) {
    console.log(service.getMovies());
  }
}
