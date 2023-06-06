import { Card, CardBody, CardContainer, CardSegment, CardTop, Container } from './Routes.style';

const data = [
  {
    id: 1,
    routeName: 'DC to Thoughtworks',
    routePickupPoints: [
      'DC',
      'Janakpuri East Metro Station',
      'Subhash Nagar Metro Station',
      'Gurgaon Toll',
      'Ambience Mall',
      'Shankar Chowk',
      'Amex',
    ],
    dropPoint: 'Thoughtworks Technologies',
    vendorName: 'Ola',
    driverName: 'Rajender Sharma',
    driverContactNo: '8868425078',
    employees: [
      {
        id: '3728',
        projectCode: '117',
      },
      {
        id: '3734',
        projectCode: '147',
      },
      {
        id: '3701',
        projectCode: '018',
      },
      {
        id: '7280',
        projectCode: '919',
      },
    ],
  },
  {
    id: 2,
    routeName: 'DC to Thoughtworks',
    routePickupPoints: [
      'DC',
      'Janakpuri East Metro Station',
      'Subhash Nagar Metro Station',
      'Gurgaon Toll',
      'Ambience Mall',
      'Shankar Chowk',
      'Amex',
    ],
    dropPoint: 'Thoughtworks Technologies',
    vendorName: 'Ola',
    driverName: 'Rajender Sharma',
    driverContactNo: '8868425078',
    employees: [
      {
        id: '3728',
        projectCode: '117',
      },
      {
        id: '3734',
        projectCode: '147',
      },
      {
        id: '3701',
        projectCode: '018',
      },
      {
        id: '7280',
        projectCode: '919',
      },
    ],
  },
  {
    id: 3,
    routeName: 'DC to Thoughtworks',
    routePickupPoints: [
      'DC',
      'Janakpuri East Metro Station',
      'Subhash Nagar Metro Station',
      'Gurgaon Toll',
      'Ambience Mall',
      'Shankar Chowk',
      'Amex',
    ],
    dropPoint: 'Thoughtworks Technologies',
    vendorName: 'Ola',
    driverName: 'Rajender Sharma',
    driverContactNo: '8868425078',
    employees: [
      {
        id: '3728',
        projectCode: '117',
      },
      {
        id: '3734',
        projectCode: '147',
      },
      {
        id: '3701',
        projectCode: '018',
      },
      {
        id: '7280',
        projectCode: '919',
      },
    ],
  },
  {
    id: 4,
    routeName: 'DC to Thoughtworks',
    routePickupPoints: [
      'DC',
      'Janakpuri East Metro Station',
      'Subhash Nagar Metro Station',
      'Gurgaon Toll',
      'Ambience Mall',
      'Shankar Chowk',
      'Amex',
    ],
    dropPoint: 'Thoughtworks Technologies',
    vendorName: 'Ola',
    driverName: 'Rajender Sharma',
    driverContactNo: '8868425078',
    employees: [
      {
        id: '3728',
        projectCode: '117',
      },
      {
        id: '3734',
        projectCode: '147',
      },
      {
        id: '3701',
        projectCode: '018',
      },
      {
        id: '7280',
        projectCode: '919',
      },
    ],
  },
  {
    id: 5,
    routeName: 'DC to Thoughtworks',
    routePickupPoints: [
      'DC',
      'Janakpuri East Metro Station',
      'Subhash Nagar Metro Station',
      'Gurgaon Toll',
      'Ambience Mall',
      'Shankar Chowk',
      'Amex',
    ],
    dropPoint: 'Thoughtworks Technologies',
    vendorName: 'Ola',
    driverName: 'Rajender Sharma',
    driverContactNo: '8868425078',
    employees: [
      {
        id: '3728',
        projectCode: '117',
      },
      {
        id: '3734',
        projectCode: '147',
      },
      {
        id: '3701',
        projectCode: '018',
      },
      {
        id: '7280',
        projectCode: '919',
      },
    ],
  },
];

