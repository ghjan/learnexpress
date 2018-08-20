import { BirthdaysRoutingModule } from './birthdays-routing.module';

describe('BirthdaysRoutingModule', () => {
  let birthdaysRoutingModule: BirthdaysRoutingModule;

  beforeEach(() => {
    birthdaysRoutingModule = new BirthdaysRoutingModule();
  });

  it('should create an instance', () => {
    expect(birthdaysRoutingModule).toBeTruthy();
  });
});
