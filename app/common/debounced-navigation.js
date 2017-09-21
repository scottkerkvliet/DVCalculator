import debounce from 'lodash/debounce';

export class DebouncedNavigator {
  constructor(navigator) {
    this.navigator = navigator
  }

  navigate = debounce(
    (routeName, params, action) =>
      this.navigator()._navigate(
        routeName,
        params,
        action,
      ),
    // Set the wait to a reasonable duration
    1000,
    {
      trailing: false,
      leading: true,
    }
  )
}
