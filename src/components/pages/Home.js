import { InputText } from 'primereact/inputtext';
import '@styles/style.scss';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import Post from '@generics/Post';

export default function Home() {

    return (
        <div id="page-home" className="grid flex-grow-1 ">
            <div id="post-column" className='col-6 mx-auto border-x-1 border-y-none border-solid border-gray-500 my-2' > 
                <Post></Post>
            </div>
        </div>
    );
}