const Routes = () => {
  return (
    <Container>
      <CardContainer>
        {data.map((route) => {
          return (
            <Card key={route.id}>
              <CardBody>
                <CardSegment>
                  <CardTop>
                    <div style={{ flex: '8', display: 'flex', flexDirection: 'column' }}>
                      <div className="flex-1">
                        <div className="font-semi-bold text-gray-400 text-sm">Route Name</div>
                        <div>{route.routeName}</div>
                      </div>
                      <div className="flex-1">
                        <div className="font-semi-bold text-gray-400 text-sm">Route Number</div>
                        <div>KLM5432</div>
                      </div>
                    </div>
                    <div style={{ flex: '2', display: 'flex', justifyContent: 'flex-end' }}>
                      <img src="../../../../public/delete_icon.png" style={{ width: '50px', height: '50px' }}></img>
                    </div>
                  </CardTop>
                </CardSegment>
                <div
                  style={{ height: '1px', width: '100%', marginBottom: '8px', marginTop: '8px' }}
                  className="bg-gray-200"
                ></div>
                <CardSegment>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ flex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <div>
                        <img src="../../../../public/circle_icon.png" className="my-1 w-3 h-3"></img>
                      </div>
                    </div>
                    <div style={{ flex: 6, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <div style={{ flex: 1, borderLeftStyle: 'dotted', borderLeftWidth: '5px', width: '5px' }}></div>
                    </div>
                    <div style={{ flex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <div>
                        <img src="../../../../public/destination_icon.png" className="my-1 w-3 h-3"></img>
                      </div>
                    </div>
                  </div>
                  <div style={{ flex: 9, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <div className="font-semi-bold text-gray-400 text-sm">Start Point</div>
                      <div>District Center , Vikapsuri</div>
                    </div>
                    <div>
                      <div className="font-semi-bold text-gray-400 text-sm">End Point</div>
                      <div>Thoughtworks Technologies</div>
                    </div>
                  </div>
                </CardSegment>
                <div
                  style={{ height: '1px', width: '100%', marginBottom: '8px', marginTop: '8px' }}
                  className="bg-gray-200"
                ></div>
                <CardSegment>
                  <div className="flex flex-col w-full">
                    <div className="flex flex-row justify-between" style={{ flex: 1 }}>
                      <div>
                        <div className="font-semi-bold text-gray-400 text-sm">Vendor</div>
                        <div>Uber</div>
                      </div>
                      <div>
                        <div className="font-semi-bold text-gray-400 text-sm">Total Employees</div>
                        <div>10</div>
                      </div>
                    </div>
                    <div
                      style={{ height: '1px', width: '100%', marginBottom: '8px', marginTop: '8px' }}
                      className="bg-gray-200"
                    ></div>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                      <div
                        style={{ flex: 6, display: 'flex', flexDirection: 'row', height: '100%', alignItems: 'center' }}
                      >
                        <div style={{ flex: 1, marginRight: '4px' }}>
                          <img
                            src="../../../../public/driver_icon.png"
                            style={{ objectFit: 'contain', maxHeight: '100%', width: 'auto' }}
                          ></img>
                        </div>
                        <div style={{ flex: 5 }}>
                          <div>Jatin katyal</div>
                          <div className="font-semi-bold text-gray-400 text-sm">Driver</div>
                        </div>
                      </div>
                      <div
                        style={{
                          flex: 4,
                          display: 'flex',
                          justifyContent: 'flex-end',
                          height: '100%',
                          alignItems: 'center',
                        }}
                      >
                        <img src="../../../../public/phone_icon.png" style={{ width: '25px', height: '25px' }}></img>
                      </div>
                    </div>
                  </div>
                </CardSegment>
              </CardBody>
            </Card>
          );
        })}
      </CardContainer>
    </Container>
  );
};

export default Routes;
