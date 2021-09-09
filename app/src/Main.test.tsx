import React from 'react';
import user from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import App from './App';
import { CONSTANTS } from './utils';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const productsWithOneDifferentFeature = [
    {
        "Toepassing": "Voedsel en dranken",
        "salePrice": "0.66",
        "manufacturerName": "",
        "Hardheid": "70",
        "grossPrice": "0.80",
        "BUP_UOM": "",
        "Artikelnummer": "115576",
        "stepQuantity": "5",
        "BUP_Value": "",
        "badges": "https://eriksdigitalcdn.azureedge.net/shop/thumb40/hlr-system/egt/pubnl/pim_icons/rohs-icon-nl.jpg|https://eriksdigitalcdn.azureedge.net/shop/thumb40/hlr-system/egt/pubnl/pim_icons/rohs-icon-nl.jpg|https://eriksdigitalcdn.azureedge.net/shop/thumb40/hlr-system/egt/pubnl/pim_icons/o-t-symbol-icon-nl.jpg",
        "uom": "Stuk",
        "Kleur": "Zwart",
        "productImage": "https://eriksdigitalcdn.azureedge.net/shop/thumb/hlr-system/webshop/grs/grs-product-images/grs10/10775_fot_012.jpg",
        "Temperatuurgebied": "van  -50  tot  150",
        "BUP_Conversion": "",
        "minQuantity": "5",
        "manufacturerImage": "",
        "name": "O-ring EPDM 70 shore - Voedsel (Binnen Ø=2.5 Snoer Ø=1.78; AS568- 002)",
        "Materiaal": "EPDM",
        "sku": "115576",
        "Snoerdikte": "1.78",
        "Inwendige diameter": "2.9",
        "Maat volgens AS568": "100",
        "listPrice": "0.66",
        "channel": "nl_NL",
        "display": true,
        "atp": {}
    },
    {
        "Toepassing": "Voedsel en dranken",
        "salePrice": "0.66",
        "manufacturerName": "",
        "Hardheid": "70",
        "grossPrice": "0.80",
        "BUP_UOM": "",
        "Artikelnummer": "11545A",
        "stepQuantity": "5",
        "BUP_Value": "",
        "badges": "https://eriksdigitalcdn.azureedge.net/shop/thumb40/hlr-system/egt/pubnl/pim_icons/rohs-icon-nl.jpg|https://eriksdigitalcdn.azureedge.net/shop/thumb40/hlr-system/egt/pubnl/pim_icons/rohs-icon-nl.jpg|https://eriksdigitalcdn.azureedge.net/shop/thumb40/hlr-system/egt/pubnl/pim_icons/omega-slang-icon-nl.jpg|https://eriksdigitalcdn.azureedge.net/shop/thumb40/hlr-system/egt/pubnl/pim_icons/o-t-symbol-icon-nl.jpg",
        "uom": "Stuk",
        "Kleur": "Zwart",
        "productImage": "https://eriksdigitalcdn.azureedge.net/shop/thumb/hlr-system/webshop/lag/lag-product-images/lag25/lag00.png",
        "Temperatuurgebied": "van  -50  tot  150",
        "BUP_Conversion": "",
        "minQuantity": "5",
        "manufacturerImage": "",
        "name": "O-ring EPDM 70 shore - Voedsel (Binnen Ø=1.78 Snoer Ø=1.78; AS568- 004)",
        "Materiaal": "EPDM",
        "sku": "115E1A",
        "Snoerdikte": "1.78",
        "Inwendige diameter": "1.25",
        "Maat volgens AS568": "4",
        "listPrice": "0.66",
        "channel": "nl_NL",
        "display": true,
        "atp": {}
    },
    {
        "Toepassing": "Voedsel en dranken",
        "salePrice": "0.66",
        "manufacturerName": "",
        "Hardheid": "70",
        "grossPrice": "0.80",
        "BUP_UOM": "",
        "Artikelnummer": "11545A",
        "stepQuantity": "5",
        "BUP_Value": "",
        "badges": "https://eriksdigitalcdn.azureedge.net/shop/thumb40/hlr-system/egt/pubnl/pim_icons/rohs-icon-nl.jpg|https://eriksdigitalcdn.azureedge.net/shop/thumb40/hlr-system/egt/pubnl/pim_icons/rohs-icon-nl.jpg|https://eriksdigitalcdn.azureedge.net/shop/thumb40/hlr-system/egt/pubnl/pim_icons/omega-slang-icon-nl.jpg|https://eriksdigitalcdn.azureedge.net/shop/thumb40/hlr-system/egt/pubnl/pim_icons/o-t-symbol-icon-nl.jpg",
        "uom": "Stuk",
        "Kleur": "Zwart",
        "productImage": "https://eriksdigitalcdn.azureedge.net/shop/thumb/hlr-system/webshop/lag/lag-product-images/lag25/lag00.png",
        "Temperatuurgebied": "van  -50  tot  150",
        "BUP_Conversion": "",
        "minQuantity": "5",
        "manufacturerImage": "",
        "name": "O-ring EPDM 70 shore - Voedsel (Binnen Ø=2.9 Snoer Ø=1.78; AS568- 006)",
        "Materiaal": "EPDM",
        "sku": "11545A",
        "Snoerdikte": "1.78",
        "Inwendige diameter": "1.78",
        "Maat volgens AS568": "4",
        "listPrice": "0.66",
        "channel": "nl_NL",
        "display": true,
        "atp": {}
    }
];

