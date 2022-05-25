import {CompetitionManagerCommonsModule} from './competition-manager-commons.module';

describe('CommonsModule', () => {
  let commonsModule: CompetitionManagerCommonsModule;

  beforeEach(() => {
    commonsModule = new CompetitionManagerCommonsModule();
  });

  it('should create an instance', () => {
    expect(commonsModule).toBeTruthy();
  });
});
