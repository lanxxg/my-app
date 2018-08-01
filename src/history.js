let history;

if (typeof document !== 'undefined') {
  const createBrowserHistory = require('history/createBrowserHistory').default;

  history = createBrowserHistory();
} else {
  const createMemoryHistory = require('history/createMemoryHistory').default;

  history = createMemoryHistory();
}

export default history