const productsUrl = CONSTANTS.PRODUCTS_API_URL;
const server = setupServer(
    rest.get(`${productsUrl}`, (req, res, ctx) => {
        return res(ctx.json({products: productsWithOneDifferentFeature}));
    })
);

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());


test('allows user to view list of products selected for comparison', async () => {
    render(<App />);
    const productName = productsWithOneDifferentFeature[0]['name'];
    const productItemDetails = await screen.findByText(productName, { selector: '.productTitleWrap b' });

    expect(productItemDetails).toBeVisible();
});

test('allows user to toggle visibility of selected products', async () => {
    render(<App />);
    const productName = productsWithOneDifferentFeature[0]['name'];
    const checkbox = await screen.findByLabelText(productName);

    expect(checkbox).toBeVisible();
});

test('allows user to delete products available for comparison', async () => {
    render(<App />);

    const deleteButton: any = await screen.findAllByTitle('Remove Product');

    expect(deleteButton[0]).toBeVisible();
});

test('the amount of product titles with checkboxes should match the amount of visible products', async () => {
    render(<App />);

    const productNameFragment = /O-ring EPDM 70 shore/i;
    const checkBoxes = await screen.findAllByLabelText(productNameFragment, {selector: 'input[type=checkbox]'});
    const productItemDetails = await screen.findAllByText(productNameFragment, {selector: '.productDetailsItem .productTitleWrap b'});

    const amountOfCheckBoxes = checkBoxes.length;
    const amountOfProductItemDetails = productItemDetails.length;

    expect(amountOfCheckBoxes).toEqual(amountOfProductItemDetails);

});

