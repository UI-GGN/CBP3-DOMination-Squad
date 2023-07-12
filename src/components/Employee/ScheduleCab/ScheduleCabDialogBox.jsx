import './styles.css';
import createNewCabRequestService from '../../services/createNewCabRequestService.jsx';
import { DialogContent, DialogTitle, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import { LocalizationProvider, DatePicker, DateTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Moment from 'moment';
import { useState } from 'react';

function handleError(e) {
  console.log(e);
  alert('We are unable to process your request. Please reach out to Admin team');
}

const ScheduleCabDialogBox = () => {
  const [open, setOpen] = useState(false);
  const [project, setProject] = useState('');
  const [city, setCity] = useState('');
  const [area, setArea] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [landmark, setLandmark] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [pickupDateTime, setPickupDateTime] = useState('');
  const currentDate = Moment(new Date()).format('YYYY-MM-DD');
  const [scheduleTillDate, setScheduleTillDate] = useState(currentDate);
  const [pincodeError, setPincodeError] = useState(false);
  const [mobileError, setMobileError] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handlePickupDateChange = (event) => {
    setScheduleTillDate(event.$d.toLocaleDateString('en-CA'));
  };

  const handlePickupDateTimeChange = (event) => {
    let dateTime = `${event.$d.toLocaleDateString('en-CA')}` + 'T' + `${event.$d.toLocaleTimeString() + '.000Z'}`;
    setPickupDateTime(dateTime);
    setScheduleTillDate(event.$d.toLocaleDateString('en-CA'));
  };

  const handlePincodeBlur = () => {
    const isPincodeValid = /^\d{6}$/.test(pincode);
    if (!isPincodeValid) {
      setPincodeError(true);
    } else {
      setPincodeError(false);
    }
  };

  const handleMobileNumberBlur = () => {
    const isMobileNumberValid = /^\d{10}$/.test(mobileNumber);
    if (!isMobileNumberValid) {
      setMobileError(true);
    } else {
      setMobileError(false);
    }
  };

  const onSaveButtonClick = () => {
    let pickupLocation = `${address.replaceAll('\n', ' ')}, ${area}, ${city}, ${pincode}`;
    let expireDateInISO = `${scheduleTillDate}${pickupDateTime.slice(10)}`;
    const addressDetail = {
      employeeId: '12345',
      employeeName: 'CBP3',
      pickupLocation: pickupLocation,
      dropLocation: 'Thoughtworks Technologies',
      projectCode: project,
      phoneNumber: mobileNumber,
      pickupTime: pickupDateTime,
      expireDate: expireDateInISO,
    };

    try {
      if (
        !mobileError &&
        !pincodeError &&
        project.length &&
        city.length &&
        area.length &&
        address.length &&
        pickupDateTime.length
      ) {
        console.log(addressDetail);
        createNewCabRequestService.newCabRequestService(addressDetail).then((r) => {
          console.log(r);
        });
        setProject('');
        setCity('');
        setAddress('');
        setArea('');
        setPincode('');
        setLandmark('');
        setMobileNumber('');
        setScheduleTillDate(currentDate);
        setOpen(false);
        setPickupDateTime('');
      } else {
        alert('Please fill in required fields without errors to submit');
      }
    } catch (e) {
      handleError(e);
    }
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
            <TextField
              label="Project code"
              value={project}
              size="small"
              color="success"
              onChange={(event) => setProject(event.target.value)}
              required
              fullWidth
            />
          </fieldset>
          <fieldset className="Fieldset">
            <TextField
              label="City"
              value={city}
              size="small"
              color="success"
              onChange={(event) => setCity(event.target.value)}
              required
              fullWidth
            />
          </fieldset>
          <fieldset className="Fieldset">
            <TextField
              label="Area/Sector"
              value={area}
              size="small"
              color="success"
              onChange={(event) => setArea(event.target.value)}
              required
              fullWidth
            />
          </fieldset>
          <fieldset className="Fieldset">
            <TextField
              label="Address"
              value={address}
              size="small"
              color="success"
              onChange={(event) => setAddress(event.target.value)}
              required
              fullWidth
              multiline
              minRows={1}
              maxRows={3}
            />
          </fieldset>
          <fieldset className="Fieldset">
            <TextField
              label="Landmark"
              value={landmark}
              size="small"
              color="success"
              onChange={(event) => setLandmark(event.target.value)}
              fullWidth
            />
          </fieldset>
          <fieldset className="Fieldset">
            <TextField
              value={pincode}
              size="small"
              color="success"
              label="Pincode"
              onChange={(event) => setPincode(event.target.value)}
              onBlur={handlePincodeBlur}
              error={pincodeError}
              helperText={pincodeError ? 'Invalid Pincode' : ''}
              required
              fullWidth
            />
          </fieldset>
          <fieldset className="Fieldset">
            <TextField
              value={mobileNumber}
              size="small"
              color="success"
              label="Mobile Number"
              onChange={(event) => setMobileNumber(event.target.value)}
              onBlur={handleMobileNumberBlur}
              error={mobileError}
              helperText={mobileError ? 'Invalid Mobile Number' : ''}
              required
              fullWidth
            />
          </fieldset>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
              disablePast
              views={['year', 'month', 'day', 'hours', 'minutes']}
              format="YYYY-MM-DD hh:mm a"
              timezone="IST"
              onChange={handlePickupDateTimeChange}
              label="Pickup Date and Time"
              formatDensity="dense"
              sx={{ width: 220 }}
              required
            />
            <DatePicker
              disablePast
              views={['year', 'month', 'day']}
              format="YYYY-MM-DD"
              onChange={handlePickupDateChange}
              label="Schedule till"
              formatDensity="dense"
              sx={{ width: 180 }}
              required
            />
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
