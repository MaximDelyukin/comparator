import { DeleteButton } from "./DeleteButton";
//TODO: rename to ItemDetails or ProductItemDetails
interface IDetailedItemsProps {
    item: any;
    getClassName: (field: string) => string;
    onDeleteClick: (id: string) => void;
    sortedFeatures: string[];
}

export const DetailedItem = ({ item, getClassName, onDeleteClick, sortedFeatures }: IDetailedItemsProps) => {

    return <li>
        <DeleteButton onDeleteClick={() => { onDeleteClick(item['sku']) }}>
            Delete
        </DeleteButton>
        {sortedFeatures.map((feature: string) => {
            return <div className={getClassName(feature)}>
                {item[feature]}
            </div>;
        })}
        
        {/* <div className={getClassName('Toepassing')} >{item['Toepassing']}</div>
        <div className={getClassName('Hardheid')}>{item['Hardheid']}</div>
        <div className={getClassName('Artikelnummer')}>{item['Hardheid']}</div>
        <div className={getClassName('stepQuantity')}>{item['stepQuantity']}</div>
        <div className={getClassName('badges')}>{item['badges']}</div>
        <div className={getClassName('Kleur')}>{item['Kleur']}</div>
        <div className={getClassName('Temperatuurgebied')}>{item['Kleur']}</div>
        <div className={getClassName('Materiaal')}>{item['Materiaal']}</div>
        <div className={getClassName('Snoerdikte')}>{item['Snoerdikte']}</div>
        <div className={getClassName('Inwendige diameter')}>{item['Inwendige diameter']}</div>
        <div className={getClassName('Maat volgens AS568')}>{item['Maat volgens AS568']}</div> */}
    </li>;
};