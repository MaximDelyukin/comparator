import { useState } from 'react';
import { ComparedItemsList } from './ComparedItemsList';
import { DetailedItemsList } from './DetailedItemsList';
import { FeaturesToCompareTitlesList } from './FeaturesToCompareTitlesList';
import { getProducts } from "./ProductsData";
import { CONSTANTS } from './utils';

export const Main = () => {
    const products = getProducts();
    const features = CONSTANTS.FEATURES;

    const [detailedItems, setDetailedItems] = useState<any[]>(products);
    const [selectedItems, setSetSelectedItems] = useState<string[]>(() => {
        return products.map((product: any) => {
            return product[CONSTANTS.ID_KEY];
        })
    });
    
    const getSortedFeatures = (featureSource: string[]) => {
        return featureSource.sort();
    };
    

    const getFieldsWhichAreDifferent = (source: any[]) => {
        let res: any[] = [];
        if (source.length === 0) {
            return res;
        }

        const sampleItem = source[0];

        const fieldNames = Object.keys(sampleItem);

        const groupedByFieldNameStore: any = {};

        fieldNames.forEach((fieldName: string) => {
            groupedByFieldNameStore[fieldName] = [];
            return;
        });
        
        source.forEach((product: any) => {
            for (let i in product) {
                if (product.hasOwnProperty(i)) {
                    groupedByFieldNameStore[i].push(product[i]);
                }
            };
        } );

        const storeOfDifferentFields: string[] = [];

        const checkForDifference = (source: string[]) => {
            const sample = source[0];
            const res = source.filter((item: string) => {
                return item !== sample;
            } );

            return res.length > 0;
        }

        for (let i in groupedByFieldNameStore) {
            if (groupedByFieldNameStore.hasOwnProperty(i)) {
                if (checkForDifference(groupedByFieldNameStore[i])) {
                    storeOfDifferentFields.push(i);
                }
            }
        };

        res = storeOfDifferentFields;
        
        return res;
    };

    const getDetailedItemsList = (items: any[]) => {
        return items.filter((item: any) => {
            return selectedItems.indexOf(item[CONSTANTS.ID_KEY]) !== -1;
        } );
    };

    const fieldsWhichAreDifferent = getFieldsWhichAreDifferent(getDetailedItemsList(detailedItems));

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

    return <div className="mainWrap">
        <h1>{detailedItems.length} products compared</h1>
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
                            items={getDetailedItemsList(detailedItems)}
                            sortedFeatures={getSortedFeatures(features)}
                            getClassName={getClassNameForDetailedItemsList}
                            onDeleteClick={handleDeleteClick}
                        />
                    </div>
                </div>
            }
        </div>
    </div>;
};