interface IDetailedItemsProps {
    item: any;
}

export const DetailedItem = ({ item }: IDetailedItemsProps) => {
    return <div>
        {item.id}
    </div>;
};