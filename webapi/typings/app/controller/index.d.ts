// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportDemo from '../../../app/controller/demo';
import ExportHome from '../../../app/controller/home';

declare module 'egg' {
  interface IController {
    demo: ExportDemo;
    home: ExportHome;
  }
}
