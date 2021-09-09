import useFetch from 'use-http';
import { useState, useEffect } from 'react';
import { ComparedItemsList } from './ComparedItemsList';
import { DetailedItemsList } from './DetailedItemsList';
import { FeaturesToCompareTitlesList } from './FeaturesToCompareTitlesList';
import { Loader } from './Loader';
import {
    CONSTANTS,
    getSortedFeatures,
    getFieldsWhichAreDifferent,
    getDetailedItemsList
} from './utils';

export const Main = () => {
    const { data, loading } = useFetch(CONSTANTS.PRODUCTS_API_URL, {}, []);
    const [detailedItems, setDetailedItems] = useState<any[]>([]);
    
    const features = CONSTANTS.FEATURES;
    
    const [selectedProductIds, setSetselectedProductIds] = useState<any[]>([]);

    useEffect(() => {
        if (data?.products) {
            const productIds = data.products.map((product: any) => {
                return product[CONSTANTS.ID_KEY];
            });

            setDetailedItems(data.products);
            setSetselectedProductIds(productIds);
        }
    }, [data]);

    const handleDeleteClick = (id: string) => {
        setDetailedItems((prevDetailedItems: any[]) => {
            return prevDetailedItems.filter((detailedItem: any) => {
                return detailedItem[CONSTANTS.ID_KEY] !== id;
            } );
        } );
    };

    const isSelectedItemChecked = (id: string) => {
        return selectedProductIds.indexOf(id) !== -1;
    };

    const handleSelectedItemChanged = (id: string, checked: boolean) => {
        setSetselectedProductIds((prevSelectedProductIds: string[]) => {
            if (checked) {
                const newSelectedProductIds = [...prevSelectedProductIds];
                newSelectedProductIds.push(id);

                return newSelectedProductIds;
            }

            const newSelectedProductIds = [...prevSelectedProductIds];
            const index = newSelectedProductIds.indexOf(id);
            newSelectedProductIds.splice(index, 1);

            return newSelectedProductIds;
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

    if (loading) {
        return <Loader />;
    }

    if (selectedProductIds) {
        const fieldsWhichAreDifferent = getFieldsWhichAreDifferent(getDetailedItemsList(detailedItems, selectedProductIds));

        const getClassNameForDetailedItemsList = (field: string): string => {
            let res = 'markNoDifference';
            
            if (fieldsWhichAreDifferent.indexOf(field) !== -1) {
                res = 'markDifference';
            }
        
            return res;
        };
    

        return <main className="mainWrap">
            <h1>{detailedItems.length} {productsPhrase}</h1>
            <div className="mainContentWrap">
                <div className="comparedItemsListWrap">
                    <ComparedItemsList
                        items={detailedItems}
                        onSelectedItemChanged={handleSelectedItemChanged}
                        isChecked={isSelectedItemChecked}
                    />
                    {selectedProductIds.length > 0 &&
                        <div className="featuresToCompareTitlesListWrap">
                            <FeaturesToCompareTitlesList
                                getClassName={getClassNameForDetailedItemsList}
                                features={getSortedFeatures(features)}
                            />
                        </div>
                    }
                </div>
                {detailedItems.length > 0 &&
                    <div className="featuresDetailedItemsListWrap">
                        <div>
                            <DetailedItemsList
                                items={getDetailedItemsList(detailedItems, selectedProductIds)}
                                sortedFeatures={getSortedFeatures(features)}
                                getClassName={getClassNameForDetailedItemsList}
                                onDeleteClick={handleDeleteClick}
                            />
                        </div>
                    </div>
                }
            </div>
        </main>;
    }

    return <div>Something went wrong</div>;
};