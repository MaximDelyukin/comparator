import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: ${props => props.theme.primaryBlue};
`;

interface IDeleteButtonProps {
    onDeleteClick: () => void;
    children: any;
};

export const DeleteButton = ({ onDeleteClick, children }: IDeleteButtonProps) => {
    return <StyledButton onClick={(_event: React.MouseEvent) => { onDeleteClick() }} >
        {children}
    </StyledButton>;
};
