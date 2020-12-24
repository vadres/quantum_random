import { NextIntQRNGAdapter } from "./nextIntQRNG";

describe('Next random int from QRNG', () => {

  test('numbers should be greater than 0 and less than 61', async () => {
    const nextIntQRNG = new NextIntQRNGAdapter();

    const num = await nextIntQRNG.exec();
    expect(num).toBeGreaterThanOrEqual(1);
    expect(num).toBeLessThanOrEqual(60);
  });
})