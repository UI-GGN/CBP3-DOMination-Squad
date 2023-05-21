import './styles.css';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import classNames from 'classnames';
import React from 'react';

const AccordionDemo = (props) => {
  return (
    <Accordion.Root
      className="AccordionRoot"
      type="single"
      defaultValue={props.schedules?.at(0).scheduleId}
      collapsible
    >
      {props.schedules.map((data) => {
        return (
          <>
            <Accordion.Item className="AccordionItem" value={data.scheduleId}>
              <AccordionTrigger
                day={data.day}
                pickupDestination={data.pickUpDestination}
              />
              <AccordionContent
                employeeId={data.employeeId}
                employeeName={data.employeeName}
              />
            </Accordion.Item>
          </>
        );
      })}
    </Accordion.Root>
  );
};

/*eslint-disable*/
const AccordionTrigger = React.forwardRef(({ className, ...props }, forwardedRef) => (
  <Accordion.Header className="AccordionHeader">
    <Accordion.Trigger className={classNames('AccordionTrigger', className)} {...props} ref={forwardedRef}>
      <h1>{props.day}</h1>
      <p>{props.pickupDestination}</p>
      <ChevronDownIcon className="AccordionChevron" aria-hidden />
    </Accordion.Trigger>
  </Accordion.Header>
));

const AccordionContent = React.forwardRef(({ className, ...props }, forwardedRef) => (
  <Accordion.Content className={classNames('AccordionContent', className)} {...props} ref={forwardedRef}>
    <div className="AccordionContentText">{props.employeeId}</div>
    <div className="AccordionContentText">{props.employeeName}</div>
  </Accordion.Content>
));

export default AccordionDemo;
