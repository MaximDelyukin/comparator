import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { DeleteButton } from './DeleteButton';

interface IMainProps {

};

export const Main = ({ }: IMainProps) => {
    const themeContext = useContext(ThemeContext);

    const { spacingBase } = themeContext;

    return <div>
        <DeleteButton>
            Delete
        </DeleteButton>
    </div>;
};