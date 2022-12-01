import { useContext } from "react";
import {AuthContext} from "../../../context";

export const ItemLists = ({ item, children, type }) => {
    const { handleCreateFan } = useContext(AuthContext);

    return (
        <div key={item.name} className="item-list-layout">
            <div>
                <p>name: {item.name}</p>
                {children}
            </div>
            <div className="item-image-layout">

                <img className="item-image" src={item.url} alt="asd" />
            </div>
        </div>
    );
};
