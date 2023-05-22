import { Card, CardContent, CardActions, Button } from '@mui/material';

const RequestStatusCard = ({ status, color, date }) => {
  return (
    <Card className="m-5" sx={{ width: 250, display: 'flex', flexDirection: 'column' }}>
      <CardContent>
        <div className="flex flex-row justify-between">
          <div className="text-sm text-gray-500">Status</div>
          <div className="text-sm text-gray-500">{date}</div>
        </div>
        <p className="mb-2">{status}</p>
        <div className={`w-full h-1 ${color}`}></div>
      </CardContent>
      <CardActions>
        <Button size="small">More details</Button>
      </CardActions>
    </Card>
  );
};

export default RequestStatusCard;
