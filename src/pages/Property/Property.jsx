import React, { useContext, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { getProperty, removeBooking, sendPropertyDetails } from "../../utils/api";
import { PuffLoader } from "react-spinners";
import "./Property.css";
import { FaShower } from "react-icons/fa";
import { AiTwotoneCar } from "react-icons/ai";
import { MdLocationPin, MdMeetingRoom } from "react-icons/md";
import Map from "../../components/Map/Map";
import useAuthCheck from "../../hooks/useAuthCheck";
import { useAuth0 } from "@auth0/auth0-react";
import BookingModal from "../../components/BookingModal/BookingModal";
import UserDetailContext from "../../context/UserDetailContext.js";
import { Button, Modal } from "@mantine/core";
import { toast } from "react-toastify";
import Heart from "../../components/Heart/Heart";
import { TextField } from "@mui/material";

const Property = () => {
  const { pathname } = useLocation();
  const id = pathname.split("/").slice(-1)[0];

  const { data, isLoading, isError } = useQuery(["resd", id], () =>
    getProperty(id)
  );

  const [modalOpened, setModalOpened] = useState(false);
  const [emailOpened, setEmailOpened] = useState(false);
  const { validateLogin } = useAuthCheck();
  const { user } = useAuth0();
  const [emailLoading , setEmailLoading] = useState(false)
  const [contactNumber, setContactNumber] = useState('');
  const [error, setError] = useState('');
  const [name, setName] = useState('');



  const {
    userDetails: { token, bookings },
    setUserDetails,
  } = useContext(UserDetailContext);

  const { mutate: cancelBooking, isLoading: cancelling } = useMutation({
    mutationFn: () => removeBooking(id, user?.email, token),
    onSuccess: () => {
      setUserDetails((prev) => ({
        ...prev,
        bookings: prev.bookings.filter((booking) => booking?.id !== id),
      }));

      toast.success("Booking cancelled", { position: "bottom-right" });
    },
  });

  if (isLoading) {
    return (
      <div className="wrapper">
        <div className="flexCenter paddings">
          <PuffLoader />
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="wrapper">
        <div className="flexCenter paddings">
          <span>Error while fetching the property details</span>
        </div>
      </div>
    );
  }

 function  handleSend(){



const isValidContactNumber = /^\d{10}$/.test(contactNumber);

if (!isValidContactNumber  ) {
  setError('Please enter a valid 10-digit contact number.');
  return;
}
if (!name ) {
  setError('Please enter a valid name.');
  return;
}
  sendPropertyDetails(data ,name ,  user.email ,contactNumber , token)
  setEmailLoading(true)

  }

  return (
    <div className="wrapper">
    

        
      <div className="flexColStart paddings innerWidth property-container">
        {/* like button */}
        <div className="like">
          <Heart id={id}/>
        </div>

        {/* image */}
        <img src={data?.image} alt="home image" />

        <div className="flexCenter property-details">
          {/* left */}
          <div className="flexColStart left">
            {/* head */}
            <div className="flexStart head">
              <span className="primaryText">{data?.title}</span>
              <span className="orangeText" style={{ fontSize: "1.5rem" }}>
                $ {data?.price}
              </span>
            </div>

            {/* facilities */}
            <div className="flexStart facilities">
              {/* bathrooms */}
              <div className="flexStart facility">
                <FaShower size={20} color="#1F3E72" />
                <span>{data?.facilities?.bathrooms} Bathrooms</span>
              </div>

              {/* parkings */}
              <div className="flexStart facility">
                <AiTwotoneCar size={20} color="#1F3E72" />
                <span>{data?.facilities.parking} Parking</span>
              </div>

              {/* rooms */}
              <div className="flexStart facility">
                <MdMeetingRoom size={20} color="#1F3E72" />
                <span>{data?.facilities.bedrooms} Room/s</span>
              </div>
            </div>

            {/* description */}

            <span className="secondaryText" style={{ textAlign: "justify" }}>
              {data?.description}
            </span>

            {/* address */}

            <div className="flexStart" style={{ gap: "1rem" }}>
              <MdLocationPin size={25} />
              <span className="secondaryText">
                {data?.address}{" "}
                {data?.city}{" "}
                {data?.country}
              </span>
            </div>

            {/* booking button */}
            {bookings?.map((booking) => booking.id).includes(id) ? (
              <>
                <Button
                  variant="outline"
                  w={"100%"}
                  color="red"
                  onClick={() => cancelBooking()}
                  disabled={cancelling}
                >
                  <span>Cancel booking</span>
                </Button>
                <span>
                  Your visit already booked for date{" "}
                  {bookings?.filter((booking) => booking?.id === id)[0].date}
                </span>
              </>
            ) : (
              <button
                className="button"
                onClick={() => {
                  validateLogin() && setModalOpened(true);
                }}
              >
                Book your visit
              </button>
            )}

            <BookingModal
              opened={modalOpened}
              setOpened={setModalOpened}
              propertyId={id}
              email={user?.email}
              amount={data?.price}
            />

              <button
                className="button"
                style={{backgroundColor : 'red'}}
                onClick={() => {
                  validateLogin() && setEmailOpened(true) ;
                }}
              >
                 Send Details

              </button>

    <Modal opened={emailOpened} onClose={()=>setEmailOpened(false)} centered 
      title="Get Details via Email"
    
    >
      <div
      className="flexColCenter"
       style={{  padding: '20px', boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)' }}
       >
        <TextField
          label="Your Name"
          variant="outlined"
          fullWidth
          value={name}
          onChange={(e)=>setName(e.target.value)}
          error={!!error}
          helperText={error}
          style={{marginBottom:'10px'}}
        />
        <TextField
          label="Contact Number"
          variant="outlined"
          fullWidth
          value={contactNumber}
          onChange={(e)=>setContactNumber(e.target.value)}
          error={!!error}
          helperText={error}
        />
        <Button variant="contained" color="primary" onClick={handleSend} style={{ marginTop: '20px' }}>Submit</Button>
      </div>
    </Modal>
    
          </div>

          {/* right side */}
          <div className="map">
            <Map
              address={data?.address}
              city={data?.city}
              country={data?.country}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
