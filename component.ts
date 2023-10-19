// import 'reflect-metadata';
import 'core-js';
import { Injector } from './services/injection';
declare const document: Document;
export interface ComponentConfig {
  template?: string;
  selector: string;
  templateUrl?: string;
  styleUrls: string[];
  provide?: any[];
}

export const Component = (conf: ComponentConfig) => {
  return async function (clazz) {
    console.log(conf.provide);
    let tokens = Reflect.getMetadata('design:paramtypes', clazz) || [];

    console.log('tokens', tokens);

    let injections = tokens.map((token) => Injector.resolve<any>(token));

    const elem = document.createElement(conf.selector);
    let _cl = new clazz(...injections);
    let tmpl = conf.template;
    Object.keys(_cl).forEach((baseClPr) => {
      tmpl = tmpl.replace(`{{${baseClPr}}}`, _cl[baseClPr]);
    });
    elem.innerHTML = tmpl;
    document.body.appendChild(elem);
    return _cl;
  };
};
