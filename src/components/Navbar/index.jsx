import React, { useState } from 'react'
import styles from "./index.module.css"
import logo from "../../assets/logo.svg"
import select from "../../assets/select.svg"
import nav from "../../assets/nav.png"
import nav2 from "../../assets/nav2.png"

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function Navbar() {


    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };


    return (
        <div className={styles.navbar}>
            <img src={logo} alt="" />
            <div className={styles.nav}>
                <div className={styles.navs}>
                    <img src={nav} alt="" />
                    <p>Asosiy</p>
                </div>
                <div className={styles.navs}>
                    <img src={nav} alt="" />
                    <p>Mijozlar bazasi</p>
                </div>
                <div className={styles.navs}>
                    <img src={nav2} alt="" />
                    <p style={{color:"rgba(0, 98, 255, 1)"}}>Tracking loyihalari</p>
                </div>
                <div className={styles.navs}>
                    <img src={nav} alt="" />
                    <p>Sharh olish loyihalari</p>
                </div>
                <div className={styles.navs}>
                    <img src={nav} alt="" />
                    <p>Redirect loyihalari</p>
                </div>
            </div>
            <div className={styles.select}>
                <img src={select} alt="" />
                <FormControl className={styles.sel} variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={age}
                        onChange={handleChange}
                        label="Age"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>
    )
}

export default Navbar