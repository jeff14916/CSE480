import React from "react";
import styles from './Home.module.css';

const Home = () => {
    return (
        <div className="Home">
            <div className={styles.bgImg}>
                <div className={styles.bgImg_txt}>
                    <h1>Space for Camera Beginners</h1>
                </div>
            </div>
            <div className={styles.content}>
                <div>
                    <h2>
                        Here, we provide four services for beginners.
                    </h2>
                </div>
                <div>
                    <h3>
                        1. Information of Camera
                    </h3>
                    <p className={styles.para}>
                    Talk about cameras. We divide camera types into three categories: DSLR Camera, Mirrorless Camera, and Film Camera. We provide information and features about each camera, and we explain in a friendly manner which camera is suitable for different types of photography.
                    </p>
                </div>
                <div>
                    <h3>
                        2. Camera Recommendation Service
                    </h3>
                    <p className={styles.para}>
                    Now that you have learned about cameras, you'll need a camera to start taking photos. However, with so many camera companies and products available, you may be unsure about what to buy. Answer a few questions and receive personalized camera recommendations based on your preferences!
                    </p>
                </div>
                <div>
                    <h3>
                        3. Information of Photography
                    </h3>
                    <p className={styles.para}>
                    You know about cameras and have decided which one to use, it's time to learn about photography. However, there is so much to learn in order to take good photos that beginners often feel overwhelmed and struggle to apply what they have learned. Therefore, we focus on the most important aspect, which is light and ratio, and provide simple explanations with examples that you can immediately apply.
                    </p>
                </div>
                <div>
                    <h3>
                        4. Photo Gallery
                    </h3>
                    <p className={styles.para}>
                    After going through the first three steps, you have taken your own photos. When you want to share your photos with others, come to the photo gallery and showcase your photos!
    It's an added bonus that other camera beginners can appreciate how others have taken their photos!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home;