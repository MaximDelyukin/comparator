interface IFeaturesToCompareTitlesListProps {
    features: string[];
    getClassName: (field: string) => string;
}

export const FeaturesToCompareTitlesList = ({ features, getClassName }: IFeaturesToCompareTitlesListProps) => {
    return <div>
        <ul className="featuresTitlesList">
            {
                features.map((feature: any) => (<li className={getClassName(feature)} key={feature}>{feature}</li>))
            }
        </ul>
    </div>;
};