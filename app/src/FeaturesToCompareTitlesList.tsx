interface IFeaturesToCompareTitlesListProps {
    features: string[];
    getClassName: (field: string) => string;
}

export const FeaturesToCompareTitlesList = ({ features, getClassName }: IFeaturesToCompareTitlesListProps) => {
    return <div>
        <ul className="featuresTitlesList" data-testid="featuresTitlesList">
            <li className="badges-title-wrap" key={"badges"} data-testid="badges">Badges</li>
            {
                features.map((feature: any) => (<li className={getClassName(feature)} key={feature} data-testid={feature}>{feature}</li>))
            }
        </ul>
    </div>;
};