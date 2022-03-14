import { Component } from './component';

// @ts-ignore
@Component({
  template: `
  <div style="text-align:center">
    <h1>
        Welcome to {{title}}!
    </h1>
    <img alt="CityJS Logo" src="./assets/logo.png" width="300">
</div>
<h2>MetaProgramming in TypeScript </h2>
<ul>
    <li>
        <h2><a target="_blank" rel="noopener" href="https://angular.io/tutorial">@danduh81</a>
        </h2>
    </li>
</ul>
`,
  selector: 'app-hero-component',
  templateUrl: 'test.json',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  public title = 'Welcome to CityJS';

  constructor() {}
}
