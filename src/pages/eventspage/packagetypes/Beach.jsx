import React, { useEffect, useState, Suspense } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getEvents } from '../../../redux/features/eventsfeature'
import {AiOutlineCalendar} from 'react-icons/ai'
import {WiDaySunny} from 'react-icons/wi'
import {BsPeopleFill ,BsFillPersonFill} from 'react-icons/bs'
import { Link } from "react-router-dom";
import Button from "../../../components/button";
export const Beach = () => {
    const [beach, setBeach] = useState([])
    const dispatch = useDispatch();
    const eventsListState = useSelector((store)=>{
        return store['events']
    })
    useEffect(()=>{
        dispatch(getEvents())
    },[dispatch])
    const {events} = eventsListState;
    useEffect(()=>{
      const Selected = (events) => {
        return events.packageData.packageType === "Beach packages"
    }
        setBeach(events.filter(Selected))
    },[])
  return (
    <div>
    <h1 className="h-2 headers">Beach packages</h1>
    <div className="container">
      <div className="row clearfix">
        {beach.map(
          ({ title, packageData, id, url}) => {
            return (
              <div className="col-md-3 col-sm-6 col-xs-12" key={id}>
                <div className="boxs project_widget">
                  <div className="pw_img">
                    <img className="img-responsive" src={url} alt="img" />
                  </div>
                  <div className="pw_content">
                    <div className="pw_header">
                      <Link to={`/packages/${id}`}>
                        <h6>{title}</h6>
                      </Link>
                      <small className="text-muted">
                        {packageData ? packageData.destination : ""}
                      </small>
                    </div>
                    <div className="pw_meta">
                      {packageData ? (
                        packageData.startDate && packageData.endDate ? (
                          <>
                            <span>
                              <AiOutlineCalendar className="card-icon" />
                              {packageData
                                ? `${packageData.startDate} to ${packageData.endDate}`
                                : ""}
                            </span>
                          </>
                        ) : (
                          ""
                        )
                      ) : (
                        ""
                      )}
                      <span>
                        <WiDaySunny className="card-icon" />
                        {packageData ? packageData.days : ""}
                      </span>
                      <span>
                        <BsFillPersonFill className="card-icon" />
                        {packageData ? packageData.minPeople : ""}
                        <BsPeopleFill className="card-icon" />
                        {packageData ? packageData.maxPeople : ""}
                      </span>
                      <Link to={`/packages/${id}`}>
                        <Button id={id} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  </div>
  )
}
