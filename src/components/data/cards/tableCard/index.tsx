import styles from "./styles.module.scss";

interface TableCardProps {
    title: string;
    description: string;
    action: React.ReactNode;
    children: React.ReactNode;

}

export default function TableCard({ title, description, action, children }: TableCardProps) {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.title}>
                    <div>{title}</div>
                    <div className={styles.description}>{description}</div>
                </div>
                {action}
            </div>
            {children}
        </div>
    )
}