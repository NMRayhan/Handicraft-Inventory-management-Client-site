import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardCheck, faUsers } from "@fortawesome/free-solid-svg-icons";
import { faFaceSmileWink } from "@fortawesome/free-regular-svg-icons";

const BusinessSummary = () => {
  return (
    <div className="my-20">
      <h4 className="text-center text-primary text-4xl font-medium">
        Our Last 4 year business Summary
      </h4>
      <div class="stats stats-vertical w-full lg:stats-horizontal shadow mt-10">
        <div class="stat">
          <div className="grid grid-flow-col justify-around items-center">
            <div>
              <FontAwesomeIcon
                icon={faClipboardCheck}
                className="text-secondary text-6xl"
              />
            </div>
            <div>
              <div class="stat-title font-bold">Success Delivery</div>
              <div class="stat-value text-secondary">31K</div>
              <div class="stat-desc">Jan 1st - Feb 1st</div>
            </div>
          </div>
        </div>

        <div class="stat">
          <div className="grid grid-flow-col justify-around items-center">
            <div>
              <FontAwesomeIcon
                icon={faUsers}
                className="text-info text-6xl"
              />
            </div>
            <div>
              <div class="stat-title font-bold">World Wide User</div>
              <div class="stat-value text-info">4,200</div>
              <div class="stat-desc">↖ 400 (22% increase per year)</div>
            </div>
          </div>
        </div>

        <div class="stat">
          <div className="grid grid-flow-col justify-around items-center">
            <div>
              <FontAwesomeIcon
                icon={faFaceSmileWink}
                className="text-success text-6xl"
              />
            </div>
            <div>
              <div class="stat-title font-bold">Client Satisfaction</div>
              <div class="stat-value text-success">1,200</div>
              <div class="stat-desc">↖ (90%)</div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className='grid grid-flow-col lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 justify-center items-center'>
                <div className='border-x-2'>
                    <div className='text-center my-5'>
                        <FontAwesomeIcon icon={faClipboardCheck} className="text-accent text-5xl"/>
                    </div>
                    <div className='grid gap-10 grid-flow-col justify-center items-center my-5'>
                        <h2 className='text-xl'>Success Delivery</h2>
                        <h2 className='text-xl'>Success Delivery</h2>
                    </div>
                </div>
                
            </div> */}
    </div>
  );
};

export default BusinessSummary;
