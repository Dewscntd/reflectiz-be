import { Injectable } from '@nestjs/common';

import { Alert } from './alerts';
import { mockAlerts } from './alert.const';

@Injectable()
export class AlertsService {
  private alerts: Alert[] = mockAlerts;

  getAlerts() {
    const randomAlert = Math.floor(Math.random() * this.alerts.length);
    const randomSource = Math.floor(Math.random() * SOURCSES.length);
    return {
      ...this.alerts[randomAlert],
      severity: Math.floor(Math.random() * 10 + 1),
      source: SOURCSES[randomSource],
    };
  }
}

const SOURCSES: string[] = [
  'Analytics',
  'Firebase',
  'Amazon',
  'Chatbot',
  'Payment',
  'CRM',
];
