import { CurrencyToSymbolPipe } from './currency-to-symbol.pipe';

describe('CurrencyToSymbolPipe', () => {
  it('create an instance', () => {
    const pipe = new CurrencyToSymbolPipe();
    expect(pipe).toBeTruthy();
  });
});
