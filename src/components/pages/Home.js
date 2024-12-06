import { InputText } from 'primereact/inputtext';
import '@styles/style.scss';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import Post from '@generics/Post';
import axios from 'axios';
import { useEffect, useState } from 'react';
import PostsColumn from '@common/PostsColumn';
import UserInfos from '@common/UserInfos';
import { Button } from 'primereact/button';

export default function Home() {

    return (
        <div id="page-home" className="grid flex-grow-1 ">
            <div className='col-3 mt-3'>
                <h1 className='flex justify-content-center'>In'Tweet</h1>
            </div>
            <div id="post-column" className='col-6 border-x-1 border-y-none border-solid border-gray-500 my-2 ' >
                <PostsColumn />
            </div>
            <div className='col-3 flex flex-column justify-content-around align-items-center' style={{height: '75%'}}>
                <UserInfos />
                <Button icon="pi pi-pen-to-square" rounded aria-label="Filter"/>
            </div>
        </div>
    );
}