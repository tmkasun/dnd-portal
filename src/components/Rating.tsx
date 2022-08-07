import "./Rating.css";

type RatingProps = {
    rated: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    disabled?: boolean
}
export const Rating: React.FC<RatingProps> = ({ onClick, rated, disabled = false }) => {

    return (
        <button
            type="button"
            className={`${rated ? "active" : "inactive"} rating-button`}
            disabled={disabled}
            onClick={onClick}
        >
            <span className="star">&#9733;</span>
        </button>
    )
}

export default Rating;