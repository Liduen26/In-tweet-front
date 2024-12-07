import PostsColumn from '@common/PostsColumn';
import UserInfos from '@common/UserInfos';
import '@styles/style.scss';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import { Button } from 'primereact/button';
import { useState } from 'react';

export default function Home() {
    const [isAdminMode, setIsAdminMode] = useState(false);
    const [isBanned, setIsBanned] = useState(true);

    console.log(isAdminMode);

    return (
        <div id="page-home" className="grid flex-grow-1 ">
            <div className='col-3 mt-3'>
                <h1 className='flex justify-content-center'>In'Tweet</h1>
            </div>
            <div id="post-column" className='col-6 border-x-1 border-y-none border-solid border-gray-500 my-2 ' >
                <PostsColumn isAdminMode={isAdminMode} />
            </div>
            <div className='col-3 flex flex-column justify-content-around align-items-center' style={{height: '75%'}}>
                <UserInfos isAdminMode={isAdminMode} setIsAdminMode={setIsAdminMode} isBanned={setIsBanned} />
                <span>
                    {
                        !isBanned && 
                        <Button icon="pi pi-pen-to-square" rounded aria-label="Filter" />
                    }
                </span>
            </div>
        </div>
    );
}