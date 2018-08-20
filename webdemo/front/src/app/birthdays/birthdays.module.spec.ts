import { BirthdaysModule } from './birthdays.module';

describe('BirthdaysModule', () => {
  let birthdaysModule: BirthdaysModule;

  beforeEach(() => {
    birthdaysModule = new BirthdaysModule();
  });

  it('should create an instance', () => {
    expect(birthdaysModule).toBeTruthy();
  });
});
