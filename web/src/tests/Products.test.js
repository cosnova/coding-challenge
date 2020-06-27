import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import { Provider } from 'react-redux';
import Products from '../pages/Products';

import store from '../store';

describe('Test Products List page', () => {
  test('Basic page remnder', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Products />
      </Provider>
    );
    const linkElement = getByText(/This a sample of a product list comming from API/i);
    expect(linkElement).toBeInTheDocument();
  });

  // test("Price filter change", async () => {
  //   const { getByTestId, getByText } = render(
  //     <Provider store={store}>
  //       <Products />
  //     </Provider>
  //   );
  //   const selectNode = getByTestId("maxPriceFilter");
  //   // Dig deep to find the actual <select>
  //   await fireEvent.click(selectNode);
  //   const countryOption = await waitForElement(() => getByText("$15"));
  //   console.log(countryOption);
  // });
});
