import React from 'react'
import Navbar from './navbar'
import SideBar from './SideBar'
import logo from '../Assets/logo.png'
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import ArticleIcon from '@mui/icons-material/Article';
import LogoutIcon from '@mui/icons-material/Logout';
import DeleteIcon from '@mui/icons-material/Delete';
import HttpsIcon from '@mui/icons-material/Https';
import GroupsIcon from '@mui/icons-material/Groups';
import MessageIcon from '@mui/icons-material/Message';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MenuIcon from '@mui/icons-material/Menu';
import jobs from '../Assets/jobs.png';
import review from '../Assets/Review.png'
import views from '../Assets/views.png'
import shortlisted from '../Assets/Shortlisted.png'
import { useState } from 'react';

function CandidateDashboard() {
    const [menuButton, setMenuButton] = useState(false)

    return (
        <div>
            <Navbar />
            <div className='flex'>
                <div className='hidden w-[23%] h-[90vh] bg-white overflow-y-scroll
                md:flex'>

                    <div className='flex flex-col items-center justify-between h-full bg-white py-4'>
                        <div className='w-full flex flex-col gap-2 px-2'>

                            <div className='flex gap-2 items-center before:text-black hover:text-green-700  rounded before:font-normal hover:font-semibold  hover:bg-[#F5F5F2] px-2 py-2'>

                                <div><DashboardIcon /></div>
                                <h1 className='text-black'>Dashboard</h1>
                            </div>

                            <div className='flex gap-2 items-center before:text-black hover:text-green-700  rounded before:font-normal hover:font-semibold  hover:bg-[#F5F5F2] px-2 py-2'>

                                <div><AccountCircleRoundedIcon /></div>
                                <h1 className='text-black'>Profile</h1>
                            </div>

                            <div className='flex gap-2 items-center before:text-black hover:text-green-700  rounded before:font-normal hover:font-semibold  hover:bg-[#F5F5F2] px-2 py-2'>
                                <ArticleIcon />
                                <h1 className='text-black'>My Profile</h1>
                            </div>

                            <div className='flex gap-2 items-center before:text-black hover:text-green-700 rounded before:font-normal hover:font-semibold  hover:bg-[#F5F5F2] px-2 py-2'>
                                <FactCheckIcon />
                                <h1 className='text-black'>My Applied</h1>
                            </div>

                            <div className='flex gap-2 items-center before:text-black hover:text-green-700 rounded before:font-normal hover:font-semibold  hover:bg-[#F5F5F2] px-2 py-2'>
                                <FavoriteRoundedIcon />
                                <h1 className='text-black'>Job Shortlist</h1>
                            </div>

                            <div className='flex gap-2 items-center before:text-black hover:text-green-700 rounded before:font-normal hover:font-semibold  hover:bg-[#F5F5F2] px-2 py-2'>
                                <PeopleRoundedIcon />
                                <h1 className='text-black'>Following Employers</h1>
                            </div>

                            <div className='flex gap-2 items-center before:text-black hover:text-green-700 rounded before:font-normal hover:font-semibold  hover:bg-[#F5F5F2] px-2 py-2'>
                                <NotificationsNoneIcon />
                                <h1 className='text-black'>Job Alerts</h1>
                            </div>

                            <div className='flex gap-2 items-center before:text-black hover:text-green-700 rounded before:font-normal hover:font-semibold  hover:bg-[#F5F5F2] px-2 py-2'>
                                <MonetizationOnIcon />
                                <h1 className='text-black'>Packages</h1>
                            </div>

                            <div className='flex gap-2 items-center before:text-black hover:text-green-700 rounded before:font-normal hover:font-semibold  hover:bg-[#F5F5F2] px-2 py-2'>
                                <MessageIcon />
                                <h1 className='text-black'>Messages</h1>
                            </div>

                            <div className='flex gap-2 items-center before:text-black hover:text-green-700 rounded before:font-normal hover:font-semibold  hover:bg-[#F5F5F2] px-2 py-2'>
                                <GroupsIcon />
                                <h1 className='text-black'>Meetings</h1>
                            </div>

                            <div className='flex gap-2 items-center before:text-black hover:text-green-700 rounded before:font-normal hover:font-semibold  hover:bg-[#F5F5F2] px-2 py-2'>
                                <HttpsIcon />
                                <h1 className='text-black'>Change Password</h1>
                            </div>

                            <div className='flex gap-2 items-center before:text-black hover:text-green-700 rounded before:font-normal hover:font-semibold  hover:bg-[#F5F5F2] px-2 py-2'>
                                <DeleteIcon />
                                <h1 className='text-black'>Delete Profile</h1>
                            </div>

                            <div className='flex gap-2 items-center before:text-black hover:text-green-700 rounded before:font-normal hover:font-semibold  hover:bg-[#F5F5F2] px-2 py-2'>
                                <LogoutIcon />
                                <h1 className='text-black'>Logout</h1>
                            </div>
                        </div>

                    </div>

                </div>

                <div className='flex flex-col gap-8 w-full text-green-700 bg-[#eeeeee99] px-4 py-6'>

                    <div className='flex flex-col gap-4 w-full text-green-700 '>
                        <div className='flex gap-2'>
                            <MenuIcon />
                            <p className='font-semibold'>Show SideBar</p>

                        </div>

                        <div className='border-l-[5px] border-green-700 px-3 '>
                            <p className='text-black font-semibold text-xl'>Application Statistics</p>

                        </div>
                    </div>

                    <div className='flex flex-col gap-4'>

                        <div className='w-full bg-white px-3 py-3 rounded flex gap-4 items-center '>

                            <img src={jobs} className='w-12 h-12'></img>

                            <div className='flex flex-col gap-1'>
                                <p className='text-black font-semibold text-3xl'>2</p>
                                <p className='text-black font-semibold text-xl'>Applied Jobs</p>
                            </div>

                        </div>

                        <div className='w-full bg-white px-3 py-3 rounded flex gap-4 items-center '>

                            <img src={jobs} className='w-12 h-12'></img>

                            <div className='flex flex-col gap-1'>
                                <p className='text-black font-semibold text-3xl'>2</p>
                                <p className='text-black font-semibold text-xl'>Applied Jobs</p>
                            </div>

                        </div>

                        <div className='w-full bg-white px-3 py-3 rounded flex gap-4 items-center '>

                            <img src={views} className='w-12 h-12'></img>

                            <div className='flex flex-col gap-1'>
                                <p className='text-black font-semibold text-3xl'>2</p>
                                <p className='text-black font-semibold text-xl'>Applied Jobs</p>
                            </div>

                        </div>

                        <div className='w-full bg-white px-3 py-3 rounded flex gap-4 items-center '>

                            <img src={shortlisted} className='w-12 h-12'></img>

                            <div className='flex flex-col gap-1'>
                                <p className='text-black font-semibold text-3xl'>2</p>
                                <p className='text-black font-semibold text-xl'>Applied Jobs</p>
                            </div>

                        </div>
                    </div>

                </div>



            </div>

        </div>
    )
}

export default CandidateDashboard