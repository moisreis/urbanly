import clsx from "clsx"; // Utility for conditional class name merging
import styles from "./SocialProof.module.scss"; // todo: add comment
import headerStyles from "./SocialProofHeader.module.scss"; // todo: add comment
import containerStyles from "./SocialProofContainer.module.scss"; // todo: add comment
import itemStyles from "./SocialProofItem.module.scss"; // todo: add comment

interface SocialProofProps {
    title: string;
    buttonLabel?: string;
    gridColumns?: number;
    children?: React.ReactNode;
}

/**
 * @name todo: add name here
 * @author Moisés Reis
 *
 * @desc TODO: explain here
 *
 * @param prop - TODO: explain here
 *
 * @example
 * <TODO: add example here>
 */
const SocialProof: React.FC<SocialProofProps> & {
    Header: typeof SocialProofHeader;
    Container: typeof SocialProofContainer;
    Item: typeof SocialProofItem;
} = ({title, children, gridColumns = 3}) => {

    return (
        <section className={styles.box}>
            <SocialProof.Header title={title}/>
            <SocialProof.Container gridColumns={gridColumns}>
                {children}
            </SocialProof.Container>
        </section>
    );
};

/**
 * @name todo: add name here
 * @author Moisés Reis
 *
 * @desc TODO: explain here
 *
 * @param prop - TODO: explain here
 *
 * @example
 * <TODO: add example here>
 */
const SocialProofHeader: React.FC<{ title: string }> = ({title}) => (
    <div className={headerStyles.box}>
        <h2>{title}</h2>
    </div>
);

/**
 * @name todo: add name here
 * @author Moisés Reis
 *
 * @desc TODO: explain here
 *
 * @param prop - TODO: explain here
 *
 * @example
 * <TODO: add example here>
 */
const SocialProofContainer: React.FC<{ children: React.ReactNode, gridColumns: number }> = ({children, gridColumns = 3}) => (
    <div className={clsx(
        containerStyles[`box_grid__${gridColumns}`]
    )}>
        {children}
    </div>
);

/**
 * @name todo: add name here
 * @author Moisés Reis
 *
 * @desc TODO: explain here
 *
 * @param prop - TODO: explain here
 *
 * @example
 * <TODO: add example here>
 */
const SocialProofItem: React.FC<{ icon: React.ReactNode, title: string, description: string }> = ({icon, title, description}) => (
    <div className={itemStyles.box}>
        {icon}
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
);

SocialProof.Header = SocialProofHeader; // todo: add comment
SocialProof.Container = SocialProofContainer; // todo: add comment
SocialProof.Item = SocialProofItem; // todo: add comment

export default SocialProof;
