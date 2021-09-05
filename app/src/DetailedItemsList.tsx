import { DetailedItem } from "./DetailedItem";

interface IDetailedListProps {
    items: any[];
}

export const DetailedItemsList = ({ items }: IDetailedListProps) => {
    return <div>
        <ul>
            {items.map((item: any) => (<DetailedItem item={item} key={item.id} />))}
        </ul>
    </div>;
};