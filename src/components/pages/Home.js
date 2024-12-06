import { InputText } from 'primereact/inputtext';
import '@styles/style.scss';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import Post from '@generics/Post';
import axios from 'axios';
import { useEffect, useState } from 'react';
import PostsColumn from '@common/PostsColumn';

export default function Home() {

    


    

    return (
        <div id="page-home" className="grid flex-grow-1 ">
            <div id="post-column" className='col-6 mx-auto border-x-1 border-y-none border-solid border-gray-500 my-2' >
                <PostsColumn />
            </div>
        </div>
    );
}