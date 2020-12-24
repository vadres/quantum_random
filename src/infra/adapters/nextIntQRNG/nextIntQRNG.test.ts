import { NextIntQRNGAdapter } from "./nextIntQRNG";

const allGte1Lte60 = (arr: number[]): boolean => {
  return (arr.filter(i => i < 1 || i > 60)).length === 0
}

describe('Next random int from QRNG', () => {

  test('numbers should be greater than 0 and less than 61', async () => {
    const nextIntQRNG = new NextIntQRNGAdapter();

    const arrNum = await nextIntQRNG.exec();
    expect(allGte1Lte60(arrNum)).toBeTruthy();
  });
})