interface IFeaturesToCompareTitlesListProps {
    features: string[];
}

export const FeaturesToCompareTitlesList = ({ features }: IFeaturesToCompareTitlesListProps) => {
    return <div>
        <ul className="featuresTitlesList">
            {
                features.map((feature: any) => (<li key={feature}>{feature}</li>))
            }
        </ul>
    </div>;
};