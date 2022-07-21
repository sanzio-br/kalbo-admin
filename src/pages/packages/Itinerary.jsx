import React from "react";

const Itinerary = ({ itinerary }) => {
  return (
    <div className="text-start">
      <h5 className="details-header">Itinerary</h5>
      <div className="day-details">
        <div>
          {itinerary
            ? itinerary.contentState.blocks.map((block) => {
                return (
                  <div>
                    <div>
                      {block.inlineStyleRanges
                        ? block.inlineStyleRanges.map((inlineStyleRange) => {
                            return (
                              <>
                                {inlineStyleRange.style === "UNDERLINE" ? (
                                  <div className="day-header">{block.text}</div>
                                ) : (
                                  ""
                                )}
                              </>
                            );
                          })
                        : ""}
                    </div>
                    {!block.inlineStyleRanges.length &&
                    block.type === "ordered-list-item" ? (
                      <ol>{block.text}</ol>
                    ) : (
                      !block.inlineStyleRanges.length && block.text
                    )}
                  </div>
                );
              })
            : ""}
        </div>
        {/* <div className="day-header">
          {itinerary
            ? itinerary.contentState.blocks.map((block) => {
                return (
                  <div>
                    {block.type === "ordered-list-item" ? (
                      <ol>{block.text}</ol>
                    ) : (
                      block.text
                    )}
                  </div>
                );
              })
            : ""}
        </div> */}
      </div>
    </div>
  );
};

export default Itinerary;
