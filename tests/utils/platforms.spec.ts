import { SupportedPlatformsForLogin } from '../../utils/platforms';


describe('Utils: Platform', (): void => {
  describe('SupportedPlatformsForLogin', (): void => {
    test('contains supported platforms for Annie', (): void => {
      expect(SupportedPlatformsForLogin).toHaveLength(2);
    });
  });
});
