import debounce from 'lodash/debounce';

export const debouncedNavigation = debounce(
  (navigator, routeName, params, action) =>
    navigator.navigate(
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
