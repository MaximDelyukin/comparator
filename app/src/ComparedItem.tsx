import React from "react";
import { CONSTANTS } from './utils';


interface IComparedItemProps {
    item: any;
    onSelectedItemChanged: (id: string, checked: boolean) => void;
    isChecked: boolean;
};

export const ComparedItem = ({item, onSelectedItemChanged, isChecked }: IComparedItemProps) => {
    return <li>
        <div>
            <label>
                <input type='checkbox' onChange={(event: React.ChangeEvent<HTMLInputElement>) => { onSelectedItemChanged(item[CONSTANTS.ID_KEY], event.currentTarget.checked) }} checked={isChecked} />
                {item.name}
            </label>
        </div>
    </li>;
};