test('toggling checkboxes should toggle the amount of product items visible for comparison', async () => {
    render(<App />);

    const productNameFragment = /O-ring EPDM 70 shore/i;
    const checkBoxes = await screen.findAllByLabelText(productNameFragment, {selector: 'input[type=checkbox]'});

    const visibleProductsBeforeUserClicksCheckbox = await screen.findAllByText(productNameFragment, {selector: '.productDetailsItem .productTitleWrap b'});
    const visibleProductsBeforeUserClicksCheckboxAmount = visibleProductsBeforeUserClicksCheckbox.length;

    user.click(checkBoxes[0]);

    const visibleProductsAfterFirstCheckboxClick =  await screen.findAllByText(productNameFragment, {selector: '.productDetailsItem .productTitleWrap b'});
    const visibleProductsAfterFirstCheckboxClickAmount = visibleProductsAfterFirstCheckboxClick.length;

    expect(visibleProductsAfterFirstCheckboxClickAmount).toBeLessThan(visibleProductsBeforeUserClicksCheckboxAmount);

    user.click(checkBoxes[0]);

    const visibleProductsAfterSecondCheckboxClick = await screen.findAllByText(productNameFragment, {selector: '.productDetailsItem .productTitleWrap b'});
    const visibleProductsAfterSecondCheckboxClickAmount = visibleProductsAfterSecondCheckboxClick.length;
    expect(visibleProductsAfterSecondCheckboxClickAmount).toEqual(visibleProductsBeforeUserClicksCheckboxAmount);
});

test('user should see highlighted cells with features which are different among the products', async () => {
    render(<App />);

    const differentFeature = 'Inwendige diameter';
    const differenceMarkClassName = 'markDifference';

    const elementsWithDifferentFeatureValue = await screen.findAllByTestId(differentFeature);
    const elsArr = Array.from(elementsWithDifferentFeatureValue);
    expect(elsArr.every((el: any, i: number, arr: any[]) => el.className === differenceMarkClassName)).toBe(true);
});

test('user should see no highlighted cells of the features which are the same among the products', async () => {
    render(<App />);

    const sameFeature = 'Hardheid';
    const noDifferenceMarkClassName = 'markNoDifference';

    const elementsWithSameFeatureValue = await screen.findAllByTestId(sameFeature);
    const elsArr = Array.from(elementsWithSameFeatureValue);
    expect(elsArr.every((el: any, i: number, arr: any[]) => el.className === noDifferenceMarkClassName)).toBe(true);
});

test('integration', async () => {
    render(<App />);

    const productNameFragment = /O-ring EPDM 70 shore/i;
    const checkBoxesBeforeDeleteClick = await screen.findAllByLabelText(productNameFragment, {selector: 'input[type=checkbox]'});

    const deleteButtons = await screen.findAllByTitle('Remove Product');
    const deleteButton = deleteButtons[0];

    const visibleProductsBeforeDeleteClick = await screen.findAllByText(
        productNameFragment,
        { selector: '.productDetailsItem .productTitleWrap b' }
    );
    const visibleProductsBeforeDeleteClickAmount = visibleProductsBeforeDeleteClick.length;

    const feature = 'Maat volgens AS568';
    const differenceMarkClassName = 'markDifference';

    const elementsWithFeatureValueBeforeDeleteClick = await screen.findAllByTestId(feature);
    
    const isAllMarked = Array.from(elementsWithFeatureValueBeforeDeleteClick).every((el: any) => el.className === differenceMarkClassName);
    expect(isAllMarked).toBe(true);

    user.click(deleteButton);
    const checkboxesAfterDeleteClick = await screen.findAllByLabelText(productNameFragment, {selector: 'input[type=checkbox]'});

    const visibleProductsAfterDeleteClick = await screen.findAllByText(
        productNameFragment,
        { selector: '.productDetailsItem .productTitleWrap b' }
    );
    const visibleProductsAfterDeleteClickAmount = visibleProductsAfterDeleteClick.length;

    expect(checkboxesAfterDeleteClick.length).toBeLessThan(checkBoxesBeforeDeleteClick.length);
    expect(visibleProductsAfterDeleteClickAmount).toBeLessThan(visibleProductsBeforeDeleteClickAmount);

    const noDifferenceMarkClassName = 'markNoDifference';

    const elementsWithFeatureValueAfterDeleteClick =  await screen.findAllByTestId(feature);
    const isAllNonMarked = Array.from(elementsWithFeatureValueAfterDeleteClick).every((el: any) => el.className === noDifferenceMarkClassName);
    expect(isAllNonMarked).toBe(true);
});
