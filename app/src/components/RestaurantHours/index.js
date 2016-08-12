import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import List from 'grommet/components/list';
import ListItem from 'grommet/components/ListItem';
import Section from 'grommet/components/section';
import Accordion from 'grommet/components/Accordion';
import AccordionPanel from 'grommet/components/AccordionPanel';

const RestaurantHours = ({
  restaurant,
}) => (
  <Section className={styles.restaurantHours}>
    <Accordion>
      <AccordionPanel heading="Restaurant Hours">
        <List>
          <ListItem justify="center">
            {`Monday:  ${restaurant.hours.monday}`}
          </ListItem>
          <ListItem justify="center">
            {`Tuesday:  ${restaurant.hours.tuesday}`}
          </ListItem>
          <ListItem justify="center">
            {`Wednesday:  ${restaurant.hours.wednesday}`}
          </ListItem>
          <ListItem justify="center">
            {`Thursday:  ${restaurant.hours.thursday}`}
          </ListItem>
          <ListItem justify="center">
            {`Friday:  ${restaurant.hours.friday}`}
          </ListItem>
          <ListItem justify="center">
            {`Saturday:  ${restaurant.hours.saturday}`}
          </ListItem>
          <ListItem justify="center">
            {`Sunday:  ${restaurant.hours.sunday}`}
          </ListItem>
        </List>
      </AccordionPanel>
    </Accordion>
  </Section>
);

RestaurantHours.propTypes = {
  restaurant: PropTypes.object.isRequired,
};

export default cssModules(RestaurantHours, styles);
