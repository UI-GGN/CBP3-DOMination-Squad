import { Card, CardContent, CardActions, Button } from '@mui/material';

const RequestStatusCard = ({ name, date, pickup, time }) => {
  return (
    <Card className="m-3 basis-1/6 shrink-0" sx={{ width: 275, display: 'flex', flexDirection: 'column' }}>
      <CardContent>
        <div>
          <div className="flex flex-row justify-between items-center">
            <div className="text-sm text-gray-500">Name</div>
            <div className="text-sm text-gray-500">Date</div>
          </div>
          <div className="flex flex-row justify-between items-center mb-5">
            <div className="text-base font-bold">{name}</div>
            <div className="text-base ">{date}</div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="text-sm text-gray-500">Pickup </div>
            <div className="text-sm text-gray-500">Time</div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="text-base w-2/3">{pickup}</div>
            <div className="text-base ">{time}</div>
          </div>
        </div>
      </CardContent>
      <CardActions disableSpacing sx={{ mt: 'auto' }}>
        <Button size="small">Assign Route</Button>
      </CardActions>
    </Card>
  );
};

export default RequestStatusCard;
