import React from 'react';
// import icon from '../assets/icon.jpg';

import { FaInfoCircle } from "react-icons/fa";
import { MdDescription } from "react-icons/md";
import { BsBoxArrowUpRight } from "react-icons/bs";


import './Home.css';

export default function Home() {
    return (
        <div>
            <div className='mainproductpage'>
                <div className='products'>
                    <div id='product' >
                        <span>What are you looking to do?</span>
                    </div>


                    <div className='row'>
                        <div className='col' >
                            <a href='Get an Agreement in Principle' id='anchor' title='Get an Agreement in Principle'>
                                <span className='span'>Get an Agreement in Principle</span>
                            </a>
                        </div>
                        <div className='col'>
                            <a href='Move Home' id='anchor' title='Move Home'><span className='span'>Move Home</span></a>
                        </div>
                        <div className='col' >
                            <a href='Get an Agreement in Principle' id='anchor' title='Buy my first home'>
                                <span className='span'>Buy my first home</span>
                            </a>
                        </div>
                    </div>



                    <div className='row'>
                        <div className='col' >
                            <a href='Get an Agreement in Principle' id='anchor' title='Remortgage to NatWest'>
                                <span className='span'>Remortgage to NatWest</span>
                            </a>
                        </div>
                        <div className='col'>
                            <a href='Move Home' id='anchor' title='Apply for a mortgage'><span className='span'>Apply for a mortgage</span></a>
                        </div>
                        <div className='col' >
                            <a href='Get an Agreement in Principle' id='anchor' title='Log in to Manage my Mortgage'>
                                <span>Log in to Manage my Mortgage</span>
                            </a>
                        </div>
                    </div>

                    <div className='row'>

                        <div className='col'>
                            <a href='Move Home' id='anchor' title='Buy a property to let'><span className='span'>Buy a property to let</span></a>
                        </div>
                    </div>
                    <div className='mt-4 px-2'>
                        <span><FaInfoCircle /></span>

                        <p>
                            NatWest mortgages are available to over 18s. Your home or property may be repossessed if you do not keep up repayments on your mortgage.
                        </p>
                    </div>
                </div>
            </div>
            <div className='loan'>
                <div className='row'>
                    <div className='col'>
                        <span><MdDescription /></span>
                        <h3>You could buy your new home with just a 5% deposit</h3>
                    </div>
                    <div className='col mt-5'>
                        <p className='para1'>
                            With our range of 95% mortgages, you could be moving into your new home sooner than  you imagined.
                            <a href='/'><span><BsBoxArrowUpRight /></span></a>
                        </p>                        
                        <p className='para2 ' >
                            <a href='/' id='bold'>
                                <b>Find out more about 95% mortgages </b>
                                <span><BsBoxArrowUpRight /></span>
                            </a>
                        </p>
                        <p>
                            Exclusions & eligibility criteria apply.
                        </p>
                    </div>
                </div>
            </div>

        </div>


    )
}
