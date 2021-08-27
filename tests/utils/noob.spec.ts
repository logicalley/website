import { noob, asyncNoob } from "../../utils/noob";


describe('Utils: Noob', (): void => {
  describe('noob', (): void => {
    test('returns nothing', (): void => {
      expect(noob()).toBeUndefined();
    });
  });

  describe('asyncNoob', (): void => {
    test('returns nothing', async (): Promise<void> => {
      expect(await asyncNoob()).toBeUndefined();
    });
  });
});
