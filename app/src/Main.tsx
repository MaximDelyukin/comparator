import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { isNullOrUndefined } from 'util';
import { ComparedtemsList } from './ComparedItemsList';
import { DetailedItemsList } from './DetailedItemsList';
import { FeaturesToCompareTitlesList } from './FeaturesToCompareTitlesList';
import { productsMock } from "./ProductsMock";

interface IMainProps {

};

export const Main = ({ }: IMainProps) => {
    const themeContext = useContext(ThemeContext);

    const { spacingBase } = themeContext;
    
    const features: string[] = [
        'Maat volgens AS568',
        'Hardheid',
        'Snoerdikte',
        'Kleur',
        'Materiaal',
        'Inwendige diameter'
    ];

    const detailedItems = productsMock;

    const getFieldsWhichAreDifferent = (source: any[]) => {
        debugger;
        let res: any[] = [];
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
    console.log('fieldsWhichAreDifferent', fieldsWhichAreDifferent);

    const getClassNameForDetailedItemsList = (field: string): string => {
        let res = '';
        
        if (fieldsWhichAreDifferent.indexOf(field) !== -1) {
            res = 'differenceHighLight';
        } 
    
        return res;
    };

    return <div>
        <div>
            <ComparedtemsList items={[{ id: 0 }, { id: 1 }, { id: 2 }]} />
        </div>
        <div className="featuresDetailedItemsListWrap">
            <div className="featuresToCompareTitlesListWrap">
                <FeaturesToCompareTitlesList getClassName={getClassNameForDetailedItemsList} features={features} />
            </div>
            <div>
                <DetailedItemsList getClassName={getClassNameForDetailedItemsList} items={detailedItems} />
            </div>
        </div>
    </div>;
};