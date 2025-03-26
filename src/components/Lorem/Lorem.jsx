import React from 'react'
import s from './Lorem.module.scss'
const Lorem = () => {
    return (
        <>
            <section>

                <div className={s.info}>
                    <div className="container">
                        <div className={s.title}>
                            <h1>Product Qualification</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt Lorem ipsum dolor sit amet, consectetur </p>
                        </div>

                        <div className={s.wrapper}>
                            <div className={s.wrap}>
                                <div className={s.box}>
                                    <img src="/hand.png" alt="" />
                                    <h1>Sedut unde omnis</h1>
                                    <p>Sed ut perspiciatis unde omnis iste <br /> natus error voluptatem accusantium <br /> doloremque laudantium totam rem illo </p>
                                </div>
                                <div className={s.box}>
                                    <img src="/book.png" alt="" />
                                    <h1>Sedut unde omnis</h1>
                                    <p>Sed ut perspiciatis unde omnis iste <br /> natus error voluptatem accusantium <br /> doloremque laudantium totam rem illo </p>
                                </div>
                            </div>
                            <img className={s.girl} src="/Rectangle 24615.png" alt="" />

                            <div className={s.wrap}>
                                <div className={s.box}>
                                    <img src="/star.png" alt="" />
                                    <h1>Sedut unde omnis</h1>
                                    <p>Sed ut perspiciatis unde omnis iste <br /> natus error voluptatem accusantium <br /> doloremque laudantium totam rem illo </p>
                                </div>
                                <div className={s.box}>
                                    <img src="/correct.png" alt="" />
                                    <h1>Sedut unde omnis</h1>
                                    <p>Sed ut perspiciatis unde omnis iste <br /> natus error voluptatem accusantium <br /> doloremque laudantium totam rem illo </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Lorem