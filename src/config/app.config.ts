interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Team Member', 'Car Owner'],
  tenantName: 'Company',
  applicationName: 'Car Sharing Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Manage bookings.', 'Edit your info.', 'Rate a car.', 'Report an issue.'],
  ownerAbilities: ['Manage company information', 'Manage bookings', 'Manage reports', 'Manage car information'],
  getQuoteUrl: 'https://app.roq.ai/proposal/0ddc9181-29b7-439a-a429-5099b4adeac1',
};
