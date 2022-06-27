import fs from 'fs'
import { TestrailReporterConfig } from '../types'

export default function readConfig(): TestrailReporterConfig | null {
  var _a;
  try {   
      if (fs_1.default.existsSync(`${process.cwd()}/cypress.json`)) {
          const config = fs_1.default.readFileSync(`${process.cwd()}/cypress.json`, 'utf-8');
          const cypressConfig = JSON.parse(config);
    }else{
      const config = fs_1.default.readFileSync(`${process.cwd()}/testrailConfig.json`, 'utf-8');
      const cypressConfig = JSON.parse(config);
    }
      return Object.assign(Object.assign({}, cypressConfig.testrailReporter), { reportFilename: (_a = cypressConfig.testrailReporter) === null || _a === void 0 ? void 0 : _a.reportFilename });
  }
  catch (e) {
      // eslint-disable-next-line no-console
      console.error(` ${e}`);
      process.exit(1);
  }
  return null;
}
