import React from 'react'
import styles from './index.module.css'
import left from "../../assets/left.svg"
import right from "../../assets/right.png"
import check from "../../assets/check.png"
import time from "../../assets/time.png"
import phone from "../../assets/phone.png"


function Medium() {
    return (
        <div className={styles.medium}>
            <div className={styles.header}>
                <div className={styles.left}>
                    <img src={left} alt="" />
                    <h1>Subloyiha ochish</h1>
                </div>
                <div className={styles.right}>
                    <button><span>Davom etish</span> <img src={right} /></button>
                </div>
            </div>
            <hr />
            <div className={styles.inputs}>
                <div className={styles.tag}>
                    <div>
                        <label>Loyiha nomi</label><br />
                        <input type="text" placeholder='Loyiha nomi' />
                    </div>
                    <div>
                        <label>Loyiha nomi</label><br />
                        <input type="text" placeholder='Loyiha nomi' />
                    </div>
                </div>
                <div className={styles.tag}>
                    <div>
                        <label><img src={check} alt="" /> <span>Boshlanish vaqti</span></label><br />
                        <input type="time" placeholder='Loyiha nomi' />
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
                        <label htmlFor="Shablon">Link</label><br />
                        <input type="text" placeholder='Link'/>
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