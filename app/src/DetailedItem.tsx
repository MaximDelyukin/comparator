import { DeleteButton } from "./DeleteButton";

interface IDetailedItemsProps {
    item: any;
    getClassName: (field: string) => string;
    onDeleteClick: (id: string) => void;
}

export const DetailedItem = ({ item, getClassName, onDeleteClick }: IDetailedItemsProps) => {

    return <li>
        <DeleteButton onDeleteClick={() => { onDeleteClick(item['sku']) }}>
            Delete
        </DeleteButton>
        <div className={getClassName('sku')} >{item['sku']}</div>
        <div className={getClassName('Maat volgens AS568')}>{item['Maat volgens AS568']}</div>
        <div className={getClassName('Hardheid')}>{item['Hardheid']}</div>
        <div className={getClassName('Snoerdikte')}>{item['Snoerdikte']}</div>
        <div className={getClassName('Kleur')}>{item['Kleur']}</div>
        <div className={getClassName('Materiaal')}>{item['Materiaal']}</div>
        <div className={getClassName('Inwendige diameter')}>{item['Inwendige diameter']}</div>
    </li>;
};