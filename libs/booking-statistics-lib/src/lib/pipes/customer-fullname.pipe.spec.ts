import { CustomerFullnamePipe } from './customer-fullname.pipe';

describe('CustomerFullnamePipe', () => {
  it('create an instance', () => {
    const pipe = new CustomerFullnamePipe();
    expect(pipe).toBeTruthy();
  });
});
