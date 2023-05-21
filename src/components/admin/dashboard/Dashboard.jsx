import AccordionDemo from '../../utils/accordion/Accordion';
import styles from './styles.module.css';

const DUMMY_SCHEDULES = [
  {
    scheduleId: 1,
    day: 'Monday',
    pickUpDestination: 'Dwarka Metro Station',
    pickUpTime: '09:00AM',
    employeeId: 1,
    employeeName: 'TestEmployee1',
  },
  {
    scheduleId: 2,
    day: 'Tuesday',
    pickUpDestination: 'Govind Puri Metro Station',
    pickUpTime: '10:00AM',
    employeeId: 2,
    employeeName: 'TestEmployee2',
  },
];

export const Dashboard = () => {
  return (
    <>
      <div className={styles.row}>
        <div className={styles.column} style={{ backgroundColor: '#aaa' }}>
          <h1>OnTrack</h1>
          <button>Schedule Route</button>
        </div>
        <div className={styles.column} style={{ backgroundColor: '#bbb' }}>
          <AccordionDemo schedules={DUMMY_SCHEDULES} />
        </div>
      </div>
    </>
  );
};
