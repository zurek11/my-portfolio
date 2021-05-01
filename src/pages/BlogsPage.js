import React from "react";
import styled from "styled-components";

import blogs from "../data/blogs";
import Title from "../components/Titles/Title";
import {MainLayout, InnerLayout} from "../styles/Layout";


function BlogsPage() {
    return (
        <MainLayout>
            <Title title={"Blogs"} span={"Blogs"} />
            <BlogsStyled>
                <InnerLayout className={"blog"}>
                    {
                        blogs.map((blog)=> {
                            return <div key={blog.id} className={"blog-item"}>
                                <div className={"image"}>
                                    <img src={blog.image} alt={blog.id} />
                                </div>
                                <div className={"title"}>
                                    <a href={blog.link}>
                                        {blog.title}
                                    </a>
                                </div>
                            </div>
                        })
                    }
                </InnerLayout>
            </BlogsStyled>
        </MainLayout>
    )
}

const BlogsStyled = styled.div`
  margin-top: 3rem;
  
  .blog {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 3rem;
    
    .blog-item {
      padding: 1rem 1rem;
      background-color: var(--background-dark-color-2);
      border-top: 8px solid var(--border-color);
      transition: all .3s ease-in-out;

      &:hover {
        border-top: 8px solid var(--primary-color);
        transform: translateY(5px);
      }
      
    }
    
    .image {
      width: 100%;
      overflow: hidden;
      padding-bottom: .5rem;
      
      img {
        width: 100%;
        height: 90%;
        object-fit: cover;
        transition: all .4s ease-in-out;
        
        &:hover {
          cursor: pointer;
          transform: rotate(3deg) scale(1.1);
        }
      }
    }
    
    .title {
      a {
        font-size: 1.8rem;
        padding: 4rem 0;
        color: var(--white-color);
        cursor: pointer;
        transition: all .3s ease-in-out;
        
        &:hover {
          color: var(--primary-color);
        }
      }
    }
  }
`;

export default BlogsPage;
