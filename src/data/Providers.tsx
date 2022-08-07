import React, { useContext, useState } from "react";

const LS_RATINGS_KEY = "dnd-ratings"
const RatingContext = React.createContext<{
    ratings: { [index: string]: boolean };
    updateRating: (spellIndex: string, rating: boolean) => void
}>({
    ratings: {},
    updateRating: (spellIndex: string, rating: boolean) => { }
})

const { Provider } = RatingContext;

type RatingProviderProps = {
    children: React.ReactNode;
}
export const RatingProvider: React.FC<RatingProviderProps> = ({ children }) => {
    const [ratings, setRatings] = useState(() => JSON.parse(localStorage.getItem(LS_RATINGS_KEY) || "{}"));
    const updateRating = (spellIndex: string, rating: boolean) => {
        const newRatings = { ...ratings, [spellIndex]: rating };
        setRatings(newRatings);
        localStorage.setItem(LS_RATINGS_KEY, JSON.stringify(newRatings))
    }
    return (
        <Provider value={{ ratings, updateRating }}>
            {children}
        </Provider>
    )
}

export const useRatings = () => {
    const { ratings } = useContext(RatingContext);
    return ratings;
}


export const useUpdateRating = () => {
    const { updateRating } = useContext(RatingContext);
    return updateRating;
}

export default RatingProvider;