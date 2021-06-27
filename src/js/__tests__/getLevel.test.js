import getLevel from '../getLevel';
import fetchData from '../http';

jest.mock('../http');

jest.resetAllMocks();

test('fetchData.test', () => {
  fetchData.mockReturnValue({});
  getLevel(1);
  expect(fetchData).toBeCalledWith('https://server/user/1');
});

test('getLevel.test.true', () => {
  fetchData.mockReturnValue({
    status: 'ok',
    level: '5',
  });
  expect(getLevel(1)).toBe('Ваш текущий уровень: 5');
});

test('getLevel.test.false', () => {
  fetchData.mockReturnValue({
    status: '',
    level: '5',
  });
  expect(getLevel(1)).toBe('Информация об уровне временно недоступна');
});
