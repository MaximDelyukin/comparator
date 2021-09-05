import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { ComparedtemsList } from './ComparedItemsList';
import { DetailedItemsList } from './DetailedItemsList';

interface IMainProps {

};

export const Main = ({ }: IMainProps) => {
    const themeContext = useContext(ThemeContext);

    const { spacingBase } = themeContext;

    return <div>
        <div>
            <ComparedtemsList items={[{ id: 0 }, { id: 1 }, { id: 2 }]} />
        </div>
        <div>
            <DetailedItemsList items={[{ id: 'a' }, { id: 'b' }, { id: 'c' }]} />
        </div>
    </div>;
};