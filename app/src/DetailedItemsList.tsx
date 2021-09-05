import { DetailedItem } from "./DetailedItem";

interface IDetailedListProps {
    items: any[];
}

export const DetailedItemsList = ({ items }: IDetailedListProps) => {
    return <div>
        <ul>
            {items.map((_item: any) => (<DetailedItem key={_item.id} />))}
        </ul>
    </div>;
};