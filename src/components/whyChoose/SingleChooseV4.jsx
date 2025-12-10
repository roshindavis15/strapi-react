import { HashLink as Link } from 'react-router-hash-link';
import Animate from '../animation/Animate';

const SingleChooseV4 = ({ choose }) => {
    const { listTitle, listText, listLink, listIcon, listAnimation, animationDelay } = choose

    return (
        <>
            <Animate className={listAnimation} delay={animationDelay}>
                <li>
                    <div className="info">
                        <Link to={`/${listLink}#`}>{listTitle}</Link>
                        <p>{listText}</p>
                    </div>
                    <div className="link">
                        <Link to={`/${listLink}#`}><i className={listIcon}></i></Link>
                    </div>
                </li>
            </Animate>
        </>
    );
};

export default SingleChooseV4;