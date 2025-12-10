import React, { useEffect, useState } from 'react';
import BlogWithSidebarData from '../../jsonData/BlogWithSidebarData.json'
import SingleBlogSideBar from './SingleBlogSideBar';
import Pagination from 'react-paginate';
import SearchWidget from '../widgets/SearchWidget';
import RecentPostWidget from '../widgets/RecentPostWidget';
import CategoryDataListWidget from '../widgets/CategoryDataListWidget';
import GalleryWidget from '../widgets/GalleryWidget';
import ArchivesWidget from '../widgets/ArchivesWidget';
import SocialWidget from '../widgets/SocialWidget';
import TagsWidget from '../widgets/TagsWidget';
import { useNavigate, useParams } from 'react-router-dom';

const BlogWithSideBarContent = () => {

    // Pagination 
    const navigate = useNavigate();
    const { page } = useParams();

    // Set initial page from URL
    const currentPageNumber = Number(page) || 1;
    const [currentPage, setCurrentPage] = useState(currentPageNumber);
    const [itemsPerPage] = useState(3);

    useEffect(() => {
        setCurrentPage(currentPageNumber);
    }, [currentPageNumber]);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentBlogData = BlogWithSidebarData.slice(startIndex, endIndex);

    const handlePageClick = (data) => {
        const selectedPage = data.selected + 1;
        setCurrentPage(selectedPage);

        // Update the URL dynamically
        navigate(`/blog-with-sidebar?page=${selectedPage}`);

        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 200);
    };

    const totalPages = Math.ceil(BlogWithSidebarData.length / itemsPerPage);

    return (
        <>
            <div className="blog-area full-blog default-padding">
                <div className="container">
                    <div className="blog-items">
                        <div className="row">
                            <div className="blog-content col-xl-8 col-lg-7 col-md-12 pr-35 pr-md-15 pl-md-15 pr-xs-15 pl-xs-15">
                                <div className="blog-item-box">
                                    {currentBlogData.map(blog =>
                                        <SingleBlogSideBar blog={blog} key={blog.id} />
                                    )}
                                </div>
                                <Pagination
                                    previousLabel={currentPage === 1 ? <i className='fas fa-ban'></i> : <i className='fas fa-angle-double-left'></i>}
                                    nextLabel={currentPage === totalPages ? <i className='fas fa-ban'></i> : <i className='fas fa-angle-double-right'></i>}
                                    breakLabel={'...'}
                                    pageCount={Math.ceil(BlogWithSidebarData.length / itemsPerPage)}
                                    marginPagesDisplayed={2}
                                    pageRangeDisplayed={5}
                                    onPageChange={handlePageClick}
                                    containerClassName={'pagination text-center'}
                                    activeClassName={'active'}
                                    pageClassName={'page-item'}
                                    pageLinkClassName={'page-link'}
                                    previousLinkClassName={'page-link'}
                                    nextLinkClassName={'page-link'}
                                />
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

export default BlogWithSideBarContent;