import React from 'react';
import user from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import App from './App';
//TODO - use data-testid
//TODO - use screen instead of divs
//TODO - use queries
test('allows user to view list of products selected for comparison', () => {
    render(<App />);

    const productsDetailsContainer = document.querySelector('.featuresDetailedItemsListWrap');

    expect(productsDetailsContainer).toBeInTheDocument();

    const productItemDetails = productsDetailsContainer?.querySelector('.productDetailsItem');

    expect(productItemDetails).toBeVisible();
});

test('allows user to toggle visibility of selected products', () => {
    render(<App />);
    const visibleProductsTogglerContainer = document.querySelector('.comparedItemsListWrap');

    expect(visibleProductsTogglerContainer).toBeInTheDocument();

    const checkBox = visibleProductsTogglerContainer?.querySelector('input[type=checkbox]');

    expect(checkBox).toBeInTheDocument();
});

test('allows user to delete products available for comparison', () => {
    render(<App />);

    const productsDetailsContainer = document.querySelector('.featuresDetailedItemsListWrap');

    expect(productsDetailsContainer).toBeInTheDocument();

    const productItemDetails = productsDetailsContainer?.querySelector('.productDetailsItem');

    expect(productItemDetails).toBeInTheDocument(); 

    const deleteButton = productsDetailsContainer?.querySelector('.buttonDelete');

    expect(deleteButton).toBeInTheDocument();
});

//TODO: the amount of checked checkboxes
test('the amount of product titles with checkboxes should match the amount of visible products', () => {
    render(<App />);

    const visibleProductsTogglerContainer = document.querySelector('.comparedItemsListWrap');

    expect(visibleProductsTogglerContainer).toBeInTheDocument();

    const checkBoxes = visibleProductsTogglerContainer?.querySelectorAll('input[type=checkbox]');

    const productsDetailsContainer = document.querySelector('.featuresDetailedItemsListWrap');

    expect(productsDetailsContainer).toBeInTheDocument();

    const productItemDetails = productsDetailsContainer?.querySelectorAll('.productDetailsItem');

    const amountOfCheckBoxes = checkBoxes?.length;
    const amountOfProductItemDetails = productItemDetails?.length;

    expect(amountOfCheckBoxes).toEqual(amountOfProductItemDetails);

});

//test
//product names in you selected section should be the same as in productDetails list

test('toggling checkboxes should toggle the amount of product items visible for comparison', () => {
    render(<App />);

    const visibleProductsTogglerContainer = document.querySelector('.comparedItemsListWrap');

    const checkBox = visibleProductsTogglerContainer!.querySelector('input[type=checkbox]');

    const productsDetailsContainer = document.querySelector('.featuresDetailedItemsListWrap');

    const productItemDetails = productsDetailsContainer?.querySelectorAll('.productDetailsItem');
    const initialAmountOfVisibleProducts = productItemDetails!.length;

    user.click(checkBox!);

    const updatedProductItemDetails = productsDetailsContainer?.querySelectorAll('.productDetailsItem');
    const updatedAmountOfVisibleProducts = updatedProductItemDetails?.length;

    expect(updatedAmountOfVisibleProducts).toBeLessThan(initialAmountOfVisibleProducts);

    user.click(checkBox!);

    const visibleProductsAfterSecondClickOnCheckBox = productsDetailsContainer?.querySelectorAll('.productDetailsItem');
    const amountOfVisibleProductsAfterSecondClickOnCheckBox = visibleProductsAfterSecondClickOnCheckBox!.length;
    console.log('amountOfVisibleProductsAfterSecondClickOnCheckBox', amountOfVisibleProductsAfterSecondClickOnCheckBox);
    console.log('initialAmountOfVisibleProducts', initialAmountOfVisibleProducts);
    expect(amountOfVisibleProductsAfterSecondClickOnCheckBox).toEqual(initialAmountOfVisibleProducts);
});

//test 
//highlight of the rows when items have equal value

//test integration
//toggling checkboxes should change the amount of visible items for comparison and deleting should change the amount of items in selected section and amount of items visible for comparison');
// and highlighting is changed
//the same scheme for delete
//clickking delete changes the amount of items in both DetailedItemsList and SelectedItemsList