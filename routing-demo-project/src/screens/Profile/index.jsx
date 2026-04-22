import React from 'react';
import { Tabs, Button } from 'antd';
import { Link, Outlet, useLocation } from 'react-router';
import CardUserOverview from '../../components/CardUserOverview';
import { useNavigate } from 'react-router';


const Profile = () => {
    const navigate = useNavigate();

    const tabItems = [
        {
            key: 'my-posts',
            label: 'My posts'
        },
        {
            key: 'my-profile',
            label: 'My Profile'
        }
    ];
    //get active key from url
    const activeKey = useLocation().pathname.split('/').pop()
    return (
        <div className='profilePage m-auto p-[18px] max-w-[90vw] min-h-[50vh] flex gap-[18px]'>
            <div className='flex-[0.25]  p-[18px] bg-white'>
                <CardUserOverview />
            </div>
            <div className='flex-[0.75] bg-white  p-[18px]'>
                <Link className='float-right' to={'/login'}>
                    <Button>
                        Log in
                    </Button>
                </Link>
                <Tabs
                    items={tabItems}
                    activeKey={activeKey}
                    onChange={(key) => {
                        navigate(key);
                    }}
                />
                <Outlet />
            </div>
        </div>
    )
}

export default Profile;