interface IFeaturesToCompareTitlesListProps {
    features: string[];
    getClassName: (field: string) => string;
}

export const FeaturesToCompareTitlesList = ({ features, getClassName }: IFeaturesToCompareTitlesListProps) => {
    return <div>
        <ul className="featuresTitlesList">
            <li className="badges-title-wrap" key={'badges'}>Badges</li>
            {
                features.map((feature: any) => (<li className={getClassName(feature)} key={feature}>{feature}</li>))
            }
        </ul>
    </div>;
};