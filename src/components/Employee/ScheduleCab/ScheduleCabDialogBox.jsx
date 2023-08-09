import './styles.css';
import { red, green, purple } from '../../colors.json';
import StyledButton from '../../common/StyledButton/StyledButton';
import createNewCabRequestService from '../../services/createNewCabRequestService.jsx';
import { DialogContent, DialogTitle, TextField } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import { LocalizationProvider, DatePicker, DateTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import Moment from 'moment';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

dayjs.extend(utc);
dayjs.extend(timezone);
function handleError(e) {
  console.log(e);
  alert('We are unable to process your request. Please reach out to Admin team');
}

const ScheduleCabDialogBox = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [project, setProject] = useState('');
  const [pickupAddress, setPickupAddress] = useState('');
  const [dropAddress, setDropAddress] = useState('');
  const [pickupPincode, setPickupPincode] = useState('');
  const [dropPincode, setDropPincode] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [pickupDateTime, setPickupDateTime] = useState('');
  const currentDate = Moment(new Date()).format('YYYY-MM-DD');
  const [scheduleTillDate, setScheduleTillDate] = useState(currentDate);
  const [dropPincodeError, setDropPincodeError] = useState(false);
  const [pickupPincodeError, setPickupPincodeError] = useState(false);
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
    let time = event.$d.toLocaleTimeString('en-US', { hour12: false, timeStyle: 'medium' });
    let date = event.$d.toLocaleDateString('en-CA');
    let dateTime = `${date}` + 'T' + `${time + '.000Z'}`;
    setPickupDateTime(dateTime);
    setScheduleTillDate(event.$d.toLocaleDateString('en-CA'));
  };

  const handlePincodeBlur = (pincode) => {
    const isPincodeValid = /^\d{6}$/.test(pincode);
    if (!isPincodeValid) {
      setPickupPincodeError(true);
    } else {
      setPickupPincodeError(false);
    }
  };

  const handleDropPincodeBlur = (pincode) => {
    const isPincodeValid = /^\d{6}$/.test(pincode);
    if (!isPincodeValid) {
      setDropPincodeError(true);
    } else {
      setDropPincodeError(false);
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
  const closeDialog = () => {
    setProject('');
    setPickupAddress('');
    setDropAddress('');
    setPickupPincode('');
    setDropPincode('');
    setMobileNumber('');
    setScheduleTillDate(currentDate);
    setOpen(false);
    setPickupPincodeError(false);
    setDropPincodeError(false);
    setMobileError(false);
    setPickupDateTime('');
    navigate('/');
  };

  const onSaveButtonClick = () => {
    let pickupLocation = `${pickupAddress.replaceAll('\n', ' ')}, ${pickupPincode}`;
    let dropLocation = `${dropAddress.replaceAll('\n', ' ')}, ${dropPincode}`;
    let expireDateInISO = `${scheduleTillDate}${pickupDateTime.slice(10)}`;
    const addressDetail = {
      employeeId: '12345',
      employeeName: 'CBP3',
      pickupLocation: pickupLocation,
      dropLocation: dropLocation,
      projectCode: project,
      phoneNumber: mobileNumber,
      pickupTime: pickupDateTime,
      expireDate: expireDateInISO,
      status: 'PENDING',
      vendorId: null,
    };

    try {
      if (
        !mobileError &&
        !pickupPincodeError &&
        !dropPincodeError &&
        project.length &&
        pickupAddress.length &&
        pickupDateTime.length &&
        dropAddress.length
      ) {
        createNewCabRequestService.newCabRequestService(addressDetail);
        closeDialog();
        navigate('/employee/dashboard');
      } else {
        alert('Please fill in required fields without errors to submit');
      }
    } catch (e) {
      handleError(e);
    }
  };

  return (
    <>
      <StyledButton color={purple} textColor={purple} onClick={handleClickOpen} width="10%" className="New">
        New Request
      </StyledButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent className="DialogContent">
          <DialogTitle className="DialogTitle">Request Cab</DialogTitle>
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
              label="Pickup address"
              value={pickupAddress}
              size="small"
              inputProps={{ style: { height: 60 } }}
              color="success"
              onChange={(event) => setPickupAddress(event.target.value)}
              required
              fullWidth
              multiline
              minRows={1}
              maxRows={4}
            />
          </fieldset>
          <fieldset className="Fieldset">
            <TextField
              value={pickupPincode}
              size="small"
              color="success"
              label="Pincode of pickup address"
              onChange={(event) => setPickupPincode(event.target.value)}
              onBlur={() => handlePincodeBlur(pickupPincode)}
              error={pickupPincodeError}
              helperText={pickupPincodeError ? 'Enter 6 digit valid Pincode' : ''}
              required
              fullWidth
            />
          </fieldset>
          <fieldset className="Fieldset">
            <TextField
              label="Drop address"
              value={dropAddress}
              size="small"
              inputProps={{ style: { height: 60 } }}
              color="success"
              onChange={(event) => setDropAddress(event.target.value)}
              required
              fullWidth
              multiline
              minRows={1}
              maxRows={4}
            />
          </fieldset>
          <fieldset className="Fieldset">
            <TextField
              value={dropPincode}
              size="small"
              color="success"
              label="Pincode of drop address"
              onChange={(event) => setDropPincode(event.target.value)}
              onBlur={() => handleDropPincodeBlur(dropPincode)}
              error={dropPincodeError}
              helperText={dropPincodeError ? 'Enter 6 digit valid Pincode' : ''}
              required
              fullWidth
            />
          </fieldset>
          <fieldset className="Fieldset">
            <TextField
              value={mobileNumber}
              size="small"
              color="success"
              label="Mobile number"
              onChange={(event) => setMobileNumber(event.target.value)}
              onBlur={handleMobileNumberBlur}
              error={mobileError}
              helperText={mobileError ? 'Enter 10 digit Mobile Number' : ''}
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
              label="Pickup date and time"
              formatDensity="dense"
              sx={{ width: 219 }}
              slotProps={{
                textField: {
                  helperText: 'Please book your cab at least 1 hour ahead to ensure availability.',
                },
              }}
              required
            />
            <DatePicker
              disablePast
              views={['year', 'month', 'day']}
              format="YYYY-MM-DD"
              onChange={handlePickupDateChange}
              label="Schedule till"
              formatDensity="dense"
              sx={{ width: 178, marginLeft: 0.5 }}
              required
            />
          </LocalizationProvider>

          <DialogActions>
            <StyledButton color={red} textColor={red} onClick={() => closeDialog()}>
              Cancel
            </StyledButton>
            <StyledButton color={green} textColor={green} onClick={onSaveButtonClick}>
              Submit
            </StyledButton>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ScheduleCabDialogBox;
