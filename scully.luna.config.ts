import { ScullyConfig } from '@scullyio/scully';

/** this loads the default render plugin, remove when switching to something else. */


export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "luna",
  spsModulePath: 'YOUR OWN MODULE PATH HERE',
  outDir: './docs',
  routes: {
  home: {
    type: 'default',
  },
  'la-sposa': {
    type: 'default',
  },
  'nicole-couture': {
    type: 'default',
  },
  'st-patrick': {
    type: 'default',
  },
  contact: {
    type: 'default',
  },
  }
};