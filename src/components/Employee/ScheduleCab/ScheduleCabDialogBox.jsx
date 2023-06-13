import './styles.css';
import createNewCabRequestService from '../../services/createNewCabRequestService.jsx';
import { DialogContent, DialogTitle } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import { LocalizationProvider, TimePicker, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Moment from 'moment';
import { useState } from 'react';

function handleError(e) {
  console.log(e);
  return <p>Unable to Process your request. Please reach out to Admin team. </p>;
}

const ScheduleCabDialogBox = () => {
  const [open, setOpen] = useState(false);
  const [city, setCity] = useState('');
  const [area, setArea] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const currentDate = Moment(new Date()).format('DD/MM/YYYY');
  const currentTime = Moment(new Date()).format('hh:mm:ss.000Z');
  const [pickupDate, setPickupDate] = useState(currentDate);
  const [pickupTime, setPickupTime] = useState(currentTime);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };
  const handleAreaChange = (event) => {
    setArea(event.target.value);
  };
  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };
  const handlePincodeChange = (event) => {
    setPincode(event.target.value);
  };
  const handlePickupDateChange = (event) => {
    setPickupDate(event.$d.toLocaleDateString('en-CA'));
  };
  const handlePickupTimeChange = (event) => {
    setPickupTime(event.$d.toLocaleTimeString());
  };

  //const pinPattern = new RegExp("^[1-9][0-9]{5}$");

  const onSaveButtonClick = () => {
    let pickupTimeInISO = `${pickupDate}T${pickupTime}.000Z`;
    let pickupLocation = `${address}, ${area}, ${city}, ${pincode}`;
    const addressDetail = {
      employeeId: '12345',
      employeeName: 'xyz',
      pickupLocation: pickupLocation,
      dropLocation: 'Thoughtworks Technologies',
      pickupTime: pickupTimeInISO,
      projectCode: 'ABC123',
      phoneNumber: '9876543210',
    };
    console.log(addressDetail);

    try {
      createNewCabRequestService.newCabRequestService(addressDetail).then((r) => {
        console.log(r);
      });
    } catch (e) {
      handleError(e);
    }

    setCity('');
    setAddress('');
    setArea('');
    setPincode('');
    setPickupDate(currentDate);
    setPickupTime(currentTime);
    setOpen(false);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen} className="Button violet">
        Schedule a Cab
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent className="DialogContent">
          <DialogTitle className="DialogTitle">Schedule a Cab</DialogTitle>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="city">
              City
            </label>
            <input className="Input" id="city" name="city" value={city} onChange={handleCityChange} required />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="area">
              Sector/Area
            </label>
            <input className="Input" id="area" name="area" value={area} onChange={handleAreaChange} required />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="address">
              Address
            </label>
            <input
              className="Input"
              id="address"
              name="address"
              value={address}
              onChange={handleAddressChange}
              required
            />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="pincode">
              Pin code
            </label>
            <input
              className="Input"
              id="pincode"
              name="pincode"
              value={pincode}
              onChange={handlePincodeChange}
              type="text"
              required
            />
          </fieldset>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="timePicker">
                Pickup Time
              </label>
              <TimePicker
                className="Picker"
                name="pickupTime"
                value={pickupTime}
                // minTime={pickupTime}
                onChange={handlePickupTimeChange}
              />
            </fieldset>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="datePicker">
                Pickup Date
              </label>
              <DatePicker
                className="Picker"
                name="pickupDate"
                value={pickupDate}
                format="YYYY-MM-DD"
                // minDate={pickupDate}
                onChange={handlePickupDateChange}
              />
            </fieldset>
          </LocalizationProvider>

          <DialogActions>
            <Button onClick={onSaveButtonClick} className="Button save">
              Request Cab
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ScheduleCabDialogBox;
