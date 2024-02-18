import css from './TaskTitle.module.css'

export const TaskTitle = ({children}) => {
    return (
        <h2 className={css.title}>{children}</h2>
    )
}