import { ConfigService } from './app.config.service';
import { environment } from '../environments/environment';

export function ConfigLoader(configService: ConfigService) {
  return () => configService.load(environment.configFile);
}
