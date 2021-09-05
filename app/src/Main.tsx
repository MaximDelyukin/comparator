import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
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

    const fieldsWhichAreDifferent = [
        'Hardheid', 'Kleur'
    ];

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