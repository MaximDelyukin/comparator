import { ComparedItem } from "./ComparedItem";

interface IComparedListProps {
    items: any[];
}

export const ComparedtemsList = ({ items }: IComparedListProps) => {
    return <div>
        'You selected'
        <ul>
            {items.map((_item: any) => (<ComparedItem key={_item.id} />))}
        </ul>
    </div>;
};