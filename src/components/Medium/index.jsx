import React from 'react';
import styles from './index.module.css'
import left from "../../assets/left.svg"
import right from "../../assets/right.png"
import check from "../../assets/check.png"
import time from "../../assets/time.png"
import phone from "../../assets/phone.png"
import add from "../../assets/add.png"
import { useRef } from 'react';

function Medium() {

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
        if (projectName.current.value.length < 4 || startTime.current.value.length < 4 ) {
            alert("Malumot 3 ta belgidan ko'p bo'lishi kerak")
        }
        if (projectDescription.current.value.length < 8 || projectLink.current.value.length < 8 ) {
            alert("Malumot 8 ta belgidan ko'p bo'lishi kerak")
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
                <img src={time} alt="" />
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
                        <label  htmlFor="Shablon">Link</label><br />
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
                        <button>O’zbekcha</button>
                        <button>Русский</button>
                        <button>English</button>
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