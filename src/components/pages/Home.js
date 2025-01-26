import PostsColumn from '@common/PostsColumn';
import TweetModal from './Tweetmodal';
import UserInfos from '@common/UserInfos';
import '@styles/style.scss';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import { Button } from 'primereact/button';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const [isAdminMode, setIsAdminMode] = useState(false);
    const [isBanned, setIsBanned] = useState(true);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [refetch, setRefetch] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("accessToken")) {
            navigate("/login");
        }
    }, []);

    return (
        <div id="page-home" className="grid flex-grow-1 ">
            <div className='col-3 mt-3'>
                <h1 className='flex justify-content-center'>In'Tweet</h1>
            </div>
            <div id="post-column" className='col-6 border-x-1 border-y-none border-solid border-gray-500 my-2 ' >
                <PostsColumn refetch={refetch} setRefetch={setRefetch} isAdminMode={isAdminMode} />
            </div>
            <div className='col-3 flex flex-column justify-content-around align-items-center' style={{height: '75%'}}>
                <UserInfos isAdminMode={isAdminMode} setIsAdminMode={setIsAdminMode} isBanned={setIsBanned} />
                <span>
                    {
                        !isBanned && (
                            <Button
                                icon="pi pi-pencil"
                                rounded
                                aria-label="Tweet"
                                onClick={() => setIsModalVisible(true)}
                            />
                    )}
                </span>
            </div>
            <TweetModal visible={isModalVisible} setRefetch={setRefetch} onClose={() => setIsModalVisible(false)} />
        </div>
    );
}