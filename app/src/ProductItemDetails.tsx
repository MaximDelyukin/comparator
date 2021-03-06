import { DeleteButton } from "./DeleteButton";
import { addDefaultSrc, CONSTANTS } from './utils';

interface IProductItemDetails {
    item: any;
    getClassName: (field: string) => string;
    onDeleteClick: (id: string) => void;
    sortedFeatures: string[];
}

export const ProductItemDetails = ({ item, getClassName, onDeleteClick, sortedFeatures }: IProductItemDetails) => {
    const badgesString = item['badges'];
    const badgeUrls = badgesString.split('|');

    return <li className="productDetailsItem">
        <div className="deleteButtonWrap">
            <DeleteButton onDeleteClick={() => { onDeleteClick(item[CONSTANTS.ID_KEY]) }}>
                Delete
            </DeleteButton>
        </div>
        <div className="mainProductInfoWrap">
            <div className="productImageWrap">
                <img src={item['productImage']} onError={addDefaultSrc} alt="" />
            </div>
            <div className="productTitleWrap">
                <b>{item['name']}</b>
            </div>
            <div className="salePriceWrap">
                <b>{item['salePrice']}</b>
                <div>per stuk / excl. btw</div>
            </div>
        </div>
        <div>
            <ul className='badgesWrap'>
            {badgeUrls.map((badgeUrl: string, index: number) => {
                return <li key={index}>
                    <img src={badgeUrl} alt="" />
                </li>
            })}
            </ul>
        </div>
        <div>
            {sortedFeatures
            .filter( (feature: string) => (feature !== 'badges') )
            .map((feature: string) => {
                return <div className={getClassName(feature)} key={feature} data-testid={feature}>
                    {item[feature]}
                </div>;
            })}
        </div>
    </li>;
};