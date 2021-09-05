import { useContext, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { ComparedItemsList } from './ComparedItemsList';
import { DetailedItemsList } from './DetailedItemsList';
import { FeaturesToCompareTitlesList } from './FeaturesToCompareTitlesList';
import { productsMock } from "./ProductsMock";

interface IMainProps {

};

export const Main = ({ }: IMainProps) => {
    const themeContext = useContext(ThemeContext);

    const { spacingBase } = themeContext;

    const [detailedItems, setDetailedItems] = useState<any[]>(productsMock);
    const [selectedItems, setSetSelectedItems] = useState<string[]>(() => {
        return productsMock.map((product: any) => {
            return product['sku'];//TODO: specify identifier globally and import
        })
    });
    
    const features: string[] = [
        'Maat volgens AS568',
        'Hardheid',
        'Snoerdikte',
        'Kleur',
        'Materiaal',
        'Inwendige diameter'
    ];

    

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

    // const fieldsWhichAreDifferent = [
    //     'Hardheid', 'Kleur'
    // ];

    const fieldsWhichAreDifferent = getFieldsWhichAreDifferent(detailedItems);

    const getClassNameForDetailedItemsList = (field: string): string => {
        let res = '';
        
        if (fieldsWhichAreDifferent.indexOf(field) !== -1) {
            res = 'differenceHighLight';
        } 
    
        return res;
    };

    const handleDeleteClick = (id: string) => {
        setDetailedItems((prevDetailedItems: any[]) => {
            return prevDetailedItems.filter((detailedItem: any) => {
                return detailedItem['sku'] !== id;
            } );
        } );
    };//TODO: useCallback

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
            const index = newSelectedItems.indexOf(id);//TODO: add check for -1
            newSelectedItems.splice(index, 1);

            return newSelectedItems;
        })
    };

    return <div>
        <div>
            <ComparedItemsList
                items={detailedItems}
                onSelectedItemChanged={handleSelectedItemChanged}
                isChecked={isSelectedItemChecked}
            />
        </div>
        {detailedItems.length > 0 && 
            <div className="featuresDetailedItemsListWrap">
                <div className="featuresToCompareTitlesListWrap">
                    <FeaturesToCompareTitlesList getClassName={getClassNameForDetailedItemsList} features={features} />
                </div>
                <div>
                    <DetailedItemsList onDeleteClick={handleDeleteClick} getClassName={getClassNameForDetailedItemsList} items={detailedItems} />
                </div>
            </div>
        }
    </div>;
};