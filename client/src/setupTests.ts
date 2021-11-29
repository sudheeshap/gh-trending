// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// None of these tests should actually invoke fetch
// beforeEach(() => {
//   jest.spyOn(window, 'fetch').mockImplementation((...args) => {
//     console.warn('window.fetch is not mocked for this call', ...args);

//     return Promise.reject(new Error('This must be mocked!'));
//   });
// });

// afterEach(() => {
//   jest.restoreAllMocks();
// });

// beforeEach(() => {
//   window.fetch = jest.fn(() =>
//     Promise.resolve({
//       json: () => Promise.resolve([]),
//     }),
//   );
// });

// afterAll(() => {
//   jest.restoreAllMocks();
// });
