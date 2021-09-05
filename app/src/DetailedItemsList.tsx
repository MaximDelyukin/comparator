import { DetailedItem } from "./DetailedItem";

interface IDetailedListProps {
    items: any[];
    getClassName: (field: string) => string;
}

export const DetailedItemsList = ({ items, getClassName }: IDetailedListProps) => {
    return <ul className="detailedItemsList">
        {items.map((item: any) => (<DetailedItem getClassName={getClassName} item={item} key={item.id} />))}
    </ul>;
};