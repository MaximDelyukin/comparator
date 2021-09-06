import { ComparedItem } from "./ComparedItem";

interface IComparedItemsListProps {
    items: any[];
    onSelectedItemChanged: (id: string, checked: boolean) => void;
    isChecked: (id: string) => boolean;
}

export const ComparedItemsList = ({ items, onSelectedItemChanged, isChecked }: IComparedItemsListProps) => {
    return <div className="selectedItemsContentWrap">
        <b className="selectedItemsTitleWrap">You selected</b>
        <ul className="selectedItemsList">
            {items.map((item: any) => (<ComparedItem
                key={item.sku}
                item={item}
                onSelectedItemChanged={onSelectedItemChanged}
                isChecked={isChecked(item.sku)}
            />))}
        </ul>
    </div>;
};