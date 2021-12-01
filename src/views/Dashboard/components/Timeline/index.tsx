import ChartTimeline from 'components/Chart/ChartTimeline';
import { WrapperBox, InputStyle } from '../../styled';
const Timeline = () => {
  const sampleData = [
    {
      device_serial_number: 'WLS7-613',
      device_model: 'WindCube v2',
      device_oem: 'Leosphere',
      device_name: null,
      uppermost_measurement_height: 180,
      image: {
        sas_uri: null,
        adl_pathname: null,
      },
      measurement_location_uuid: 'f8aa01e9-9124-4c9e-8a40-0d99501ca3b5',
      name: 'US-VL-00002',
      measurement_station_type_id: 'lidar',
      latitude: 28.22499,
      longitude: -97.49896,
      is_name_auto_generated: true,
      date_from: 2016,
      scheduled_decommissioning_date: 1595808000000,
      date_to: null,
      notes: 'Added thru migration.',
      status: {
        uuid: null,
        status_uuid: 'a2586a31-4fb9-4ff1-90ec-7ab03d18ca29',
        date_from: 1564102800000,
        changes: null,
      },
    },
    {
      device_serial_number: 'WLS7-608',
      device_model: 'WindCube v2',
      device_oem: 'Leosphere',
      device_name: null,
      uppermost_measurement_height: 182,
      image: {
        sas_uri: null,
        adl_pathname: null,
      },
      measurement_location_uuid: 'c0a93a31-87d8-4c4a-ba6f-144b2e376651',
      name: 'US-VL-00001',
      measurement_station_type_id: 'lidar',
      latitude: 28.248574,
      longitude: -97.594544,
      is_name_auto_generated: true,
      date_from: 2019,
      scheduled_decommissioning_date: 1586563200000,
      date_to: 2020,
      notes: 'Added thru migration.',
      status: {
        uuid: null,
        status_uuid: '6ffeded6-5c59-436b-aa16-c938e46fac28',
        date_from: 1554940800000,
        changes: null,
      },
    },
    {
      device_serial_number: 'WLS7-608',
      device_model: 'WindCube v2',
      device_oem: 'Leosphere',
      device_name: null,
      uppermost_measurement_height: 180,
      image: {
        sas_uri: null,
        adl_pathname: null,
      },
      measurement_location_uuid: '6ca1d13a-ba2d-436d-a9c2-17a055e58977',
      name: 'US-VL-00003',
      measurement_station_type_id: 'lidar',
      latitude: 28.281165,
      longitude: -97.536004,
      is_name_auto_generated: true,
      date_from: 2017,
      scheduled_decommissioning_date: 1595808000000,
      date_to: null,
      notes: 'Added thru migration.',
      status: {
        uuid: null,
        status_uuid: 'a2586a31-4fb9-4ff1-90ec-7ab03d18ca29',
        date_from: 1564189200000,
        changes: null,
      },
    },
  ];
  return (
    <div>
      <WrapperBox.Box>
        <WrapperBox.Header>
          <h5>Time Line</h5>
        </WrapperBox.Header>
        <ChartTimeline data={sampleData} />
      </WrapperBox.Box>
    </div>
  );
};
export default Timeline;
