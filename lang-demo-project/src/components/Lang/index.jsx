import React from 'react';
import ReactCountryFlag from "react-country-flag";
import { Select, Tooltip } from 'antd';
import { Store_one } from '../../store';
import { useContext } from 'react';

const Lang = () => {
    const { value, handle} = useContext(Store_one);
    const langItems = [
        {
            value: 'EN',
            label: <div className='flex gap-[8px] items-center'><ReactCountryFlag countryCode='US' /><span>US. English</span></div>
        },
        {
            value: 'VI',
            label: <div className='flex gap-[8px] items-center'><ReactCountryFlag countryCode='VN' /><span>VN. Vietnamese</span></div>
        },
        {
            value: 'KR',
            label: <div className='flex gap-[8px] items-center'><ReactCountryFlag countryCode='KR' /><span>KR. Korean</span></div>
        },
    ]
    return (
        <div className='changeLanguage float-right'>
            <Tooltip title='Change language for this client!'>
                <Select
                    defaultValue={value}
                    options={langItems}
                    onChange={(value) => handle(value)}
                />
            </Tooltip>
        </div>
    )
}

export default Lang;