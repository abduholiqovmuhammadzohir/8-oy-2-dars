import React from 'react';
import styles from './index.module.css'
import left from "../../assets/left.svg"
import right from "../../assets/right.png"
import check from "../../assets/check.png"
import time from "../../assets/time.png"
import phone from "../../assets/phone.png"
import add from "../../assets/add.png"
import { useRef } from 'react';
import Slider from '@mui/material/Slider';

function Medium() {



    const marks = [
        {
            value: 1,
            label: '13:00',
        },
        {
            value: 5,
            label: '14:00',
        },
        {
            value: 9,
            label: '15:00',
        },
        {
            value: 13,
            label: '16:00',
        },

        {
            value: 17,
            label: '17:00',
        },
        {
            value: 21,
            label: '18:00',
        },
        {
            value: 25,
            label: '19:00',
        },
        {
            value: 30,
            label: '20:00',
        },
        {
            value: 34,
            label: '21:00',
        },
        {
            value: 39,
            label: '22:00',
        },
        {
            value: 43,
            label: '23:00',
        },
        {
            value: 47,
            label: '00:00',
        },
        {
            value: 51,
            label: '01:00',
        },
        {
            value: 55,
            label: '02:00',
        },
        {
            value: 60,
            label: '03:00',
        },
        {
            value: 64,
            label: '04:00',
        },
        {
            value: 68,
            label: '05:00',
        },
        {
            value: 72,
            label: '06:00',
        },
        {
            value: 76,
            label: '07:00',
        },
        {
            value: 80,
            label: '08:00',
        },
        {
            value: 85,
            label: '09:00',
        },
        {
            value: 89,
            label: '10:00',
        },
        {
            value: 94,
            label: '11:00',
        },
        {
            value: 98,
            label: '12:00',
        },
    ];

    function valuetext(value) {
        return `${value}°C`;
    }


    const projectName = useRef('');
    const projectLink = useRef('');
    const projectDescription = useRef('');
    const startTime = useRef('');



    const handleButtonClick = () => {
        if (!projectName.current.value) {
            projectName.current.focus();
            alert("Loyiha nomini kiriting")
        }
        if (!startTime.current.value) {
            startTime.current.focus();
            alert("Vaqtni kiriting")
        }
        if (!projectDescription.current.value) {
            projectDescription.current.focus();
            alert("Descriptiondi kiriting")
        }
        if (!projectLink.current.value) {
            projectLink.current.focus();
            alert("Link kiriting")
        }
        if (projectName.current.value.length < 4 || startTime.current.value.length < 4) {
            alert("Malumot 3 ta belgidan ko'p bo'lishi kerak")
        }
        if (projectDescription.current.value.length < 8 || projectLink.current.value.length < 8) {
            alert("Malumot 8 ta belgidan ko'p bo'lishi kerak")
        }
    };


    const handleChangeLanguage = (language) => {
        if (language === 'O’zbekcha') {
            projectDescription.current.placeholder = 'Habar matni...';
        } else if (language === 'Русский') {
            projectDescription.current.placeholder = 'Текст сообщения...';
        } else if (language === 'English') {
            projectDescription.current.placeholder = 'Message text...';
        }
    };

    return (



        <div className={styles.medium}>
            <div className={styles.header}>
                <div className={styles.left}>
                    <img src={left} alt="" />
                    <h1>Subloyiha ochish</h1>
                </div>
                <div className={styles.right}>
                    <button onClick={handleButtonClick}><span>Davom etish</span> <img src={right} /></button>
                </div>
            </div>
            <hr />
            <div className={styles.inputs}>
                <div className={styles.tag}>
                    <div>
                        <label>Loyiha nomi</label><br />
                        <input ref={projectName} type="text" placeholder='Loyiha nomi' />
                    </div>
                    <div>
                        <label>Tag</label><br />
                        <div className={styles.select}>
                            <select>
                                <option value="1">Tag</option>
                                <option value="2">Tag</option>
                                <option value="3">Tag</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className={styles.tag}>
                    <div>
                        <label><img src={check} alt="" /> <span>Boshlanish vaqti</span></label><br />
                        <input ref={startTime} type="time" placeholder='Loyiha nomi' />
                    </div>

                    <div>
                        <label><img src={check} alt="" /> <span>Qancha vaqtda habar yuboriladi?</span></label><br />
                        <div className={styles.select}>
                            <select>
                                <option value="1">O’sha zahoti</option>
                                <option value="2">O’sha zahoti</option>
                                <option value="3">O’sha zahoti</option>
                            </select>
                        </div>
                    </div>

                </div>
                <div className={styles.check}>
                    <img src={check} alt="" />
                    <span>Habar yuborilmaydigan vaqt</span>
                </div>

                <div className={styles.slider}>
                    <Slider
                        track="inverted"
                        aria-labelledby="track-inverted-range-slider"
                        getAriaValueText={valuetext}
                        defaultValue={[20, 37]}
                        marks={marks}
                    />
                </div>
            </div>
            <div className={styles.footer}>
                <div className={styles.text}>
                    <h1>Habarning ko’rinishi</h1>
                    <div className={styles.shablon}>
                        <label htmlFor="Shablon">Shablon</label><br />
                        <select>
                            <option value="1">Shablon</option>
                            <option value="2">Shablon</option>
                            <option value="3">Shablon</option>
                        </select>
                    </div>
                    <div className={styles.shablon}>
                        <label htmlFor="Shablon">Link</label><br />
                        <input ref={projectLink} type="text" placeholder='Link' />
                    </div>
                    <div className={styles.habar}>
                        <h2>Habar</h2>
                        <div className={styles.add}>
                            <img src={add} alt="" />
                            <h3>Shablon holatida saqlash</h3>
                        </div>
                    </div>
                    <div className={styles.button}>
                        <button onClick={() => handleChangeLanguage('O’zbekcha')}>O’zbekcha</button>
                        <button onClick={() => handleChangeLanguage('Русский')}>Русский</button>
                        <button onClick={() => handleChangeLanguage('English')}>English</button>
                    </div>
                    <div className={styles.area}>
                        <textarea ref={projectDescription} cols="30" rows="10" placeholder='Habar matni...'></textarea>
                    </div>
                </div>
                <div className={styles.img}>
                    <img src={phone} />
                </div>
            </div>
        </div>
    )
}

export default Medium