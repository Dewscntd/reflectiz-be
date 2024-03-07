import { Controller, Get } from '@nestjs/common';
import { AlertsService } from './alerts.service';
import { Alert } from './alerts';

@Controller('alerts')
export class AlertsController {
  constructor(private alertsService: AlertsService) {}

  @Get()
  getAlerts(): Alert {
    return this.alertsService.getAlerts();
  }
}
