import { DetailedItem } from "./DetailedItem";

interface IDetailedListProps {
    items: any[];
    getClassName: (field: string) => string;
    onDeleteClick: (id: string) => void;
}

export const DetailedItemsList = ({ items, getClassName, onDeleteClick }: IDetailedListProps) => {
    return <ul className="detailedItemsList">
        {items.map((item: any) => (<DetailedItem onDeleteClick={onDeleteClick} getClassName={getClassName} item={item} key={item.sku} />))}
    </ul>;
};