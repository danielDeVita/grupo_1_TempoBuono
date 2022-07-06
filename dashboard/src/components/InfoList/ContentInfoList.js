import React from "react";
import Card from "./subcomponents/Card";

function ContentInfoList(props) {

  const {listaUsuarios} = props;

    
    const mapper = function(cardData, index){
    return (
        <Card 
        key={cardData.title + index}
        title={cardData.title}
        value={cardData.value}
        icon={cardData.icon}
        color={cardData.color}
    />
    )
}

    return(
        <div className="row">
            { Array.isArray(infoCardList) && infoCardList.map(mapper) }
        </div>
    )
}

export default ContentInfoList;