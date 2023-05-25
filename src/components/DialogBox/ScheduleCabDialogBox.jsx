import '../../styles.css';
import { LocalizationProvider, TimePicker, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DialogContent, DialogTitle } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { useState } from 'react';
import DialogActions from '@mui/material/DialogActions';
import Moment from 'moment';

const ScheduleCabDialogBox = () => {
  const [open, setOpen] = useState(false);
  const [area, setArea] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const currentDate = Moment(new Date()).format('DD/MM/YYYY');
  const currentTime = Moment(new Date()).format('hh:mm:ss a');
  const [pickupDate, setPickupDate] = useState(currentDate);
  const [pickupTime, setPickupTime] = useState(currentTime);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
    setPickupDate(event.target.value);
  };
  const handlePickupTimeChange = (event) => {
    setPickupTime(event.target.value);
  };

  //const pinPattern = new RegExp("^[1-9][0-9]{5}$");

  const onSaveButtonClick = () => {
    const addressDetail = {
      area: area,
      address: address,
      pincode: pincode,
      pickupTime: pickupTime,
      pickupDate: pickupDate,
    };
    console.log(addressDetail);

    setAddress('');
    setArea('');
    setPincode('');
    setOpen(false);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen} className="Button violet">
        Schedule Cab
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent className="DialogContent">
          <DialogTitle className="DialogTitle">Add Address details</DialogTitle>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="city">
              City
            </label>
            <input className="Input" id="city" defaultValue="Gurgaon" disabled />
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
                Pickup time
              </label>
              <TimePicker className="Picker" name="pickupTime" value={pickupTime} onChange={handlePickupTimeChange} />
            </fieldset>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="datePicker">
                Pickup Date
              </label>
              <DatePicker className="Picker" name="pickupDate" value={pickupDate} onChange={handlePickupDateChange} />
            </fieldset>
          </LocalizationProvider>

          <DialogActions>
            <Button onClick={onSaveButtonClick} className="Button save">
              Save
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ScheduleCabDialogBox;
