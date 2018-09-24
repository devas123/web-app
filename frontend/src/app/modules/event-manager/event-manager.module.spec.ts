import {EventManagerModule} from './event-manager.module';

describe('EventManagerModule', () => {
  let eventManagerModule: EventManagerModule;

  beforeEach(() => {
    eventManagerModule = new EventManagerModule();
  });

  it('should create an instance', () => {
    expect(eventManagerModule).toBeTruthy();
  });
});
