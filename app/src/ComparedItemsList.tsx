import { ComparedItem } from "./ComparedItem";

interface IComparedItemsListProps {
    items: any[];
    onSelectedItemChanged: (id: string, checked: boolean) => void;
    isChecked: (id: string) => boolean;
}

export const ComparedItemsList = ({ items, onSelectedItemChanged, isChecked }: IComparedItemsListProps) => {
    return <div>
        'You selected'
        <ul>
            {items.map((item: any) => (<ComparedItem
                key={item.sku}
                item={item}
                onSelectedItemChanged={onSelectedItemChanged}
                isChecked={isChecked(item.sku)}
            />))}
        </ul>
    </div>;
};