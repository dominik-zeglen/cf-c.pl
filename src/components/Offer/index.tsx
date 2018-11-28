import * as React from "react";

import { getPageFields, IPage } from "../../utils";
import RichText from "../RichText";
import "./style.scss";

interface IOfferProps {
  offer: IPage;
  reverse: boolean;
}

export const Offer: React.SFC<IOfferProps> = ({ offer, reverse }) => {
  const fields = getPageFields(offer);
  return fields.content === undefined ? (
    <>
      <div className="offer__header-container">
        <h3 className="offer__header">{offer.name}</h3>
      </div>
      <div className="offer">
        <div className="offer__image-container offer__image-container--full">
          <img className="offer__image" src={"/static/" + fields.image} />
        </div>
      </div>
    </>
  ) : reverse ? (
    <div className="offer">
      <div className="offer__content-container">
        <h3 className="offer__header">{offer.name}</h3>
        <div className="offer__content">
          <RichText content={fields.content} />
        </div>
      </div>
      <div className="offer__image-container">
        <img className="offer__image" src={"/static/" + fields.image} />
      </div>
    </div>
  ) : (
    <div className="offer">
      <div className="offer__image-container">
        <img className="offer__image" src={"/static/" + fields.image} />
      </div>
      <div className="offer__content-container">
        <h3 className="offer__header">{offer.name}</h3>
        <div className="offer__content">
          <RichText content={fields.content} />
        </div>
      </div>
    </div>
  );
};
export default Offer;
