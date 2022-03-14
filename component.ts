import axios from 'axios';

declare const document: Document;
export interface ComponentConfig {
  template?: string;
  selector: string;
  templateUrl?: string;
  styleUrls: string[];
}

export const Component = (conf: ComponentConfig) => {
  return async function (clazz) {
    const elem = document.createElement(conf.selector);
    let _cl = new clazz();
    let tmpl = conf.template;
    Object.keys(_cl).forEach((baseClPr) => {
      tmpl = tmpl.replace(`{{${baseClPr}}}`, _cl[baseClPr]);
    });
    elem.innerHTML = tmpl;
    document.body.appendChild(elem);
    return _cl;
  };
};
