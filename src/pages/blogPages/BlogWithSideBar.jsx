import React from 'react';
import HeaderV5 from '../../components/header/HeaderV5';
import BreadCrumb from '../../components/breadCrumb/BreadCrumb';
import BlogWithSideBarContent from '../../components/blog/BlogWithSideBarContent';
import FooterV1 from '../../components/footer/FooterV1';

const BlogWithSideBar = () => {
    return (
        <>
            <HeaderV5 />
            <BreadCrumb breadCrumb="blog-with-sidebar" title1="Blog Sidebar" bottomSpace="pb-0" />
            <BlogWithSideBarContent />
            <FooterV1 />
        </>
    );
};

export default BlogWithSideBar;