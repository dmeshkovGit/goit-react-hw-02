import styles from './Profile.module.css'

export const Profile = ({ userData: { avatar, username, tag, location, stats } }) => {
    return (
        <div className={styles.container}>
            <div className={styles.userContainer}>
                <img className={styles.avatar}
                    src={avatar}
                    alt="User avatar"
                />
                <p className={styles.name}>{username}</p>
                <p className={styles.userTags}>@{tag}</p>
                <p className={styles.userTags}>{location}</p>
            </div>

            <ul className={styles.userStats}>
                <li className={styles.statsItem}>
                    <span className={styles.statsName}>Followers</span>
                    <span className={styles.statsAmounts}>{stats.followers}</span>
                </li>
                <li className={styles.statsItem}>
                    <span className={styles.statsName}>Views</span>
                    <span className={styles.statsAmounts}>{stats.views}</span>
                </li>
                <li className={styles.statsItem}>
                    <span className={styles.statsName}>Likes</span>
                    <span className={styles.statsAmounts}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
}