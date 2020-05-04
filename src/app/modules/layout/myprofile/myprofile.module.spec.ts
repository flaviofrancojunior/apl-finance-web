import { MyprofileModule } from './myprofile.module';

describe('MyprofileModule', () => {
  let myprofileModule: MyprofileModule;

  beforeEach(() => {
    myprofileModule = new MyprofileModule();
  });

  it('should create an instance', () => {
    expect(myprofileModule).toBeTruthy();
  });
});
