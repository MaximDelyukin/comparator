import { useState } from 'react';
import { ComparedItemsList } from './ComparedItemsList';
import { DetailedItemsList } from './DetailedItemsList';
import { FeaturesToCompareTitlesList } from './FeaturesToCompareTitlesList';
import { getProducts } from "./ProductsData";
import {
    CONSTANTS,
    getSortedFeatures,
    getFieldsWhichAreDifferent,
    getDetailedItemsList
} from './utils';

export const Main = () => {
    const products = getProducts();
    const features = CONSTANTS.FEATURES;

    const [detailedItems, setDetailedItems] = useState<any[]>(products);
    const [selectedItems, setSetSelectedItems] = useState<string[]>(() => {
        return products.map((product: any) => {
            return product[CONSTANTS.ID_KEY];
        })
    });

    const fieldsWhichAreDifferent = getFieldsWhichAreDifferent(getDetailedItemsList(detailedItems, selectedItems));

    const getClassNameForDetailedItemsList = (field: string): string => {
        let res = 'markNoDifference';
        
        if (fieldsWhichAreDifferent.indexOf(field) !== -1) {
            res = 'markDifference';
        } 
    
        return res;
    };

    const handleDeleteClick = (id: string) => {
        setDetailedItems((prevDetailedItems: any[]) => {
            return prevDetailedItems.filter((detailedItem: any) => {
                return detailedItem[CONSTANTS.ID_KEY] !== id;
            } );
        } );
    };

    const isSelectedItemChecked = (id: string) => {
        return selectedItems.indexOf(id) !== -1;
    };

    const handleSelectedItemChanged = (id: string, checked: boolean) => {
        setSetSelectedItems((prevSelectedItems: string[]) => {
            if (checked) {
                const newSelectedItems = [...prevSelectedItems];
                newSelectedItems.push(id);

                return newSelectedItems;
            }

            const newSelectedItems = [...prevSelectedItems];
            const index = newSelectedItems.indexOf(id);
            newSelectedItems.splice(index, 1);

            return newSelectedItems;
        })
    };

    let productsPhrase;
    if (detailedItems.length === 0) {
        productsPhrase = 'products selected, please refresh the page';
    }
    if (detailedItems.length === 1) {
        productsPhrase = 'product selected, please refresh the page';
    }
    if (detailedItems.length > 1) {
        productsPhrase = 'products compared';
    }

    return <main className="mainWrap">
        <h1>{detailedItems.length} {productsPhrase}</h1>
        <div className="mainContentWrap">
            <div className="comparedItemsListWrap">
                <ComparedItemsList
                    items={detailedItems}
                    onSelectedItemChanged={handleSelectedItemChanged}
                    isChecked={isSelectedItemChecked}
                />
                <div className="featuresToCompareTitlesListWrap">
                    <FeaturesToCompareTitlesList
                        getClassName={getClassNameForDetailedItemsList}
                        features={getSortedFeatures(features)}
                    />
                </div>
            </div>
            {detailedItems.length > 0 && 
                <div className="featuresDetailedItemsListWrap">
                    <div>
                        <DetailedItemsList
                            items={getDetailedItemsList(detailedItems, selectedItems)}
                            sortedFeatures={getSortedFeatures(features)}
                            getClassName={getClassNameForDetailedItemsList}
                            onDeleteClick={handleDeleteClick}
                        />
                    </div>
                </div>
            }
        </div>
    </main>;
};