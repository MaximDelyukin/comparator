import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { ComparedtemsList } from './ComparedItemsList';
import { DetailedItemsList } from './DetailedItemsList';
import { FeaturesToCompareTitlesList } from './FeaturesToCompareTitlesList';

interface IMainProps {

};

export const Main = ({ }: IMainProps) => {
    const themeContext = useContext(ThemeContext);

    const { spacingBase } = themeContext;
    
    const features: string[] = [
        'Maat volgens AS568',
        'Snoerdikte',
        'Kleur'
    ];

    const detailedItems = [
        { id: 'a' },
        { id: 'b' },
        { id: 'c' },
        { id: 'd' },
        { id: 'e' },
        { id: 'f' },
        { id: 'g' }
    ];

    return <div>
        <div>
            <ComparedtemsList items={[{ id: 0 }, { id: 1 }, { id: 2 }]} />
        </div>
        <div className="featuresDetailedItemsListWrap">
            <div className="featuresToCompareTitlesListWrap">
                <FeaturesToCompareTitlesList features={features} />
            </div>
            <div>
                <DetailedItemsList items={detailedItems} />
            </div>
        </div>
    </div>;
};