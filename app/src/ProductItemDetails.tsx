import { DeleteButton } from "./DeleteButton";
import { addDefaultSrc } from './utils';

//TODO: rename to ItemDetails or ProductItemDetails
interface IProductItemDetails {
    item: any;
    getClassName: (field: string) => string;
    onDeleteClick: (id: string) => void;
    sortedFeatures: string[];
}

export const ProductItemDetails = ({ item, getClassName, onDeleteClick, sortedFeatures }: IProductItemDetails) => {
    //TODO: add try catch block
    const badgesString = item['badges'];
    const badgeUrls = badgesString.split('|');//TODO: check whether it makes sense to sanitize JSON input

    return <li>
        <DeleteButton onDeleteClick={() => { onDeleteClick(item['sku']) }}>
            Delete
        </DeleteButton>
        <div>
            <div className="productImageWrap">
                <img src={item['productImage']} onError={addDefaultSrc} />
            </div>
            <div>
                {item['name']}
            </div>
            <div>
                {item['salePrice']}
            </div>
        </div>
        <ul className='badgesWrap'>
            {badgeUrls.map((badgeUrl: string, index: number) => {
                return <li key={index}>
                    <img src={badgeUrl} />
                </li>
            })}
        </ul>
        <div>
            {sortedFeatures
            .filter( (feature: string) => (feature !== 'badges') )
            .map((feature: string) => {
                return <div className={getClassName(feature)}>
                    {item[feature]}
                </div>;
            })}
        </div>
    </li>;
};