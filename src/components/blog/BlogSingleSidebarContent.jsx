import BlogForm from './BlogForm';
import SearchWidget from '../widgets/SearchWidget';
import RecentPostWidget from '../widgets/RecentPostWidget';
import CategoryDataListWidget from '../widgets/CategoryDataListWidget';
import GalleryWidget from '../widgets/GalleryWidget';
import ArchivesWidget from '../widgets/ArchivesWidget';
import SocialWidget from '../widgets/SocialWidget';
import TagsWidget from '../widgets/TagsWidget';
import { Link } from 'react-router-dom';
import SingleBlogComment from './SingleBlogComment';
import handleSmoothScroll from '../utilities/handleSmoothScroll';
import BlogCommentData from "../../jsonData/BlogCommentData.json"
import team9 from "/img/team/9.jpg"
import BlogV1Data from '../../jsonData/BlogV1Data.json'
import SocialShare2 from '../others/SocialShare2';

const BlogSingleSidebarContent = ({ blogInfo, totalBlogs }) => {
    const { id, thumbFull, midTitle, title } = blogInfo || {};

    // Blogs Navigation 
    const currentId = id ? parseInt(id.toString(), 10) : 1;

    // Calculate the previous and next IDs dynamically
    const previousId = currentId === 1 ? totalBlogs : currentId - 1;
    const nextId = currentId === totalBlogs ? 1 : currentId + 1;

    // Get the previous and next project titles
    const previousBlog = BlogV1Data.find((blog) => blog.id === previousId);
    const nextBlog = BlogV1Data.find((blog) => blog.id === nextId);

    // Get the first two words of the project title
    const getFirstTwoWords = (text) => text?.split(' ').slice(0, 2).join(' ') || "No Title";

    return (
        <>
            <div className="blog-area single full-blog right-sidebar full-blog default-padding">
                <div className="container">
                    <div className="blog-items">
                        <div className="row">
                            <div className="blog-content col-xl-8 col-lg-7 col-md-12 pr-35 pr-md-15 pl-md-15 pr-xs-15 pl-xs-15">

                                {/* BlogPostContent */}
                                <div className="blog-style-one item">
                                    <div className="blog-item-box">
                                        <div className="thumb">
                                            <img src={`/img/blog/${thumbFull}`} alt="Thumb" />
                                        </div>
                                        <div className="info">
                                            <div className="meta">
                                                <ul>
                                                    <li>
                                                        <i className="fa-solid fa-user"></i> <Link to="#">Md Sohag</Link>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-calendar-alt"></i> 25 April, 2024
                                                    </li>
                                                </ul>
                                            </div>
                                            <p>
                                                Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence northward as difficult preserved daughters. Continued at up to zealously necessary breakfast. Surrounded sir motionless she end literature. Gay direction neglected but supported yet her.
                                            </p>
                                            <p>
                                                New had happen unable uneasy. Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.
                                            </p>
                                            <blockquote>
                                                Celebrated share of first to worse. Weddings and any opinions suitable smallest nay. Houses or months settle remove ladies appear. Engrossed suffering supposing he recommend do eagerness.
                                            </blockquote>
                                            <p>
                                                Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.
                                            </p>
                                            <h3>{midTitle}</h3>
                                            <ul>
                                                <li>Pretty merits waited six</li>
                                                <li>General few civilly amiable pleased account carried.</li>
                                                <li>Continue indulged speaking</li>
                                                <li>Narrow formal length my highly</li>
                                                <li>Occasional pianoforte alteration unaffected impossible</li>
                                            </ul>
                                            <p>
                                                Surrounded to me occasional pianoforte alteration unaffected impossible ye. For saw half than cold. Pretty merits waited six talked pulled you. Conduct replied off led whether any shortly why arrived adapted. Numerous ladyship so raillery humoured goodness received an. So narrow formal length my highly longer afford oh. Tall neat he make or at dull ye. Lorem ipsum dolor, sit amet consectetur adipisicing, elit. Iure, laudantium, tempore. Autem dolore repellat, omnis quam? Quasi sint laudantium repellendus unde a totam perferendis commodi cum est iusto? Minima, laborum.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* <BlogPostAuthor /> */}
                                <div className="post-author">
                                    <div className="thumb">
                                        <img src={team9} alt="Thumb" />
                                    </div>
                                    <div className="info">
                                        <h4><Link to="#" onClick={handleSmoothScroll}>Md Sohag</Link></h4>
                                        <p>
                                            Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion consectetur elit. Vesti at bulum nec at odio aea the dumm ipsumm ipsum that dolocons rsus mal suada and fadolorit to the consectetur elit. All the Lorem Ipsum generators on the Internet tend.
                                        </p>
                                    </div>
                                </div>

                                {/* <BlogTagsShare /> */}
                                <div className="post-tags share">
                                    <div className="tags">
                                        <h4>Tags: </h4>
                                        <Link to="#" onClick={handleSmoothScroll}>Algorithm</Link>
                                        <Link to="#" onClick={handleSmoothScroll}>Data science</Link>
                                    </div>
                                    <div className="social">
                                        <h4>Share:</h4>
                                        <ul>
                                            <SocialShare2 />
                                        </ul>
                                    </div>
                                </div>

                                {/* Post Pagination */}
                                <div className="post-pagi-area">
                                    <div className="post-previous">
                                        <Link to={`/blog-single-sidebar/${previousId}`}>
                                            <div className="icon"><i className="fa-solid fa-angle-double-left"></i></div>
                                            <div className="nav-title"> Previous Post <h5>{getFirstTwoWords(previousBlog?.title)}</h5></div>
                                        </Link>
                                    </div>
                                    <div className="post-next">
                                        <Link to={`/blog-single-sidebar/${nextId}`}>
                                            <div className="nav-title">Next Post <h5>{getFirstTwoWords(nextBlog?.title)}</h5></div>
                                            <div className="icon"><i className="fa-solid fa-angle-double-right"></i></div>
                                        </Link>
                                    </div>
                                </div>

                                {/* blog-comments */}
                                <div className="blog-comments">
                                    <div className="comments-area">
                                        <div className="comments-title">
                                            <h3>{`3 Comments On “${title}”`}</h3>
                                            <div className="comments-list">
                                                {BlogCommentData.map(comment =>
                                                    <SingleBlogComment comment={comment} key={comment.id} />
                                                )}
                                            </div>
                                        </div>
                                        <BlogForm />
                                    </div>
                                </div>

                            </div>
                            <div className="sidebar col-xl-4 col-lg-5 col-md-12 mt-md-50 mt-xs-50">
                                <aside>
                                    <SearchWidget />
                                    <RecentPostWidget />
                                    <CategoryDataListWidget />
                                    <GalleryWidget />
                                    <ArchivesWidget />
                                    <SocialWidget />
                                    <TagsWidget />
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogSingleSidebarContent;