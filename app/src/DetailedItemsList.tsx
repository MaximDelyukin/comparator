import { ProductItemDetails } from "./ProductItemDetails";

interface IDetailedListProps {
    items: any[];
    sortedFeatures: string[]; 
    getClassName: (field: string) => string;
    onDeleteClick: (id: string) => void;
}

export const DetailedItemsList = ({ items, getClassName, onDeleteClick, sortedFeatures }: IDetailedListProps) => {
    return <ul className="detailedItemsList">
        {items.map((item: any) => (<ProductItemDetails
            item={item}
            sortedFeatures={sortedFeatures}
            getClassName={getClassName}
            onDeleteClick={onDeleteClick}
            key={item['sku']}
        />))}
    </ul>;
};